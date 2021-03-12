# Plugin Autoplay

This plugin adds autoplay feature to the Tiny Carousel. All you need to do is to install the plugin and watch that the slides are changing automatically!

The plugin also extends Tiny Carousel instance with additional methods. Read more about it in the [instance methods section](#instance-methods).

To learn on how to install and use plugin, [please see our usage guide](../../guide/usage/#plugin-autoplay).

For configuration options please see [`PluginConfig`](#pluginconfig) below.

<!-- textlint-disable -->
## PluginConfig
<!-- textlint-enable -->

- **Properties:**

    - `{number} autoplayTimeout = 4000`
    - `{boolean} autoplayImmediate = false`
    - `{boolean} pauseOnHover = true`

- **Details:**

    `PluginConfig` is an object passed along to the [`carousel.use` method](./core/#carousel-use).
    - `autoplayImmediate` decides whether the first slide change should happen immediately after running [`carousel.play`](#carousel.play) method or after a timeout. Default value: `4000`
    - `autoplayTimeout` sets a time delay (in milliseconds) between slide changes. Default value: `false`
    - `pauseOnHover` specifies if the carousel autoplay should pause when hovered over and resume automatically when loses focus. Default value: `true`

## Instance methods

<!-- textlint-disable -->
### carousel.play
<!-- textlint-enable -->

- **Arguments:**

    <!-- textlint-disable -->
    - [`{PlayOptions} options <optional>`](#playoptions)
    <!-- textlint-enable -->

- **Returns:** `this` - this TinyCarousel instance (for chaining purposes)

- **Usage:**

    Method used to enable the automatic slide playback. It’s behavior can be changed via `options` argument or [`instance config`](../core/#carousel-config) ([`defaultConfig`](../core/#defaultconfig) included). Each slide will be changed after a timeout specified by [`autoplayTimeout`](#config.autoplaytimeout).

<!-- textlint-disable -->
### carousel.pause
<!-- textlint-enable -->

- **Arguments:**

    <!-- textlint-disable -->
    - [`{PauseOptions} options <optional>`](#pauseoptions)
    <!-- textling-enable -->

- **Returns:** `this` - this TinyCarousel instance (for chaining purposes)

- **Usage:**

    Method which pauses the autoplay action.

## Options

<!-- textlint-disable -->
### PlayOptions
<!-- textlint-enable -->

- **Properties:**

    - `{boolean} autoplayImmediate`

- **Details:**

    Data type which holds additional configuration of [`carousel.play`](#carousel.play) method.
    Properties have the same meaning as in [`PluginConfig` data type](#pluginconfig).

<!-- textlint-disable -->
### PauseOptions
<!-- textlint-enable -->

- **Properties:**

    - `{boolean} leavePauseOnHoverListeners`

- **Details:**

    Data type which holds additional configuration of [`carousel.pause`](#carousel.pause) method.
    - `leavePauseOnHoverListeners` - whether [`carousel.pause`](#carousel.pause) should remove mouse listener handlers which were added when [`PluginConfig.pauseOnHover`](#pluginconfig) was set to `true` or not


