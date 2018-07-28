window.FRSTinyCarousel = FRSTinyCarousel;
FRSTinyCarousel.config = {
  wrapperClassName: 'frs-tc-wrapper',
  itemClassName   : 'frs-tc-item',
  scrollTimeout   : 45,
  useFallback     : typeof InstallTrigger === 'undefined' // if not Firefox, based on
                                                          // https://stackoverflow.com/a/9851769
};

//

function FRSTinyCarousel (_elements) {
  _elements = _elements.length ? Array.prototype.slice.apply(_elements) : [_elements];

  let result = _elements.map(wrapContent).map(addItemClass);

  if (FRSTinyCarousel.config.useFallback) {
    result.forEach(attachScrollEvent);
  }

  return result;
}

function addItemClass (_element) {
  const children = Array.prototype.slice.apply(_element.children);

  children.forEach(function (_el) {
    _el.classList.add(FRSTinyCarousel.config.itemClassName);
  });

  return _element;
}

function wrapContent (_element) {
  if (_element.classList.contains(FRSTinyCarousel.config.wrapperClassName)) {
    return _element;
  }

  const wrapper    = document.createElement('div');
  const childNodes = _element.childNodes;

  wrapper.className = FRSTinyCarousel.config.wrapperClassName;

  let el;
  while (el = childNodes[0]) {
    wrapper.appendChild(el);
  }

  _element.appendChild(wrapper);

  return wrapper;
}

function attachScrollEvent (_element) {
  let timeoutId         = void 0;
  let initialScrollLeft = void 0;

  _element.addEventListener('scroll', onFirstScroll, {passive: true});
  _element.addEventListener('scroll', onScroll, {passive: true});

  //

  function onFirstScroll (_e) {
    _element.removeEventListener('scroll', onFirstScroll);

    initialScrollLeft = _e.target.scrollLeft;
  }

  function onScroll (_e) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(timeoutedScroll, FRSTinyCarousel.config.scrollTimeout, _e)
  }

  function timeoutedScroll (_e) {
    let offset     = 0;
    let scrollLeft = _e.target.scrollLeft;
    let children   = Array.prototype.slice.apply(_e.target.children);
    let direction  = initialScrollLeft > scrollLeft ? -1 : 0;
    let elementToSnap;

    _element.addEventListener('scroll', onFirstScroll, {passive: true});

    do {
      elementToSnap = children.shift();
      offset += elementToSnap.offsetWidth;
    } while (offset < scrollLeft);

    _e.target.scrollLeft = offset + (direction * elementToSnap.offsetWidth);
  }
}