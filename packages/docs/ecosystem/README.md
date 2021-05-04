# Ecosystem 🌳

Tiny Carousel is a modern, modular carousel library which consist of the whole ecosystem of pluggable modules.

## Core
The main entry point is always a core package, which provides the most basic carousel API and allows extending of it functionalities.

For now, the only and only core package is a [`@frsource/tiny-carousel-core`](https://www.npmjs.com/package/@frsource/tiny-carousel-core). It’s a CSS scroll snap points-based carousel system. Usage of this native API makes is snappy, lightweight and accessible solution.

Learn more about the core package:
| [API reference](../api-reference/core) | [Usage guide](../guide/usage/#core) |
| - | - |

## Integrations

Integration is a package which allows using TinyCarousel with a framework/library of your choice.

### Vue

Brings `@frsource/tiny-carousel` into the Vue 2/3 world 💚

| [API reference](../api-reference/integration-vue) | [Usage guide](../guide/usage/#vue) |
| - | - |

## Plugins

Plugin is a module which can be used to extend a Tiny Carousel instance with new set of functionalities.

:::tip Become a contributor!
Interested in writing your own plugin? [Click here to check out our contribution guide](../contribution).
:::

Use the list below to find necessary information about API or a usage of the plugins:

### Plugin Autoplay

Adds autoplay feature to the Tiny Carousel.

| [API reference](../api-reference/plugin-autoplay) | [Usage guide](../guide/usage/#plugin-autoplay) |
| - | - |

### Plugin Custom Events

Triggers [CustomEvents](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent) for Tiny Carousel core lifecycle events. This allows for the external code to listen & react on them right when it is necessary.

| [API reference](../api-reference/plugin-custom-events) | [Usage guide](../guide/usage/#plugin-custom-events) |
| - | - |

### Plugin Mouse Drag

Adds the swiping support for the desktop/mouse users.

| [API reference](../api-reference/plugin-mouse-drag) | [Usage guide](../guide/usage/#plugin-mouse-drag) |
| - | - |


### Plugin Scroll Snap Fallback

Provides polyfill for [CSS scroll-snap feature](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scroll_Snap).

| [API reference](../api-reference/plugin-scroll-snap-fallback) | [Usage guide](../guide/usage/#plugin-scroll-snap-fallback) |
| - | - |
