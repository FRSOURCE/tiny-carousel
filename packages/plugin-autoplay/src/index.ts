import type { PluginDefinition } from '@frsource/tiny-carousel-core';
import { TinyCarousel } from '@frsource/tiny-carousel-core';
import { on, off } from '@frsource/tiny-carousel-utils';

declare module '@frsource/tiny-carousel-core' {
  interface Config {
    autoplayTimeout: number;
    autoplayImmediate: boolean,
    pauseOnHover: boolean,
  }

  interface TinyCarousel {
    play: (options?: { autoplayImmediate?: boolean })=>this;
    pause: (options?: { leavePauseOnHoverListeners?: boolean })=>this;
  }
}

TinyCarousel.updateDefaultConfig(
  Object.assign(
    {
      autoplayTimeout: 4000,
      autoplayImmediate: false,
      pauseOnHover: true,
    },
    // make sure we don`t override autoplay-related properties
    // if they`re already present in the default config
    TinyCarousel.defaultConfig,
  )
);

type MouseListener = ()=>void;

export const pluginAutoplay = {
  install: (instance, config = {}) => {
    Object.assign(instance.config, config);
  
    let timeout: ReturnType<Window['setTimeout']> | undefined;
    let mouseOverListener: MouseListener;
    let mouseOutListener: MouseListener;

    const clearListeners = function ({ carouselElement }: TinyCarousel) {
      off(carouselElement, 'mouseover', mouseOverListener);
      off(carouselElement, 'mouseout', mouseOutListener);
    };

    instance.play = function({ autoplayImmediate } = {}) {
      this.pause();

      if (this.config.pauseOnHover) {
        mouseOverListener = this.pause.bind(this, { leavePauseOnHoverListeners: true });
        on(this.carouselElement, 'mouseover', mouseOverListener);

        mouseOutListener = this.play.bind(this, { autoplayImmediate: false });
        on(this.carouselElement, 'mouseout', mouseOutListener);
      }

      const player = () => {
        if (
          timeout || (
            typeof autoplayImmediate === 'undefined'
              ? this.config.autoplayImmediate
              : autoplayImmediate
          )
        ) instance.next();

        timeout = (setTimeout as Window['setTimeout'])(player, this.config.autoplayTimeout);
      };

      player();

      return this;
    };

    instance.pause = function({ leavePauseOnHoverListeners } = {}) {
      leavePauseOnHoverListeners || clearListeners(this);
      clearTimeout(timeout);
      timeout = void 0;

      return this;
    };

    const destroy = instance.destroy;
    instance.destroy = function(...args) {
      this.pause();

      return destroy.apply(this, args);
    }
  }
} as PluginDefinition<[{
  autoplayTimeout?: number,
  pauseOnHover?: boolean,
}?]>;
