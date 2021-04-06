import type { TinyCarousel } from "@frsource/tiny-carousel-core";
import { pluginCustomEvents } from ".";
import { on, off, dispatch } from "@frsource/tiny-carousel-utils";

jest.mock("@frsource/tiny-carousel-utils");

let carousel: TinyCarousel;
let handler: ()=> void;
let init: jest.SpyInstance;
let findPossibleItems: jest.SpyInstance;
let destroy: jest.SpyInstance;
let goTo: jest.SpyInstance;
const event = 'before:go-to';
const opts = {};
const payload = { to: { index: 2 }};

beforeAll(() => {
  handler = jest.fn();
  init = jest.fn().mockReturnThis();
  findPossibleItems = jest.fn().mockReturnThis();
  destroy = jest.fn().mockReturnThis();
  goTo = jest.fn().mockReturnThis();
});
beforeEach(() =>
  carousel = {
    carouselElement: document.createElement('div'),
    init,
    findPossibleItems,
    destroy,
    goTo,
  } as unknown as TinyCarousel
);

describe('install', () => {
  beforeEach(() => pluginCustomEvents.install(carousel));

  it('should add on, off & dispatch methods to the tinyCarousel instance', () => {
    expect(carousel.on).toBeInstanceOf(Function);
    expect(carousel.off).toBeInstanceOf(Function);
    expect(carousel.dispatch).toBeInstanceOf(Function);
  });

  describe('on', () => {
    it('should call on & return this context', () => {
      expect(carousel.on(event, handler, opts)).toBe(carousel);
      expect(on).toHaveBeenCalledWith(carousel.carouselElement, event, handler, opts);
    })
  });

  describe('off', () => {
    it('should call off & return this context', () => {
      expect(carousel.off(event, handler)).toBe(carousel);
      expect(off).toHaveBeenCalledWith(carousel.carouselElement, event, handler);
    });
  });

  describe('dispatch', () => {
    it('should call dispatch with added tinyCarousel instance & return this context', () => {
      expect(carousel.dispatch(event, payload)).toBe(carousel);
      expect(dispatch).toHaveBeenCalledWith(carousel.carouselElement, event, { tinyCarousel: carousel, ...payload }, void 0);
    });

    describe('when payload is not an object', () => {
      const payload = 'anything';

      it('should dispatch it within the "data" field of the newly created event', () => {
        expect(carousel.dispatch(event, payload)).toBe(carousel);
        expect(dispatch).toHaveBeenCalledWith(carousel.carouselElement, event, { tinyCarousel: carousel, data: payload }, void 0);
      });
    });
  });

  describe('event dispatchers', () => {
    let carouselDispatchSpy: jest.SpyInstance;
    beforeEach(() => carouselDispatchSpy = jest.spyOn(carousel, 'dispatch'));

    describe('init', () => {
      it('should dispatch before and after events & run original init with correct context & return its result value', () => {
        expect(carousel.init()).toBe(carousel);
        expect(init).toHaveBeenCalled();
        expect(carouselDispatchSpy).toHaveBeenCalledWith('before:init');
        expect(carouselDispatchSpy).toHaveBeenCalledWith('after:init');
      });
    });

    describe('findPossibleItems', () => {
      it('should dispatch before and after events & run original findPossibleItems with correct context & return its result value', () => {
        expect(carousel.findPossibleItems()).toBe(carousel);
        expect(findPossibleItems).toHaveBeenCalled();
        expect(carouselDispatchSpy).toHaveBeenCalledWith('before:find-possible-items');
        expect(carouselDispatchSpy).toHaveBeenCalledWith('after:find-possible-items');
      });
    });

    describe('destroy', () => {
      it('should dispatch before and after events & run original destroy with correct context & return its result value', () => {
        expect(carousel.destroy()).toBe(carousel);
        expect(init).toHaveBeenCalled();
        expect(carouselDispatchSpy).toHaveBeenCalledWith('before:destroy');
        expect(carouselDispatchSpy).toHaveBeenCalledWith('after:destroy');
      });
    });

    describe('goTo', () => {
      describe('when goTo returns true', () => {
        beforeEach(() => goTo.mockReturnValueOnce(true));

        it('should dispatch before and after events & run original goTo with correct context & return its result value', () => {
          expect(carousel.goTo(2)).toBe(true);
          expect(goTo).toHaveBeenCalledWith(2);
          expect(carouselDispatchSpy).toHaveBeenCalledWith('before:go-to', { to: { index: 2 }});
          expect(carouselDispatchSpy).toHaveBeenCalledWith('after:go-to', { to: { index: 2 }});
        });
      });

      describe('when goTo returns false', () => {
        beforeEach(() => goTo.mockReturnValueOnce(false));

        it('should dispatch before and error events & run original goTo with correct context & return its result value', () => {
          expect(carousel.goTo(2)).toBe(false);
          expect(goTo).toHaveBeenCalledWith(2);
          expect(carouselDispatchSpy).toHaveBeenCalledWith('before:go-to', { to: { index: 2 }});
          expect(carouselDispatchSpy).toHaveBeenCalledWith('error:go-to', { to: { index: 2 }, cause: 'overflow' });
        });
      });
    });
  });
});
