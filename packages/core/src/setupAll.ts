import type { Config } from '.';
import { TinyCarousel } from '.';

export const setupAll = (_elements: NodeListOf<HTMLElement>, config: Config | Config[]) => {
  const elements = Array.from(_elements);

  return Array.isArray(config)
    ? elements.map((element, i) => new TinyCarousel(element, config[i]))
    : elements.map(element => new TinyCarousel(element, config));
}
