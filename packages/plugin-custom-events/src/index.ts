import { EventDetailMap, CustomEventListener, on, off, dispatch } from '@frsource/tiny-carousel-utils';
import type { TinyCarousel, PluginDefinition } from '@frsource/tiny-carousel-core';

declare module '@frsource/tiny-carousel-utils' {
  interface EventDetailMap {
    'before:init'?: undefined;
    'after:init'?: undefined;
    'before:destroy'?: undefined;
    'after:destroy'?: undefined;
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

function addEventsToMethod<
  MN extends ['findPossibleItems', 'find-possible-items']
    | ['goTo', 'go-to']
    | ['init', 'init']
    | ['destroy', 'destroy']
>(
  instance: TinyCarousel,
  methodName: MN[0],
  eventName: MN[1],
) {
  const eventNameBefore = 'before:' + eventName;
  const eventNameAfter = 'after:' + eventName;
  const originalMethod = instance[methodName] as TinyCarousel[MN[0]] & ((this: TinyCarousel, ...args: unknown[]) => unknown);
  instance[methodName] = function(this: TinyCarousel, ...args: Parameters<TinyCarousel[MN[0]]>) {
    this.dispatch(eventNameBefore);
    const result = originalMethod.apply(this, args);
    this.dispatch(eventNameAfter);
    return result;
  } as TinyCarousel[MN[0]];
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


    addEventsToMethod(instance, 'init', 'init');
    addEventsToMethod(instance, 'findPossibleItems', 'find-possible-items');
    addEventsToMethod(instance, 'destroy', 'destroy');

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
