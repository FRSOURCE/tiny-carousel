# Plugin Custom Events

This plugin triggers [CustomEvents](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent) for Tiny Carousel core lifecycle events. This allows for the external code to be triggered right when it is necessary. Before or after an exact action - for example after the current slide index is changed.

The plugin also extends Tiny Carousel instance with additional methods. Read more about it in the [instance methods section](#instance-methods).

:::tip
This plugin is often a required dependency for the other parts of Tiny Carousel [ecosystem](../../ecosystem/).
:::

To learn on how to install and use plugin, [please see our usage guide](../../guide/usage/#plugin-custom-event).

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

    Method used to dispatch custom event `eventName` on Tiny Carousel instance. `payload` will be added to the native [`CustomEvent`](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent) as event\`s payload. `options` argument is passed directly to the constructor of `CustomEvent` and thus might contain fields of the [`eventInit` type](https://developer.mozilla.org/en-US/docs/Web/API/Event/Event#values) - so, `bubbles`, `cancelable` or `composed`.

## Events

List of events triggered by default when Plugin Custom Events is used:

<!-- textlint-disable -->
| Event Name                 | Event Payload                                         |
| -------------------------- | ----------------------------------------------------- |
| before:init                | *none*                                                |
| after:init                 | *none*                                                |
| before:go-to               | [`GoToEventPayload`](#gotoeventpayload)               |
| after:go-to                | [`GoToEventPayload`](#gotoeventpayload)               |
| error:go-to                | [`GoToErrorEventPayload`](#gotoerroreventpayload)     |
| before:find-possible-items | *none*                                                |
| after:find-possible-items  | *none*                                                |
<!-- textlint-enable -->

## Payload Types
<!-- textlint-disable -->
### GoToEventPayload
<!-- textlint-enable -->
- **Properties:**

    - [`{SlideInfo} to`](#slideInfo)

- **Details:**

    Data type which holds information about the active slide change process.

<!-- textlint-disable -->
### GoToErrorEventPayload
<!-- textlint-enable -->
- **Properties:**

    - [`{SlideInfo} to`](#slideInfo)
    - `{'overflow'} cause`

- **Details:**
<!-- textlint-disable alex -->
    Data type which hold information about the slide change process which have failed and a cause of its error. Current list of possible causes: `overflow`.
<!-- textlint-enable -->
