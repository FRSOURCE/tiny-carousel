# Integration - Vue

This package provides a Vue wrapper component for the Tiny Carousel.

To learn on how to install and use plugin, [please see our usage guide](../../guide/usage/#vue) or look into an example Vue app in the [Tiny Carousel Vue repository](https://github.com/FRSOURCE/tiny-carousel/blob/master/packages/vue/src/App.vue).

This integration supports **both** Vue 2 & 3.

<!-- textlint-disable -->
## Global API

### definePlugin
<!-- textlint-enable -->

- **Arguments:**

    Same as [carousel.use](./core/#carousel-use).

- **Returns:** `[plugin: PluginDefinition, options: PluginOptions]`

- **Usage:**

    Method used to properly format plugin configuration array before passing it to the TinyCarousel component. Add stricter TypeScript typings. Second argument (option) is dependent on the plugin you`re trying to use.
    
<!-- textlint-disable -->
## Components
<!-- textlint-enable -->

<!-- textlint-disable -->
### TinyCarousel
<!-- textlint-enable -->

- **Props:**

    - `{string} tag = "ul"`
    - `{PluginsProp} plugins = []`
    - [`{Config} config`](./core/#config)

- **Events:**

    To add event emission you need to use [Plugin Custom Events](../ecosystem/#plugin-custom-events). All custom events can be handled with use of `v-bind` directive, directly on the `TinyCarousel` component element.
    For reference [please see the advanced example in our usage guide (especially HTML tab)](../../guide/usage/#vue).

- **Details:**

    Component added by Vue integration. Creates single TinyCarousel instance with tag name, plugins and configuration passed as a props. Change of the slotted children or any of the props would lead to TinyCarousel’s reinitialization.
    
    Additional API can be reached by using [`ref`](https://vuejs.org/v2/guide/components-edge-cases.html#Accessing-Child-Component-Instances-amp-Child-Elements) as can be seen [in the example](https://github.com/FRSOURCE/tiny-carousel/blob/master/packages/vue/src/App.vue#L13).

## Options

<!-- textlint-disable -->
### TinyCarouselComponent
<!-- textlint-enable -->

- **Details:**

    Data type describing TinyCarousel component. Use it to add the proper type to the carousel `ref`.

