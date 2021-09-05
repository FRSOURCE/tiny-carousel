import { debounce } from './limiters';
import { referenceParentOffsetLeft, findScrollContainerXCenter, findXSnapIndex, addScrollEndListener } from "./dom";
import { on } from './events';

jest.mock('./limiters.ts');
jest.mock('./events.ts');

const parentScrollLeft = 150;
const parentOffsetLeft = 200;
const parentClientWidth = 500;
const debounceMock = debounce as jest.Mock;
const debouncedCallback = jest.fn();
let parent: HTMLElement;
let child: HTMLElement;

beforeAll(() => {
  debounceMock.mockReturnValue(debouncedCallback);
})

beforeEach(() => {
  parent = {
    scrollLeft: parentScrollLeft,
    offsetLeft: parentOffsetLeft,
    clientWidth: parentClientWidth,
  } as HTMLElement;
  child = {} as HTMLElement;
});

afterEach(()=> jest.clearAllMocks());

describe('referenceParentOffsetLeft', () => {
  describe('when child is empty', () => {
    it('should return parent.offsetLeft', () => {
      expect(referenceParentOffsetLeft(parent)).toBe(parentOffsetLeft);
    });
  });

  describe('when child`s offsetParent is the parent element', () => {
    beforeEach(() => 
      (child as unknown as { offsetParent: HTMLElement })
        .offsetParent = parent
    );

    it('should return 0', () => {
      expect(referenceParentOffsetLeft(parent, child)).toBe(0);
    });
  });

  describe('when child`s offsetParent is not parent element', () => {
    it('should return parent.offsetLeft', () => {
      expect(referenceParentOffsetLeft(parent, child)).toBe(parentOffsetLeft);
    });
  });
});

describe('findScrollContainerXCenter', () => {
  it('should correctly calculate horizontal center of a scroll container', () => {
    expect(findScrollContainerXCenter(parent)).toBe(600);
  });

  describe('when child offsetParent is the parent', () => {
    it('should correctly calculate horizontal center of a scroll container', () => {
      expect(findScrollContainerXCenter(parent, child)).toBe(600);
    });
  });
});

describe('findXSnapIndex', () => {
  const items = [
    { offsetLeft: 0, offsetWidth: 400 },
    { offsetLeft: 400, offsetWidth: 400 },
    { offsetLeft: 800, offsetWidth: 400 },
  ] as HTMLElement[];

  it('should go through elements until it finds correct index', () => {
    expect(findXSnapIndex(parent, items, false)).toBe(1);
  });

  describe('when scrollPositionX = 0', () => {
    it('should return 0', () => {
      expect(findXSnapIndex(parent, items, false, -400)).toBe(0);
    });
  });

  describe('when carouselElement scrollLeft is bigger than the offset of the last item', () => {
    it('should return number of children', () => {
      expect(findXSnapIndex(parent, items, false, 1000)).toBe(3);
    });
  });

  describe('when items array is empty', () => {
    it('should return 0', () => {
      expect(findXSnapIndex(parent, [], false, 500)).toBe(0);
    });
  });

  describe('when carouselElement scrollLeft = 0', () => {
    it('should return 0', () => {
      const element = { ...parent, scrollLeft: 0 };
      expect(findXSnapIndex(element, items, false, 500)).toBe(0);
    });
  });

  describe('when overflow = true and scrollLeft = 0', () => {
    it('should return -1', () => {
      const element = { ...parent, scrollLeft: 0 };
      expect(findXSnapIndex(
        element,
        [
          { offsetLeft: 500 },
          { offsetLeft: 1000 },
          { offsetLeft: 1500 },
        ] as HTMLElement[],
        true,
      )).toBe(-1);
    });
  });
});

describe('addScrollEndListener', () => {
  const element = {} as Element;
  let callback: jest.Mock;
  
  beforeEach(() => callback = jest.fn());

  it('should call debounce method, set debounced callback as scroll event handler and return it', () => {
    expect(addScrollEndListener(element, callback)).toBe(debouncedCallback);
    expect(debounceMock).toHaveBeenCalledWith(callback, void 0);
    expect(on).toHaveBeenCalledWith(element, 'scroll', debouncedCallback, expect.objectContaining({ passive: true }));
  });
});
