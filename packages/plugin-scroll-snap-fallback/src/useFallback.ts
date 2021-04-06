import type { TinyCarousel } from '@frsource/tiny-carousel-core';
import { on } from '@frsource/tiny-carousel-utils';

export const useFallback = (
    carousel: Pick<TinyCarousel, 'config' | 'carouselElement'>,
    config: { scrollTimeout?: number }
  ) => {
    // TODO: remove ignore when E2E test are in place
    /* istanbul ignore next */
    if (config.scrollTimeout === void 0) config.scrollTimeout = 45;

    let timeoutId: number | undefined = void 0;
    let initialScrollLeft: number | undefined = void 0;
    let preventScrollEvent = 2;
    // TODO: cover this method with tests
    /* istanbul ignore next */
    const timeoutedOnScroll = (e: Event) => {
      if (--preventScrollEvent) return;
      initialScrollLeft = initialScrollLeft || (e.target as TinyCarousel['carouselElement']).scrollLeft;
      clearTimeout(timeoutId);
  
      timeoutId = (setTimeout as Window['setTimeout'])(onScroll.bind(carousel, initialScrollLeft), config.scrollTimeout, e)
    };
  
    on(carousel.carouselElement, 'scroll', timeoutedOnScroll, { passive: true });
  
    //
    // TODO: cover this method with tests (Playwright/Puppeteer/cypress E2E?)
    /* istanbul ignore next */
    function onScroll (oldInitialScrollLeft: number, e: Event) {
      initialScrollLeft = void 0;
  
      const scrollLeft = carousel.carouselElement.scrollLeft;
      const children = [...carousel.config.items];
      const direction = oldInitialScrollLeft > scrollLeft ? -1 : 0;
      let offset = 0;
      let elementToSnap: HTMLElement;
      let elementToSnapOffsetWidth: number;
  
      do {
        elementToSnap = children.shift() as HTMLElement;
        elementToSnapOffsetWidth = elementToSnap.offsetWidth;
        offset += elementToSnapOffsetWidth;
      } while (children.length && offset + elementToSnapOffsetWidth < scrollLeft);
  
      preventScrollEvent = 2;
      (e.target as TinyCarousel['carouselElement']).scrollLeft = offset + (direction * elementToSnapOffsetWidth);
    }

    return {
      onScroll,
      timeoutedOnScroll,
    };
  };