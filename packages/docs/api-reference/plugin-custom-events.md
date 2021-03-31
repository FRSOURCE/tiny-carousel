# Plugin Custom Events

This plugin triggers [CustomEvents](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent) for Tiny Carousel core lifecycle events. This allows for the external code to be triggered right when it is necessary. Before or after an exact action - for example after the tiny carousel got initialized.

The plugin also extends Tiny Carousel instance with additional methods. Read more about it in the [instance methods section](#instance-methods).

:::tip
This plugin is often a required dependency for the other parts of Tiny Carousel [ecosystem](../../ecosystem/).
:::

To learn on how to install and use plugin, [please see our usage guide](../../guide/usage/#plugin-custom-events).

For complete list of custom events raised by this plugin, please head directly to the [events section](#events).

## Instance methods

<!-- textlint-disable -->
### carousel.on
<!-- textlint-enable -->

- **Arguments:**

    - `{string} eventName`
    - `{function} listener`
    - `{object | boolean} options <optional>`

- **Returns:** `this` - this TinyCarousel instance (for chaining purposes)

- **Usage:**

    Method used to set a handler triggered for an event `eventName`. `listener` and `options` argument types are based on and passed directly to [a native `addEventListener` method](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener).

<!-- textlint-disable -->
### carousel.off
<!-- textlint-enable -->

- **Arguments:**

    - `{string} eventName`
    - `{function} listener`

- **Returns:** `this` - this TinyCarousel instance (for chaining purposes)

- **Usage:**

    Method used to remove the event `eventName` `listener` that has been added via [`carousel.on`](#carousel.on) method.

<!-- textlint-disable -->
### carousel.dispatch
<!-- textlint-enable -->

- **Arguments:**

    - `{string} eventName`
    - `{unknown} payload <optional>`
    - `{object} options <optional>`

- **Returns:** `this` - this TinyCarousel instance (for chaining purposes)

- **Usage:**

    Method used to dispatch custom event `eventName` on Tiny Carousel instance.
    
    - `payload`
        - If not an object - will be turned into one as follows: `{ data: payload }`
        - Then (or firstly, if `payload` was an object) it will be enhanced with `tinyCarousel` field which would contain a reference to the [TinyCarousel instance](./core/#new-tinycarousel-carouselelement-config)
        - Lastly, such formatted object will be passed to the native [`CustomEvent`](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent) as event\`s payload
    
    - `options` argument is passed directly to the constructor of `CustomEvent` and thus might contain fields of the [`eventInit` type](https://developer.mozilla.org/en-US/docs/Web/API/Event/Event#values) - so, `bubbles`, `cancelable` or `composed`

## Events

List of events triggered by default when Plugin Custom Events is used:

<!-- textlint-disable -->
| Event Name                 | Event Payload                                         |
| -------------------------- | ----------------------------------------------------- |
| before:init                | [`StandardRequiredPayload`](#standardrequiredpayload) |
| after:init                 | [`StandardRequiredPayload`](#standardrequiredpayload) |
| before:go-to               | [`GoToEventPayload`](#gotoeventpayload)               |
| after:go-to                | [`GoToEventPayload`](#gotoeventpayload)               |
| error:go-to                | [`GoToErrorEventPayload`](#gotoerroreventpayload)     |
| before:find-possible-items | [`StandardRequiredPayload`](#standardrequiredpayload) |
| after:find-possible-items  | [`StandardRequiredPayload`](#standardrequiredpayload) |
<!-- textlint-enable -->

## Payload Types
<!-- textlint-disable -->
### StandardRequiredPayload
<!-- textlint-enable -->
- **Properties:**

    - [`{TinyCarousel} tinyCarousel`](./core/#new-tinycarousel-carouselelement-config)

- **Details:**

    Standard payload type describing fields which are available in the every event dispatched through `plugin-custom-events`. `tinyCarousel` field holds reference to the current TinyCarousel instance. 

<!-- textlint-disable -->
### GoToEventPayload
<!-- textlint-enable -->
- **Properties:**

    - [`{TinyCarousel} tinyCarousel`](./core/#new-tinycarousel-carouselelement-config)
    - [`{SlideInfo} to`](#slideInfo)

- **Details:**

    Data type which holds information about the active slide change process. For the description of the rest of fields, please look into [`StandardRequiredPayload`](#standardrequiredpayload) section.

<!-- textlint-disable -->
### GoToErrorEventPayload
<!-- textlint-enable -->
- **Properties:**

    - [`{TinyCarousel} tinyCarousel`](./core/#new-tinycarousel-carouselelement-config)
    - [`{SlideInfo} to`](#slideInfo)
    - `{'overflow'} cause`

- **Details:**
<!-- textlint-disable alex -->
    Data type which hold information about the slide change process which have failed and a cause of its error. Current list of possible causes: `overflow`. For the description of the rest of fields, please look into [`StandardRequiredPayload`](#standardrequiredpayload) section.
<!-- textlint-enable -->
