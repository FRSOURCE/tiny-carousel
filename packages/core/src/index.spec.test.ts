import { on, findXSnapIndex, off } from '@frsource/tiny-carousel-utils';
import { TinyCarousel } from '.';

jest.mock('@frsource/tiny-carousel-utils');
const { 
  findXSnapIndex: findXSnapIndexActual,
} = jest.requireActual('@frsource/tiny-carousel-utils');

const findXSnapIndexMock = findXSnapIndex as jest.Mock;

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

beforeAll(() => {
  findXSnapIndexMock.mockImplementation(findXSnapIndexActual);
});

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
  let findPossibleItemsSpy: jest.SpyInstance;

  beforeAll(() => {
    findPossibleItemsSpy = jest.spyOn(TinyCarousel.prototype, 'findPossibleItems').mockReturnValue([
      element.children[0] as HTMLElement, element.children[1] as HTMLElement
    ]);
    config = {className: 'something', active: 2};
    goToSpy = jest.spyOn(TinyCarousel.prototype, 'goTo').mockReturnValue(carousel);
  });
  beforeEach(initializeCarousel);
  afterAll(() => {
    config = undefined;
    goToSpy.mockRestore();
    findPossibleItemsSpy.mockRestore();
  });

  it('should try to find possible items', () => {
    carousel.init();
    expect(findPossibleItemsSpy).toHaveBeenCalledTimes(1);
  });

  it('should bind handler to the "scroll" event', () => {
    carousel.init();
    expect(on).toHaveBeenCalledWith(element, 'scroll', expect.any(Function), { passive: true });
  });

  it('should add classnames from the config', () => {
    carousel.init();
    expect(element.className).toBe('something frs-hide-scroll');
  });

  it('should add item classnames from the config to the items', () => {
    carousel.init();
    carousel.config.items
      .forEach(child => expect(child.className).toBe('frs-tc-item'));
  });

  it('shoud call goTo method', () => {
    carousel.init();
    expect(goToSpy).toHaveBeenCalledTimes(1);
    expect(goToSpy).toHaveBeenCalledWith(2);
  });

  it('should return instance context for easier chaining', () => {
    expect(carousel.init()).toBe(carousel);
  });

  describe('when `config.items` is set', () => {
    beforeEach(() => carousel.config.items = [ document.body /* any HTMLElement */ ]);

    it('shouldn`t update `config.items` with element children', () => {
      carousel.init();
  
      expect(carousel.config).toEqual({
        active: 2,
        className: 'something',
        hideScrollClassName: 'frs-hide-scroll',
        itemClassName: 'frs-tc-item',
        items: carousel.config.items,
      });
      config = undefined;
    });
  });
});

describe('destroy', () => {
  it('should unbind the "scroll" handler which was bound by `init` method', () => {
    carousel.init();
    carousel.destroy();
    expect(off).toHaveBeenCalledWith(element, 'scroll', expect.any(Function));
    expect((on as jest.Mock).mock.calls[0][2]).toBe((off as jest.Mock).mock.calls[0][2]);
  });

  it('should return TinyCarousel instance', () =>{
    expect(carousel.destroy()).toBe(carousel);
  })
});

describe('goTo', () => {
  beforeEach(initializeCarousel);

  it('should return carousel instance', () => {
    expect(carousel.goTo(0)).toBe(carousel);
  });

  describe('when items are set', () => {
    beforeEach(() => carousel.init());

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
    carousel.init();
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
});

describe('resetActive', () => {
  it('should run without any errors', () => {
    initializeCarousel();
    expect(carousel.resetActive()).toBeUndefined();
  });
});

describe('findPossibleItems', () => {
  describe('when none of the children has itemClassName', () => {
    beforeEach(initializeCarousel);

    it('should return an array of all carousel element`s children', () => {
      expect(carousel.findPossibleItems()).toEqual(Array.from(element.children));
      expect(carousel.findPossibleItems() instanceof Array).toBeTruthy();
    });

    describe('after init, when new child is added', () => {
      beforeEach(() => {
        carousel.init();
        carousel.carouselElement.append(document.createElement('li'));
      });

      it('should return it together with all of the other carousel element`s children', () => {
        expect(carousel.findPossibleItems()).toEqual(Array.from(element.children));
      });
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
  beforeEach(() => {
    initializeCarousel();
    carousel.init();
  });

  it('should return proper active index no matter how many times is being run', () => {
    Object.defineProperty(element, 'scrollLeft', { value: 160 });
    Object.defineProperty(element, 'clientWidth', { value: 5 });
    expect(carousel.active).toBe(1);
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
    it('should return 0', () => {
      carousel.config.items = [];
      expect(carousel.active).toBe(0);
    });
  });
});
