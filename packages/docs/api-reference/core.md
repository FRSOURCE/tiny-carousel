# Core

Core is the module providing main Tiny Carousel functionalities and API. It exports the TinyCarousel class.

## Styling

Styling can be imported via:

> Sass: `@frsource/tiny-carousel-core/src/index.scss`
>
> CSS: `@frsource/tiny-carousel-core/dist/index.css`

When importing Sass source file you can configure [the variables](sass-lang.com/documentation/variables):

- **Sass variables:**

    - `{string} $class-name = "frs-tc"`
    - `{string} $item-class-name = "frs-tc-item"`

- **Details:**

    - `$class-name` is a class name added to the carousel element
    - `$item-class-name` is a class name added to the carousel items (slides)

:::tip
This packages uses [`@frsource/frs-hide-scrollbar`](https://www.npmjs.com/package/@frsource/frs-hide-scrollbar) to hide native scrollbars. So, when importing the core Sass styling you have a possibility to set [`@frsource/frs-hide-scrollbar` configuration](https://www.frsource.org/FRS-hide-scrollbar/usage) beforehand.
For example, this might be useful to change the default `frs-hide-scroll` class name:
```scss
$frs-hide-scroll-classname: "your-new-hide-scroll-classname";
@import '~@frsource/tiny-carousel-core';
```
:::

<!-- textlint-disable -->
## Global API

### updateDefaultConfig( config )
<!-- textlint-enable -->

- **Arguments:**

    - [`{Config} config`](#config)

- **Returns:** `undefined`

- **Usage:**

    Method used for changing the default configuration of the whole TinyCarousel module. Every instance created afterwards will use updated default configuration. The argument `config` is merged with previous configuration which means that to remove property you’d need to pass it explicitly set to `undefined`.

- **See also:** [`Config` data type description](#config)

<!-- textlint-disable -->
### defaultConfig
<!-- textlint-enable -->

- **Type:** [`Config`](#config)

- **Read only**

- **Details:**

    Property returning copy of the default configuration object.

- **See also:** [`Config` data type description](#config)

<!-- textlint-disable -->
### new TinyCarousel( carouselElement, config )
<!-- textlint-enable -->

- **Arguments:**

    - `{HTMLElement} carouselElement`
    - [`{Config} config <optional>`](#config)

- **Returns:** New, uninitialized Tiny Carousel instance

- **Usage:**

    Carousel wrapper element should be passed ad `carouselElement`. Every of the `config` properties (and the `config` object itself) are optional.

- **See also:** [`Config` data type description](#config)

## Instance properties

<!-- textlint-disable -->
### carousel.config
<!-- textlint-enable -->

- **Type:** [`Config`](#config)

- **Details:**

    Configuration object of the Tiny Carousel instance.

- **See also:** [`Config` data type description](#config)

<!-- textlint-disable -->
### carousel.carouselElement
<!-- textlint-enable -->

- **Type:** `HTMLElement`

- **Details:**

    Main wrapper element of the carousel.

<!-- textlint-disable -->
### carousel.active
<!-- textlint-enable -->

- **Type:** `number`

- **Read only**

- **Details:**

    Active slide index.

## Instance methods

<!-- textlint-disable -->
### carousel.use
<!-- textlint-enable -->

- **Arguments:**

    - [`{PluginDefinition} pluginDefinition`](#plugin-definition)
    - `{unknown[]} ...args <optional>`

- **Returns:** `this` - this TinyCarousel instance (for chaining purposes)

- **Usage:**

    Method used to setup any of the Tiny Carousel plugins. Number of arguments and their types are dependent on what plugin is being installed. For details, head to the documentation of the plugin you’d like to use.

<!-- textlint-disable -->
### carousel.init
<!-- textlint-enable -->

- **Arguments:** None

- **Returns:** `this` - this TinyCarousel instance (for chaining purposes)

- **Usage:**

    Initializes a TinyCarousel instance. If no `config.items` were set yet the library will fallback to the value returned by [`carousel.findPossibleItems` method](#carousel-findpossibleitems).
    Also, this method adds class names to the carousel wrapper and carousel items HTML elements and sets the correct active slide based on `config.active` variable.

<!-- textlint-disable -->
### carousel.goTo
<!-- textlint-enable -->

- **Arguments:**

    - `{number} index`

- **Returns:** `this` - this TinyCarousel instance (for chaining purposes)

- **Usage:**

    Method which allows to change the current slide.
    `index` parameter should be **any** numeric value (even negated).
    - For `index` values less than 0, the new active slide is counted from the end of items array. For example: when there are 3 slides and `carousel.goTo(-1)` is called, the new active index will be 3 - because that’s the last index in the [`config.items` array](#config)
    - For `index` values <!-- textlint-disable alex -->bigger<!-- textlint-enable --> than the number of items or smaller than the negated number of items, number of items will be subtracted/added to the `index` value. Whole operation will be repeated until `index` is within the range from negated items array length to items array length


<!-- textlint-disable -->
### carousel.next
<!-- textlint-enable -->

- **Arguments:** None

- **Returns:** same as [`goTo` method](#carousel-goto)

- **Usage:**

    Syntax sugar for changing the active slide to the next one. Same as `carousel.goTo(carousel.active + 1)`.

<!-- textlint-disable -->
### carousel.prev
<!-- textlint-enable -->

- **Arguments:** None

- **Returns:** same as [`goTo` method](#carousel-goto). Additionally, returns `false` when [`carousel.active`](#carousel-active) equals 0

- **Usage:**

    Syntax sugar for changing the active slide to the previous one. Same as `carousel.goTo(carousel.active - 1)`.

<!-- textlint-disable -->
### carousel.resetActive
<!-- textlint-enable -->

- **Arguments:** None

- **Returns:** `undefined`

- **Usage:**

    **Use with caution!** This method is used for flushing of the cached [`carousel.active`](#carousel-active) value. It should be used whenever you need to force active index recalculation during next carousel operation.
    
:::tip
To recalculate [`carousel.active`](#carousel-active) in place, call `carousel.resetActive` and then try to access [`carousel.active`](#carousel-active) property. [Getter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get) will provide you with new value.
:::

<!-- textlint-disable -->
### carousel.findPossibleItems
<!-- textlint-enable -->

- **Arguments:** None

- **Returns:** `HTMLElement[]` - an array of the possible slides. The return value is:
    - The `carouselElement` children which have `config.itemClassName` class name set,
    - (if the step above doesn’t find any item) all `carouselElement` children

- **Usage:**

    Method which finds possible carousel items. Called as a item-gathering fallback by [the constructor](#new-tinycarousel-carouselelement-config).
    

## Options
<!-- textlint-disable -->
### Config
<!-- textlint-enable -->

- **Properties:**

    - `{number} active = 0`
    - `{string} className = "frs-tc"`
    - `{string} itemClassName = "frs-tc-item"`
    - `{string} hideScrollClassName - "frs-hide-scroll"`
    - `HTMLElement[] items = []`

- **Details:**

    Data type which holds most of the Tiny Carousel configuration.

:::tip
When changing `hideScrollClassName` always remember to change the `$frs-hide-scroll` Sass variable as well. More information available in [the styling section](#styling) or [`@frsource/frs-hide-scrollbar` documentation](https://www.frsource.org/FRS-hide-scrollbar/usage).
:::

### PluginDefinition

- **Methods:**

    - `install( instance, args )` - method called by [`carousel.use`](#carousel-use) during plugin installation

- **Details:**

    Data type describing general interface which needs to be implemented by every plugin in the [Tiny Carousel ecosystem.](../../ecosystem)
