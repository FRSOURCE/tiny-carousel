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

export const findXSnapIndex = (carouselElement: HTMLElement, children: HTMLElement[], offset = 0) => {
    if (carouselElement.scrollLeft === 0) return 0;

    const scrollPositionX = findScrollContainerXCenter(carouselElement, children[0]) + offset;
    let i = 0;
    let item: HTMLElement;
    while ((item = children[++i]) && scrollPositionX >= item.offsetLeft);
    return --i;
}
