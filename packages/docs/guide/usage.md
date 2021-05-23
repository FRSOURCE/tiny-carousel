# Usage

On this page you’ll find usage guides about every one of the packages that together make up a [Tiny Carousel ecosystem](../../ecosystem).

:::tip
Always try to use proper semantic tags/attributes when setting up a carousel to make it accessible. Read more in [W3C tutorial](https://www.w3.org/WAI/tutorials/carousels/). 
:::

## Core

The main package of the Tiny Carousel [ecosystem](../../ecosystem) which gives the most basic carousel API. Try it out before using additional plugins - it might be enough in the most basic scenarios.

First, you need to install the core library using one of the package managers:

```bash
# yarn
yarn add @frsource/tiny-carousel-core

# npm
npm install @frsource/tiny-carousel-core
```

To use this package you need to import **both the SASS/CSS and Typescript/JavaScript files**.

::: warning The animations in an example are not working.
By default, the core package disables scroll animations for some users to make the carousel accessible for the broader audience. If somebody (maybe you?) have the `reduce motion` option enabled in the system settings of his/her device - the carousel will follow that rule and turn off the animations. To learn more, please read [this article](https://web.dev/prefers-reduced-motion/).
:::

See the example below which uses **only** the core package:

<!-- textlint-disable -->
<ExampleSection
    title="Basic Tiny Carousel Core example"
    description="The most simplistic usage example of @frsource/tiny-carousel-core package"
    default-tab="js"
>
  <template slot="html">
&lt;!-- You can navigate through slides using: scroll, arrows (first focus carousel with a click) or (on touch devices) swiping -->
&lt;ul&gt;
  &lt;li&gt;
    &lt;img src="https://picsum.photos/seed/1/800/600"&gt;
  &lt;/li&gt;
  &lt;li&gt;
    &lt;img src="https://picsum.photos/seed/2/800/600"&gt;
  &lt;/li&gt;
  &lt;li&gt;
    &lt;img src="https://picsum.photos/seed/3/800/600"&gt;
  &lt;/li&gt;
  &lt;li&gt;
    &lt;img src="https://picsum.photos/seed/4/800/600"&gt;
  &lt;/li&gt;
  &lt;li&gt;
    &lt;img src="https://picsum.photos/seed/5/800/600"&gt;
  &lt;/li&gt;
  &lt;li&gt;
    &lt;img src="https://picsum.photos/seed/6/800/600"&gt;
  &lt;/li&gt;
&lt;/ul&gt;
  </template>
  <template slot="scss">
<div>
@import "https://cdn.skypack.dev/@frsource/tiny-carousel-core/dist/index.css";
<!-- -->
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</div>
  </template>
  <template slot="js">
import { TinyCarousel } from 'https://cdn.skypack.dev/@frsource/tiny-carousel-core';
<!-- -->
new TinyCarousel(
  document.querySelector('ul')
)
  .init();
  </template>
</ExampleSection>
<!-- textlint-enable -->

That’s the most basic usage of the core package.

Next, we can try out using core JavaScript API to add next/previous buttons with only few lines of code:

<!-- textlint-disable -->
<ExampleSection
    title="Advanced Tiny Carousel Core example"
    description="A bit more advanced usage example of @frsource/tiny-carousel-core library"
    default-tab="js"
>
  <template slot="html">
&lt;nav&gt;
  &lt;button type="button" class="first"&gt;&amp;lt;&amp;lt;&lt;/button&gt;
  &lt;button type="button" class="prev"&gt;&amp;lt;&lt;/button&gt;
  &lt;button type="button" class="next"&gt;&amp;gt;&lt;/button&gt;
  &lt;button type="button" class="last"&gt;&amp;gt;&amp;gt;&lt;/button&gt;
&lt;/nav&gt;
<!-- -->
&lt;ul&gt;
  &lt;li&gt;
    &lt;img src="https://picsum.photos/seed/1/800/600"&gt;
  &lt;/li&gt;
  &lt;li&gt;
    &lt;img src="https://picsum.photos/seed/2/800/600"&gt;
  &lt;/li&gt;
  &lt;li&gt;
    &lt;img src="https://picsum.photos/seed/3/800/600"&gt;
  &lt;/li&gt;
  &lt;li&gt;
    &lt;img src="https://picsum.photos/seed/4/800/600"&gt;
  &lt;/li&gt;
  &lt;li&gt;
    &lt;img src="https://picsum.photos/seed/5/800/600"&gt;
  &lt;/li&gt;
  &lt;li&gt;
    &lt;img src="https://picsum.photos/seed/6/800/600"&gt;
  &lt;/li&gt;
&lt;/ul&gt;
  </template>
  <template slot="scss">
<div>
@import "https://cdn.skypack.dev/@frsource/tiny-carousel-core/dist/index.css";
<!-- -->
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</div>
  </template>
  <template slot="js">
import { TinyCarousel } from 'https://cdn.skypack.dev/@frsource/tiny-carousel-core';
<!-- -->
const carousel = new TinyCarousel(
  document.querySelector('ul')
)
  .init();
<!-- -->
// using .goTo method to go to the slide with an exact index number
document.querySelector('.first')
  .addEventListener(
    'click',
    () => carousel.goTo(0)
  );
<!-- -->
// using .prev method
document.querySelector('.prev')
  .addEventListener(
    'click',
    () => carousel.prev()
  );
<!-- -->
// using .next method
document.querySelector('.next')
  .addEventListener(
    'click', 
    () => carousel.next()
  );
<!-- -->
// passing negative number as an argument to the .goTo method will make it count slides from the end (-1 being the last slide)
document.querySelector('.last')
  .addEventListener(
    'click', 
    () => carousel.goTo(-1)
  );
  </template>
</ExampleSection>
<!-- textlint-enable -->

In most cases, the same functionality can be obtained using proper Tiny Carousel plugin - we’ve got you covered! But, if you ever find yourself in a situation where you need to do something more custom - know that Tiny Carousel JavaScript API is there and is ready to be used! Read more in the [API docs for core package](../../api-reference/core).

## React

This package integrates Tiny Carousel into React. More detailed info about the API can be found [here](../../api-reference/integration-react).

To start, you need to install the integration:

```bash
# yarn
yarn add @frsource/tiny-carousel-react

# npm
npm install @frsource/tiny-carousel-react
```

Now let’s see how to add the TinyCarousel to your React application.

<!-- textlint-disable -->
<ExampleSection
    title="Example on how to use Tiny Carousel React integration with React"
    description="This example code shows how to use Tiny Carousel integration for React - @frsource/tiny-carousel-react"
    default-tab="js"
    :scripts="['https://unpkg.com/react/umd/react.production.min.js','https://unpkg.com/react-dom/umd/react-dom.production.min.js','https://unpkg.com/@frsource/tiny-carousel-utils/dist/index.umd.js','https://unpkg.com/@frsource/tiny-carousel-core/dist/index.umd.js','https://unpkg.com/@frsource/tiny-carousel-react/dist/index.umd.js']"
    :tags="['react','hooks']"
>
  <template slot="html">
&lt;p&gt;Use arrows or scroll (or swipes on a mobile device) to change slides&lt;/p&gt;
<!-- -->
&lt;div id="root"&gt;&lt;/div&gt;
  </template>
  <template slot="scss">
<div>
@import "https://cdn.skypack.dev/@frsource/tiny-carousel-core/dist/index.css";
<!-- -->
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</div>
  </template>
  <template slot="typescript">
// needed because of UMD build
// it's an equivalent of
// import TinyCarousel from "@frsource/tiny-carousel-react";
const TinyCarousel = window.tinyCarouselReact.default;
<!-- -->
function App() {
  const [number, setNumber] = React.useState(6);
<!-- -->
  return (
    &lt;TinyCarousel&gt;
      {new Array(number).fill(1).map(
          (_, index) =>
      &lt;li key={index}&gt;
          &lt;img
            className="carousel__item-img"
            alt={`Demo ${index}`}
            src={`https://picsum.photos/seed/${index + 1}/800/600`}
          /&gt;
          &lt;/li&gt;
        )
      }
    &lt;/TinyCarousel&gt;
  );
}
<!-- -->
ReactDOM.render(
  &lt;App /&gt;,
  document.getElementById('root')
);
  </template>
</ExampleSection>
<!-- textlint-enable -->

TinyCarousel React component give you possibility to configure carousel, import TinyCarousel plugins, customize tag name and use listen for custom events. To know more about the event handling read [React TinyCarousel API reference](../api-reference/integration-react/#tinycarousel) or have a look at the advanced example below:

<!-- textlint-disable -->
<ExampleSection
    title="Example of advanced usage of the Tiny Carousel React integration"
    description="This example shows how to access carousel API, add plugins to your Tiny Carousel instance and change carousel element tag name to something custom - like 'section' when using React integration - @frsource/tiny-carousel-react"
    default-tab="js"
    height="450px"
    :scripts="['https://unpkg.com/react/umd/react.production.min.js','https://unpkg.com/react-dom/umd/react-dom.production.min.js','https://unpkg.com/@frsource/tiny-carousel-utils/dist/index.umd.js','https://unpkg.com/@frsource/tiny-carousel-core/dist/index.umd.js','https://unpkg.com/@frsource/tiny-carousel-react/dist/index.umd.js','https://unpkg.com/@frsource/tiny-carousel-plugin-autoplay/dist/index.umd.js','https://unpkg.com/@frsource/tiny-carousel-plugin-custom-events/dist/index.umd.js']"
    :tags="['react','hooks']"
>
  <template slot="html">
&lt;p&gt;Use arrows or scroll (or swipes on a mobile device) to change slides&lt;/p&gt;
<!-- -->
&lt;div id="root"&gt;&lt;/div&gt;
  </template>
  <template slot="scss">
<div>
@import "https://cdn.skypack.dev/@frsource/tiny-carousel-core/dist/index.css";
<!-- -->
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</div>
  </template>
  <template slot="typescript">
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
<!-- -->
const carouselPlugins: PluginsProp = [
  definePlugin(pluginAutoplay, {
    autoplayTimeout: 4000,
  }),
  definePlugin(pluginCustomEvents),
];
<!-- -->
function App() {
  const [number, setNumber] = React.useState(6);
  const [isInitialized, setIsInitialized] = React.useState(false);
  const tinyCarousel = React.useRef&lt;TinyCarouselRef&gt;(null);
  const onCarouselInit: TinyCarouselProps['onAfterEventInit'] = e => {
    setIsInitialized(true);
    e.detail.tinyCarousel.play();
  };
  const clickPrev = () => tinyCarousel.current?.prev();
  const clickNext = () => tinyCarousel.current?.next();
<!-- -->
  return (
  &lt;main&gt;
    &lt;p className="carousel-status"&gt;Carousel is { isInitialized ? 'initialized' : 'not initialized' }&lt;/p&gt;
<!-- -->
    &lt;TinyCarousel
      className="carousel"
      tag="section"
      plugins={carouselPlugins}
      onAfterEventInit={onCarouselInit}
      ref={tinyCarousel}
    &gt;
      {new Array(number).fill(1).map(
          (_, index) =>
      &lt;article key={index}&gt;
          &lt;img
            className="carousel__item-img"
            alt={`Demo ${index}`}
            src={`https://picsum.photos/seed/${index + 1}/800/600`}
          /&gt;
          &lt;/article&gt;
        )
      }
    &lt;/TinyCarousel&gt;
<!-- -->
    &lt;nav className="row"&gt;
      &lt;button type="button" onClick={clickPrev}&gt;prev&lt;/button&gt;
      &lt;button type="button" onClick={clickNext}&gt;next&lt;/button&gt;
      &lt;button type="button" onClick={() => setNumber(number + 1)}&gt;Add slide&lt;/button&gt;
      &lt;button type="button" onClick={() => setNumber(number - 1)}&gt;Remove slide&lt;/button&gt;
    &lt;/nav&gt;
  &lt;/main&gt;
  );
}
<!-- -->
ReactDOM.render(
  &lt;App /&gt;,
  document.getElementById('root')
);
  </template>
</ExampleSection>
<!-- textlint-enable -->

## Vue

This package integrates Tiny Carousel into Vue. More detailed info about the API can be found [here](../../api-reference/integration-vue).

To start, you need to install the integration:

```bash
# yarn
yarn add @frsource/tiny-carousel-vue

# npm
npm install @frsource/tiny-carousel-vue
```

Now let’s see how to add the TinyCarousel to your Vue 3 application.

:::tip
Still developing Vue 2 application? Don’t worry! [Click here to see the Vue 2 example](#vue-2).
:::

### Vue 3

First, the most basic example of how to add Tiny Carousel to your Vue 3 application:

<!-- textlint-disable -->
<ExampleSection
    title="Example on how to use Tiny Carousel Vue integration with Vue 3"
    description="This example code shows how to use Tiny Carousel integration for Vue 3 - @frsource/tiny-carousel-vue"
    default-tab="js"
    :scripts="['https://cdn.jsdelivr.net/npm/vue@next/dist/vue.global.js','https://unpkg.com/@frsource/tiny-carousel-utils/dist/index.umd.js','https://unpkg.com/@frsource/tiny-carousel-core/dist/index.umd.js','https://unpkg.com/@frsource/tiny-carousel-vue/dist/index.umd.js']"
    :tags="['vue','vue3']"
>
  <template slot="html">
&lt;p&gt;Use arrows or scroll (or swipes on a mobile device) to change slides&lt;/p&gt;
<!-- -->
&lt;div id="app"&gt;&lt;/div&gt;
<!-- -->
&lt;script type="text/x-template" id="app-template"&gt;
<!-- -->
  &lt;TinyCarousel&gt;
    &lt;li v-for="index in numberOfSlides" :key="index"&gt;
      &lt;img
        class="carousel__item-img"
        :src="`https://picsum.photos/seed/${index}/800/600`"
      &gt;
    &lt;/li&gt;
  &lt;/TinyCarousel&gt;
<!-- -->
&lt;/script&gt;
  </template>
  <template slot="scss">
<div>
@import "https://cdn.skypack.dev/@frsource/tiny-carousel-core/dist/index.css";
<!-- -->
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</div>
  </template>
  <template slot="typescript">
// needed because of skypack/codepen limitations
// in regular codebase use 
// import * as Vue from "vue";
// import TinyCarousel from "@frsource/tiny-carousel-vue";
// instead of the two lines below:
const { createApp, ref, watch, computed } = window.Vue;
const TinyCarousel = window.tinyCarouselVue.default;
<!-- -->
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
<!-- -->
createApp(App)
  .mount('#app');
  </template>
</ExampleSection>
<!-- textlint-enable -->

That’s the most basic usage, but Vue integration allows you to do much more than that!

TinyCarousel component allows you to use any of the Tiny Carousel plugins, access carousel instance directly or change the carousel root element`s tag name to something custom. Let’s try it out in the next example:


<!-- textlint-disable -->
<ExampleSection
    title="Example of advanced usage of the Tiny Carousel Vue integration with Vue 3"
    description="This example shows how to access carousel API, add plugins to your Tiny Carousel instance and change carousel element to something custom - like 'section'"
    default-tab="js"
    height="450px"
    :tags="['vue','vue3','composition-api']"
    :scripts="['https://cdn.jsdelivr.net/npm/vue@next/dist/vue.global.js','https://unpkg.com/@frsource/tiny-carousel-utils/dist/index.umd.js','https://unpkg.com/@frsource/tiny-carousel-core/dist/index.umd.js','https://unpkg.com/@frsource/tiny-carousel-vue/dist/index.umd.js','https://unpkg.com/@frsource/tiny-carousel-plugin-autoplay/dist/index.umd.js','https://unpkg.com/@frsource/tiny-carousel-plugin-custom-events/dist/index.umd.js']"
>
  <template slot="html">
&lt;div id="app"&gt;&lt;/div&gt;
<!-- -->
&lt;script type="text/x-template" id="app-template"&gt;
<!-- -->
  &lt;main&gt;
    &lt;p&gt;Carousel is {<!-- needed for curly brackets to not be evaluated before entering codepen context -->{ isInitialized ? 'initialized' : 'not initialized' }}&lt;/p&gt;
  <!-- -->
    &lt;TinyCarousel
      ref="tinyCarousel"
      tag="section"
      :plugins="carouselPlugins"
      @after:init="isInitialized = true"
    &gt;
      &lt;article v-for="index in numberOfSlides" :key="index"&gt;
        &lt;img
          class="carousel__item-img"
          :src="`https://picsum.photos/seed/${index}/800/600`"
        &gt;
      &lt;/article&gt;
    &lt;/TinyCarousel&gt;
  <!-- -->
    &lt;nav&gt;
      &lt;button type="button" @click="carousel?.prev()"&gt;prev&lt;/button&gt;
      &lt;button type="button" @click="carousel?.next()"&gt;next&lt;/button&gt;
    &lt;/nav&gt;
    &lt;div&gt;
      &lt;button type="button" @click="++numberOfSlides"&gt;Add slide&lt;/button&gt;
      &lt;button type="button" @click="--numberOfSlides"&gt;Remove slide&lt;/button&gt;
    &lt;/div&gt;
  &lt;/main&gt;
<!-- -->
&lt;/script&gt;
  </template>
  <template slot="scss">
<div>
@import "https://cdn.skypack.dev/@frsource/tiny-carousel-core/dist/index.css";
<!-- -->
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</div>
  </template>
  <template slot="typescript">
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
<!-- -->
<!-- -->
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
<!-- -->
    watch(carousel, carousel => {
      carousel?.play();
    });
<!-- -->
    return {
      numberOfSlides: ref(6),
      carouselPlugins,
      isInitialized: ref(false),
      tinyCarousel,
      carousel,
    };
  }
};
<!-- -->
createApp(App)
  .mount('#app');
  </template>
</ExampleSection>
<!-- textlint-enable -->

### Vue 2

Next, follow the basic example of how to add Tiny Carousel to your Vue 2 application:

<!-- textlint-disable -->
<ExampleSection
    title="Example on how to use Tiny Carousel Vue integration with Vue 2"
    description="This example code shows how to use Tiny Carousel integration for Vue 2 - @frsource/tiny-carousel-vue"
    default-tab="js"
    :tags="['vue','vue2']"
>
  <template slot="html">
&lt;p&gt;Use arrows or scroll (or swipes on a mobile device) to change slides&lt;/p&gt;
<!-- -->
&lt;div id="app"&gt;&lt;/div&gt;
<!-- -->
&lt;script type="text/x-template" id="app-template"&gt;
<!-- -->
  &lt;TinyCarousel&gt;
    &lt;li v-for="index in numberOfSlides" :key="index"&gt;
      &lt;img
        class="carousel__item-img"
        :src="`https://picsum.photos/seed/${index}/800/600`"
      &gt;
    &lt;/li&gt;
  &lt;/TinyCarousel&gt;
<!-- -->
&lt;/script&gt;
  </template>
  <template slot="scss">
<div>
@import "https://cdn.skypack.dev/@frsource/tiny-carousel-core/dist/index.css";
<!-- -->
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</div>
  </template>
  <template slot="typescript">
import Vue from 'https://cdn.jsdelivr.net/npm/vue@2/dist/vue.esm.browser.js';
import TinyCarousel from 'https://cdn.skypack.dev/@frsource/tiny-carousel-vue';
<!-- -->
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
<!-- -->
new Vue({
  el: '#app',
  template: '&lt;App/&gt;',
  components: { App }
})
  </template>
</ExampleSection>
<!-- textlint-enable -->


In the more advanced usage example let’s see how you can use any of the Tiny Carousel plugins, access carousel instance directly or change the carousel root element`s tag name to something custom:

<!-- textlint-disable -->
<ExampleSection
    title="Example of advanced usage of the Tiny Carousel Vue integration with Vue 2"
    description="This example shows how to access carousel API, add plugins to your Tiny Carousel instance and change carousel element to something custom - like 'section'"
    default-tab="js"
    height="450px"
    :tags="['vue','vue2']"
>
  <template slot="html">
&lt;div id="app"&gt;&lt;/div&gt;
<!-- -->
&lt;script type="text/x-template" id="app-template"&gt;
<!-- -->
  &lt;main&gt;
    &lt;p&gt;Carousel is {<!-- needed for curly brackets to not be evaluated before entering codepen context -->{ isInitialized ? 'initialized' : 'not initialized' }}&lt;/p&gt;
  <!-- -->
    &lt;TinyCarousel
      ref="tinyCarousel"
      tag="section"
      :plugins="carouselPlugins"
      @after:init="isInitialized = true"
    &gt;
      &lt;article v-for="index in numberOfSlides" :key="index"&gt;
        &lt;img
          class="carousel__item-img"
          :src="`https://picsum.photos/seed/${index}/800/600`"
        &gt;
      &lt;/article&gt;
    &lt;/TinyCarousel&gt;
  <!-- -->
    &lt;nav&gt;
      &lt;button type="button" @click="clickPrev"&gt;prev&lt;/button&gt;
      &lt;button type="button" @click="clickNext"&gt;next&lt;/button&gt;
    &lt;/nav&gt;
    &lt;div&gt;
      &lt;button type="button" @click="++numberOfSlides"&gt;Add slide&lt;/button&gt;
      &lt;button type="button" @click="--numberOfSlides"&gt;Remove slide&lt;/button&gt;
    &lt;/div&gt;
  &lt;/main&gt;
<!-- -->
&lt;/script&gt;
  </template>
  <template slot="scss">
<div>
@import "https://cdn.skypack.dev/@frsource/tiny-carousel-core/dist/index.css";
</div>
  </template>
  <template slot="typescript">
import Vue from 'https://cdn.jsdelivr.net/npm/vue@2/dist/vue.esm.browser.js';
import { pluginAutoplay } from 'https://cdn.skypack.dev/@frsource/tiny-carousel-plugin-autoplay';
import { pluginCustomEvents } from 'https://cdn.skypack.dev/@frsource/tiny-carousel-plugin-custom-events';
import TinyCarousel, { definePlugin, PluginsProp, TinyCarouselComponent } from 'https://cdn.skypack.dev/@frsource/tiny-carousel-vue';
<!-- -->
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
<!-- -->
new Vue({
  el: '#app',
  template: '&lt;App/&gt;',
  components: { App }
});
  </template>
</ExampleSection>
<!-- textlint-enable -->


## Plugin Autoplay

This plugin adds autoplay feature to the Tiny Carousel. Also, it extends Tiny Carousel instance with [additional methods](../api-reference/plugin-autoplay/#instance-methods) for event handling.

More detailed info about the plugin’s API can be found [here](../../api-reference/plugin-autoplay).

To install the plugin use one of the commands below:

```bash
# yarn
yarn add @frsource/tiny-carousel-plugin-autoplay

# npm
npm install @frsource/tiny-carousel-plugin-autoplay
```

After installation, you need to add the plugin to your Tiny Carousel instance using [`carousel.use` method](../api-reference/core/#carousel-use). Provide it with the options object to override the default configuration.

For reference and information about the defaults, please see [`PluginConfig` documentation page](../api-reference/plugin-autoplay/#pluginconfig) or have a look at the example below:

<!-- textlint-disable -->
<ExampleSection
    title="Example on how to use Tiny Carousel Autoplay"
    description="This example code shows how to use 'carousel.play()' and `carousel.pause()` methods coming from @frsource/tiny-carousel-plugin-autoplay library"
    default-tab="js"
>
  <template slot="html">
&lt;button class="play" type="button"&gt;PLAY&lt;/button&gt;
&lt;button class="pause" type="button"&gt;PAUSE&lt;/button&gt;
<!-- -->
&lt;ul&gt;
  &lt;li&gt;
    &lt;img src="https://picsum.photos/seed/1/800/600"&gt;
  &lt;/li&gt;
  &lt;li&gt;
    &lt;img src="https://picsum.photos/seed/2/800/600"&gt;
  &lt;/li&gt;
  &lt;li&gt;
    &lt;img src="https://picsum.photos/seed/3/800/600"&gt;
  &lt;/li&gt;
  &lt;li&gt;
    &lt;img src="https://picsum.photos/seed/4/800/600"&gt;
  &lt;/li&gt;
&lt;/ul&gt;
  </template>
  <template slot="scss">
<div>
@import "https://cdn.skypack.dev/@frsource/tiny-carousel-core/dist/index.css";
<!-- -->
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</div>
  </template>
  <template slot="js">
import { TinyCarousel } from 'https://cdn.skypack.dev/@frsource/tiny-carousel-core';
import { pluginAutoplay } from 'https://cdn.skypack.dev/@frsource/tiny-carousel-plugin-autoplay';
<!-- -->
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
<!-- -->
document.querySelector('.play')
  .addEventListener('click',
    () => carousel.play()
  );
<!-- -->
document.querySelector('.pause')
  .addEventListener('click',
    () => carousel.pause()
  );
  </template>
</ExampleSection>
<!-- textlint-enable -->

## Plugin Custom Events

This plugin triggers [CustomEvents](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent) for the most important methods of the [Core Tiny Carousel API](../../api-reference/core). Also, it extends Tiny Carousel instance with additional methods for the event handling.

API Reference and the list of all events raised by this plugin you will find [here](../../api-reference/plugin-custom-events).

Let’s try to use it - first you need to install the plugin using one of a package managers:

```bash
# yarn
yarn add @frsource/tiny-carousel-plugin-custom-events

# npm
npm install @frsource/tiny-carousel-plugin-custom-events
```

Then, add it to your carousel instance using [`carousel.use` method](../api-reference/core/#carousel-use). That’s it, now you can use methods newly added by the Tiny Carousel Plugin Custom Events, like `carousel.on()` on the example below:

<!-- textlint-disable -->
<ExampleSection
    title="Example on how to use Tiny Carousel Custom Events"
    description="This example code shows how to use 'carousel.on()' method coming from @frsource/tiny-carousel-plugin-custom-events library"
    default-tab="js"
>
  <template slot="html">
&lt;h3&gt;Tiny Carousel is not loaded yet ⏳&lt;/h3&gt;
<!-- -->
&lt;ul&gt;
  &lt;li&gt;
    &lt;img src="https://picsum.photos/seed/1/800/600"&gt;
  &lt;/li&gt;
  &lt;li&gt;
    &lt;img src="https://picsum.photos/seed/2/800/600"&gt;
  &lt;/li&gt;
  &lt;li&gt;
    &lt;img src="https://picsum.photos/seed/3/800/600"&gt;
  &lt;/li&gt;
  &lt;li&gt;
    &lt;img src="https://picsum.photos/seed/4/800/600"&gt;
  &lt;/li&gt;
&lt;/ul&gt;
  </template>
  <template slot="scss">
<div>
@import "https://cdn.skypack.dev/@frsource/tiny-carousel-core/dist/index.css";
<!-- -->
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</div>
  </template>
  <template slot="js">
import { TinyCarousel } from 'https://cdn.skypack.dev/@frsource/tiny-carousel-core';
import { pluginCustomEvents } from 'https://cdn.skypack.dev/@frsource/tiny-carousel-plugin-custom-events';
<!-- -->
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
      .textContent = 'Carousel has been loaded! 🚀';
  })
/**
 * Here let`s log carousel items
 * every time findPossibleItems
 * method finishes it`s job
 **/
  .on('after:find-possible-items', (e) => {
    console.log(e);
  })
  .init();
  </template>
</ExampleSection>
<!-- textlint-enable -->

## Plugin Mouse Drag

This plugin adds drag/swipe support for mouse users (especially on desktop).

API Reference and the list of all events raised by this plugin you will find [here](../../api-reference/plugin-mouse-drag).

To use this package you need to import **both the SASS/CSS and Typescript/JavaScript files**.

Let’s try to use it - first you need to install the plugin using one of a package managers:

```bash
# yarn
yarn add @frsource/tiny-carousel-plugin-mouse-drag

# npm
npm install @frsource/tiny-carousel-plugin-mouse-drag
```

After you add it to your carousel instance (using [`carousel.use` method](../api-reference/core/#carousel-use)) and [import CSS/Sass styling](../api-reference/plugin-mouse-drag/#styling) the plugin will start working immediately! From now on, every desktop/mouse user will be able to swipe through the slides by clicking & dragging across the carousel.

See the example below on the device with mouse connected to see the plugin in action:

<!-- textlint-disable -->
<ExampleSection
    title="Example on how to use Tiny Carousel Mouse Drag"
    description="This example code shows @frsource/tiny-carousel-plugin-mouse-drag library in action - now mouse users can swipe the carousel"
    default-tab="js"
>
  <template slot="html">
&lt;h3&gt;The carousel is now swipeable, even on desktop 🖐&lt;/h3&gt;
<!-- -->
&lt;ul&gt;
  &lt;li&gt;
    &lt;img src="https://picsum.photos/seed/1/800/600"&gt;
  &lt;/li&gt;
  &lt;li&gt;
    &lt;img src="https://picsum.photos/seed/2/800/600"&gt;
  &lt;/li&gt;
  &lt;li&gt;
    &lt;img src="https://picsum.photos/seed/3/800/600"&gt;
  &lt;/li&gt;
  &lt;li&gt;
    &lt;img src="https://picsum.photos/seed/4/800/600"&gt;
  &lt;/li&gt;
&lt;/ul&gt;
  </template>
  <template slot="scss">
<div>
@import "https://cdn.skypack.dev/@frsource/tiny-carousel-core/dist/index.css";
@import "https://cdn.skypack.dev/@frsource/tiny-carousel-plugin-mouse-drag/dist/index.css";
<!-- -->
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</div>
  </template>
  <template slot="js">
import { TinyCarousel } from 'https://cdn.skypack.dev/@frsource/tiny-carousel-core';
import { pluginMouseDrag } from 'https://cdn.skypack.dev/@frsource/tiny-carousel-plugin-mouse-drag';
<!-- -->
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
  </template>
</ExampleSection>
<!-- textlint-enable -->

## Plugin Scroll Snap Fallback

Even though the browser support of the [CSS scroll-snap feature](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scroll_Snap) is pretty good:

<CanIUseSection feature="css-snappoints" />

You might sometimes find yourself in a situation where you need to support users of the older browsers. **Scroll&nbsp;Snap&nbsp;Fallback&nbsp;Plugin** handles exactly this case! It provides the most simplistic polyfill of [CSS scroll-snap feature](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scroll_Snap), so you’ve got your users covered!

First install it via your favorite package manager:

```bash
# yarn
yarn add @frsource/tiny-carousel-plugin-scroll-snap-fallback

# npm
npm install @frsource/tiny-carousel-plugin-scroll-snap-fallback
```

Then, add it to your carousel instance using [`carousel.use` method](../api-reference/core/#carousel-use), as shown on the example below:

<!-- textlint-disable -->
<ExampleSection
    title="Example on how to use Tiny Carousel Scroll Snap Fallback"
    description="This example code shows how to use @frsource/tiny-carousel-plugin-scroll-snap-fallback library in your project"
    default-tab="js"
>
  <template slot="html">
&lt;!-- This example works on IE9 and Chrome 69- -->
&lt;!-- You can navigate through slides using: scroll, arrows (first focus carousel with a click) or (on touch devices) swiping -->
<!-- -->
&lt;ul&gt;
  &lt;li&gt;
    &lt;img src="https://picsum.photos/seed/1/800/600"&gt;
  &lt;/li&gt;
  &lt;li&gt;
    &lt;img src="https://picsum.photos/seed/2/800/600"&gt;
  &lt;/li&gt;
  &lt;li&gt;
    &lt;img src="https://picsum.photos/seed/3/800/600"&gt;
  &lt;/li&gt;
  &lt;li&gt;
    &lt;img src="https://picsum.photos/seed/4/800/600"&gt;
  &lt;/li&gt;
&lt;/ul&gt;
  </template>
  <template slot="scss">
<div>
@import "https://cdn.skypack.dev/@frsource/tiny-carousel-core/dist/index.css";
<!-- -->
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</div>
  </template>
  <template slot="js">
import { TinyCarousel } from 'https://cdn.skypack.dev/@frsource/tiny-carousel-core';
import { pluginScrollSnapFallback } from 'https://cdn.skypack.dev/@frsource/tiny-carousel-plugin-scroll-snap-fallback';
<!-- -->
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
  </template>
</ExampleSection>
<!-- textlint-enable -->

That’s it - the polyfill will be automatically added to your carousel instance whenever [CSS scroll-snap feature](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scroll_Snap) is not supported!

For information about plugin options, please head to [it`s API reference](../../api-reference/plugin-scroll-snap-fallback/#config).

<!-- textlint-disable stop-words -->
:::tip Help us improve the documentation
Hey, it seems you’ve made it to the very bottom of our usage guide! Thank you for taking such interest in our library - we hope it will make your journey easier! ✈️

However, if you feel that something could be described better or if you saw any typo/error please feel free to use the "Help us improve this page on GitHub" button placed on the very bottom of this page. Don’t hesitate to write a suggestion in the "issues" tab or file a PR with a fix!

Thank you! Any help is kindly appreciated 🙏
:::
<!-- texlint-enable -->

For further information about the possible configuration options and useful methods, please have a look at our [API reference](../../api-reference).
