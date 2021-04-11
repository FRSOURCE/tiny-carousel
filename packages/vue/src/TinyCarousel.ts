import { Config, PluginDefinition, TinyCarousel } from '@frsource/tiny-carousel-core';
import type { OmitFirstItem } from '@frsource/tiny-carousel-core/dist/helpers';
import Vue, { PropType, VNode } from 'vue';
import { CreateElement } from 'vue/types/umd';

export type PluginProp<PD extends PluginDefinition> = [PD, ...OmitFirstItem<Parameters<PD['install']>>];
export type PluginsProp<PD extends PluginDefinition = PluginDefinition<undefined | unknown[]>> = PluginProp<PD>[];

export type PluginDefinitionConfig<PD extends PluginDefinition> = PD extends PluginDefinition<infer C> ? C : never;
export type TinyCarouselComponent = InstanceType<typeof component>;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const definePlugin = <
    PD extends PluginDefinition<undefined | unknown[]>,
    C extends PluginDefinitionConfig<PD>
  >(...args: C extends unknown[] ? [PD, ...C] : [PD]) => args;

const component = Vue.extend({
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
      slotChildrenCount: 0,
    };
  },
  mounted() {
    this.initTinyCarousel();
  },
  watch: {
    slotChildrenCount() {
      this.initTinyCarousel();
    },
    tag() {
      this.initTinyCarousel();
    },
    plugins() {
      this.initTinyCarousel();
    },
    config() {
      this.initTinyCarousel();
    },
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

      const carousel = new TinyCarousel(this.$refs.element as HTMLElement, config);

      this.$emit('setup', carousel);
      this.plugins.forEach(([plugin, ...pluginOptions]) =>
        carousel.use(plugin, ...pluginOptions)
      );

      return this.carousel = carousel.init();
    }
  },
  render(createElement: CreateElement): VNode {
    this.slotChildrenCount = this.$slots.default?.length ?? 0;
    return createElement(
      this.tag,
      {
        ref: 'element',
        on: this.$listeners,
      },
      this.$slots.default,
    );
  }
});

export default component;