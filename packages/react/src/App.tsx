import React, { useRef, useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import TinyCarousel, { definePlugin, PluginsProp, TinyCarouselProps, TinyCarouselRef } from './TinyCarousel';
import { pluginAutoplay } from '@frsource/tiny-carousel-plugin-autoplay';
import { pluginMouseDrag } from '@frsource/tiny-carousel-plugin-mouse-drag';
import { pluginCustomEvents } from '@frsource/tiny-carousel-plugin-custom-events';

const carouselPlugins: PluginsProp = [
  definePlugin(pluginAutoplay, {
    autoplayTimeout: 5000,
  }),
  definePlugin(pluginMouseDrag),
  definePlugin(pluginCustomEvents),
];

function App() {
  const [number, setNumber] = useState(6);
  const [isInitialized, setIsInitialized] = useState(false);
  const tinyCarousel = useRef<TinyCarouselRef>(null);
  const onCarouselInit: TinyCarouselProps['onAfterEventInit'] = e => {
    setIsInitialized(true);
    e.detail.tinyCarousel.play();
  };
  const clickPrev = () => tinyCarousel.current?.prev();
  const clickNext = () => tinyCarousel.current?.next();

  return (
    <main className="App">
      <header>
        <h1>Tiny carousel - your favourite carousel&nbsp;library&nbsp;👑</h1>
        <h3>Now in <a href="https://reactjs.org" title="Read more about React!">React</a>&nbsp;<img src={logo} className="App-logo" alt="logo" /></h3>
      </header>

      <TinyCarousel
        className="carousel"
        tag="ul"
        plugins={carouselPlugins}
        onAfterEventInit={onCarouselInit}
        ref={tinyCarousel}
      >
        {
          new Array(number).fill(0).map((_, index) =>
            <li key={index}>
              <img
                className="carousel__item-img"
                alt={`Demo ${index}`}
                src={`https://picsum.photos/seed/${index + 1}/800/600`}
              />
            </li>
          )
        }
      </TinyCarousel>

      <p className="carousel-status">Carousel is { isInitialized ? 'initialized' : 'not initialized' }</p>
      
      <nav className="row">
        <button type="button" onClick={clickPrev}>prev</button>
        <button type="button" onClick={clickNext}>next</button>
        <button type="button" onClick={() => setNumber(number + 1)}>Add slide</button>
        <button type="button" onClick={() => setNumber(number - 1)}>Remove slide</button>
      </nav>
    </main>
  );
}

export default App;
