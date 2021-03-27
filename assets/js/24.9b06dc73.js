(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{389:function(e,t,s){"use strict";s.r(t);var n=s(43),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),s("p",[e._v("On this page you’ll find usage guides about every one of the packages that together make up a "),s("a",{attrs:{href:"../../ecosystem"}},[e._v("Tiny Carousel ecosystem")]),e._v(".")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("Always try to use proper semantic tags/attributes when setting up a carousel to make it accessible. Read more in "),s("a",{attrs:{href:"https://www.w3.org/WAI/tutorials/carousels/",target:"_blank",rel:"noopener noreferrer"}},[e._v("W3C tutorial"),s("OutboundLink")],1),e._v(".")])]),e._v(" "),s("h2",{attrs:{id:"core"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#core"}},[e._v("#")]),e._v(" Core")]),e._v(" "),s("p",[e._v("The main package of the Tiny Carousel "),s("a",{attrs:{href:"../../ecosystem"}},[e._v("ecosystem")]),e._v(" which gives the most basic carousel API. Try it out before using additional plugins - it might be enough in the most basic scenarios.")]),e._v(" "),s("p",[e._v("First, you need to install the core library using one of the package managers:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# yarn")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" @frsource/tiny-carousel-core\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# npm")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" @frsource/tiny-carousel-core\n")])])]),s("p",[e._v("To use this package you need to import "),s("strong",[e._v("both the SASS/CSS and Typescript/JavaScript files")]),e._v(".")]),e._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("The animations in an example are not working.")]),e._v(" "),s("p",[e._v("By default, the core package disables scroll animations for some users to make the carousel accessible for the broader audience. If somebody (maybe you?) have the "),s("code",[e._v("reduce motion")]),e._v(" option enabled in the system settings of his/her device - the carousel will follow that rule and turn off the animations. To learn more, please read "),s("a",{attrs:{href:"https://web.dev/prefers-reduced-motion/",target:"_blank",rel:"noopener noreferrer"}},[e._v("this article"),s("OutboundLink")],1),e._v(".")])]),e._v(" "),s("p",[e._v("See the example below which uses "),s("strong",[e._v("only")]),e._v(" the core package:")]),e._v(" "),s("ExampleSection",{attrs:{title:"Basic Tiny Carousel Core example",description:"The most simplistic usage example of @frsource/tiny-carousel-core package","default-tab":"js"}},[s("template",{slot:"html"},[e._v('\n\x3c!-- You can navigate through slides using: scroll, arrows (first focus carousel with a click) or (on touch devices) swiping --\x3e\n<ul>\n  <li>\n    <img src="https://picsum.photos/seed/1/800/600">\n  </li>\n  <li>\n    <img src="https://picsum.photos/seed/2/800/600">\n  </li>\n  <li>\n    <img src="https://picsum.photos/seed/3/800/600">\n  </li>\n  <li>\n    <img src="https://picsum.photos/seed/4/800/600">\n  </li>\n  <li>\n    <img src="https://picsum.photos/seed/5/800/600">\n  </li>\n  <li>\n    <img src="https://picsum.photos/seed/6/800/600">\n  </li>\n</ul>\n  ')]),e._v(" "),s("template",{slot:"scss"},[s("div",[e._v('\n@import "https://cdn.skypack.dev/@frsource/tiny-carousel-core/dist/index.css";\n'),e._v("\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n")])]),e._v(" "),s("template",{slot:"js"},[e._v("\nimport { TinyCarousel } from 'https://cdn.skypack.dev/@frsource/tiny-carousel-core';\n"),e._v("\nnew TinyCarousel(\n  document.querySelector('ul')\n)\n  .init();\n  ")])],2),e._v(" "),s("p",[e._v("That’s the most basic usage of the core package.")]),e._v(" "),s("p",[e._v("Next, we can try out using core JavaScript API to add next/previous buttons with only few lines of code:")]),e._v(" "),s("ExampleSection",{attrs:{title:"Advanced Tiny Carousel Core example",description:"A bit more advanced usage example of @frsource/tiny-carousel-core library","default-tab":"js"}},[s("template",{slot:"html"},[e._v('\n<nav>\n  <button type="button" class="first">&lt;&lt;</button>\n  <button type="button" class="prev">&lt;</button>\n  <button type="button" class="next">&gt;</button>\n  <button type="button" class="last">&gt;&gt;</button>\n</nav>\n'),e._v('\n<ul>\n  <li>\n    <img src="https://picsum.photos/seed/1/800/600">\n  </li>\n  <li>\n    <img src="https://picsum.photos/seed/2/800/600">\n  </li>\n  <li>\n    <img src="https://picsum.photos/seed/3/800/600">\n  </li>\n  <li>\n    <img src="https://picsum.photos/seed/4/800/600">\n  </li>\n  <li>\n    <img src="https://picsum.photos/seed/5/800/600">\n  </li>\n  <li>\n    <img src="https://picsum.photos/seed/6/800/600">\n  </li>\n</ul>\n  ')]),e._v(" "),s("template",{slot:"scss"},[s("div",[e._v('\n@import "https://cdn.skypack.dev/@frsource/tiny-carousel-core/dist/index.css";\n'),e._v("\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n")])]),e._v(" "),s("template",{slot:"js"},[e._v("\nimport { TinyCarousel } from 'https://cdn.skypack.dev/@frsource/tiny-carousel-core';\n"),e._v("\nconst carousel = new TinyCarousel(\n  document.querySelector('ul')\n)\n  .init();\n"),e._v("\n// using .goTo method to go to the slide with an exact index number\ndocument.querySelector('.first')\n  .addEventListener(\n    'click',\n    () => carousel.goTo(0)\n  );\n"),e._v("\n// using .prev method\ndocument.querySelector('.prev')\n  .addEventListener(\n    'click',\n    () => carousel.prev()\n  );\n"),e._v("\n// using .next method\ndocument.querySelector('.next')\n  .addEventListener(\n    'click', \n    () => carousel.next()\n  );\n"),e._v("\n// passing negative number as an argument to the .goTo method will make it count slides from the end (-1 being the last slide)\ndocument.querySelector('.last')\n  .addEventListener(\n    'click', \n    () => carousel.goTo(-1)\n  );\n  ")])],2),e._v(" "),s("p",[e._v("In most cases, the same functionality can be obtained using proper Tiny Carousel plugin - we’ve got you covered! But, if you ever find yourself in a situation where you need to do something more custom - know that Tiny Carousel JavaScript API is there and is ready to be used! Read more in the "),s("a",{attrs:{href:"../../api-reference/core"}},[e._v("API docs for core package")]),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"plugin-autoplay"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugin-autoplay"}},[e._v("#")]),e._v(" Plugin Autoplay")]),e._v(" "),s("p",[e._v("This plugin adds autoplay feature to the Tiny Carousel. Also, it extends Tiny Carousel instance with "),s("RouterLink",{attrs:{to:"/api-reference/plugin-autoplay/#instance-methods"}},[e._v("additional methods")]),e._v(" for event handling.")],1),e._v(" "),s("p",[e._v("More detailed info about the plugin’s API can be found "),s("a",{attrs:{href:"../../api-reference/plugin-autoplay"}},[e._v("here")]),e._v(".")]),e._v(" "),s("p",[e._v("To install the plugin use one of the commands below:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# yarn")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" @frsource/tiny-carousel-plugin-autoplay\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# npm")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" @frsource/tiny-carousel-plugin-autoplay\n")])])]),s("p",[e._v("After installation, you need to add the plugin to your Tiny Carousel instance using "),s("RouterLink",{attrs:{to:"/api-reference/core/#carousel-use"}},[s("code",[e._v("carousel.use")]),e._v(" method")]),e._v(". Provide it with the options object to override the default configuration.")],1),e._v(" "),s("p",[e._v("For reference and information about the defaults, please see "),s("RouterLink",{attrs:{to:"/api-reference/plugin-autoplay/#pluginconfig"}},[s("code",[e._v("PluginConfig")]),e._v(" documentation page")]),e._v(" or have a look at the example below:")],1),e._v(" "),s("ExampleSection",{attrs:{title:"Example on how to use Tiny Carousel Autoplay",description:"This example code shows how to use 'carousel.play()' and `carousel.pause()` methods coming from @frsource/tiny-carousel-plugin-autoplay library","default-tab":"js"}},[s("template",{slot:"html"},[e._v('\n<button class="play" type="button">PLAY</button>\n<button class="pause" type="button">PAUSE</button>\n'),e._v('\n<ul>\n  <li>\n    <img src="https://picsum.photos/seed/1/800/600">\n  </li>\n  <li>\n    <img src="https://picsum.photos/seed/2/800/600">\n  </li>\n  <li>\n    <img src="https://picsum.photos/seed/3/800/600">\n  </li>\n  <li>\n    <img src="https://picsum.photos/seed/4/800/600">\n  </li>\n</ul>\n  ')]),e._v(" "),s("template",{slot:"scss"},[s("div",[e._v('\n@import "https://cdn.skypack.dev/@frsource/tiny-carousel-core/dist/index.css";\n'),e._v("\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n")])]),e._v(" "),s("template",{slot:"js"},[e._v("\nimport { TinyCarousel } from 'https://cdn.skypack.dev/@frsource/tiny-carousel-core';\nimport { pluginAutoplay } from 'https://cdn.skypack.dev/@frsource/tiny-carousel-plugin-autoplay';\n"),e._v("\nconst carousel = new TinyCarousel(\n  document.querySelector('ul')\n)\n  .use(pluginAutoplay, {\n    autoplayTimeout: 3000,\n    // [ms] default value is 4000\n    autoplayImmediate: false,\n    // whether to change first slide right after the play action or after a timeout, default value: false\n    pauseOnHover: true,\n    // should the carousel be paused on hover, default value: true\n  })\n  .init()\n  // to autoplay the carousel on page load\n  // just uncomment the line below:\n  // .play();\n"),e._v("\ndocument.querySelector('.play')\n  .addEventListener('click',\n    () => carousel.play()\n  );\n"),e._v("\ndocument.querySelector('.pause')\n  .addEventListener('click',\n    () => carousel.pause()\n  );\n  ")])],2),e._v(" "),s("h2",{attrs:{id:"plugin-custom-events"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugin-custom-events"}},[e._v("#")]),e._v(" Plugin Custom Events")]),e._v(" "),s("p",[e._v("This plugin adds "),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent",target:"_blank",rel:"noopener noreferrer"}},[e._v("CustomEvents"),s("OutboundLink")],1),e._v(" for the most important methods of the "),s("a",{attrs:{href:"../../api-reference/core"}},[e._v("Core Tiny Carousel API")]),e._v(". Also, it extends Tiny Carousel instance with additional methods for the event handling.")]),e._v(" "),s("p",[e._v("API Reference and the list of all events raised by this plugin you will find "),s("a",{attrs:{href:"../../api-reference/plugin-custom-events"}},[e._v("here")]),e._v(".")]),e._v(" "),s("p",[e._v("Let’s try to use it - first you need to install the plugin using one of a package managers:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# yarn")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" @frsource/tiny-carousel-plugin-custom-events\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# npm")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" @frsource/tiny-carousel-plugin-custom-events\n")])])]),s("p",[e._v("Then, add it to your carousel instance using "),s("RouterLink",{attrs:{to:"/api-reference/core/#carousel-use"}},[s("code",[e._v("carousel.use")]),e._v(" method")]),e._v(". That’s it, now you can use methods newly added by the Tiny Carousel Plugin Custom Events, like "),s("code",[e._v("carousel.on()")]),e._v(" on the example below:")],1),e._v(" "),s("ExampleSection",{attrs:{title:"Example on how to use Tiny Carousel Custom Events",description:"This example code shows how to use 'carousel.on()' method coming from @frsource/tiny-carousel-plugin-custom-events library","default-tab":"js"}},[s("template",{slot:"html"},[e._v("\n<h3>Tiny Carousel is not loaded yet ⏳</h3>\n"),e._v('\n<ul>\n  <li>\n    <img src="https://picsum.photos/seed/1/800/600">\n  </li>\n  <li>\n    <img src="https://picsum.photos/seed/2/800/600">\n  </li>\n  <li>\n    <img src="https://picsum.photos/seed/3/800/600">\n  </li>\n  <li>\n    <img src="https://picsum.photos/seed/4/800/600">\n  </li>\n</ul>\n  ')]),e._v(" "),s("template",{slot:"scss"},[s("div",[e._v('\n@import "https://cdn.skypack.dev/@frsource/tiny-carousel-core/dist/index.css";\n'),e._v("\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n")])]),e._v(" "),s("template",{slot:"js"},[e._v("\nimport { TinyCarousel } from 'https://cdn.skypack.dev/@frsource/tiny-carousel-core';\nimport { pluginCustomEvents } from 'https://cdn.skypack.dev/@frsource/tiny-carousel-plugin-custom-events';\n"),e._v("\nconst carousel = new TinyCarousel(\n  document.querySelector('ul')\n)\n  .use(pluginCustomEvents)\n/**\n * Let's add custom event handler to\n * show the message \n * after the carousel is loaded\n **/\n  .on('after:init', () => {\n    document.querySelector('h3')\n      .textContent = 'Carousel has been loaded! 🚀';\n  })\n  .init();\n  ")])],2),e._v(" "),s("h2",{attrs:{id:"plugin-mouse-drag"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugin-mouse-drag"}},[e._v("#")]),e._v(" Plugin Mouse Drag")]),e._v(" "),s("p",[e._v("This plugin adds drag/swipe support for mouse users (especially on desktop).")]),e._v(" "),s("p",[e._v("API Reference and the list of all events raised by this plugin you will find "),s("a",{attrs:{href:"../../api-reference/plugin-mouse-drag"}},[e._v("here")]),e._v(".")]),e._v(" "),s("p",[e._v("To use this package you need to import "),s("strong",[e._v("both the SASS/CSS and Typescript/JavaScript files")]),e._v(".")]),e._v(" "),s("p",[e._v("Let’s try to use it - first you need to install the plugin using one of a package managers:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# yarn")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" @frsource/tiny-carousel-plugin-mouse-drag\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# npm")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" @frsource/tiny-carousel-plugin-mouse-drag\n")])])]),s("p",[e._v("After you add it to your carousel instance (using "),s("RouterLink",{attrs:{to:"/api-reference/core/#carousel-use"}},[s("code",[e._v("carousel.use")]),e._v(" method")]),e._v(") and "),s("RouterLink",{attrs:{to:"/api-reference/plugin-mouse-drag/#styling"}},[e._v("import CSS/Sass styling")]),e._v(" the plugin will start working immediately! From now on, every desktop/mouse user will be able to swipe through the slides by clicking & dragging across the carousel.")],1),e._v(" "),s("p",[e._v("See the example below on the device with mouse connected to see the plugin in action:")]),e._v(" "),s("ExampleSection",{attrs:{title:"Example on how to use Tiny Carousel Mouse Drag",description:"This example code shows @frsource/tiny-carousel-plugin-mouse-drag library in action - now mouse users can swipe the carousel","default-tab":"js"}},[s("template",{slot:"html"},[e._v("\n<h3>The carousel is now swipeable, even on desktop 🖐</h3>\n"),e._v('\n<ul>\n  <li>\n    <img src="https://picsum.photos/seed/1/800/600">\n  </li>\n  <li>\n    <img src="https://picsum.photos/seed/2/800/600">\n  </li>\n  <li>\n    <img src="https://picsum.photos/seed/3/800/600">\n  </li>\n  <li>\n    <img src="https://picsum.photos/seed/4/800/600">\n  </li>\n</ul>\n  ')]),e._v(" "),s("template",{slot:"scss"},[s("div",[e._v('\n@import "https://cdn.skypack.dev/@frsource/tiny-carousel-core/dist/index.css";\n@import "https://cdn.skypack.dev/@frsource/tiny-carousel-plugin-mouse-drag/dist/index.css";\n'),e._v("\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n")])]),e._v(" "),s("template",{slot:"js"},[e._v("\nimport { TinyCarousel } from 'https://cdn.skypack.dev/@frsource/tiny-carousel-core';\nimport { pluginMouseDrag } from 'https://cdn.skypack.dev/@frsource/tiny-carousel-plugin-mouse-drag';\n"),e._v("\nconst carousel = new TinyCarousel(\n  document.querySelector('ul')\n)\n  .use(\n    pluginMouseDrag,\n    // you can pass along an configuration object\n    // for all options please refer to:\n    // https://www.frsource.org/tiny-carousel/api-reference/plugin-mouse-drag/#pluginconfig\n    // uncomment the line below to try out\n    // swiping with smaller gravity\n    // { mouseDragMomentumGravity: 0.5 }\n  )\n  .init();\n  ")])],2),e._v(" "),s("h2",{attrs:{id:"plugin-scroll-snap-fallback"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugin-scroll-snap-fallback"}},[e._v("#")]),e._v(" Plugin Scroll Snap Fallback")]),e._v(" "),s("p",[e._v("Even though the browser support of the "),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scroll_Snap",target:"_blank",rel:"noopener noreferrer"}},[e._v("CSS scroll-snap feature"),s("OutboundLink")],1),e._v(" is pretty good:")]),e._v(" "),s("CanIUseSection",{attrs:{feature:"css-snappoints"}}),e._v(" "),s("p",[e._v("You might sometimes find yourself in a situation where you need to support users of the older browsers. "),s("strong",[e._v("Scroll Snap Fallback Plugin")]),e._v(" handles exactly this case! It provides the most simplistic polyfill of "),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scroll_Snap",target:"_blank",rel:"noopener noreferrer"}},[e._v("CSS scroll-snap feature"),s("OutboundLink")],1),e._v(", so you’ve got your users covered!")]),e._v(" "),s("p",[e._v("First install it via your favorite package manager:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# yarn")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" @frsource/tiny-carousel-plugin-scroll-snap-fallback\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# npm")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" @frsource/tiny-carousel-plugin-scroll-snap-fallback\n")])])]),s("p",[e._v("Then, add it to your carousel instance using "),s("RouterLink",{attrs:{to:"/api-reference/core/#carousel-use"}},[s("code",[e._v("carousel.use")]),e._v(" method")]),e._v(", as shown on the example below:")],1),e._v(" "),s("ExampleSection",{attrs:{title:"Example on how to use Tiny Carousel Scroll Snap Fallback",description:"This example code shows how to use @frsource/tiny-carousel-plugin-scroll-snap-fallback library in your project","default-tab":"js"}},[s("template",{slot:"html"},[e._v("\n\x3c!-- This example works on IE9 and Chrome 69- --\x3e\n\x3c!-- You can navigate through slides using: scroll, arrows (first focus carousel with a click) or (on touch devices) swiping --\x3e\n"),e._v('\n<ul>\n  <li>\n    <img src="https://picsum.photos/seed/1/800/600">\n  </li>\n  <li>\n    <img src="https://picsum.photos/seed/2/800/600">\n  </li>\n  <li>\n    <img src="https://picsum.photos/seed/3/800/600">\n  </li>\n  <li>\n    <img src="https://picsum.photos/seed/4/800/600">\n  </li>\n</ul>\n  ')]),e._v(" "),s("template",{slot:"scss"},[s("div",[e._v('\n@import "https://cdn.skypack.dev/@frsource/tiny-carousel-core/dist/index.css";\n'),e._v("\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n")])]),e._v(" "),s("template",{slot:"js"},[e._v("\nimport { TinyCarousel } from 'https://cdn.skypack.dev/@frsource/tiny-carousel-core';\nimport { pluginScrollSnapFallback } from 'https://cdn.skypack.dev/@frsource/tiny-carousel-plugin-scroll-snap-fallback';\n"),e._v("\nconst carousel = new TinyCarousel(\n  document.querySelector('ul')\n)\n  .use(\n    pluginScrollSnapFallback,\n    // you can pass along an configuration object\n    // for all options please refer to:\n    // https://www.frsource.org/tiny-carousel/api-reference/plugin-scroll-snap-fallback/#pluginconfig\n    //{ force: true }\n  )\n  .init();\n  ")])],2),e._v(" "),s("p",[e._v("That’s it - the polyfill will be automatically added to your carousel instance whenever "),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scroll_Snap",target:"_blank",rel:"noopener noreferrer"}},[e._v("CSS scroll-snap feature"),s("OutboundLink")],1),e._v(" is not supported!")]),e._v(" "),s("p",[e._v("For information about plugin options, please head to "),s("RouterLink",{attrs:{to:"/api-reference/plugin-scroll-snap-fallback/#config"}},[e._v("it`s API reference")]),e._v(".")],1),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("Help us improve the documentation")]),e._v(" "),s("p",[e._v("Hey, it seems you’ve made it to the very bottom of our usage guide! Thank you for taking such interest in our library - we hope it will make your journey easier! ✈️")]),e._v(" "),s("p",[e._v('However, if you feel that something could be described better or if you saw any typo/error please feel free to use the "Help us improve this page on GitHub" button placed on the very bottom of this page. Don’t hesitate to write a suggestion in the "issues" tab or file a PR with a fix!')]),e._v(" "),s("p",[e._v("Thank you! Any help is kindly appreciated 🙏")])]),e._v(" "),s("p",[e._v("For further information about the possible configuration options and useful methods, please have a look at our "),s("a",{attrs:{href:"../../api-reference"}},[e._v("API reference")]),e._v(".")])],1)}),[],!1,null,null,null);t.default=o.exports}}]);