import { TinyCarousel } from "@frsource/tiny-carousel-core";
import { pluginScrollSnapFallback } from ".";
import { useFallback } from "./useFallback";
import { off } from '@frsource/tiny-carousel-utils';

jest.mock('./useFallback');
jest.mock('@frsource/tiny-carousel-utils');

const timeoutedOnScroll = jest.fn();
const onScroll = jest.fn();
const destroy = jest.fn();

const carouselMock: TinyCarousel = { destroy } as unknown as TinyCarousel;

beforeAll(() => (useFallback as jest.Mock).mockReturnValue({ onScroll, timeoutedOnScroll }));
afterEach(() => jest.clearAllMocks());

describe('install', () => {
  describe('when CSS API is not available', () => {
    beforeAll(() => global.CSS = undefined as unknown as typeof CSS);

    it('should call useFallback with default config', () => {
      pluginScrollSnapFallback.install(carouselMock);
      expect(useFallback).toHaveBeenCalledWith(carouselMock, {});
    });
  });

  describe('when CSS.supports API is not available', () => {
    beforeAll(() => global.CSS = {} as unknown as typeof CSS);

    it('should call useFallback with config provided', () => {
      pluginScrollSnapFallback.install(carouselMock, { force: false });
      expect(useFallback).toHaveBeenCalledWith(carouselMock, { force: false });
    });
  });

  describe('when CSS.supports returns false for "scroll-snap-align"', () => {
    beforeAll(() => global.CSS = { supports: () => false } as unknown as typeof CSS);

    it('should call useFallback with config provided', () => {
      pluginScrollSnapFallback.install(carouselMock, { scrollTimeout: 20 });
      expect(useFallback).toHaveBeenCalledWith(carouselMock, { scrollTimeout: 20 });
    });
  });

  describe('when CSS.supports returns true for "scroll-snap-align"', () => {
    beforeAll(() => global.CSS = { supports: () => true } as unknown as typeof CSS);

    it('should not call useFallback', () => {
      pluginScrollSnapFallback.install(carouselMock);
      expect(useFallback).not.toHaveBeenCalled();
    });
  });

  describe('destroy', () => {
    beforeEach(() => {
      pluginScrollSnapFallback.install(carouselMock);
      carouselMock.destroy();
    });

    it('should deregister scroll event handler', () => {
      expect(off).toHaveBeenCalledWith(carouselMock.carouselElement, 'scroll', timeoutedOnScroll);
    });

    it('should call original destroy method', () => {
      expect(destroy).toHaveBeenCalledTimes(1);
    });
  });
});

