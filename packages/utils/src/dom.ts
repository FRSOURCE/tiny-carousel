import { on } from './events';
import { debounce } from './limiters';

/**
 * to overcome calculation problems when offsetLeft is calculated not directly from the parent,
 * but from the body
 */ 
export const referenceParentOffsetLeft = (parent: HTMLElement, child?: HTMLElement) => {
  return child?.offsetParent !== parent
    ? parent.offsetLeft
    : 0;
}

export const findScrollContainerXCenter = (element: HTMLElement, referenceItem?: HTMLElement) => {
  const scrollPositionX = element.scrollLeft + element.clientWidth / 2;

  return scrollPositionX + referenceParentOffsetLeft(element, referenceItem);
}

export const findXSnapIndex = (carouselElement: HTMLElement, children: HTMLElement[], overflow: boolean | undefined, offset = 0) => {
  if (
    !children.length ||
    carouselElement.scrollLeft === 0 && !overflow
  ) return 0;
  
  const firstElement = children[0];
  const scrollPositionX = findScrollContainerXCenter(carouselElement, firstElement) + offset;
  
  let i = firstElement.offsetLeft > 0 ? -1 : 0;
  let item: HTMLElement;
  while ((item = children[++i]) && scrollPositionX >= item.offsetLeft);

  if (
    i === children.length &&
    scrollPositionX >= children[children.length - 1].offsetLeft + children[children.length - 1].offsetWidth
  ) return children.length;

  return --i;
}

export function addScrollEndListener (element: Element, callback: () => unknown, timeout?: number) {
  callback = debounce(callback, timeout);
  on(element, 'scroll', callback, { passive: true });
  return callback;
}
