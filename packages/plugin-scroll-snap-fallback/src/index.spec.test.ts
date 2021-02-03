import { TinyCarousel } from "@frsource/tiny-carousel-core";
import { pluginScrollSnapFallback } from ".";
import { useFallback } from "./useFallback";

const carouselMock: TinyCarousel = {} as TinyCarousel;

jest.mock('./useFallback');

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
});

