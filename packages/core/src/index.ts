import { on } from "@frsource/tiny-carousel-utils";
import type { DeepPartial, OmitFirstItem } from "./helpers";

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
}

const _defaultConfig: Config = {
  active: 0,
  className: 'frs-tc',
  itemClassName: 'frs-tc-item',
  hideScrollClassName: 'frs-hide-scroll', // default frs-hide-scrollbar classname, for private use only
};


export class TinyCarousel {
  public config: Config;
  public items!: HTMLElement[];
  private _active?: number;

  static get defaultConfig () {
    return Object.assign({}, _defaultConfig);
  }

  static updateDefaultConfig (_value: DeepPartial<Config>) {
    Object.assign(_defaultConfig, _value);
  }

  constructor(public carouselElement: HTMLElement, _config: DeepPartial<Config> = {}) {
    this.config = Object.assign({}, _defaultConfig, _config);

    this.items = this.findPossibleItems();

    on(this.carouselElement, 'scroll', this.resetActive.bind(this), { passive: true });
  }

  use<PD extends PluginDefinition>(pluginDefinition: PD, ...args: OmitFirstItem<Parameters<PD['install']>>) {
    (pluginDefinition as PluginDefinition<unknown[]>).install(this, ...args)
    return this;
  }

  init() {
    this.carouselElement.classList.add(this.config.className);
    this.carouselElement.classList.add(this.config.hideScrollClassName);

    this.goTo(this.config.active);

    return this;
  }

  private get _carouselScrollPositionX () {
    let scrollPositionX = this.carouselElement.scrollLeft + this.carouselElement.clientWidth / 2;
    // to overcome calculation problems when offsetLeft is calculated not from this.carousel, but from body
    if (this.items[0]?.offsetParent !== this.carouselElement) {
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
    while (!!(item = this.items[++i]) && scrollPositionX >= item.offsetLeft);
    return this._active = --i;
  }

  goTo (n: number): boolean {
    // recursion to avoid situations when -n > this.items.length
    if (n < 0) return this.goTo(n + this.items.length);
    
    const last = this.items.length - 1;
    if (n > last) return false;

    this.carouselElement.scrollLeft = this.items[n].offsetLeft;

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
    const filtredChildren = children.filter(child => child.classList.contains(this.config.itemClassName));

    if (filtredChildren.length) {
      return filtredChildren;
    } else {
      children.forEach(child => {
        child.classList.add(this.config.itemClassName)
      });
      return children;
    }
  }
}


