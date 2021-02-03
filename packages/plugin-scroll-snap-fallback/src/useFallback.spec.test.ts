import { TinyCarousel } from "@frsource/tiny-carousel-core";
import { on } from "@frsource/tiny-carousel-utils";
import { useFallback } from "./useFallback";

jest.mock('@frsource/tiny-carousel-utils');

let carousel: TinyCarousel;
let element: HTMLElement;
let config: ConstructorParameters<typeof TinyCarousel>[1];
// let scrollHandler: (scrollLeft: number, e: Event) => void;
let scrollTimeout: number;

const initializeCarousel = () => {
  element = document.createElement('ul');
  element.innerHTML = `<li>item1</li><li>item2</li><li>item3</li>`;
  document.body.append(element);
  // mock offsets
  Object.defineProperty(element.children[1], 'offsetLeft', { value: 150 });
  Object.defineProperty(element.children[2], 'offsetLeft', { value: 300 });
  carousel = new TinyCarousel(element, config);
};

beforeEach(() => {
  initializeCarousel();
  useFallback(carousel, scrollTimeout ? { scrollTimeout } : {});
  // scrollHandler = (on as jest.Mock).mock.calls[0][2];
});
afterEach(() => jest.clearAllMocks());

it('should attach handler to scroll event', () => {
  expect(on).toHaveBeenCalled();
});

describe('scroll handler', () => {
  it.todo('should timeout scroll handler');
  it.todo('should snap element correctly - cypress/puppeteer/playwright test');
});
