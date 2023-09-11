import{_ as c,r,o as p,c as d,b as e,d as n,a as t,w as s,e as a}from"./app.ca3ba0dc.js";const m={},h=n("h1",{id:"usage",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#usage","aria-hidden":"true"},"#"),e(" Usage")],-1),g=n("p",null,[e("On this page you\u2019ll find usage guides about every one of the packages that together make up a "),n("a",{href:"../../ecosystem"},"Tiny Carousel ecosystem"),e(".")],-1),y={class:"custom-container tip"},f=n("p",{class:"custom-container-title"},"TIP",-1),v={href:"https://www.w3.org/WAI/tutorials/carousels/",target:"_blank",rel:"noopener noreferrer"},b=n("h2",{id:"core",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#core","aria-hidden":"true"},"#"),e(" Core")],-1),_=n("p",null,[e("The main package of the Tiny Carousel "),n("a",{href:"../../ecosystem"},"ecosystem"),e(" which gives the most basic carousel API. Try it out before using additional plugins - it might be enough in the most basic scenarios.")],-1),k=n("p",null,"First, you need to install the core library using one of the package managers:",-1),w=a(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># yarn</span>
<span class="token function">yarn</span> <span class="token function">add</span> @frsource/tiny-carousel-core

<span class="token comment"># npm</span>
<span class="token function">npm</span> <span class="token function">install</span> @frsource/tiny-carousel-core
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To use this package you need to import <strong>both the SASS/CSS and Typescript/JavaScript files</strong>.</p>`,2),C={class:"custom-container warning"},x=n("p",{class:"custom-container-title"},"The animations in an example are not working.",-1),T=n("code",null,"reduce motion",-1),S={href:"https://web.dev/prefers-reduced-motion/",target:"_blank",rel:"noopener noreferrer"},P=n("p",null,[e("See the example below which uses "),n("strong",null,"only"),e(" the core package:")],-1),A=n("div",null,`
@import "https://cdn.skypack.dev/@frsource/tiny-carousel-core/dist/index.css";

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
`,-1),j=n("div",{class:"custom-container tip"},[n("p",{class:"custom-container-title"},"TIP"),e(),n("p",null,[e("Make sure to not override "),n("code",null,"overflow: scroll"),e(" styling on the carousel element - it`s necessary for library to work well!")])],-1),I=n("p",null,"That\u2019s the most basic usage of the core package.",-1),E=n("p",null,"Next, we can try out using core JavaScript API to add next/previous buttons with only few lines of code:",-1),V=n("div",null,`
@import "https://cdn.skypack.dev/@frsource/tiny-carousel-core/dist/index.css";

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
`,-1),R=n("p",null,[e("In most cases, the same functionality can be obtained using proper Tiny Carousel plugin - we\u2019ve got you covered! But, if you ever find yourself in a situation where you need to do something more custom - know that Tiny Carousel JavaScript API is there and is ready to be used! Read more in the "),n("a",{href:"../../api-reference/core"},"API docs for core package"),e(".")],-1),z=n("h2",{id:"react",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#react","aria-hidden":"true"},"#"),e(" React")],-1),N=n("p",null,[e("This package integrates Tiny Carousel into React. More detailed info about the API can be found "),n("a",{href:"../../api-reference/integration-react"},"here"),e(".")],-1),q=n("p",null,"To start, you need to install the integration:",-1),O=a(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># yarn</span>
<span class="token function">yarn</span> <span class="token function">add</span> @frsource/tiny-carousel-react

<span class="token comment"># npm</span>
<span class="token function">npm</span> <span class="token function">install</span> @frsource/tiny-carousel-react
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now let\u2019s see how to add the TinyCarousel to your React application.</p>`,2),L=n("div",null,`
@import "https://cdn.skypack.dev/@frsource/tiny-carousel-core/dist/index.css";

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
`,-1),U=n("div",null,`
@import "https://cdn.skypack.dev/@frsource/tiny-carousel-core/dist/index.css";

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
`,-1),D=n("h2",{id:"vue",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vue","aria-hidden":"true"},"#"),e(" Vue")],-1),F=n("p",null,[e("This package integrates Tiny Carousel into Vue. More detailed info about the API can be found "),n("a",{href:"../../api-reference/integration-vue"},"here"),e(".")],-1),M=n("p",null,"To start, you need to install the integration:",-1),$=a(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># yarn</span>
<span class="token function">yarn</span> <span class="token function">add</span> @frsource/tiny-carousel-vue

<span class="token comment"># npm</span>
<span class="token function">npm</span> <span class="token function">install</span> @frsource/tiny-carousel-vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now let\u2019s see how to add the TinyCarousel to your Vue 3 application.</p>`,2),B=n("div",{class:"custom-container tip"},[n("p",{class:"custom-container-title"},"TIP"),e(),n("p",null,[e("Still developing Vue 2 application? Don\u2019t worry! "),n("a",{href:"#vue-2"},"Click here to see the Vue 2 example"),e(".")])],-1),H=n("h3",{id:"vue-3",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vue-3","aria-hidden":"true"},"#"),e(" Vue 3")],-1),W=n("p",null,"First, the most basic example of how to add Tiny Carousel to your Vue 3 application:",-1),Y=n("div",null,`
@import "https://cdn.skypack.dev/@frsource/tiny-carousel-core/dist/index.css";

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
`,-1),J=n("p",null,"That\u2019s the most basic usage, but Vue integration allows you to do much more than that!",-1),G=n("p",null,"TinyCarousel component allows you to use any of the Tiny Carousel plugins, access carousel instance directly or change the carousel root element`s tag name to something custom. Let\u2019s try it out in the next example:",-1),K=n("div",null,`
@import "https://cdn.skypack.dev/@frsource/tiny-carousel-core/dist/index.css";

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
`,-1),Q=n("h3",{id:"vue-2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vue-2","aria-hidden":"true"},"#"),e(" Vue 2")],-1),X=n("p",null,"Next, follow the basic example of how to add Tiny Carousel to your Vue 2 application:",-1),Z=n("div",null,`
@import "https://cdn.skypack.dev/@frsource/tiny-carousel-core/dist/index.css";

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
`,-1),ee=n("p",null,"In the more advanced usage example let\u2019s see how you can use any of the Tiny Carousel plugins, access carousel instance directly or change the carousel root element`s tag name to something custom:",-1),ne=n("div",null,`
@import "https://cdn.skypack.dev/@frsource/tiny-carousel-core/dist/index.css";
`,-1),se=n("h2",{id:"plugin-autoplay",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#plugin-autoplay","aria-hidden":"true"},"#"),e(" Plugin Autoplay")],-1),te=n("p",null,[e("More detailed info about the plugin\u2019s API can be found "),n("a",{href:"../../api-reference/plugin-autoplay"},"here"),e(".")],-1),oe=n("p",null,"To install the plugin use one of the commands below:",-1),ie=a(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># yarn</span>
<span class="token function">yarn</span> <span class="token function">add</span> @frsource/tiny-carousel-plugin-autoplay

<span class="token comment"># npm</span>
<span class="token function">npm</span> <span class="token function">install</span> @frsource/tiny-carousel-plugin-autoplay
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),ae={class:"custom-container tip"},le=n("p",{class:"custom-container-title"},"Prerequisites",-1),re=n("code",null,"@frsource/tiny-carousel-plugin-custom-events",-1),ue=n("code",null,"Plugin Autoplay",-1),ce=a(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># yarn</span>
<span class="token function">yarn</span> <span class="token function">add</span> @frsource/tiny-carousel-plugin-custom-events

<span class="token comment"># npm</span>
<span class="token function">npm</span> <span class="token function">install</span> @frsource/tiny-carousel-plugin-custom-events
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),pe=n("code",null,"carousel.use",-1),de=n("code",null,"PluginConfig",-1),me=n("div",null,`
@import "https://cdn.skypack.dev/@frsource/tiny-carousel-core/dist/index.css";

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
`,-1),he=n("h2",{id:"plugin-custom-events",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#plugin-custom-events","aria-hidden":"true"},"#"),e(" Plugin Custom Events")],-1),ge={href:"https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent",target:"_blank",rel:"noopener noreferrer"},ye=n("a",{href:"../../api-reference/core"},"Core Tiny Carousel API",-1),fe=n("p",null,[e("API Reference and the list of all events raised by this plugin you will find "),n("a",{href:"../../api-reference/plugin-custom-events"},"here"),e(".")],-1),ve=n("p",null,"Let\u2019s try to use it - first you need to install the plugin using one of a package managers:",-1),be=a(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># yarn</span>
<span class="token function">yarn</span> <span class="token function">add</span> @frsource/tiny-carousel-plugin-custom-events

<span class="token comment"># npm</span>
<span class="token function">npm</span> <span class="token function">install</span> @frsource/tiny-carousel-plugin-custom-events
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),_e=n("code",null,"carousel.use",-1),ke=n("code",null,"carousel.on()",-1),we=n("div",null,`
@import "https://cdn.skypack.dev/@frsource/tiny-carousel-core/dist/index.css";

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
`,-1),Ce=n("h2",{id:"plugin-mouse-drag",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#plugin-mouse-drag","aria-hidden":"true"},"#"),e(" Plugin Mouse Drag")],-1),xe=n("p",null,"This plugin adds drag/swipe support for mouse users (especially on desktop).",-1),Te=n("p",null,[e("API Reference and the list of all events raised by this plugin you will find "),n("a",{href:"../../api-reference/plugin-mouse-drag"},"here"),e(".")],-1),Se=n("p",null,[e("To use this package you need to import "),n("strong",null,"both the SASS/CSS and Typescript/JavaScript files"),e(".")],-1),Pe=n("p",null,"Let\u2019s try to use it - first you need to install the plugin using one of a package managers:",-1),Ae=a(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># yarn</span>
<span class="token function">yarn</span> <span class="token function">add</span> @frsource/tiny-carousel-plugin-mouse-drag

<span class="token comment"># npm</span>
<span class="token function">npm</span> <span class="token function">install</span> @frsource/tiny-carousel-plugin-mouse-drag
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),je=n("code",null,"carousel.use",-1),Ie=n("p",null,"See the example below on the device with mouse connected to see the plugin in action:",-1),Ee=n("div",null,`
@import "https://cdn.skypack.dev/@frsource/tiny-carousel-core/dist/index.css";
@import "https://cdn.skypack.dev/@frsource/tiny-carousel-plugin-mouse-drag/dist/index.css";

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
`,-1),Ve=n("h2",{id:"plugin-scroll-snap-fallback",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#plugin-scroll-snap-fallback","aria-hidden":"true"},"#"),e(" Plugin Scroll Snap Fallback")],-1),Re={href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scroll_Snap",target:"_blank",rel:"noopener noreferrer"},ze=n("strong",null,"Scroll\xA0Snap\xA0Fallback\xA0Plugin",-1),Ne={href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scroll_Snap",target:"_blank",rel:"noopener noreferrer"},qe=n("p",null,"First install it via your favorite package manager:",-1),Oe=a(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># yarn</span>
<span class="token function">yarn</span> <span class="token function">add</span> @frsource/tiny-carousel-plugin-scroll-snap-fallback

<span class="token comment"># npm</span>
<span class="token function">npm</span> <span class="token function">install</span> @frsource/tiny-carousel-plugin-scroll-snap-fallback
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),Le=n("code",null,"carousel.use",-1),Ue=n("div",null,`
@import "https://cdn.skypack.dev/@frsource/tiny-carousel-core/dist/index.css";

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
`,-1),De={href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scroll_Snap",target:"_blank",rel:"noopener noreferrer"},Fe=n("div",{class:"custom-container tip"},[n("p",{class:"custom-container-title"},"Help us improve the documentation"),e(),n("p",null,"Hey, it seems you\u2019ve made it to the very bottom of our usage guide! Thank you for taking such interest in our library - we hope it will make your journey easier! \u2708\uFE0F"),e(),n("p",null,'However, if you feel that something could be described better or if you saw any typo/error please feel free to use the "Help us improve this page on GitHub" button placed on the very bottom of this page. Don\u2019t hesitate to write a suggestion in the "issues" tab or file a PR with a fix!'),e(),n("p",null,"Thank you! Any help is kindly appreciated \u{1F64F}")],-1),Me=n("p",null,[e("For further information about the possible configuration options and useful methods, please have a look at our "),n("a",{href:"../../api-reference"},"API reference"),e(".")],-1);function $e(Be,He){const l=r("ExternalLinkIcon"),o=r("ExampleSection"),i=r("RouterLink"),u=r("CanIUseSection");return p(),d("div",null,[h,e(),g,e(),n("div",y,[f,e(),n("p",null,[e("Always try to use proper semantic tags/attributes when setting up a carousel to make it accessible. Read more in "),n("a",v,[e("W3C tutorial"),t(l)]),e(".")])]),e(),b,e(),_,e(),k,e(),w,e(),n("div",C,[x,e(),n("p",null,[e("By default, the core package disables scroll animations for some users to make the carousel accessible for the broader audience. If somebody (maybe you?) has the "),T,e(" option enabled in the system settings of his/her device the carousel will follow that rule and turn off the animations. To learn more, please "),n("a",S,[e("read\xA0this\xA0article"),t(l)]),e(".")])]),e(),P,e(),t(o,{title:"Basic Tiny Carousel Core example",description:"The most simplistic usage example of @frsource/tiny-carousel-core package","default-tab":"html"},{html:s(()=>[e(`
<!-- You can navigate through slides using: scroll, arrows (first focus carousel with a click) or (on touch devices) swiping -->
<ul>
  <li>
    <img src="https://picsum.photos/seed/1/800/600">
  </li>
  <li>
    <img src="https://picsum.photos/seed/2/800/600">
  </li>
  <li>
    <img src="https://picsum.photos/seed/3/800/600">
  </li>
  <li>
    <img src="https://picsum.photos/seed/4/800/600">
  </li>
  <li>
    <img src="https://picsum.photos/seed/5/800/600">
  </li>
  <li>
    <img src="https://picsum.photos/seed/6/800/600">
  </li>
</ul>
  `)]),scss:s(()=>[A]),js:s(()=>[e(`
import { TinyCarousel } from 'https://cdn.skypack.dev/@frsource/tiny-carousel-core';

new TinyCarousel(
  document.querySelector('ul')
)
  .init();
  `)]),_:1}),e(),j,e(),I,e(),E,e(),t(o,{title:"Advanced Tiny Carousel Core example",description:"A bit more advanced usage example of @frsource/tiny-carousel-core library","default-tab":"js"},{html:s(()=>[e(`
<nav>
  <button type="button" class="first">&lt;&lt;</button>
  <button type="button" class="prev">&lt;</button>
  <button type="button" class="next">&gt;</button>
  <button type="button" class="last">&gt;&gt;</button>
</nav>

<ul>
  <li>
    <img src="https://picsum.photos/seed/1/800/600">
  </li>
  <li>
    <img src="https://picsum.photos/seed/2/800/600">
  </li>
  <li>
    <img src="https://picsum.photos/seed/3/800/600">
  </li>
  <li>
    <img src="https://picsum.photos/seed/4/800/600">
  </li>
  <li>
    <img src="https://picsum.photos/seed/5/800/600">
  </li>
  <li>
    <img src="https://picsum.photos/seed/6/800/600">
  </li>
</ul>
  `)]),scss:s(()=>[V]),js:s(()=>[e(`
import { TinyCarousel } from 'https://cdn.skypack.dev/@frsource/tiny-carousel-core';

const carousel = new TinyCarousel(
  document.querySelector('ul')
)
  .init();

// using .goTo method to go to the slide with an exact index number
document.querySelector('.first')
  .addEventListener(
    'click',
    () => carousel.goTo(0)
  );

// using .prev method
document.querySelector('.prev')
  .addEventListener(
    'click',
    () => carousel.prev()
  );

// using .next method
document.querySelector('.next')
  .addEventListener(
    'click', 
    () => carousel.next()
  );

// passing negative number as an argument to the .goTo method will make it count slides from the end (-1 being the last slide)
document.querySelector('.last')
  .addEventListener(
    'click', 
    () => carousel.goTo(-1)
  );
  `)]),_:1}),e(),R,e(),z,e(),N,e(),q,e(),O,e(),t(o,{title:"Example on how to use Tiny Carousel React integration with React",description:"This example code shows how to use Tiny Carousel integration for React - @frsource/tiny-carousel-react","default-tab":"js",scripts:["https://unpkg.com/react/umd/react.production.min.js","https://unpkg.com/react-dom/umd/react-dom.production.min.js","https://unpkg.com/@frsource/tiny-carousel-utils/dist/index.umd.js","https://unpkg.com/@frsource/tiny-carousel-core/dist/index.umd.js","https://unpkg.com/@frsource/tiny-carousel-react/dist/index.umd.js"],tags:["react","hooks"]},{html:s(()=>[e(`
<p>Use arrows or scroll (or swipes on a mobile device) to change slides</p>

<div id="root"></div>
  `)]),scss:s(()=>[L]),typescript:s(()=>[e(`
// needed because of UMD build
// it's an equivalent of
// import TinyCarousel from "@frsource/tiny-carousel-react";
const TinyCarousel = window.tinyCarouselReact.default;

function App() {
  const [number, setNumber] = React.useState(6);

  return (
    <TinyCarousel>
      {new Array(number).fill(1).map(
          (_, index) =>
      <li key={index}>
          <img
            className="carousel__item-img"
            alt={\`Demo \${index}\`}
            src={\`https://picsum.photos/seed/\${index + 1}/800/600\`}
          />
          </li>
        )
      }
    </TinyCarousel>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
  `)]),_:1},8,["scripts"]),e(),n("p",null,[e("TinyCarousel React component give you possibility to configure carousel, import TinyCarousel plugins, customize tag name and use listen for custom events. To know more about the event handling read "),t(i,{to:"/api-reference/integration-react/#tinycarousel"},{default:s(()=>[e("React TinyCarousel API reference")]),_:1}),e(" or have a look at the advanced example below:")]),e(),t(o,{title:"Example of advanced usage of the Tiny Carousel React integration",description:"This example shows how to access carousel API, add plugins to your Tiny Carousel instance and change carousel element tag name to something custom - like 'section' when using React integration - @frsource/tiny-carousel-react","default-tab":"js",height:"450px",scripts:["https://unpkg.com/react/umd/react.production.min.js","https://unpkg.com/react-dom/umd/react-dom.production.min.js","https://unpkg.com/@frsource/tiny-carousel-utils/dist/index.umd.js","https://unpkg.com/@frsource/tiny-carousel-core/dist/index.umd.js","https://unpkg.com/@frsource/tiny-carousel-react/dist/index.umd.js","https://unpkg.com/@frsource/tiny-carousel-plugin-autoplay/dist/index.umd.js","https://unpkg.com/@frsource/tiny-carousel-plugin-custom-events/dist/index.umd.js"],tags:["react","hooks"]},{html:s(()=>[e(`
<p>Use arrows or scroll (or swipes on a mobile device) to change slides</p>

<div id="root"></div>
  `)]),scss:s(()=>[U]),typescript:s(()=>[e(`
// needed because of skypack/codepen limitations
// it's an equivalent of e.g.:
// import TinyCarousel from "@frsource/tiny-carousel-react";
// and
// import { pluginCustomEvents } from '@frsource/tiny-carousel-plugin-custom-events';
const {
  default: TinyCarousel,
  definePlugin,
  PluginsProp,
  TinyCarouselProps,
  TinyCarouselRef
} = window.tinyCarouselReact;
const { pluginAutoplay } = window.tinyCarouselPluginAutoplay;
const { pluginCustomEvents } = window.tinyCarouselPluginCustomEvents;

const carouselPlugins: PluginsProp = [
  definePlugin(pluginAutoplay, {
    autoplayTimeout: 4000,
  }),
  definePlugin(pluginCustomEvents),
];

function App() {
  const [number, setNumber] = React.useState(6);
  const [isInitialized, setIsInitialized] = React.useState(false);
  const tinyCarousel = React.useRef<TinyCarouselRef>(null);
  const onCarouselInit: TinyCarouselProps['onAfterEventInit'] = e => {
    setIsInitialized(true);
    e.detail.tinyCarousel.play();
  };
  const clickPrev = () => tinyCarousel.current?.prev();
  const clickNext = () => tinyCarousel.current?.next();

  return (
  <main>
    <p className="carousel-status">Carousel is { isInitialized ? 'initialized' : 'not initialized' }</p>

    <TinyCarousel
      className="carousel"
      tag="section"
      plugins={carouselPlugins}
      onAfterEventInit={onCarouselInit}
      ref={tinyCarousel}
    >
      {new Array(number).fill(1).map(
          (_, index) =>
      <article key={index}>
          <img
            className="carousel__item-img"
            alt={\`Demo \${index}\`}
            src={\`https://picsum.photos/seed/\${index + 1}/800/600\`}
          />
          </article>
        )
      }
    </TinyCarousel>

    <nav className="row">
      <button type="button" onClick={clickPrev}>prev</button>
      <button type="button" onClick={clickNext}>next</button>
      <button type="button" onClick={() => setNumber(number + 1)}>Add slide</button>
      <button type="button" onClick={() => setNumber(number - 1)}>Remove slide</button>
    </nav>
  </main>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
  `)]),_:1},8,["scripts"]),e(),D,e(),F,e(),M,e(),$,e(),B,e(),H,e(),W,e(),t(o,{title:"Example on how to use Tiny Carousel Vue integration with Vue 3",description:"This example code shows how to use Tiny Carousel integration for Vue 3 - @frsource/tiny-carousel-vue","default-tab":"js",scripts:["https://cdn.jsdelivr.net/npm/vue@next/dist/vue.global.js","https://unpkg.com/@frsource/tiny-carousel-utils/dist/index.umd.js","https://unpkg.com/@frsource/tiny-carousel-core/dist/index.umd.js","https://unpkg.com/@frsource/tiny-carousel-vue/dist/index.umd.js"],tags:["vue","vue3"]},{html:s(()=>[e(`
<p>Use arrows or scroll (or swipes on a mobile device) to change slides</p>

<div id="app"></div>

<script type="text/x-template" id="app-template">

  <TinyCarousel>
    <li v-for="index in numberOfSlides" :key="index">
      <img
        class="carousel__item-img"
        :src="\`https://picsum.photos/seed/\${index}/800/600\`"
      >
    </li>
  </TinyCarousel>

<\/script>
  `)]),scss:s(()=>[Y]),typescript:s(()=>[e(`
// needed because of skypack/codepen limitations
// in regular codebase use 
// import * as Vue from "vue";
// import TinyCarousel from "@frsource/tiny-carousel-vue";
// instead of the two lines below:
const { createApp, ref, watch, computed } = window.Vue;
const TinyCarousel = window.tinyCarouselVue.default;

const App = {
  name: 'App',
  template: '#app-template',
  components: {
    TinyCarousel,
  },
  data() {
    return {
      numberOfSlides: 4,
    };
  }
};

createApp(App)
  .mount('#app');
  `)]),_:1},8,["scripts"]),e(),J,e(),G,e(),t(o,{title:"Example of advanced usage of the Tiny Carousel Vue integration with Vue 3",description:"This example shows how to access carousel API, add plugins to your Tiny Carousel instance and change carousel element to something custom - like 'section'","default-tab":"js",height:"450px",tags:["vue","vue3","composition-api"],scripts:["https://cdn.jsdelivr.net/npm/vue@next/dist/vue.global.js","https://unpkg.com/@frsource/tiny-carousel-utils/dist/index.umd.js","https://unpkg.com/@frsource/tiny-carousel-core/dist/index.umd.js","https://unpkg.com/@frsource/tiny-carousel-vue/dist/index.umd.js","https://unpkg.com/@frsource/tiny-carousel-plugin-autoplay/dist/index.umd.js","https://unpkg.com/@frsource/tiny-carousel-plugin-custom-events/dist/index.umd.js"]},{html:s(()=>[e(`
<div id="app"></div>

<script type="text/x-template" id="app-template">

  <main>
    <p>Carousel is {{ isInitialized ? 'initialized' : 'not initialized' }}</p>
  
    <TinyCarousel
      ref="tinyCarousel"
      tag="section"
      :plugins="carouselPlugins"
      @after:init="isInitialized = true"
    >
      <article v-for="index in numberOfSlides" :key="index">
        <img
          class="carousel__item-img"
          :src="\`https://picsum.photos/seed/\${index}/800/600\`"
        >
      </article>
    </TinyCarousel>
  
    <nav>
      <button type="button" @click="carousel?.prev()">prev</button>
      <button type="button" @click="carousel?.next()">next</button>
    </nav>
    <div>
      <button type="button" @click="++numberOfSlides">Add slide</button>
      <button type="button" @click="--numberOfSlides">Remove slide</button>
    </div>
  </main>

<\/script>
  `)]),scss:s(()=>[K]),typescript:s(()=>[e(`
// needed because of skypack/codepen limitations
// in regular codebase use 
// import TinyCarousel from "@frsource/tiny-carousel-vue";
// or 
// import { pluginCustomEvents } from '@frsource/tiny-carousel-plugin-custom-events';
// instead of the three lines below:
const { createApp, ref, watch, computed } = window.Vue;
const {
  default: TinyCarousel,
  definePlugin,
  PluginsProp,
  TinyCarouselComponent
} = window.tinyCarouselVue;
const { pluginAutoplay } = window.tinyCarouselPluginAutoplay;
const { pluginCustomEvents } = window.tinyCarouselPluginCustomEvents;

const App = {
  name: 'App',
  template: '#app-template',
  components: {
    TinyCarousel,
  },
  setup() {
    const tinyCarousel = ref();
    const carousel = computed(() => tinyCarousel.value?.carousel);
    const carouselPlugins: PluginsProp = [
      definePlugin(pluginAutoplay, {
        autoplayTimeout: 5000,
      }),
      // adds triggering of the custom events
      definePlugin(pluginCustomEvents),
    ];

    watch(carousel, carousel => {
      carousel?.play();
    });

    return {
      numberOfSlides: ref(6),
      carouselPlugins,
      isInitialized: ref(false),
      tinyCarousel,
      carousel,
    };
  }
};

createApp(App)
  .mount('#app');
  `)]),_:1},8,["scripts"]),e(),Q,e(),X,e(),t(o,{title:"Example on how to use Tiny Carousel Vue integration with Vue 2",description:"This example code shows how to use Tiny Carousel integration for Vue 2 - @frsource/tiny-carousel-vue","default-tab":"js",tags:["vue","vue2"]},{html:s(()=>[e(`
<p>Use arrows or scroll (or swipes on a mobile device) to change slides</p>

<div id="app"></div>

<script type="text/x-template" id="app-template">

  <TinyCarousel>
    <li v-for="index in numberOfSlides" :key="index">
      <img
        class="carousel__item-img"
        :src="\`https://picsum.photos/seed/\${index}/800/600\`"
      >
    </li>
  </TinyCarousel>

<\/script>
  `)]),scss:s(()=>[Z]),typescript:s(()=>[e(`
import Vue from 'https://cdn.jsdelivr.net/npm/vue@2/dist/vue.esm.browser.js';
import TinyCarousel from 'https://cdn.skypack.dev/@frsource/tiny-carousel-vue';

const App = {
  name: 'App',
  template: '#app-template',
  components: {
    TinyCarousel
  },
  data() {
    return {
      numberOfSlides: 4,
    };
  }
};

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
  `)]),_:1}),e(),ee,e(),t(o,{title:"Example of advanced usage of the Tiny Carousel Vue integration with Vue 2",description:"This example shows how to access carousel API, add plugins to your Tiny Carousel instance and change carousel element to something custom - like 'section'","default-tab":"js",height:"450px",tags:["vue","vue2"]},{html:s(()=>[e(`
<div id="app"></div>

<script type="text/x-template" id="app-template">

  <main>
    <p>Carousel is {{ isInitialized ? 'initialized' : 'not initialized' }}</p>
  
    <TinyCarousel
      ref="tinyCarousel"
      tag="section"
      :plugins="carouselPlugins"
      @after:init="isInitialized = true"
    >
      <article v-for="index in numberOfSlides" :key="index">
        <img
          class="carousel__item-img"
          :src="\`https://picsum.photos/seed/\${index}/800/600\`"
        >
      </article>
    </TinyCarousel>
  
    <nav>
      <button type="button" @click="clickPrev">prev</button>
      <button type="button" @click="clickNext">next</button>
    </nav>
    <div>
      <button type="button" @click="++numberOfSlides">Add slide</button>
      <button type="button" @click="--numberOfSlides">Remove slide</button>
    </div>
  </main>

<\/script>
  `)]),scss:s(()=>[ne]),typescript:s(()=>[e(`
import Vue from 'https://cdn.jsdelivr.net/npm/vue@2/dist/vue.esm.browser.js';
import { pluginAutoplay } from 'https://cdn.skypack.dev/@frsource/tiny-carousel-plugin-autoplay';
import { pluginCustomEvents } from 'https://cdn.skypack.dev/@frsource/tiny-carousel-plugin-custom-events';
import TinyCarousel, { definePlugin, PluginsProp, TinyCarouselComponent } from 'https://cdn.skypack.dev/@frsource/tiny-carousel-vue';

const App = {
  name: 'App',
  template: '#app-template',
  components: {
    TinyCarousel
  },
  data() {
    const carouselPlugins: PluginsProp = [
      definePlugin(pluginAutoplay, {
        autoplayTimeout: 5000,
      }),
      // adds triggering of the custom events
      definePlugin(pluginCustomEvents),
    ];
    return {
      numberOfSlides: 6,
      carouselPlugins,
      isInitialized: false,
    };
  },
  computed: {
    carousel() {
      return (this.$refs.tinyCarousel as TinyCarouselComponent | undefined)?.carousel;
    }
  },
  async updated() {
    // always let the TinyCarousel to be rendered first
    // before accessing carousel instance
    await this.$nextTick()
    this.carousel?.play();
  },
  methods: {
    clickPrev() {
      this.carousel?.prev();
    },
    clickNext() {
      this.carousel?.next();
    }
  }
};

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
});
  `)]),_:1}),e(),se,e(),n("p",null,[e("This plugin adds autoplay feature to the Tiny Carousel. Also, it extends Tiny Carousel instance with "),t(i,{to:"/api-reference/plugin-autoplay/#instance-methods"},{default:s(()=>[e("additional methods")]),_:1}),e(" for event handling.")]),e(),te,e(),oe,e(),ie,n("div",ae,[le,e(),n("p",null,[e("This plugin requires to explicitly install "),t(i,{to:"/guide/#plugin-custom-events"},{default:s(()=>[re]),_:1}),e(" as your project`s dependency. You might need to run additional installation commands before using the "),ue,e(" for the first time:")]),e(),ce]),e(),n("p",null,[e("After installation, you need to add the plugin to your Tiny Carousel instance using "),t(i,{to:"/api-reference/core/#carousel-use"},{default:s(()=>[pe,e(" method")]),_:1}),e(". Provide it with the options object to override the default configuration.")]),e(),n("p",null,[e("For reference and information about the defaults, please see "),t(i,{to:"/api-reference/plugin-autoplay/#pluginconfig"},{default:s(()=>[de,e(" documentation page")]),_:1}),e(" or have a look at the example below:")]),e(),t(o,{title:"Example on how to use Tiny Carousel Autoplay",description:"This example code shows how to use 'carousel.play()' and `carousel.pause()` methods coming from @frsource/tiny-carousel-plugin-autoplay library","default-tab":"js"},{html:s(()=>[e(`
<button class="play" type="button">PLAY</button>
<button class="pause" type="button">PAUSE</button>

<ul>
  <li>
    <img src="https://picsum.photos/seed/1/800/600">
  </li>
  <li>
    <img src="https://picsum.photos/seed/2/800/600">
  </li>
  <li>
    <img src="https://picsum.photos/seed/3/800/600">
  </li>
  <li>
    <img src="https://picsum.photos/seed/4/800/600">
  </li>
</ul>
  `)]),scss:s(()=>[me]),js:s(()=>[e(`
import { TinyCarousel } from 'https://cdn.skypack.dev/@frsource/tiny-carousel-core';
import { pluginAutoplay } from 'https://cdn.skypack.dev/@frsource/tiny-carousel-plugin-autoplay';

const carousel = new TinyCarousel(
  document.querySelector('ul')
)
  .use(pluginAutoplay, {
    autoplayTimeout: 3000,
    // [ms] default value is 4000
    autoplayImmediate: false,
    // whether to change first slide right after the play action or after a timeout, default value: false
    pauseOnHover: true,
    // should the carousel be paused on hover, default value: true
  })
  .init()
  // to autoplay the carousel on page load
  // just uncomment the line below:
  // .play();

document.querySelector('.play')
  .addEventListener('click',
    () => carousel.play()
  );

document.querySelector('.pause')
  .addEventListener('click',
    () => carousel.pause()
  );
  `)]),_:1}),e(),he,e(),n("p",null,[e("This plugin triggers "),n("a",ge,[e("CustomEvents"),t(l)]),e(" for the most important methods of the "),ye,e(". Also, it extends Tiny Carousel instance with additional methods for the event handling.")]),e(),fe,e(),ve,e(),be,n("p",null,[e("Then, add it to your carousel instance using "),t(i,{to:"/api-reference/core/#carousel-use"},{default:s(()=>[_e,e(" method")]),_:1}),e(". That\u2019s it, now you can use methods newly added by the Tiny Carousel Plugin Custom Events, like "),ke,e(" on the example below:")]),e(),t(o,{title:"Example on how to use Tiny Carousel Custom Events",description:"This example code shows how to use 'carousel.on()' method coming from @frsource/tiny-carousel-plugin-custom-events library","default-tab":"js"},{html:s(()=>[e(`
<h3>Tiny Carousel is not loaded yet \u23F3</h3>

<ul>
  <li>
    <img src="https://picsum.photos/seed/1/800/600">
  </li>
  <li>
    <img src="https://picsum.photos/seed/2/800/600">
  </li>
  <li>
    <img src="https://picsum.photos/seed/3/800/600">
  </li>
  <li>
    <img src="https://picsum.photos/seed/4/800/600">
  </li>
</ul>
  `)]),scss:s(()=>[we]),js:s(()=>[e(`
import { TinyCarousel } from 'https://cdn.skypack.dev/@frsource/tiny-carousel-core';
import { pluginCustomEvents } from 'https://cdn.skypack.dev/@frsource/tiny-carousel-plugin-custom-events';

const carousel = new TinyCarousel(
  document.querySelector('ul')
)
  .use(pluginCustomEvents)
/**
 * Let's add custom event handler to
 * show the message 
 * after the carousel is loaded
 **/
  .on('after:init', () => {
    document.querySelector('h3')
      .textContent = 'Carousel has been loaded! \u{1F680}';
  })
/**
 * Here let\`s log carousel items
 * every time findPossibleItems
 * method finishes it\`s job
 **/
  .on('after:find-possible-items', (e) => {
    console.log(e);
  })
  .init();
  `)]),_:1}),e(),Ce,e(),xe,e(),Te,e(),Se,e(),Pe,e(),Ae,n("p",null,[e("After you add it to your carousel instance (using "),t(i,{to:"/api-reference/core/#carousel-use"},{default:s(()=>[je,e(" method")]),_:1}),e(") and "),t(i,{to:"/api-reference/plugin-mouse-drag/#styling"},{default:s(()=>[e("import CSS/Sass styling")]),_:1}),e(" the plugin will start working immediately! From now on, every desktop/mouse user will be able to swipe through the slides by clicking & dragging across the carousel.")]),e(),Ie,e(),t(o,{title:"Example on how to use Tiny Carousel Mouse Drag",description:"This example code shows @frsource/tiny-carousel-plugin-mouse-drag library in action - now mouse users can swipe the carousel","default-tab":"js"},{html:s(()=>[e(`
<h3>The carousel is now swipeable, even on desktop \u{1F590}</h3>

<ul>
  <li>
    <img src="https://picsum.photos/seed/1/800/600">
  </li>
  <li>
    <img src="https://picsum.photos/seed/2/800/600">
  </li>
  <li>
    <img src="https://picsum.photos/seed/3/800/600">
  </li>
  <li>
    <img src="https://picsum.photos/seed/4/800/600">
  </li>
</ul>
  `)]),scss:s(()=>[Ee]),js:s(()=>[e(`
import { TinyCarousel } from 'https://cdn.skypack.dev/@frsource/tiny-carousel-core';
import { pluginMouseDrag } from 'https://cdn.skypack.dev/@frsource/tiny-carousel-plugin-mouse-drag';

const carousel = new TinyCarousel(
  document.querySelector('ul')
)
  .use(
    pluginMouseDrag,
    // you can pass along an configuration object
    // for all options please refer to:
    // https://www.frsource.org/tiny-carousel/api-reference/plugin-mouse-drag/#pluginconfig
    // uncomment the line below to try out
    // swiping with smaller gravity
    // { mouseDragMomentumGravity: 0.5 }
  )
  .init();
  `)]),_:1}),e(),Ve,e(),n("p",null,[e("Even though the browser support of the "),n("a",Re,[e("CSS scroll-snap feature"),t(l)]),e(" is pretty good:")]),e(),t(u,{feature:"css-snappoints"}),e(),n("p",null,[e("You might sometimes find yourself in a situation where you need to support users of the older browsers. "),ze,e(" handles exactly this case! It provides the most simplistic polyfill of "),n("a",Ne,[e("CSS scroll-snap feature"),t(l)]),e(", so you\u2019ve got your users covered!")]),e(),qe,e(),Oe,n("p",null,[e("Then, add it to your carousel instance using "),t(i,{to:"/api-reference/core/#carousel-use"},{default:s(()=>[Le,e(" method")]),_:1}),e(", as shown on the example below:")]),e(),t(o,{title:"Example on how to use Tiny Carousel Scroll Snap Fallback",description:"This example code shows how to use @frsource/tiny-carousel-plugin-scroll-snap-fallback library in your project","default-tab":"js"},{html:s(()=>[e(`
<!-- This example works on IE9 and Chrome 69- -->
<!-- You can navigate through slides using: scroll, arrows (first focus carousel with a click) or (on touch devices) swiping -->

<ul>
  <li>
    <img src="https://picsum.photos/seed/1/800/600">
  </li>
  <li>
    <img src="https://picsum.photos/seed/2/800/600">
  </li>
  <li>
    <img src="https://picsum.photos/seed/3/800/600">
  </li>
  <li>
    <img src="https://picsum.photos/seed/4/800/600">
  </li>
</ul>
  `)]),scss:s(()=>[Ue]),js:s(()=>[e(`
import { TinyCarousel } from 'https://cdn.skypack.dev/@frsource/tiny-carousel-core';
import { pluginScrollSnapFallback } from 'https://cdn.skypack.dev/@frsource/tiny-carousel-plugin-scroll-snap-fallback';

const carousel = new TinyCarousel(
  document.querySelector('ul')
)
  .use(
    pluginScrollSnapFallback,
    // you can pass along an configuration object
    // for all options please refer to:
    // https://www.frsource.org/tiny-carousel/api-reference/plugin-scroll-snap-fallback/#pluginconfig
    //{ force: true }
  )
  .init();
  `)]),_:1}),e(),n("p",null,[e("That\u2019s it - the polyfill will be automatically added to your carousel instance whenever "),n("a",De,[e("CSS scroll-snap feature"),t(l)]),e(" is not supported!")]),e(),n("p",null,[e("For information about plugin options, please head to "),t(i,{to:"/api-reference/plugin-scroll-snap-fallback/#config"},{default:s(()=>[e("it`s API reference")]),_:1}),e(".")]),e(),Fe,e(),Me])}var Ye=c(m,[["render",$e],["__file","usage.html.vue"]]);export{Ye as default};
