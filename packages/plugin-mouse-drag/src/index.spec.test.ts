import { on, off, throttle, findXSnapIndex, referenceParentOffsetLeft } from '@frsource/tiny-carousel-utils';
import { Config, TinyCarousel } from "@frsource/tiny-carousel-core";
import { pluginMouseDrag } from ".";

jest.mock('@frsource/tiny-carousel-utils');

const mouseDragMomentumGravity = 2;
const mouseDragThrottle = 300;
const mouseDragClassName = 'some-className';
const mouseDragDraggingClassName = 'dragging-class';
const mouseDragMomentumClassName = 'momenTUMM-class';
const onMock = on as jest.Mock;
const offMock = off as jest.Mock;
const throttleMock = throttle as jest.Mock;
const findXSnapIndexMock = findXSnapIndex as jest.Mock;
const referenceParentOffsetLeftMock = referenceParentOffsetLeft as jest.Mock;
let init: jest.SpyInstance;
let requestAnimationFrame: jest.SpyInstance;
let preventDefault: jest.SpyInstance;
let carousel: TinyCarousel;

const installPlugin = (config?: Partial<Config>) => {
    pluginMouseDrag.install(carousel, config);
};
const callMouseDownHandler = () => {
  const [,,mouseDownHandler] = onMock.mock.calls[0];
  onMock.mockClear();
  mouseDownHandler({
    preventDefault,
    clientX: 200,
    clientY: 200,
  });
};
const callMouseMoveHandler = () => {
  const [,,mouseMoveHandler] = onMock.mock.calls[0];
  mouseMoveHandler({
    clientX: 150,
    clientY: 20,
  });
};
const callMouseUpHandler = () => {
  const [,,mouseUpHandler] = onMock.mock.calls[1];
  mouseUpHandler();
};

beforeAll(() => {
  throttleMock.mockImplementation(fn => fn);
  findXSnapIndexMock.mockReturnValue(1);
  referenceParentOffsetLeftMock.mockReturnValue(20);
  requestAnimationFrame = jest.spyOn(global, 'requestAnimationFrame').mockReturnValue(0);
  init = jest.fn();
  preventDefault = jest.fn();
});
beforeEach(() =>
  carousel = {
    carouselElement: document.createElement('div'),
    config: {
      mouseDragClassName,
      mouseDragThrottle,
      mouseDragMomentumGravity,
      items: [document.createElement('div'), document.createElement('div')],
    },
    init,
  } as unknown as TinyCarousel
);
afterEach(() => jest.clearAllMocks());

