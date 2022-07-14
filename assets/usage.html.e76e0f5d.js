import{_ as u,r,o as d,c as p,e as n,a as t,w as s,b as e,d as a}from"./app.5cca5f63.js";const h={},m=n("h1",{id:"usage",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#usage","aria-hidden":"true"},"#"),e(" Usage")],-1),g=e(),y=n("p",null,[e("On this page you\u2019ll find usage guides about every one of the packages that together make up a "),n("a",{href:"../../ecosystem"},"Tiny Carousel ecosystem"),e(".")],-1),f=e(),_={class:"custom-container tip"},v=n("p",{class:"custom-container-title"},"TIP",-1),b=e(),k=e("Always try to use proper semantic tags/attributes when setting up a carousel to make it accessible. Read more in "),w={href:"https://www.w3.org/WAI/tutorials/carousels/",target:"_blank",rel:"noopener noreferrer"},C=e("W3C tutorial"),x=e("."),T=a(` <h2 id="core" tabindex="-1"><a class="header-anchor" href="#core" aria-hidden="true">#</a> Core</h2> <p>The main package of the Tiny Carousel <a href="../../ecosystem">ecosystem</a> which gives the most basic carousel API. Try it out before using additional plugins - it might be enough in the most basic scenarios.</p> <p>First, you need to install the core library using one of the package managers:</p> <div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># yarn</span>
<span class="token function">yarn</span> <span class="token function">add</span> @frsource/tiny-carousel-core

<span class="token comment"># npm</span>
<span class="token function">npm</span> <span class="token function">install</span> @frsource/tiny-carousel-core
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To use this package you need to import <strong>both the SASS/CSS and Typescript/JavaScript files</strong>.</p> `,10),S={class:"custom-container warning"},P=n("p",{class:"custom-container-title"},"The animations in an example are not working.",-1),A=e(),j=e("By default, the core package disables scroll animations for some users to make the carousel accessible for the broader audience. If somebody (maybe you?) has the "),I=n("code",null,"reduce motion",-1),E=e(" option enabled in the system settings of his/her device the carousel will follow that rule and turn off the animations. To learn more, please "),V={href:"https://web.dev/prefers-reduced-motion/",target:"_blank",rel:"noopener noreferrer"},R=e("read\xA0this\xA0article"),z=e("."),N=e(),q=n("p",null,[e("See the example below which uses "),n("strong",null,"only"),e(" the core package:")],-1),O=e(),L=e(`
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
  `),U=n("div",null,`
@import "https://cdn.skypack.dev/@frsource/tiny-carousel-core/dist/index.css";

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
`,-1),D=e(`
import { TinyCarousel } from 'https://cdn.skypack.dev/@frsource/tiny-carousel-core';

new TinyCarousel(
  document.querySelector('ul')
)
  .init();
  `),F=e(),M=n("div",{class:"custom-container tip"},[n("p",{class:"custom-container-title"},"TIP"),e(),n("p",null,[e("Make sure to not override "),n("code",null,"overflow: scroll"),e(" styling on the carousel element - it`s necessary for library to work well!")])],-1),$=e(),B=n("p",null,"That\u2019s the most basic usage of the core package.",-1),H=e(),W=n("p",null,"Next, we can try out using core JavaScript API to add next/previous buttons with only few lines of code:",-1),Y=e(),J=e(`
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
  `),G=n("div",null,`
@import "https://cdn.skypack.dev/@frsource/tiny-carousel-core/dist/index.css";

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
`,-1),K=e(`
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
  `),Q=a(` <p>In most cases, the same functionality can be obtained using proper Tiny Carousel plugin - we\u2019ve got you covered! But, if you ever find yourself in a situation where you need to do something more custom - know that Tiny Carousel JavaScript API is there and is ready to be used! Read more in the <a href="../../api-reference/core">API docs for core package</a>.</p> <h2 id="react" tabindex="-1"><a class="header-anchor" href="#react" aria-hidden="true">#</a> React</h2> <p>This package integrates Tiny Carousel into React. More detailed info about the API can be found <a href="../../api-reference/integration-react">here</a>.</p> <p>To start, you need to install the integration:</p> <div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># yarn</span>
<span class="token function">yarn</span> <span class="token function">add</span> @frsource/tiny-carousel-react

<span class="token comment"># npm</span>
<span class="token function">npm</span> <span class="token function">install</span> @frsource/tiny-carousel-react
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now let\u2019s see how to add the TinyCarousel to your React application.</p> `,12),X=e(`
<p>Use arrows or scroll (or swipes on a mobile device) to change slides</p>

<div id="root"></div>
  `),Z=n("div",null,`
@import "https://cdn.skypack.dev/@frsource/tiny-carousel-core/dist/index.css";

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
`,-1),ee=e(`
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
  `),ne=e(),se=e("TinyCarousel React component give you possibility to configure carousel, import TinyCarousel plugins, customize tag name and use listen for custom events. To know more about the event handling read "),te=e("React TinyCarousel API reference"),oe=e(" or have a look at the advanced example below:"),ie=e(),ae=e(`
<p>Use arrows or scroll (or swipes on a mobile device) to change slides</p>

<div id="root"></div>
  `),le=n("div",null,`
@import "https://cdn.skypack.dev/@frsource/tiny-carousel-core/dist/index.css";

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
`,-1),re=e(`
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
  `),ce=a(` <h2 id="vue" tabindex="-1"><a class="header-anchor" href="#vue" aria-hidden="true">#</a> Vue</h2> <p>This package integrates Tiny Carousel into Vue. More detailed info about the API can be found <a href="../../api-reference/integration-vue">here</a>.</p> <p>To start, you need to install the integration:</p> <div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># yarn</span>
<span class="token function">yarn</span> <span class="token function">add</span> @frsource/tiny-carousel-vue

<span class="token comment"># npm</span>
<span class="token function">npm</span> <span class="token function">install</span> @frsource/tiny-carousel-vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now let\u2019s see how to add the TinyCarousel to your Vue 3 application.</p> <div class="custom-container tip"><p class="custom-container-title">TIP</p> <p>Still developing Vue 2 application? Don\u2019t worry! <a href="#vue-2">Click here to see the Vue 2 example</a>.</p></div> <h3 id="vue-3" tabindex="-1"><a class="header-anchor" href="#vue-3" aria-hidden="true">#</a> Vue 3</h3> <p>First, the most basic example of how to add Tiny Carousel to your Vue 3 application:</p> `,16),ue=e(`
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
  `),de=n("div",null,`
@import "https://cdn.skypack.dev/@frsource/tiny-carousel-core/dist/index.css";

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
`,-1),pe=e(`
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
  `),he=e(),me=n("p",null,"That\u2019s the most basic usage, but Vue integration allows you to do much more than that!",-1),ge=e(),ye=n("p",null,"TinyCarousel component allows you to use any of the Tiny Carousel plugins, access carousel instance directly or change the carousel root element`s tag name to something custom. Let\u2019s try it out in the next example:",-1),fe=e(),_e=e(`
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
  `),ve=n("div",null,`
@import "https://cdn.skypack.dev/@frsource/tiny-carousel-core/dist/index.css";

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
`,-1),be=e(`
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
  `),ke=e(),we=n("h3",{id:"vue-2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vue-2","aria-hidden":"true"},"#"),e(" Vue 2")],-1),Ce=e(),xe=n("p",null,"Next, follow the basic example of how to add Tiny Carousel to your Vue 2 application:",-1),Te=e(),Se=e(`
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
  `),Pe=n("div",null,`
@import "https://cdn.skypack.dev/@frsource/tiny-carousel-core/dist/index.css";

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
`,-1),Ae=e(`
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
  `),je=e(),Ie=n("p",null,"In the more advanced usage example let\u2019s see how you can use any of the Tiny Carousel plugins, access carousel instance directly or change the carousel root element`s tag name to something custom:",-1),Ee=e(),Ve=e(`
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
  `),Re=n("div",null,`
@import "https://cdn.skypack.dev/@frsource/tiny-carousel-core/dist/index.css";
`,-1),ze=e(`
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
  `),Ne=e(),qe=n("h2",{id:"plugin-autoplay",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#plugin-autoplay","aria-hidden":"true"},"#"),e(" Plugin Autoplay")],-1),Oe=e(),Le=e("This plugin adds autoplay feature to the Tiny Carousel. Also, it extends Tiny Carousel instance with "),Ue=e("additional methods"),De=e(" for event handling."),Fe=a(` <p>More detailed info about the plugin\u2019s API can be found <a href="../../api-reference/plugin-autoplay">here</a>.</p> <p>To install the plugin use one of the commands below:</p> <div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># yarn</span>
<span class="token function">yarn</span> <span class="token function">add</span> @frsource/tiny-carousel-plugin-autoplay

<span class="token comment"># npm</span>
<span class="token function">npm</span> <span class="token function">install</span> @frsource/tiny-carousel-plugin-autoplay
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),Me={class:"custom-container tip"},$e=n("p",{class:"custom-container-title"},"Prerequisites",-1),Be=e(),He=e("This plugin requires to explicitly install "),We=n("code",null,"@frsource/tiny-carousel-plugin-custom-events",-1),Ye=e(" as your project`s dependency. You might need to run additional installation commands before using the "),Je=n("code",null,"Plugin Autoplay",-1),Ge=e(" for the first time:"),Ke=a(` <div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># yarn</span>
<span class="token function">yarn</span> <span class="token function">add</span> @frsource/tiny-carousel-plugin-custom-events

<span class="token comment"># npm</span>
<span class="token function">npm</span> <span class="token function">install</span> @frsource/tiny-carousel-plugin-custom-events
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Qe=e(),Xe=e("After installation, you need to add the plugin to your Tiny Carousel instance using "),Ze=n("code",null,"carousel.use",-1),en=e(" method"),nn=e(". Provide it with the options object to override the default configuration."),sn=e(),tn=e("For reference and information about the defaults, please see "),on=n("code",null,"PluginConfig",-1),an=e(" documentation page"),ln=e(" or have a look at the example below:"),rn=e(),cn=e(`
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
  `),un=n("div",null,`
@import "https://cdn.skypack.dev/@frsource/tiny-carousel-core/dist/index.css";

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
`,-1),dn=e(`
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
  `),pn=e(),hn=n("h2",{id:"plugin-custom-events",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#plugin-custom-events","aria-hidden":"true"},"#"),e(" Plugin Custom Events")],-1),mn=e(),gn=e("This plugin triggers "),yn={href:"https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent",target:"_blank",rel:"noopener noreferrer"},fn=e("CustomEvents"),_n=e(" for the most important methods of the "),vn=n("a",{href:"../../api-reference/core"},"Core Tiny Carousel API",-1),bn=e(". Also, it extends Tiny Carousel instance with additional methods for the event handling."),kn=a(` <p>API Reference and the list of all events raised by this plugin you will find <a href="../../api-reference/plugin-custom-events">here</a>.</p> <p>Let\u2019s try to use it - first you need to install the plugin using one of a package managers:</p> <div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># yarn</span>
<span class="token function">yarn</span> <span class="token function">add</span> @frsource/tiny-carousel-plugin-custom-events

<span class="token comment"># npm</span>
<span class="token function">npm</span> <span class="token function">install</span> @frsource/tiny-carousel-plugin-custom-events
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),wn=e("Then, add it to your carousel instance using "),Cn=n("code",null,"carousel.use",-1),xn=e(" method"),Tn=e(". That\u2019s it, now you can use methods newly added by the Tiny Carousel Plugin Custom Events, like "),Sn=n("code",null,"carousel.on()",-1),Pn=e(" on the example below:"),An=e(),jn=e(`
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
  `),In=n("div",null,`
@import "https://cdn.skypack.dev/@frsource/tiny-carousel-core/dist/index.css";

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
`,-1),En=e(`
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
  `),Vn=a(` <h2 id="plugin-mouse-drag" tabindex="-1"><a class="header-anchor" href="#plugin-mouse-drag" aria-hidden="true">#</a> Plugin Mouse Drag</h2> <p>This plugin adds drag/swipe support for mouse users (especially on desktop).</p> <p>API Reference and the list of all events raised by this plugin you will find <a href="../../api-reference/plugin-mouse-drag">here</a>.</p> <p>To use this package you need to import <strong>both the SASS/CSS and Typescript/JavaScript files</strong>.</p> <p>Let\u2019s try to use it - first you need to install the plugin using one of a package managers:</p> <div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># yarn</span>
<span class="token function">yarn</span> <span class="token function">add</span> @frsource/tiny-carousel-plugin-mouse-drag

<span class="token comment"># npm</span>
<span class="token function">npm</span> <span class="token function">install</span> @frsource/tiny-carousel-plugin-mouse-drag
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),Rn=e("After you add it to your carousel instance (using "),zn=n("code",null,"carousel.use",-1),Nn=e(" method"),qn=e(") and "),On=e("import CSS/Sass styling"),Ln=e(" the plugin will start working immediately! From now on, every desktop/mouse user will be able to swipe through the slides by clicking & dragging across the carousel."),Un=e(),Dn=n("p",null,"See the example below on the device with mouse connected to see the plugin in action:",-1),Fn=e(),Mn=e(`
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
  `),$n=n("div",null,`
@import "https://cdn.skypack.dev/@frsource/tiny-carousel-core/dist/index.css";
@import "https://cdn.skypack.dev/@frsource/tiny-carousel-plugin-mouse-drag/dist/index.css";

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
`,-1),Bn=e(`
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
  `),Hn=e(),Wn=n("h2",{id:"plugin-scroll-snap-fallback",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#plugin-scroll-snap-fallback","aria-hidden":"true"},"#"),e(" Plugin Scroll Snap Fallback")],-1),Yn=e(),Jn=e("Even though the browser support of the "),Gn={href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scroll_Snap",target:"_blank",rel:"noopener noreferrer"},Kn=e("CSS scroll-snap feature"),Qn=e(" is pretty good:"),Xn=e(),Zn=e(),es=e("You might sometimes find yourself in a situation where you need to support users of the older browsers. "),ns=n("strong",null,"Scroll\xA0Snap\xA0Fallback\xA0Plugin",-1),ss=e(" handles exactly this case! It provides the most simplistic polyfill of "),ts={href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scroll_Snap",target:"_blank",rel:"noopener noreferrer"},os=e("CSS scroll-snap feature"),is=e(", so you\u2019ve got your users covered!"),as=a(` <p>First install it via your favorite package manager:</p> <div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># yarn</span>
<span class="token function">yarn</span> <span class="token function">add</span> @frsource/tiny-carousel-plugin-scroll-snap-fallback

<span class="token comment"># npm</span>
<span class="token function">npm</span> <span class="token function">install</span> @frsource/tiny-carousel-plugin-scroll-snap-fallback
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),ls=e("Then, add it to your carousel instance using "),rs=n("code",null,"carousel.use",-1),cs=e(" method"),us=e(", as shown on the example below:"),ds=e(),ps=e(`
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
  `),hs=n("div",null,`
@import "https://cdn.skypack.dev/@frsource/tiny-carousel-core/dist/index.css";

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
`,-1),ms=e(`
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
  `),gs=e(),ys=e("That\u2019s it - the polyfill will be automatically added to your carousel instance whenever "),fs={href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scroll_Snap",target:"_blank",rel:"noopener noreferrer"},_s=e("CSS scroll-snap feature"),vs=e(" is not supported!"),bs=e(),ks=e("For information about plugin options, please head to "),ws=e("it`s API reference"),Cs=e("."),xs=e(),Ts=n("div",{class:"custom-container tip"},[n("p",{class:"custom-container-title"},"Help us improve the documentation"),e(),n("p",null,"Hey, it seems you\u2019ve made it to the very bottom of our usage guide! Thank you for taking such interest in our library - we hope it will make your journey easier! \u2708\uFE0F"),e(),n("p",null,'However, if you feel that something could be described better or if you saw any typo/error please feel free to use the "Help us improve this page on GitHub" button placed on the very bottom of this page. Don\u2019t hesitate to write a suggestion in the "issues" tab or file a PR with a fix!'),e(),n("p",null,"Thank you! Any help is kindly appreciated \u{1F64F}")],-1),Ss=e(),Ps=n("p",null,[e("For further information about the possible configuration options and useful methods, please have a look at our "),n("a",{href:"../../api-reference"},"API reference"),e(".")],-1);function As(js,Is){const l=r("ExternalLinkIcon"),o=r("ExampleSection"),i=r("RouterLink"),c=r("CanIUseSection");return d(),p("div",null,[m,g,y,f,n("div",_,[v,b,n("p",null,[k,n("a",w,[C,t(l)]),x])]),T,n("div",S,[P,A,n("p",null,[j,I,E,n("a",V,[R,t(l)]),z])]),N,q,O,t(o,{title:"Basic Tiny Carousel Core example",description:"The most simplistic usage example of @frsource/tiny-carousel-core package","default-tab":"html"},{html:s(()=>[L]),scss:s(()=>[U]),js:s(()=>[D]),_:1}),F,M,$,B,H,W,Y,t(o,{title:"Advanced Tiny Carousel Core example",description:"A bit more advanced usage example of @frsource/tiny-carousel-core library","default-tab":"js"},{html:s(()=>[J]),scss:s(()=>[G]),js:s(()=>[K]),_:1}),Q,t(o,{title:"Example on how to use Tiny Carousel React integration with React",description:"This example code shows how to use Tiny Carousel integration for React - @frsource/tiny-carousel-react","default-tab":"js",scripts:["https://unpkg.com/react/umd/react.production.min.js","https://unpkg.com/react-dom/umd/react-dom.production.min.js","https://unpkg.com/@frsource/tiny-carousel-utils/dist/index.umd.js","https://unpkg.com/@frsource/tiny-carousel-core/dist/index.umd.js","https://unpkg.com/@frsource/tiny-carousel-react/dist/index.umd.js"],tags:["react","hooks"]},{html:s(()=>[X]),scss:s(()=>[Z]),typescript:s(()=>[ee]),_:1},8,["scripts"]),ne,n("p",null,[se,t(i,{to:"/api-reference/integration-react/#tinycarousel"},{default:s(()=>[te]),_:1}),oe]),ie,t(o,{title:"Example of advanced usage of the Tiny Carousel React integration",description:"This example shows how to access carousel API, add plugins to your Tiny Carousel instance and change carousel element tag name to something custom - like 'section' when using React integration - @frsource/tiny-carousel-react","default-tab":"js",height:"450px",scripts:["https://unpkg.com/react/umd/react.production.min.js","https://unpkg.com/react-dom/umd/react-dom.production.min.js","https://unpkg.com/@frsource/tiny-carousel-utils/dist/index.umd.js","https://unpkg.com/@frsource/tiny-carousel-core/dist/index.umd.js","https://unpkg.com/@frsource/tiny-carousel-react/dist/index.umd.js","https://unpkg.com/@frsource/tiny-carousel-plugin-autoplay/dist/index.umd.js","https://unpkg.com/@frsource/tiny-carousel-plugin-custom-events/dist/index.umd.js"],tags:["react","hooks"]},{html:s(()=>[ae]),scss:s(()=>[le]),typescript:s(()=>[re]),_:1},8,["scripts"]),ce,t(o,{title:"Example on how to use Tiny Carousel Vue integration with Vue 3",description:"This example code shows how to use Tiny Carousel integration for Vue 3 - @frsource/tiny-carousel-vue","default-tab":"js",scripts:["https://cdn.jsdelivr.net/npm/vue@next/dist/vue.global.js","https://unpkg.com/@frsource/tiny-carousel-utils/dist/index.umd.js","https://unpkg.com/@frsource/tiny-carousel-core/dist/index.umd.js","https://unpkg.com/@frsource/tiny-carousel-vue/dist/index.umd.js"],tags:["vue","vue3"]},{html:s(()=>[ue]),scss:s(()=>[de]),typescript:s(()=>[pe]),_:1},8,["scripts"]),he,me,ge,ye,fe,t(o,{title:"Example of advanced usage of the Tiny Carousel Vue integration with Vue 3",description:"This example shows how to access carousel API, add plugins to your Tiny Carousel instance and change carousel element to something custom - like 'section'","default-tab":"js",height:"450px",tags:["vue","vue3","composition-api"],scripts:["https://cdn.jsdelivr.net/npm/vue@next/dist/vue.global.js","https://unpkg.com/@frsource/tiny-carousel-utils/dist/index.umd.js","https://unpkg.com/@frsource/tiny-carousel-core/dist/index.umd.js","https://unpkg.com/@frsource/tiny-carousel-vue/dist/index.umd.js","https://unpkg.com/@frsource/tiny-carousel-plugin-autoplay/dist/index.umd.js","https://unpkg.com/@frsource/tiny-carousel-plugin-custom-events/dist/index.umd.js"]},{html:s(()=>[_e]),scss:s(()=>[ve]),typescript:s(()=>[be]),_:1},8,["scripts"]),ke,we,Ce,xe,Te,t(o,{title:"Example on how to use Tiny Carousel Vue integration with Vue 2",description:"This example code shows how to use Tiny Carousel integration for Vue 2 - @frsource/tiny-carousel-vue","default-tab":"js",tags:["vue","vue2"]},{html:s(()=>[Se]),scss:s(()=>[Pe]),typescript:s(()=>[Ae]),_:1}),je,Ie,Ee,t(o,{title:"Example of advanced usage of the Tiny Carousel Vue integration with Vue 2",description:"This example shows how to access carousel API, add plugins to your Tiny Carousel instance and change carousel element to something custom - like 'section'","default-tab":"js",height:"450px",tags:["vue","vue2"]},{html:s(()=>[Ve]),scss:s(()=>[Re]),typescript:s(()=>[ze]),_:1}),Ne,qe,Oe,n("p",null,[Le,t(i,{to:"/api-reference/plugin-autoplay/#instance-methods"},{default:s(()=>[Ue]),_:1}),De]),Fe,n("div",Me,[$e,Be,n("p",null,[He,t(i,{to:"/guide/#plugin-custom-events"},{default:s(()=>[We]),_:1}),Ye,Je,Ge]),Ke]),Qe,n("p",null,[Xe,t(i,{to:"/api-reference/core/#carousel-use"},{default:s(()=>[Ze,en]),_:1}),nn]),sn,n("p",null,[tn,t(i,{to:"/api-reference/plugin-autoplay/#pluginconfig"},{default:s(()=>[on,an]),_:1}),ln]),rn,t(o,{title:"Example on how to use Tiny Carousel Autoplay",description:"This example code shows how to use 'carousel.play()' and `carousel.pause()` methods coming from @frsource/tiny-carousel-plugin-autoplay library","default-tab":"js"},{html:s(()=>[cn]),scss:s(()=>[un]),js:s(()=>[dn]),_:1}),pn,hn,mn,n("p",null,[gn,n("a",yn,[fn,t(l)]),_n,vn,bn]),kn,n("p",null,[wn,t(i,{to:"/api-reference/core/#carousel-use"},{default:s(()=>[Cn,xn]),_:1}),Tn,Sn,Pn]),An,t(o,{title:"Example on how to use Tiny Carousel Custom Events",description:"This example code shows how to use 'carousel.on()' method coming from @frsource/tiny-carousel-plugin-custom-events library","default-tab":"js"},{html:s(()=>[jn]),scss:s(()=>[In]),js:s(()=>[En]),_:1}),Vn,n("p",null,[Rn,t(i,{to:"/api-reference/core/#carousel-use"},{default:s(()=>[zn,Nn]),_:1}),qn,t(i,{to:"/api-reference/plugin-mouse-drag/#styling"},{default:s(()=>[On]),_:1}),Ln]),Un,Dn,Fn,t(o,{title:"Example on how to use Tiny Carousel Mouse Drag",description:"This example code shows @frsource/tiny-carousel-plugin-mouse-drag library in action - now mouse users can swipe the carousel","default-tab":"js"},{html:s(()=>[Mn]),scss:s(()=>[$n]),js:s(()=>[Bn]),_:1}),Hn,Wn,Yn,n("p",null,[Jn,n("a",Gn,[Kn,t(l)]),Qn]),Xn,t(c,{feature:"css-snappoints"}),Zn,n("p",null,[es,ns,ss,n("a",ts,[os,t(l)]),is]),as,n("p",null,[ls,t(i,{to:"/api-reference/core/#carousel-use"},{default:s(()=>[rs,cs]),_:1}),us]),ds,t(o,{title:"Example on how to use Tiny Carousel Scroll Snap Fallback",description:"This example code shows how to use @frsource/tiny-carousel-plugin-scroll-snap-fallback library in your project","default-tab":"js"},{html:s(()=>[ps]),scss:s(()=>[hs]),js:s(()=>[ms]),_:1}),gs,n("p",null,[ys,n("a",fs,[_s,t(l)]),vs]),bs,n("p",null,[ks,t(i,{to:"/api-reference/plugin-scroll-snap-fallback/#config"},{default:s(()=>[ws]),_:1}),Cs]),xs,Ts,Ss,Ps])}var Vs=u(h,[["render",As],["__file","usage.html.vue"]]);export{Vs as default};
