import { EventDetailMap, CustomEventListener, on, off, dispatch } from '@frsource/tiny-carousel-utils';
import type { TinyCarousel, PluginDefinition } from '@frsource/tiny-carousel-core';

type InstanceOnFn = {
  <E extends keyof EventDetailMap>(event: E, handler: CustomEventListener<E>, options?: boolean | AddEventListenerOptions): TinyCarousel;
  (event: string, handler: EventListener, options?: boolean | AddEventListenerOptions): TinyCarousel;
};

type InstanceOffFn = {
  <E extends keyof EventDetailMap>(event: E, handler: CustomEventListener<E>): TinyCarousel;
  (event: string, handler: EventListener): TinyCarousel;
};

type InstanceDispatchFn = {
  <E extends keyof EventDetailMap, P extends EventDetailMap[E]>(event: E, ...[payload, options]: (P extends undefined ? [undefined?, EventInit?] : never)): TinyCarousel;
  <E extends keyof EventDetailMap>(event: E, payload: EventDetailMap[E], options?: EventInit): TinyCarousel;
};

declare module '@frsource/tiny-carousel-core' {
  interface TinyCarousel {
    on: InstanceOnFn;
    off: InstanceOffFn;
    dispatch: InstanceDispatchFn;
  }
}

export const pluginCustomEvents = {
  install: (instance) => {
    instance.on = function(this: typeof instance, ...args: Parameters<InstanceOnFn>) {
      on(this.carouselElement, ...args);
      return this;
    } as InstanceOnFn;
    instance.off = function(this: typeof instance, ...args: Parameters<InstanceOffFn>) {
      off(this.carouselElement, ...args);
      return this;
    } as InstanceOffFn;
    instance.dispatch = function(this: typeof instance, ...args: Parameters<InstanceDispatchFn>) {
      dispatch(this.carouselElement, ...args);
      return this;
    } as InstanceDispatchFn;

    const init = instance.init;
    instance.init = function(...args) {
      this.dispatch('before:init');
      const result = init.apply(this, args);
      this.dispatch('after:init');
      return result;
    };

    const findPossibleItems = instance.findPossibleItems;
    instance.findPossibleItems = function(...args) {
      this.dispatch('before:find-possible-items');
      const result = findPossibleItems.apply(this, args);
      this.dispatch('after:find-possible-items');
      return result;
    };

    const goTo = instance.goTo;
    instance.goTo = function(...args) {
      const goToEventPayload = { to: { index: args[0] } };
      this.dispatch('before:go-to', goToEventPayload);
      const result = goTo.apply(this, args);
      result
        ? this.dispatch('after:go-to', goToEventPayload)
        : this.dispatch(
          'error:go-to',
          Object.assign({}, goToEventPayload, {cause: 'overflow'} as { cause: EventDetailMap['error:go-to']['cause'] })
        );
      return result;
    };
  }
} as PluginDefinition<undefined>;