describe('install', () => {
  it('should add plugin defaults to the TinyCarousel defaults', () => {
    expect(TinyCarousel.defaultConfig).toEqual(expect.objectContaining({
      mouseDragClassName: 'frs-tc--md',
      mouseDragDraggingClassName: 'frs-tc--mdd',
      mouseDragMomentumClassName: 'frs-tc--mdm',
      mouseDragMomentumGravity: 1,
      mouseDragThrottle: 30,
    }));
  });

  it('should copy over the plugin config to the instance config', () => {
    const config = {
      mouseDragThrottle: 200,
      mouseDragMomentumGravity: 2,
      mouseDragClassName: 'something',
    };
    installPlugin(config);

    expect(carousel.config).toEqual(expect.objectContaining(config));
  });

  describe('init', () => {
    beforeEach(() => {
      installPlugin();
      carousel.init();
    });

    it('should add draggable class name', () => {
      expect(carousel.carouselElement.className).toBe(mouseDragClassName);
    });

    it('should add mousedown listener', () => {
      expect(onMock).toHaveBeenCalledWith(carousel.carouselElement, 'mousedown', expect.any(Function));
    });

    it('should call throttle with correct arguments', () => {
      expect(throttleMock).toHaveBeenCalledWith(expect.any(Function), mouseDragThrottle);
    });

    it('should call original init', () => {
      expect(init).toHaveBeenCalledTimes(1);
    });
  });

  describe('mousedown listener', () => {
    beforeEach(() => {
      installPlugin({ mouseDragDraggingClassName });
      carousel.init();
      callMouseDownHandler();
    });

    it('should call preventDefault', () => {
      expect(preventDefault).toHaveBeenCalledTimes(1);
    });

    it('should add dragging class name', () => {
      expect(carousel.carouselElement.classList.contains(mouseDragDraggingClassName)).toBeTruthy();
    });

    it('should add passive mousemove listener', () => {
      expect(on).toHaveBeenCalledWith(document, 'mousemove', expect.any(Function), { passive: true });
    });

    it('should add mouseup listener', () => {
      expect(on).toHaveBeenCalledWith(document, 'mouseup', expect.any(Function));
    });
  });

  describe('mousemove listener', () => {
    beforeEach(() => {
      installPlugin();
      carousel.init();
      carousel.carouselElement.scrollLeft = 30;
      callMouseDownHandler();
      callMouseMoveHandler();
    });

    it('should properly calculate scrollLeft', () => {
      expect(carousel.carouselElement.scrollLeft).toBe(80);
    });
  });

  describe('mouseup listener', () => {
    beforeAll(() => jest.useFakeTimers());
    beforeEach(() => {
      installPlugin({
        mouseDragDraggingClassName,
        mouseDragMomentumClassName,
      });
      carousel.init();
      carousel.carouselElement.scrollLeft = 30;
      callMouseDownHandler();
      callMouseMoveHandler();
      callMouseUpHandler();
    });
    afterAll(() => jest.useRealTimers());

    it('should remove mousemove & mouseup listeners', () => {
      expect(offMock).toHaveBeenCalledWith(document, 'mousemove', expect.any(Function));
      expect(offMock).toHaveBeenCalledWith(document, 'mouseup', expect.any(Function));
    });

    it('should remove dragging class name', () => {
      expect(carousel.carouselElement.classList.contains(mouseDragDraggingClassName)).toBeFalsy();
    });

    it('should add momentum class name', () => {
      expect(carousel.carouselElement.classList.contains(mouseDragMomentumClassName)).toBeTruthy();
    });

    it('should not call horizontalSnapToIndexMock yet', () => {
      expect(findXSnapIndexMock).not.toHaveBeenCalled();
    });

    describe('after throttle timeout', () => {
      const diffX = -4.2726179791593655;
      const step = (start: number, n: number) =>
        Array(n).fill(0).reduce(
          (p, _, i) => p + diffX * Math.sin(1 - .02 * i),
          start
        );
      const round = (n: number, approx: number) => Math.round(n * 10 ** approx) / 10 ** approx
      beforeEach(() => {
        jest.advanceTimersByTime(mouseDragThrottle);
      });

      it('should call horizontalSnapToIndex predict final index', () => {
        expect(findXSnapIndexMock).toHaveBeenCalledWith(carousel.carouselElement, carousel.config.items, 585.12135);
      });

      it('should immediately move carousel element with ease by 1 step', () => {
        expect(carousel.carouselElement.scrollLeft).toBe(step(80, 1));
      });
      
      describe('after 2 animation frames', () => {
        beforeEach(() => {
          const [ animate ] = requestAnimationFrame.mock.calls[0];
          animate();
          animate();
        });

        it('should continue to move carousel element with ease', () => {
          expect(carousel.carouselElement.scrollLeft).toBe(step(80, 3));
        });

        it('should call requestAnimationFrame 3 times', () => {
          expect(requestAnimationFrame).toHaveBeenCalledTimes(3);
        });
      });
      
      describe('after 50 animation frames', () => {
        beforeEach(() => {
          const [ animate ] = requestAnimationFrame.mock.calls[0];
          Array(49).fill(0).forEach(animate);
          requestAnimationFrame.mockClear();
          animate();
        });

        it('should remove momentum class name', () => {
          expect(carousel.carouselElement.classList.contains(mouseDragMomentumClassName)).toBeFalsy();
        });

        it('should finish animation', () => {
          expect(
            round(carousel.carouselElement.scrollLeft, 12)
          ).toBe(
            round(step(80, 51), 12)
          );
        });

        it('should not call requestAnimationFrame for last animation step', () => {
          expect(requestAnimationFrame).not.toHaveBeenCalled();
        });
      });
    });
  });
});
