# Usage

On this page you’ll find usage guides about every one of the packages that together make up a [Tiny Carousel ecosystem](../../ecosystem).

:::tip
Always try to use proper semantic tags/attributes when setting up a carousel to make it accessible. Read more in [W3C tutorial](https://www.w3.org/WAI/tutorials/carousels/). 
:::

## Core

The main package of the Tiny Carousel [ecosystem](../../ecosystem) which gives the most basic carousel API. Try it out before using additional plugins - it might be enough in the most basic scenarios.

To use this package you need to import **both the SASS/CSS and Typescript/JavaScript files**. See the example below which uses **only** the core package:

::: warning The animations in an example are not working.
By default, the core package disables scroll animations for some users to make the carousel accessible for the broader audience. If somebody (maybe you?) have the `reduce motion` option enabled in the system settings of his/her device - the carousel will follow that rule and turn off the animations. To learn more, please read [this article](https://web.dev/prefers-reduced-motion/).
:::

<!-- textlint-disable -->
<ExampleSection
    title="Basic Tiny Carousel Core example"
    description="The most simplistic usage example of @frsource/tiny-carousel-core package"
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

This plugin adds [CustomEvents](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent) for the most important methods of the [Core Tiny Carousel API](../../api-reference/core). Also, it extends Tiny Carousel instance with additional methods for the event handling.

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
    // https://www.frsource.org/tiny-carousel/api-reference/plugin-scroll-snap-fallback/#config
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
