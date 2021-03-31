import './index.scss';
import { on, findXSnapIndex } from '@frsource/tiny-carousel-utils';
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

  static get defaultConfig () {
    return Object.assign({}, _defaultConfig);
  }

  static updateDefaultConfig (config: DeepPartial<Config>) {
    Object.assign(_defaultConfig, config);
  }

  constructor(public carouselElement: HTMLElement, _config: DeepPartial<Config> = {}) {
    this.config = Object.assign({}, _defaultConfig, _config);

    if (!_config.items) this.config.items = this.findPossibleItems();
  }

  use<PD extends PluginDefinition>(pluginDefinition: PD, ...args: OmitFirstItem<Parameters<PD['install']>>) {
    (pluginDefinition as PluginDefinition<unknown[]>).install(this, ...args);
    return this;
  }

  init() {
    on(this.carouselElement, 'scroll', this.resetActive.bind(this), { passive: true });

    this.carouselElement.classList.add(this.config.className);
    this.carouselElement.classList.add(this.config.hideScrollClassName);

    this.config.items.forEach(({ classList }) => {
      classList.add(this.config.itemClassName)
    });

    this.goTo(this.config.active);

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
    // treat negative numbers as counting from the end of items array
    while (n < 0) n += len; 
    // treat numbers >= items length as overflow - start counting the rest from the beginning
    while (n >= len) n -= len;

    this.carouselElement.scrollLeft = this.config.items[n].offsetLeft;

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
    const filtredChildren = children.filter(child => child.classList.contains(itemClassName));

    if (filtredChildren.length) return filtredChildren;
    
    return children;
  }
}
