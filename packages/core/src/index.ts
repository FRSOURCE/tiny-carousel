import './index.scss';
import { on } from '@frsource/tiny-carousel-utils';
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
  className: string;
  itemClassName: string;
  // TODO: better documentation
  // internal, change only if you know what you're doing!
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

    on(carouselElement, 'scroll', this.resetActive.bind(this), { passive: true });
  }

  use<PD extends PluginDefinition>(pluginDefinition: PD, ...args: OmitFirstItem<Parameters<PD['install']>>) {
    (pluginDefinition as PluginDefinition<unknown[]>).install(this, ...args);
    return this;
  }

  init() {
    this.carouselElement.classList.add(this.config.className);
    this.carouselElement.classList.add(this.config.hideScrollClassName);

    this.config.items.forEach(({ classList }) => {
      classList.add(this.config.itemClassName)
    });

    this.goTo(this.config.active);

    return this;
  }

  private get _carouselScrollPositionX () {
    let scrollPositionX = this.carouselElement.scrollLeft + this.carouselElement.clientWidth / 2;
    // to overcome calculation problems when offsetLeft is calculated not from this.carousel, but from body
    if (this.config.items[0]?.offsetParent !== this.carouselElement) {
      scrollPositionX += this.carouselElement.offsetLeft;
    }

    return scrollPositionX;
  }

  /*
   * Returns an index of the active item or -1 if items array is empty.
   */
  get active () {
    if (this._active !== void 0) return this._active;
    const scrollPositionX = this._carouselScrollPositionX;
    let i = -1;
    let item: HTMLElement;
    while (!!(item = this.config.items[++i]) && scrollPositionX >= item.offsetLeft);
    return this._active = --i;
  }

  goTo (n: number): boolean {
    // recursion to avoid situations when -n > this.items.length
    if (n < 0) return this.goTo(n + this.config.items.length);
    
    const last = this.config.items.length - 1;
    if (n > last) return false;

    this.carouselElement.scrollLeft = this.config.items[n].offsetLeft;

    return true;
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
