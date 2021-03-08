import { on } from '@frsource/tiny-carousel-utils';
import { TinyCarousel } from '.';

jest.mock('@frsource/tiny-carousel-utils');

let carousel: TinyCarousel;
let element: HTMLElement;
let templateHTML: string;
let config: ConstructorParameters<typeof TinyCarousel>[1];

const initializeCarousel = () => {
  element = document.createElement('ul');
  element.innerHTML = templateHTML || `<li>item1</li><li>item2</li><li>item3</li>`;
  document.body.append(element);
  // mock offsets
  Object.defineProperty(element.children[1], 'offsetLeft', { value: 150 });
  Object.defineProperty(element.children[2], 'offsetLeft', { value: 300 });
  carousel = new TinyCarousel(element, config);
};

afterEach(() => {
  document.body.innerHTML = '';
  jest.clearAllMocks();
});

const defaultConfiguration = {
  active: 0,
  className: 'frs-tc',
  hideScrollClassName: 'frs-hide-scroll',
  itemClassName: 'frs-tc-item',
  items: [],
};

describe('::defaultConfig::get', () => {
  it('should return with a copy of a default configuration object', () => {
    expect(TinyCarousel.defaultConfig).toEqual(defaultConfiguration);
    // if the copy is returned, changing current object's "active" property shouldn't affect next expect assumption
    TinyCarousel.defaultConfig.active = 1;
    expect(TinyCarousel.defaultConfig).toEqual(defaultConfiguration);
  });
});

describe('::updateDefaultConfig', () => {
  it('should merge passed config into the default one (not replace it completely)', () => {
    expect(TinyCarousel.defaultConfig).toEqual(defaultConfiguration);
    TinyCarousel.updateDefaultConfig({ active: 1 });
    expect(TinyCarousel.defaultConfig).toEqual({
      ...defaultConfiguration,
      active: 1
    });
    TinyCarousel.updateDefaultConfig({ active: 0 });
  });
});

describe('constructor', () => {
  let findPossibleItemsSpy: jest.SpyInstance;
  beforeAll(() => {
    findPossibleItemsSpy = jest.spyOn(TinyCarousel.prototype, 'findPossibleItems').mockReturnValue([]);
  });
  afterAll(() => findPossibleItemsSpy.mockRestore());

  it('should try to find possible items', () => {
    initializeCarousel();
    expect(findPossibleItemsSpy).toHaveBeenCalledTimes(1);
  });

  it('should bind handler to the "scroll" event', () => {
    initializeCarousel();
    expect(on).toHaveBeenCalledWith(element, 'scroll', expect.any(Function), { passive: true });
  });

  describe('when no config passed', () => {
    it('should provide defaults', () => {
      initializeCarousel();
  
      expect(carousel.config).toEqual({
        active: 0,
        className: 'frs-tc',
        hideScrollClassName: 'frs-hide-scroll',
        itemClassName: 'frs-tc-item',
        items: [],
      });
    });
  });

  describe('when config passed in as a parameter', () => {
    it('should merge passed in config with defaults', () => {
      config = {active: 1};
      initializeCarousel();
  
      expect(carousel.config).toEqual({
        active: 1,
        className: 'frs-tc',
        hideScrollClassName: 'frs-hide-scroll',
        itemClassName: 'frs-tc-item',
        items: [],
      });
      config = undefined;
    });
  });

  describe('when config with items property set passed in as a parameter', () => {
    it('shouldn`t call findPossible items and leave items as they were', () => {
      config = {items: [ document.body /* any HTMLElement */ ]};
      initializeCarousel();
  
      expect(carousel.config).toEqual({
        active: 0,
        className: 'frs-tc',
        hideScrollClassName: 'frs-hide-scroll',
        itemClassName: 'frs-tc-item',
        items: config.items,
      });
      config = undefined;
    });
  });
});

describe('use', () => {
  const install = jest.fn();
  const plugin = { install };
  beforeEach(initializeCarousel);

  it('should call plugin install method with the carousel context as a first argument', () => {
    carousel.use(plugin);
    expect(install).toHaveBeenCalledTimes(1);
    expect(install).toHaveBeenCalledWith(carousel);
  });

  it('should pass all of the arguments through to plugin install method', () => {
    const args = ['arg1', {}, true];
    carousel.use(plugin, ...args);
    expect(install).toHaveBeenCalledTimes(1);
    expect(install).toHaveBeenCalledWith(carousel, ...args);
  });

  it('should return instance context for easier chaining', () => {
    expect(carousel.use(plugin)).toBe(carousel);
  });
});

