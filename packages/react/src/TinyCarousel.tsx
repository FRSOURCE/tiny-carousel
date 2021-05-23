import React, { forwardRef, useEffect, useRef } from 'react';
import { Config, PluginDefinition, TinyCarousel as TinyCarouselCore } from '@frsource/tiny-carousel-core';
import type { CustomEventListener, EventDetailMap } from '@frsource/tiny-carousel-utils';
import type { OmitFirstItem } from '@frsource/tiny-carousel-core/dist/helpers';

export type PluginProp<PD extends PluginDefinition> = [PD, ...OmitFirstItem<Parameters<PD['install']>>];
export type PluginsProp<PD extends PluginDefinition = PluginDefinition<undefined | unknown[]>> = PluginProp<PD>[];

export type PluginDefinitionConfig<PD extends PluginDefinition> = PD extends PluginDefinition<infer C> ? C : never;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const definePlugin = <
    PD extends PluginDefinition<undefined | unknown[]>,
    C extends PluginDefinitionConfig<PD>
  >(...args: C extends unknown[] ? [PD, ...C] : [PD]) => args;

type KebabToCamelCase<Set extends string> =
  Set extends `${infer P}-${infer S}`
    ? `${P}${Capitalize<KebabToCamelCase<S>>}`
    : Set;

type RenamePrefix<Set extends string> =
  Set extends `${infer P}:${infer S}`
    ? `on${Capitalize<P>}Event${Capitalize<S>}`
    : `onEvent${Capitalize<Set>}`;

type TinyCarouselReactEventProps<K extends keyof EventDetailMap = keyof EventDetailMap> =
  /** Makes fields optional */
  Partial<
    Record<
      RenamePrefix<KebabToCamelCase<K>>,
      CustomEventListener<K>
    >
  >;

export interface TinyCarouselProps extends TinyCarouselReactEventProps {
  /** [string] - let's you render a custom tag element as TinyCarousel wrapper (default: "ul") */
  tag?: keyof JSX.IntrinsicElements;
  /** [string] - adds classname on main carousel wrapper  */
  className?: string;
  /** [PluginsProp] - import plugins from TinyCarousel ecosystem to this carousel instance */
  plugins?: PluginsProp;
  /** [Partial<Config>] - configure this TinyCarousel instance */
  config?: Partial<Config>;
  /** [React.ReactNode] - pass in the carousel slides */
  children?: React.ReactNode;
}

export type TinyCarouselRef = TinyCarouselCore | undefined;

const MATCH_CAMEL_CASE = /([a-z]*)/i;
function propToEventName (propEventName: keyof TinyCarouselReactEventProps): keyof EventDetailMap {
  const [prefix, ...rest] = propEventName.slice(2).split('Event');
  const eventParts = rest.join('Event').split(MATCH_CAMEL_CASE).filter(Boolean);
  return (prefix ? prefix.toLowerCase() + ':' : '') + eventParts.join('-').toLowerCase() as keyof EventDetailMap;
}

const TinyCarousel = forwardRef<TinyCarouselRef, TinyCarouselProps>((
  {
    tag: Tag = 'ul',
    plugins,
    config,
    children,
    className,
    ...eventListeners
  },
  ref,
) => {
  const element = useRef<HTMLElement>(null);
  const previousEventListeners = useRef(eventListeners);
  const carousel = useRef<TinyCarouselCore>();
  const initTinyCarousel = () => {
    if (!element.current) return;

    const newConfig = carousel.current?.active
      ? { ...config, active: carousel.current.active }
      : config;
    
    carousel.current?.destroy();
    const newCarousel = new TinyCarouselCore(element.current, newConfig);

    plugins?.forEach(([plugin, ...pluginOptions]) =>
      newCarousel.use(plugin, ...pluginOptions)
    );

    carousel.current = newCarousel.init();

    if (typeof ref === 'function') ref(carousel.current);
    else if (ref) ref.current = carousel.current;
  };

  useEffect(() => {
    const prev = previousEventListeners.current;
    previousEventListeners.current = eventListeners;

    if (!element.current) return;
    (Object.keys(prev) as (keyof typeof previousEventListeners.current)[])
      .forEach(eventName => {
        const listener = eventListeners[eventName];
        if (listener) {
          element.current?.removeEventListener(
            propToEventName(eventName) as any,
            listener as EventListener,
          );
        }
      });
    (Object.keys(eventListeners) as (keyof typeof eventListeners)[])
      .forEach(eventName => {
        const listener = eventListeners[eventName];
        if (listener) {
          element.current?.addEventListener(
            propToEventName(eventName) as any,
            listener as EventListener,
          );
        }
      });
  }, [eventListeners]);

  useEffect(
    initTinyCarousel,
    [Tag, plugins, config, children, className, ref]
  );

  // to ignore "Expression produces a union type that is too complex to represent. ts(2590)"
  // read more: https://github.com/chakra-ui/chakra-ui/issues/3714
  // @ts-ignore
  return <Tag className={className} ref={element}>{children}</Tag>;
});

export default TinyCarousel;