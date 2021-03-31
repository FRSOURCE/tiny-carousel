// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface EventDetailMap {
  /**
   * interface used to specify custom event names 
   * and possible types for data passed along with each event type
   * for the usage example, please have a look into @frsource/tiny-carousel-plugin-custom-events codebase
   **/
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CustomEventRequiredPayload {
  /**
   * interface used to specify required part of each event payload
   * should be set correctly by @frsource/tiny-carousel-plugin-custom-events codebase
   **/
}
export type CustomEventPayload<E extends keyof EventDetailMap> = EventDetailMap[E] & CustomEventRequiredPayload;
export type CustomEventListener<E extends keyof EventDetailMap = keyof EventDetailMap> =
  ((e: CustomEvent<CustomEventPayload<E>>)=> void);

// TODO: add possibility to pass event/target array?

export const on: {
  <E extends keyof EventDetailMap>(target: EventTarget, event: E, handler: CustomEventListener<E>, options?: boolean | AddEventListenerOptions): void;
  (target: EventTarget, event: string, handler: EventListener, options?: boolean | AddEventListenerOptions): void;
} = (target: EventTarget, event: string, handler: EventListener | CustomEventListener, options?: boolean | AddEventListenerOptions) => {
  target.addEventListener(event, handler as EventListener, options);
}

export const off: {
  <E extends keyof EventDetailMap>(target: EventTarget, event: E, handler: CustomEventListener<E>): void;
  (target: EventTarget, event: string, handler: EventListener): void;
} = (target: EventTarget, event: string, handler: EventListener | CustomEventListener) => {
  target.removeEventListener(event, handler as EventListener);
}

export const dispatch: {
  <E extends keyof EventDetailMap>(target: EventTarget, event: E, payload: CustomEventPayload<E>, options?: EventInit): boolean;
  (target: EventTarget, event: string, payload?: unknown, options?: EventInit): boolean;
} = (
  target: EventTarget, event: string, payload?: unknown, options?: EventInit
) =>
  target.dispatchEvent(new CustomEvent(event, Object.assign({ detail: payload }, options)));
