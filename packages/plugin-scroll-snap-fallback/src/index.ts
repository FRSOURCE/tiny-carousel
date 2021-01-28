import type { TinyCarousel, PluginDefinition } from "@frsource/tiny-carousel-core";
import { on } from "@frsource/tiny-carousel-utils";

export const useFallback = (
  _context: Pick<TinyCarousel, 'items' | 'carouselElement'>,
  config: { scrollTimeout?: number }
) => {
  let timeoutId: number | undefined = void 0;
  let initialScrollLeft: number | undefined = void 0;
  let preventScrollEvent = 0;
  const timeoutedOnScroll = (_e: Event) => {
    if (--preventScrollEvent) return preventScrollEvent = 0;
    initialScrollLeft = initialScrollLeft || (_e.target as TinyCarousel['carouselElement']).scrollLeft;
    clearTimeout(timeoutId);

    timeoutId = (setTimeout as Window['setTimeout'])(onScroll.bind(_context, initialScrollLeft), config.scrollTimeout, _e)
  };

  on(_context.carouselElement, 'scroll', timeoutedOnScroll, { passive: true });

  //

  function onScroll (_initialScrollLeft: number, _e: Event) {
    initialScrollLeft = void 0;

    let offset     = 0;
    const scrollLeft = _context.carouselElement.scrollLeft;
    const children   = [..._context.items];
    const direction  = _initialScrollLeft > scrollLeft ? -1 : 0;
    let elementToSnap: HTMLElement;
    let elementToSnapOffsetWidth: number;

    do {
      elementToSnap = children.shift() as HTMLElement;
      elementToSnapOffsetWidth = elementToSnap.offsetWidth;
      offset += elementToSnapOffsetWidth;
    } while (children.length && offset + elementToSnapOffsetWidth < scrollLeft);

    preventScrollEvent = 2;
    (_e.target as TinyCarousel['carouselElement']).scrollLeft = offset + (direction * elementToSnapOffsetWidth);
  }
};

export const pluginScrollSnapFallback = {
  install: (instance, config = {}) => {
    if (config.scrollTimeout === void 0) config.scrollTimeout = 45;
    if (
      config.force || 
      !(
        CSS && CSS.supports && CSS.supports('scroll-snap-align', 'start') || // if does not support modern scroll-snap API
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        typeof InstallTrigger !== 'undefined' // or is not Firefox, based on https://stackoverflow.com/a/9851769
      )
    ) useFallback(instance, config);
  }
} as PluginDefinition<[{ force?: boolean; scrollTimeout?: number }?]>;
