import './index.scss';
import { on, findXSnapIndex, off } from '@frsource/tiny-carousel-utils';
import type { DeepPartial, OmitFirstItem } from './helpers';

export type PluginDefinition<C extends unknown[] | undefined = undefined> = C extends unknown[]
  ? {
    install(instance: TinyCarousel, ...args: C): void;
  }
  : {
    install(instance: TinyCarousel): void;
  };
export interface Config {
  active: number;
  /**
   * To be changed together with `$class-name` Sass variable
   * More info: https://www.frsource.org/tiny-carousel/api-reference/core/#styling
   */
  className: string;
  /**
   * To be changed together with `$item-class-name` Sass variable
   * More info: https://www.frsource.org/tiny-carousel/api-reference/core/#styling
   */
  itemClassName: string;
  /**
   * To be changed together with `$frs-hide-scroll` Sass variable
   * More info: https://www.frsource.org/tiny-carousel/api-reference/core/#styling
   */
  hideScrollClassName: string;
  items: HTMLElement[];
}

/**
 * Used to distinguish whether the css class was added by TinyCarousel or not
 */
const TINYCAROUSEL_ADDED_CLASS = 'tcACls';

const _defaultConfig: Config = {
  active: 0,
  className: 'frs-tc',
  itemClassName: 'frs-tc-item',
  hideScrollClassName: 'frs-hide-scroll', // default frs-hide-scrollbar classname, for private use only
  items: [],
};

export class TinyCarousel {
  public config: Config;
  private _active?: number;
  private _resetActive: TinyCarousel['resetActive'];

  static get defaultConfig () {
    return Object.assign({}, _defaultConfig);
  }

  static updateDefaultConfig (config: DeepPartial<Config>) {
    Object.assign(_defaultConfig, config);
  }

  constructor(public carouselElement: HTMLElement, config: DeepPartial<Config> = {}) {
    this.config = Object.assign({}, _defaultConfig, config);
    this._resetActive = this.resetActive.bind(this);
  }

  use<PD extends PluginDefinition>(pluginDefinition: PD, ...args: OmitFirstItem<Parameters<PD['install']>>) {
    (pluginDefinition as PluginDefinition<unknown[]>).install(this, ...args);
    return this;
  }

  init() {
    on(this.carouselElement, 'scroll', this._resetActive, { passive: true });

    if (!this.config.items.length) this.config.items = this.findPossibleItems();

    this.carouselElement.classList.add(this.config.className);
    this.carouselElement.classList.add(this.config.hideScrollClassName);

    this.config.items.forEach(({ classList, dataset }) => {
      if (!classList.contains(this.config.itemClassName)) {
        dataset[TINYCAROUSEL_ADDED_CLASS] = '';
        classList.add(this.config.itemClassName)
      }
    });

    this.goTo(this.config.active);

    return this;
  }

  destroy() {
    off(this.carouselElement, 'scroll', this._resetActive);
    return this;
  }

  /*
   * Returns an index of the active item or -1 if items array is empty.
   */
  get active () {
    if (this._active !== void 0) return this._active;
  
    return this._active = findXSnapIndex(
      this.carouselElement,
      this.config.items,
    );
  }

  goTo (n: number) {
    const len = this.config.items.length;
    if (len) {
      // treat negative numbers as counting from the end of items array
      while (n < 0) n += len; 
      // treat numbers >= items length as overflow - start counting the rest from the beginning
      while (n >= len) n -= len;

      this.carouselElement.scrollLeft = this.config.items[n].offsetLeft;
    }

    return this;
  }

  next () {
    return this.goTo(this.active + 1);
  }

  prev () {
    return this.active > 0 && this.goTo(this.active - 1);
  }

  resetActive () {
    this._active = void 0;
  }
  
  findPossibleItems () {
    const children = Array.from(this.carouselElement.children) as HTMLElement[];
    const { itemClassName } = this.config;
    const filtredChildren = children.filter(
        child =>
          !(TINYCAROUSEL_ADDED_CLASS in child.dataset) && child.classList.contains(itemClassName),
      );

    if (filtredChildren.length) return filtredChildren;
    
    return children;
  }
}