describe('init', () => {
  let goToSpy: jest.SpyInstance;
  beforeAll(() => {
    config = {className: 'something', active: 2};
    goToSpy = jest.spyOn(TinyCarousel.prototype, 'goTo').mockReturnValue(carousel);
  });
  beforeEach(initializeCarousel);
  afterAll(() => {
    config = undefined;
    goToSpy.mockRestore();
  });

  it('should add classnames from the config', () => {
    carousel.init();
    expect(element.className).toBe('something frs-hide-scroll');
  });

  it('shoud call goTo method', () => {
    carousel.init();
    expect(goToSpy).toHaveBeenCalledTimes(1);
    expect(goToSpy).toHaveBeenCalledWith(2);
  });

  it('should return instance context for easier chaining', () => {
    expect(carousel.init()).toBe(carousel);
  });
});

describe('goTo', () => {
  beforeEach(initializeCarousel);

  it('should return carousel instance', () => {
    expect(carousel.goTo(0)).toBe(carousel);
  });

  it('should move carousel to the correct position', () => {
    carousel.goTo(1);
    expect(element.scrollLeft).toBe(150);
  });

  describe('when value is bigger than items count', () => {
    it('should handle the overflow gracefully and move carousel to the correct position', () => {
      carousel.goTo(4);
      expect(element.scrollLeft).toBe(150);
    });
  });

  describe('when value is < 0', () => {
    it('should count items starting from the end', () => {
      carousel.goTo(-2);
      expect(element.scrollLeft).toBe(150);
    });

    describe('when value is smaller than -items.length', () => {
      it('should repeat the counting with value + items.length until it gets a valid item number', () => {
        carousel.goTo(-20); // 20 % 3 == 2
        expect(element.scrollLeft).toBe(150);
      });
    });
  });
});

describe('next', () => {
  let goToSpy: jest.SpyInstance;
  beforeAll(() => {
    goToSpy = jest.spyOn(TinyCarousel.prototype, 'goTo').mockReturnValue(carousel);
  });
  beforeEach(initializeCarousel);
  afterAll(() => goToSpy.mockRestore());

  it('should call goTo with active + 1', () => {
    carousel.next();
    expect(goToSpy).toHaveBeenCalledTimes(1);
    expect(goToSpy).toHaveBeenCalledWith(1);
  });
});

describe('prev', () => {
  let goToSpy: jest.SpyInstance;
  const initializeCarouselAtActiveItem = (n: number) => {
    initializeCarousel();
    carousel.goTo(n);
    goToSpy = jest.spyOn(carousel, 'goTo').mockReturnValue(carousel);
  };
  afterEach(() => goToSpy.mockRestore());

  it('should call goTo with active - 1', () => {
    initializeCarouselAtActiveItem(1);
    carousel.prev();
    expect(goToSpy).toHaveBeenCalledTimes(1);
    expect(goToSpy).toHaveBeenCalledWith(0);
  });

  describe('when active <= 0', () => {
    it('should do nothing', () => {
      initializeCarouselAtActiveItem(0);
      carousel.prev();
      expect(goToSpy).not.toHaveBeenCalled();
    });
  });
});

describe('resetActive', () => {
  it('should run without any errors', () => {
    initializeCarousel();
    expect(carousel.resetActive()).toBeUndefined();
  });
});

describe('findPossibleItems', () => {
  describe('when none of the children has itemClassName', () => {
    it('should return an array of all carousel element`s children', () => {
      initializeCarousel();
      expect(carousel.findPossibleItems()).toEqual(Array.from(element.children));
      expect(carousel.findPossibleItems() instanceof Array).toBeTruthy();
    });
  });

  describe('when a subset of the children has itemClassName', () => {
    it('should return an array of all children with itemClassName set, ignoring all of the others', () => {
      templateHTML = `<li class="frs-tc-item">item1</li><li>item 2</li><li class="frs-tc-item">item 3</li><li>item 4</li>`;
      initializeCarousel();
      expect(carousel.findPossibleItems()).toEqual([element.children[0], element.children[2]]);
      expect(carousel.findPossibleItems() instanceof Array).toBeTruthy();
      templateHTML = '';
    });
  });
});

describe('active::get', () => {
  beforeEach(initializeCarousel);

  it('should return proper active index', () => {
    Object.defineProperty(element, 'scrollLeft', { value: 150 });
    Object.defineProperty(element, 'clientWidth', { value: 5 });
    expect(carousel.active).toBe(1);
  });

  describe('when carouselElement.scrollLeft = 0', () => {
    it('should return proper 0', () => {
      Object.defineProperty(element, 'scrollLeft', { value: 0 });
      Object.defineProperty(element, 'clientWidth', { value: 5 });
      expect(carousel.active).toBe(0);
    });
  });

  describe('when item`s offsetParent = carouselElement', () => {
    it('should return proper 1', () => {
      Object.defineProperty(element, 'scrollLeft', { value: 150 });
      Object.defineProperty(element, 'clientWidth', { value: 5 });
      Object.defineProperty(carousel.config.items[0], 'offsetParent', { value: carousel.carouselElement });
      expect(carousel.active).toBe(1);
    });
  });

  describe('when items array is empty', () => {
    it('should return proper -1', () => {
      carousel.config.items = [];
      expect(carousel.active).toBe(-1);
    });
  });
});
