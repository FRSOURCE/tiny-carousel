import { on, off } from '@frsource/tiny-carousel-utils';
import { Config, TinyCarousel } from "@frsource/tiny-carousel-core";
import { pluginAutoplay } from ".";

jest.mock('@frsource/tiny-carousel-utils');

const timeoutId = 20;
const onMock = on as jest.Mock;
const offMock = off as jest.Mock;
const destroy = jest.fn();
let carousel: TinyCarousel;

const installPlugin = (config?: Partial<Config>) => {
  pluginAutoplay.install(carousel, config);
};

beforeAll(() => {
  jest.spyOn(global, 'setTimeout').mockReturnValue(timeoutId);
});
beforeEach(() =>
  carousel = {
    carouselElement: document.createElement('div'),
    config: {},
    next: jest.fn(),
    destroy,
  } as unknown as TinyCarousel
);
afterEach(() => jest.clearAllMocks());

describe('install', () => {
  it('should add plugin defaults to the TinyCarousel defaults', () => {
    expect(TinyCarousel.defaultConfig).toEqual(expect.objectContaining({
      autoplayTimeout: 4000,
      autoplayImmediate: false,
      pauseOnHover: true,
    }));
  });

  it('should add play & pause methods to the tinyCarousel instance', () => {
    installPlugin();
    expect(carousel.play).toBeInstanceOf(Function);
    expect(carousel.pause).toBeInstanceOf(Function);
  });

  it('should copy over the plugin config to the instance config', () => {
    const config = {
      autoplayTimeout: 200,
      autoplayImmediate: true,
      pauseOnHover: false,
    };
    installPlugin(config);

    expect(carousel.config).toEqual(expect.objectContaining(config));
  });

  describe('play', () => {
    beforeAll(() => jest.useFakeTimers());
    afterEach(() => jest.clearAllTimers());
    afterAll(() => jest.useRealTimers());

    it('should return this context', () => {
      installPlugin();
      expect(carousel.play()).toBe(carousel);
    });

    it('should not call carousel.next() immediately', () => {
      installPlugin({ autoplayTimeout: 200 });
      carousel.play();
      expect(carousel.next).not.toHaveBeenCalled();
    });

    it('should call carousel.next() correct number of times', () => {
      installPlugin({ autoplayTimeout: 200 });
      carousel.play();
      jest.advanceTimersByTime(1000);
      expect(carousel.next).toHaveBeenCalledTimes(5);
    });

    describe('when autoplayImmediate = true', () => {
      it('should call carousel.next() immediately', () => {
        installPlugin({ autoplayTimeout: 200 });
        carousel.play({ autoplayImmediate: true });
        expect(carousel.next).toHaveBeenCalled();
      });
    });

    describe('when config.autoplayImmediate = true', () => {
      it('should call carousel.next() immediately', () => {
        installPlugin({ autoplayTimeout: 200, autoplayImmediate: true });
        carousel.play();
        expect(carousel.next).toHaveBeenCalled();
      });
    });

    describe('when config.pauseOnHover = true', () => {
      beforeEach(() => installPlugin({ autoplayTimeout: 200, pauseOnHover: true }));

      it('should bind mouseover & mouseout listeners', () => {
        carousel.play();
        expect(on).toHaveBeenCalledWith(carousel.carouselElement, 'mouseover', expect.any(Function));
        expect(on).toHaveBeenCalledWith(carousel.carouselElement, 'mouseout', expect.any(Function));
      });

      it('mouseover listener should call pause with leavePauseOnHoverListeners = true', () => {
        const pauseSpy = jest.spyOn(carousel, 'pause').mockReturnValue(carousel);
        carousel.play();
        const [,,eventListener] = onMock.mock.calls[0];
        eventListener();
        expect(pauseSpy).toHaveBeenCalledWith({ leavePauseOnHoverListeners: true })
      });

      it('mouseout listener should call play with autoplayImmediate = false', () => {
        const originalPlay = carousel.play;
        const playSpy = jest.spyOn(carousel, 'play').mockReturnValue(carousel);
        originalPlay.call(carousel);
        const [,,eventListener] = onMock.mock.calls[1];
        eventListener();
        expect(playSpy).toHaveBeenCalledWith({ autoplayImmediate: false })
      });
    });
  });

  describe('pause', () => {
    beforeAll(() => jest.useFakeTimers());
    beforeEach(() => pluginAutoplay.install(carousel, { autoplayTimeout: 200, pauseOnHover: true }));
    afterEach(() => jest.clearAllTimers());
    afterAll(() => jest.useRealTimers());
    
    it('should return this context', () => {
      expect(carousel.pause()).toBe(carousel);
    });

    it('should pause running play command', () => {
      carousel.play();
      jest.advanceTimersByTime(400);
      carousel.pause();
      jest.advanceTimersByTime(1000);
      expect(carousel.next).toHaveBeenCalledTimes(2);
    });

    it('should unbind mouseover & mouseout event listener', () => {
      carousel.play();
      carousel.pause();
      expect(off).toHaveBeenCalledWith(carousel.carouselElement, 'mouseover', expect.any(Function));
      expect(off).toHaveBeenCalledWith(carousel.carouselElement, 'mouseout', expect.any(Function));
    });

    describe('when leavePauseOnHoverListeners = true', () => {
      it('should not try to unbind any event listeners', () => {
        carousel.play();
        offMock.mockReset();
        carousel.pause({ leavePauseOnHoverListeners: true });
        expect(off).not.toHaveBeenCalled();
      });
    });
  });

  describe('destroy', () => {
    beforeEach(() => installPlugin({ autoplayTimeout: 200, pauseOnHover: true }));
    
    it('should deregister event listeners registered by play', () => {
      carousel.play();
      const [,,mouseOverListener] = onMock.mock.calls[0];
      const [,,mouseOutListener] = onMock.mock.calls[1];
      carousel.destroy();
      expect(off).toHaveBeenCalledWith(carousel.carouselElement, 'mouseover', mouseOverListener);
      expect(off).toHaveBeenCalledWith(carousel.carouselElement, 'mouseout', mouseOutListener);
    });

    it('should call original destroy method', () => {
      carousel.destroy();
      expect(destroy).toHaveBeenCalledTimes(1);
    });
  });
});
