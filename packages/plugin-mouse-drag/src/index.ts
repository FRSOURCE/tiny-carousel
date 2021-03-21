import './index.scss';
import type { PluginDefinition } from '@frsource/tiny-carousel-core';
import { TinyCarousel } from '@frsource/tiny-carousel-core';
import { on, off, throttle, horizontalSnapToIndex, referenceParentOffsetLeft, horizontalScrollContainerCenter } from '@frsource/tiny-carousel-utils';

declare module '@frsource/tiny-carousel-core' {
  interface Config {
    mouseDragClassName: string;
    mouseDragDraggingClassName: string;
    mouseDragMomentumClassName: string;
    mouseDragMomentumGravity: number;
    mouseDragThrottle: number;
  }
}

// TODO: vertical mode (?)

// momentum animation step size - 0.02
// sum [n=0-50] { Math.sin(1-(0.02 * n)) } 
const MOMENTUM_DISTANCE_FACTOR = 23.404854;

TinyCarousel.updateDefaultConfig(
  Object.assign(
    {
      mouseDragClassName: 'frs-tc--md',
      mouseDragDraggingClassName: 'frs-tc--mdd',
      mouseDragMomentumClassName: 'frs-tc--mdm',
      mouseDragMomentumGravity: 1,
      mouseDragThrottle: 30,
    },
    // make sure we don`t override autoplay-related properties
    // if they`re already present in the default config
    TinyCarousel.defaultConfig,
  )
);

export const pluginMouseDrag = {
  install: (instance, config = {}) => {
    Object.assign(instance.config, config);
    
    let throttledMouseMove: EventListener;
    let pos: { top: number, left: number, diffX: number, diffY: number };

    
    function mouseDownHandler(e: MouseEvent) {
      instance.carouselElement.classList.add(instance.config.mouseDragDraggingClassName);
      e.preventDefault();

      pos = {
        left: instance.carouselElement.scrollLeft + e.clientX,
        top: instance.carouselElement.scrollTop + e.clientY,
        diffX: 0,
        diffY: 0
      };

      on(document, 'mousemove', throttledMouseMove, { passive: true });
      on(document, 'mouseup', mouseUpHandler as EventListener);
    }

    function mouseMoveHandler(e: MouseEvent) {
      pos.diffX = (pos.left - (e.clientX + instance.carouselElement.scrollLeft));
      instance.carouselElement.scrollLeft += pos.diffX;
    }

    function mouseUpHandler() {
      off(document, 'mousemove', throttledMouseMove);
      off(document, 'mouseup', mouseUpHandler as EventListener);

      instance.carouselElement.classList.add(instance.config.mouseDragMomentumClassName);
      instance.carouselElement.classList.remove(instance.config.mouseDragDraggingClassName);

      setTimeout(() => {
        let start = 1;
        
        pos.diffX /= instance.config.mouseDragMomentumGravity;
                
        // final X, Y
        const index = horizontalSnapToIndex(
          instance.config.items,
          horizontalScrollContainerCenter(instance.carouselElement, instance.config.items[0]) + pos.diffX * MOMENTUM_DISTANCE_FACTOR,
        );
        const elementSoontoBeActive = instance.config.items[index];
        const offsetParentOffsetX = referenceParentOffsetLeft(instance.carouselElement, elementSoontoBeActive);
        
        // store scrollLeft and raise it separately (not directly through carouselElement.scrollLeft +=)
        // because browsers do rounding on every assignment which can break our calculations
        let { scrollLeft } = instance.carouselElement;
        pos.diffX = (elementSoontoBeActive.offsetLeft - offsetParentOffsetX - scrollLeft) / MOMENTUM_DISTANCE_FACTOR;

        function animate() {
            const step = Math.sin(start);
            if (step > 0) {
              scrollLeft += pos.diffX * step;
              instance.carouselElement.scrollLeft = scrollLeft;
              start -= 0.02;
              requestAnimationFrame(animate);
            } else {
              instance.carouselElement.classList.remove(instance.config.mouseDragMomentumClassName);
            }
        }
        animate();
      }, instance.config.mouseDragThrottle);
    }

    const init = instance.init;
    instance.init = function(...args) {
      this.carouselElement.classList.add(this.config.mouseDragClassName);
      throttledMouseMove = throttle(mouseMoveHandler, instance.config.mouseDragThrottle) as EventListener;

      on(instance.carouselElement, 'mousedown', mouseDownHandler as EventListener);

      return init.apply(this, args);
    };

  }
} as PluginDefinition<[{
  mouseDragClassName?: string;
  mouseDragDraggingClassName?: string;
  mouseDragMomentumClassName?: string;
  mouseDragMomentumGravity?: number;
  mouseDragThrottle?: number;
}?]>;
