/**
 * to overcome calculation problems when offsetLeft is calculated not directly from the parent,
 * but from the body
 */ 
export const referenceParentOffsetLeft = (parent: HTMLElement, child?: HTMLElement) => {
  return child?.offsetParent !== parent
    ? parent.offsetLeft
    : 0;
}

export const horizontalScrollContainerCenter = (element: HTMLElement, referenceItem?: HTMLElement) => {
    const scrollPositionX = element.scrollLeft + element.clientWidth / 2;
    
    return scrollPositionX + referenceParentOffsetLeft(element, referenceItem);
}

export const horizontalSnapToIndex = (items: HTMLElement[], scrollPositionX: number) => {
    let i = 0;
    let item: HTMLElement;
    while (!!(item = items[++i]) && scrollPositionX >= item.offsetLeft);
    return --i;
}
