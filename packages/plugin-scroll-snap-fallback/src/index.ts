import type { PluginDefinition } from '@frsource/tiny-carousel-core';
import { off } from '@frsource/tiny-carousel-utils';
import { useFallback } from './useFallback';

export const pluginScrollSnapFallback = {
  install: (instance, config = {}) => {
    if (
      config.force || 
      !(
        // if does not support modern scroll-snap API
        typeof CSS !== 'undefined' && CSS.supports?.('scroll-snap-align', 'start') || 
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        typeof InstallTrigger !== 'undefined' // or is not Firefox, based on https://stackoverflow.com/a/9851769
      )
    ) {
      const { timeoutedOnScroll } = useFallback(instance, config);

      const destroy = instance.destroy;
      instance.destroy = function(...args) {
        off(instance.carouselElement, 'scroll', timeoutedOnScroll);
        return destroy.apply(this, args);
      };
    }
  }
} as PluginDefinition<[{ force?: boolean; scrollTimeout?: number }?]>;
