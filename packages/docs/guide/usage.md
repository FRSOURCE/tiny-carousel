# Usage

On this page you’ll find usage guides about every one of the packages that together make up a [Tiny Carousel ecosystem](../../ecosystem).

:::tip
Always try to use proper semantic tags/attributes when setting up a carousel to make it accessible. Read more in [W3C tutorial](https://www.w3.org/WAI/tutorials/carousels/). 
:::

## Core

The main package of the Tiny Carousel [ecosystem](../../ecosystem) which gives the most basic carousel API. Try it out before using additional plugins - it might be enough in the most basic scenarios.

See the example below which uses only a core package:

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
    title="Advances Tiny Carousel Core example"
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
    title="Advances Tiny Carousel Core example"
    description="A bit more advanced usage example of @frsource/tiny-carousel-core library"
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

For information about plugin options, please head to the [API reference](../../api-reference/plugin-scroll-snap-fallback/#config).

For further information about the possible configuration options and useful methods, please have a look at our [API reference](../../api-reference).
