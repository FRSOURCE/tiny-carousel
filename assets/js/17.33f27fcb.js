(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{375:function(e,t,n){"use strict";n.r(t);var s=n(41),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"usage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),n("p",[e._v("On this page you’ll find usage guides about every one of the packages that together make up a "),n("a",{attrs:{href:"../../ecosystem"}},[e._v("Tiny Carousel ecosystem")]),e._v(".")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),n("p",[e._v("Always try to use proper semantic tags/attributes when setting up a carousel to make it accessible. Read more in "),n("a",{attrs:{href:"https://www.w3.org/WAI/tutorials/carousels/",target:"_blank",rel:"noopener noreferrer"}},[e._v("W3C tutorial"),n("OutboundLink")],1),e._v(".")])]),e._v(" "),n("h2",{attrs:{id:"core"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#core"}},[e._v("#")]),e._v(" Core")]),e._v(" "),n("p",[e._v("The main package of the Tiny Carousel "),n("a",{attrs:{href:"../../ecosystem"}},[e._v("ecosystem")]),e._v(" which gives the most basic carousel API. Try it out before using additional plugins - it might be enough in the most basic scenarios.")]),e._v(" "),n("p",[e._v("See the example below which uses only a core package:")]),e._v(" "),n("ExampleSection",{attrs:{title:"Basic Tiny Carousel Core example",description:"The most simplistic usage example of @frsource/tiny-carousel-core package"}},[n("template",{slot:"pug"},[e._v("\n// You can navigate through slides using: scroll, arrows or (on touch devices) swiping\nul\n  each v, i in Array(6)\n    li\n      img(src=`https://picsum.photos/seed/${i+1}/800/600`)\n  ")]),e._v(" "),n("template",{slot:"scss"},[n("div",[e._v('\n@import "https://cdn.skypack.dev/@frsource/tiny-carousel-core/dist/index.css";\n'),e._v("\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n")])]),e._v(" "),n("template",{slot:"js"},[e._v("\nimport { TinyCarousel } from 'https://cdn.skypack.dev/@frsource/tiny-carousel-core';\n"),e._v("\nnew TinyCarousel(\n  document.querySelector('ul')\n)\n  .init();\n  ")])],2),e._v(" "),n("p",[e._v("That’s the most basic usage of the core package.")]),e._v(" "),n("p",[e._v("Next, we can try out using core JavaScript API to add next/previous buttons with only few lines of code:")]),e._v(" "),n("ExampleSection",{attrs:{title:"Advances Tiny Carousel Core example",description:"A bit more advanced usage example of @frsource/tiny-carousel-core library","default-tab":"js"}},[n("template",{slot:"pug"},[e._v('\nnav\n  button(type="button" class="first")\n    | <<\n  button(type="button" class="prev")\n    | <\n  button(type="button" class="next")\n    | >\n  button(type="button" class="last")\n    | >>\n'),e._v("\nul\n  each v, i in Array(6)\n    li\n      img(src=`https://picsum.photos/seed/${i+1}/800/600`)\n  ")]),e._v(" "),n("template",{slot:"scss"},[n("div",[e._v('\n@import "https://cdn.skypack.dev/@frsource/tiny-carousel-core/dist/index.css";\n'),e._v("\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n")])]),e._v(" "),n("template",{slot:"js"},[e._v("\nimport { TinyCarousel } from 'https://cdn.skypack.dev/@frsource/tiny-carousel-core';\n"),e._v("\nconst carousel = new TinyCarousel(\n  document.querySelector('ul')\n)\n  .init();\n"),e._v("\n// using .goTo method to go to the slide with an exact index number\ndocument.querySelector('.first')\n  .addEventListener(\n    'click',\n    () => carousel.goTo(0)\n  );\n"),e._v("\n// using .prev method\ndocument.querySelector('.prev')\n  .addEventListener(\n    'click',\n    () => carousel.prev()\n  );\n"),e._v("\n// using .next method\ndocument.querySelector('.next')\n  .addEventListener(\n    'click', \n    () => carousel.next()\n  );\n"),e._v("\n// passing negative number as an argument to the .goTo method will make it count slides from the end (-1 being the last slide)\ndocument.querySelector('.last')\n  .addEventListener(\n    'click', \n    () => carousel.goTo(-1)\n  );\n  ")])],2),e._v(" "),n("p",[e._v("In most cases, the same functionality can be obtained using proper Tiny Carousel plugins - we’ve got you covered! But, if you ever find yourself in a situation where you need to do something more custom - know that Tiny Carousel JavaScript API is there and is ready to be used! Read more in the "),n("a",{attrs:{href:"../../api-reference#core"}},[e._v("API docs for core package")]),e._v(".")]),e._v(" "),n("p",[e._v("For further information about the possible configuration options and useful methods, please have a look at our "),n("a",{attrs:{href:"../../api-reference"}},[e._v("API reference")]),e._v(".")])],1)}),[],!1,null,null,null);t.default=o.exports}}]);