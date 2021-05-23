# Integration - React

This integration implements a React component which allows you to use TinyCarousel along with its whole plugin [ecosystem](../../ecosystem/#plugins).

To learn on how to install and use plugin, [please see our usage guide](../../guide/usage/#react) or look into an example React app in the [Tiny Carousel React repository](https://github.com/FRSOURCE/tiny-carousel/blob/master/packages/react/src/App.tsx).

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
    - `{string} className`
    - `{PluginsProp} plugins = []`
    - [`{Config} config`](./core/#config)
    - `{ReactNode} children`
    - `{function} [eventCallbackName] (e.g. onAfterEventInit)`

- **Events:**

    To add event emission you need to use [Plugin Custom Events](../ecosystem/#plugin-custom-events).
    
    All custom events can be handled with use of prop passed directly on the `TinyCarousel` component element. The name of prop follows the pattern `on{TIMING}Event{EVENT_NAME}` where `TIMING` and `EVENT_NAME` are taken from [one of the TinyCarousel events](./plugin-custom-events/#events). An example, so specify listener for `after:init` event, you should pass a callback as a value of the `onAfterEventInit` prop. For examples, have a look in a guide.

- **Details:**

    Component added by React integration. Creates single TinyCarousel instance with tag name, plugins and configuration passed as a props. Change of the slotted children or any of the props would lead to TinyCarousel’s reinitialization.
    
    Additional API can be reached by using [`ref`](https://reactjs.org/docs/hooks-reference.html#useref) as can be seen [in the example](https://github.com/FRSOURCE/tiny-carousel/blob/master/packages/react/src/App.tsx#L40).

## Options

<!-- textlint-disable -->
### TinyCarouselRef
<!-- textlint-enable -->

- **Details:**

    Data type describing TinyCarousel reference. Use it to add the proper type to the carousel `ref`.

<!-- textlint-disable -->
### TinyCarouselProps
<!-- textlint-enable -->

- **Details:**

    Data type describing TinyCarousel component props. Use it to add the proper type to your callbacks [as shown here](https://github.com/FRSOURCE/tiny-carousel/blob/master/packages/react/src/App.tsx#L21).

