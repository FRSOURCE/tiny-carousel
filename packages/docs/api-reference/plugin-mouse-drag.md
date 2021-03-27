# Plugin Mouse Drag

This plugin extends Tiny Carousel with drag support for the mouse users. Install the plugin to allow your desktop users to swipe through slides!

To learn on how to install and use plugin, [please see our usage guide](../../guide/usage/#plugin-mouse-drag).

For configuration options please see [`PluginConfig`](#pluginconfig) below.

This plugin consists of configurable Sass styling see available variables in [Styling section](#styling).

<!-- textlint-disable -->
## PluginConfig
<!-- textlint-enable -->

- **Properties:**

    - `{string} mouseDragClassName = "frs-tc--md"`
    - `{string} mouseDragDraggingClassName = "frs-tc--mdd"`
    - `{string} mouseDragMomentumClassName = "frs-tc--mdm"`
    - `{number} mouseDragMomentumGravity = 1`
    - `{boolean} mouseDragThrottle = 30`

- **Details:**

    `PluginConfig` is an object passed along to the [`carousel.use` method](./core/#carousel-use).
    - `mouseDragClassName` is a class name added to every Tiny Carousel instance with mouse drag plugin installed
    - `mouseDragDraggingClassName` is a class name added to the carousel element at the time when user is actively dragging the carousel`s slide
    - `mouseDragMomentumClassName` is a class name added to the carousel element right after user stops dragging, when the carousel is still moving (until it snaps to exact slide position)
    - `mouseDragMomentumGravity` sets a gravity for post-dragging momentum. The higher this value - the faster momentum is being lost
    - `mouseDragThrottle` specifies a mousemove event throttling time frame (in milliseconds). <a href="https://codeburst.io/throttling-and-debouncing-in-javascript-b01cad5c8edf">Read more here</a>

## Styling

Styling can be imported via:

> Sass: `@frsource/tiny-carousel-plugin-mouse-drag/src/index.scss`
>
> CSS: `@frsource/tiny-carousel-plugin-mouse-drag/dist/index.css`

When importing Sass source file you can configure [the variables](sass-lang.com/documentation/variables):

- **Sass variables:**

    - `{string} $mouse-drag-class-name = "frs-tc--md"`
    - `{string} $mouse-drag-dragging-class-name = "frs-tc--mdd"`
    - `{string} $mouse-drag-momentum-class-name = "frs-tc--mdm"`

- **Details:**

    - `$mouse-drag-class-name` is a class name which gives initial dragging styling to the carousel element. Default value: `frs-tc--md`
    - `$mouse-drag-dragging-class-name` is a class name used to specify carousel element state when user is actively dragging the slide. Default value: `frs-tc--mdd`
    - `$mouse-drag-momentum-class-name` is a class name used on the carousel element right after user stops dragging, when the carousel is still moving (until it snaps to exact slide position). Default value: `frs-tc--mdm`
