!function(t,i){"object"==typeof exports&&"undefined"!=typeof module?i(exports,require("@frsource/tiny-carousel-utils")):"function"==typeof define&&define.amd?define(["exports","@frsource/tiny-carousel-utils"],i):i((t||self).tinyCarouselPluginCustomEvents={},t.tinyCarouselUtils)}(this,function(t,i){t.pluginCustomEvents={install:function(t){t.on=function(){return i.on.apply(void 0,[this.carouselElement].concat([].slice.call(arguments))),this},t.off=function(){return i.off.apply(void 0,[this.carouselElement].concat([].slice.call(arguments))),this},t.dispatch=function(){return i.dispatch.apply(void 0,[this.carouselElement].concat([].slice.call(arguments))),this};var e=t.init;t.init=function(){this.dispatch("before:init");var t=e.apply(this,[].slice.call(arguments));return this.dispatch("after:init"),t};var s=t.findPossibleItems;t.findPossibleItems=function(){this.dispatch("before:find-possible-items");var t=s.apply(this,[].slice.call(arguments));return this.dispatch("after:find-possible-items"),t};var o=t.goTo;t.goTo=function(){var t=[].slice.call(arguments),i={to:{index:t[0]}};this.dispatch("before:go-to",i);var e=o.apply(this,t);return e?this.dispatch("after:go-to",i):this.dispatch("error:go-to",Object.assign({},i,{cause:"overflow"})),e}}}});
//# sourceMappingURL=pluginCustomEvents.js.map
