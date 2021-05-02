import { Config, PluginDefinition, TinyCarousel } from '@frsource/tiny-carousel-core';
import type { OmitFirstItem } from '@frsource/tiny-carousel-core/dist/helpers';
import type { PropType, VNode, CreateElement, VNodeData } from 'vue';
import Vue from 'vue';

export type PluginProp<PD extends PluginDefinition> = [PD, ...OmitFirstItem<Parameters<PD['install']>>];
export type PluginsProp<PD extends PluginDefinition = PluginDefinition<undefined | unknown[]>> = PluginProp<PD>[];

export type PluginDefinitionConfig<PD extends PluginDefinition> = PD extends PluginDefinition<infer C> ? C : never;
export type TinyCarouselComponent = InstanceType<typeof component>;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const definePlugin = <
    PD extends PluginDefinition<undefined | unknown[]>,
    C extends PluginDefinitionConfig<PD>
  >(...args: C extends unknown[] ? [PD, ...C] : [PD]) => args;

let oldChildNodes: Node[] = []; 
function initTinyCarouselWrapperIfNeeded (this: Vue & { initTinyCarousel: ()=> void}) {
  this.$nextTick(function() {
    const { childNodes } = this.$el as HTMLElement;
    if (
      oldChildNodes.length !== childNodes.length ||
      oldChildNodes.some((oldChildNode, i) => oldChildNode !== childNodes[i])
    ) {
      oldChildNodes = Array.from(childNodes);
      this.initTinyCarousel();
    }
  });
}

// this one makes output bundle few bytes smaller ¯\_(ツ)_/¯
function initTinyCarouselWrapper (this: Vue & { initTinyCarousel: ()=> void}) {
  this.$nextTick(this.initTinyCarousel);
}

// to make compatible Vue 3
const identityAsExtend = ((v: unknown) => v) as typeof Vue['extend'];

const component = identityAsExtend({
  name: 'TinyCarousel',
  props: {
    tag: {
      type: String as PropType<keyof HTMLElementTagNameMap>,
      default: 'ul',
    },
    plugins: {
      type: Array as PropType<PluginsProp>,
      default: () => []
    },
    config: {
      type: Object as PropType<Partial<Config> | undefined>,
      default: void 0,
    },
  },
  data() {
    return {
      carousel: void 0 as TinyCarousel | undefined,
    };
  },
  mounted: initTinyCarouselWrapperIfNeeded,
  updated: initTinyCarouselWrapperIfNeeded,
  watch: {
    tag: initTinyCarouselWrapper,
    plugins: initTinyCarouselWrapper,
    config: initTinyCarouselWrapper,
  },
  methods: {
    initTinyCarousel() {
      let config = this.config;

      if (this.carousel?.active) {
        config = config
          ? { ...config, active: this.carousel.active }
          : { active: this.carousel.active };
      }

      this.carousel?.destroy();
      const carousel = new TinyCarousel(this.$el as HTMLElement, config);

      this.$emit('setup', carousel);
      this.plugins.forEach(([plugin, ...pluginOptions]) =>
        carousel.use(plugin, ...pluginOptions)
      );

      return this.carousel = carousel.init();
    }
  },
  render(h: CreateElement): VNode {
    // Vue 3
    if (typeof h !== 'function')
      h = (Vue as unknown as { h: CreateElement }).h;

    const data: VNodeData = this.$listeners
      // Vue 2
      ? { on: this.$listeners }
      // Vue 3
      : this.$attrs;

    const slotDefault = typeof this.$slots.default !== 'function'
      // Vue 2
      ? this.$slots.default
      // Vue 3
      : (this.$slots.default as ()=> VNode[])();

    return h(
      this.tag,
      data,
      slotDefault,
    );
  }
});

export default component;