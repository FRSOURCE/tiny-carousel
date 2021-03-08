# Plugin Scroll Snap Fallback

This module provides automatic support mechanism and polyfill for [CSS scroll-snap feature](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scroll_Snap). You can force polyfill usage using [force configuration property](#pluginconfig).

To learn on how to install and use plugin, [please see our usage guide](../../guide/usage/#plugin-scroll-snap-fallback).

<!-- textlint-disable -->
## PluginConfig
<!-- textlint-enable -->

- **Properties:**

    - `{boolean} force`

- **Details:**

    Config is an object passed along to the [`carousel.use` method](./core/#carousel-use).
    `force` configuration property allows you to override the result of support detection mechanism and force usage of JavaScript CSS Scroll Snap polyfill. By default value: `false`.
