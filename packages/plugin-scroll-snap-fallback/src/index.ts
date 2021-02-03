import type { PluginDefinition } from "@frsource/tiny-carousel-core";
import { useFallback } from "./useFallback";

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
    ) useFallback(instance, config);
  }
} as PluginDefinition<[{ force?: boolean; scrollTimeout?: number }?]>;
