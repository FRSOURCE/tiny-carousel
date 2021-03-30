import { referenceParentOffsetLeft, findScrollContainerXCenter, findXSnapIndex } from "./dom";

const parentScrollLeft = 150;
const parentOffsetLeft = 200;
const parentClientWidth = 500;
let parent: HTMLElement;
let child: HTMLElement;

beforeEach(() => {
  parent = {
    scrollLeft: parentScrollLeft,
    offsetLeft: parentOffsetLeft,
    clientWidth: parentClientWidth,
  } as HTMLElement;
  child = {} as HTMLElement;
})

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
    { offsetLeft: 0 },
    { offsetLeft: 400 },
    { offsetLeft: 800 },
  ] as HTMLElement[];

  it('should go through elements until it finds correct index', () => {
    expect(findXSnapIndex(parent, items, 100)).toBe(1);
  });

  describe('when scrollPositionX = 0', () => {
    it('should return 0', () => {
      expect(findXSnapIndex(parent, items, -400)).toBe(0);
    });
  });

  describe('when scrollPositionX is bigger than the offset of the last item', () => {
    it('should return index of the last item', () => {
      expect(findXSnapIndex(parent, items, 1000)).toBe(2);
    });
  });

  describe('when items array is empty', () => {
    it('should return 0', () => {
      expect(findXSnapIndex(parent, [], 500)).toBe(0);
    });
  });

  describe('when carouselElement scrollLeft = 0', () => {
    it('should return 0', () => {
      const element = { ...parent, scrollLeft: 0 };
      expect(findXSnapIndex(element, [], 500)).toBe(0);
    });
  });
});
