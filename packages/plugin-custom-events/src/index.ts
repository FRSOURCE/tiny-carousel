import { EventDetailMap, CustomEventListener, on, off, dispatch, CustomEventRequiredPayload } from '@frsource/tiny-carousel-utils';
import type { TinyCarousel, PluginDefinition } from '@frsource/tiny-carousel-core';

declare module '@frsource/tiny-carousel-utils' {
  interface EventDetailMap {
    'before:init'?: undefined;
    'after:init'?: undefined;
    'before:go-to': { to: { index: number; } };
    'after:go-to': { to: { index: number; }; };
    'error:go-to': { to: { index: number; }; cause: 'overflow' };
    'before:find-possible-items'?: undefined;
    'after:find-possible-items'?: undefined;
  }

  interface CustomEventRequiredPayload {
    tinyCarousel: TinyCarousel
  }
}

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
  (event: string, payload?: unknown, options?: EventInit): TinyCarousel;
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
    type IDParams = Parameters<InstanceDispatchFn>;
    instance.dispatch = function(this: typeof instance, event: IDParams[0], payload: IDParams[1], options: IDParams[2]) {
      if (typeof payload !== 'object') payload = { data: payload };
      
      dispatch(this.carouselElement, event, Object.assign({}, payload, { tinyCarousel: this }), options);
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
        ? this.dispatch('after:go-to', Object.assign({}, goToEventPayload))
        : this.dispatch(
          'error:go-to',
          Object.assign({}, goToEventPayload, {cause: 'overflow'} as { cause: EventDetailMap['error:go-to']['cause'] })
        );
      return result;
    };
  }
} as PluginDefinition<undefined>;
