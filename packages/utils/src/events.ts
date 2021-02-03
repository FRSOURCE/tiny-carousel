export interface EventDetailMap {
  'before:init'?: undefined;
  'after:init'?: undefined;
  'before:go-to': { to: { index: number; } };
  'after:go-to': { to: { index: number; }; };
  'error:go-to': { to: { index: number; }; cause: 'overflow' };
  'before:find-possible-items'?: undefined;
  'after:find-possible-items'?: undefined;
}
export type CustomEventListener<E extends keyof EventDetailMap = keyof EventDetailMap> =
  ((e: CustomEvent<EventDetailMap[E]>)=> void);

// TODO: add possibility to pass event/target array?

export const on: {
  <E extends keyof EventDetailMap>(target: Element, event: E, handler: CustomEventListener<E>, options?: boolean | AddEventListenerOptions): void;
  (target: Element, event: string, handler: EventListener, options?: boolean | AddEventListenerOptions): void;
} = (target: Element, event: string, handler: EventListener | CustomEventListener, options?: boolean | AddEventListenerOptions) => {
  target.addEventListener(event, handler as EventListener, options);
}

export const off: {
  <E extends keyof EventDetailMap>(target: Element, event: E, handler: CustomEventListener<E>): void;
  (target: Element, event: string, handler: EventListener): void;
} = (target: Element, event: string, handler: EventListener | CustomEventListener) => {
  target.removeEventListener(event, handler as EventListener);
}

export const dispatch: {
  <E extends keyof EventDetailMap, P extends EventDetailMap[E]>(target: Element, event: E, ...[payload, options]: (P extends undefined ? [undefined?, EventInit?] : never)): boolean;
  <E extends keyof EventDetailMap>(target: Element, event: E, payload: EventDetailMap[E], options?: EventInit): boolean;
} = <E extends keyof EventDetailMap>(
  target: Element, event: E, payload?: EventDetailMap[E], options?: EventInit
) =>
  target.dispatchEvent(new CustomEvent(event, Object.assign({ detail: payload }, options)));
