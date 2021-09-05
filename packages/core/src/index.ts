import './index.scss';
import { on, findXSnapIndex, off, addScrollEndListener } from '@frsource/tiny-carousel-utils';
import type { DeepPartial, OmitFirstItem } from './helpers';

export type PluginDefinition<C extends unknown[] | undefined = undefined> = C extends unknown[]
  ? {
    install(instance: TinyCarousel, ...args: C): void;
  }
  : {
    install(instance: TinyCarousel): void;
  };
export interface Config {
  /**
   * Index of the item which should be activated during carousel initialization
   * More info: https://www.frsource.org/tiny-carousel/api-reference/core/#config
   */
  active: number;
  /**
   * To be changed together with `$class-name` Sass variable
   * More info: https://www.frsource.org/tiny-carousel/api-reference/core/#styling
   */
  className: string;
  /**
   * To be changed together with `$class-name-overflow` Sass variable
   * More info: https://www.frsource.org/tiny-carousel/api-reference/core/#styling
   */
  classNameOverflow: string;
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
  /**
   * Allows toggling the overflow behavior on or off. Default: true
   * More info: https://www.frsource.org/tiny-carousel/api-reference/core/#config
   */
  overflow: boolean;

  items: HTMLElement[];
}

/**
 * Used to distinguish whether the css class was added by TinyCarousel or not
 */
const TINYCAROUSEL_ADDED_CLASS = 'tcACls';

const _defaultConfig: Config = {
  active: 0,
  className: 'frs-tc',
  classNameOverflow: 'frs-tc--o',
  itemClassName: 'frs-tc-item',
  hideScrollClassName: 'frs-hide-scroll', // default frs-hide-scrollbar classname, for private use only
  overflow: true,
  items: [],
};

export class TinyCarousel {
  public config: Config;
  private _active?: number;
  private _resetActive: TinyCarousel['resetActive'];
  private _handleOverflow: TinyCarousel['handleOverflow'];

  static get defaultConfig () {
    return Object.assign({}, _defaultConfig);
  }

  static updateDefaultConfig (config: DeepPartial<Config>) {
    Object.assign(_defaultConfig, config);
  }

  constructor(public carouselElement: HTMLElement, config: DeepPartial<Config> = {}) {
    this.config = Object.assign({}, _defaultConfig, config);
    this._resetActive = this.resetActive.bind(this);
    this._handleOverflow = this.handleOverflow.bind(this);
  }

  // make it public if needed (and document it)
  private handleOverflow () {
    if (
      !this.config.overflow ||
      !this.config.items.length
    ) return;

    if (
      this.active === -1 ||
      this.active === this.config.items.length
    ) this.goTo(this.active);
  }

  use<PD extends PluginDefinition>(pluginDefinition: PD, ...args: OmitFirstItem<Parameters<PD['install']>>) {
    (pluginDefinition as PluginDefinition<unknown[]>).install(this, ...args);
    return this;
  }

  init() {
    on(this.carouselElement, 'scroll', this._resetActive, { passive: true });
    this._handleOverflow = addScrollEndListener(this.carouselElement, this._handleOverflow);

    if (!this.config.items.length) this.config.items = this.findPossibleItems();

    this.carouselElement.classList.add(this.config.className);
    this.carouselElement.classList.add(this.config.hideScrollClassName);

    if (this.config.overflow) this.carouselElement.classList.add(this.config.classNameOverflow);

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
    off(this.carouselElement, 'scroll', this._handleOverflow);
    return this;
  }

  /*
   * Returns an index of the active item or -1 if items array is empty.
   */
  get active () {
    if (this._active !== void 0) return this._active;

    this._active = findXSnapIndex(
      this.carouselElement,
      this.config.items,
      this.config.overflow
    );
    return this._active;
  }

  goTo (n: number) {
    const len = this.config.items.length;
    if (len) {
      if (this.config.overflow) {
        // treat negative numbers as counter starting at the end of items array
        while (n < 0) n += len; 
        // treat numbers >= items length as overflow - start counting the rest from the beginning
        while (n >= len) n -= len;
      } else {
        if (n < 0) n = 0;
        else if (n >= len) n = len - 1;
      }

      this.carouselElement.scrollLeft = this.config.items[n].offsetLeft;
    }

    return this;
  }

  next () {
    return this.goTo(this.active + 1);
  }

  prev () {
    return this.goTo(this.active - 1);
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
