(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{316:function(t,n,e){"use strict";e.d(n,"d",(function(){return r})),e.d(n,"a",(function(){return u})),e.d(n,"i",(function(){return a})),e.d(n,"f",(function(){return o})),e.d(n,"g",(function(){return l})),e.d(n,"h",(function(){return c})),e.d(n,"b",(function(){return f})),e.d(n,"e",(function(){return h})),e.d(n,"k",(function(){return p})),e.d(n,"l",(function(){return g})),e.d(n,"c",(function(){return v})),e.d(n,"j",(function(){return m}));e(46),e(73),e(318),e(320),e(174),e(72),e(100),e(33);var r=/#.*$/,i=/\.(md|html)$/,u=/\/$/,a=/^[a-z]+:/i;function s(t){return decodeURI(t).replace(r,"").replace(i,"")}function o(t){return a.test(t)}function l(t){return/^mailto:/.test(t)}function c(t){return/^tel:/.test(t)}function f(t){if(o(t))return t;var n=t.match(r),e=n?n[0]:"",i=s(t);return u.test(i)?t:i+".html"+e}function h(t,n){var e=decodeURIComponent(t.hash),i=function(t){var n=t.match(r);if(n)return n[0]}(n);return(!i||e===i)&&s(t.path)===s(n)}function p(t,n,e){if(o(n))return{type:"external",path:n};e&&(n=function(t,n,e){var r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return n+t;var i=n.split("/");e&&i[i.length-1]||i.pop();for(var u=t.replace(/^\//,"").split("/"),a=0;a<u.length;a++){var s=u[a];".."===s?i.pop():"."!==s&&i.push(s)}""!==i[0]&&i.unshift("");return i.join("/")}(n,e));for(var r=s(n),i=0;i<t.length;i++)if(s(t[i].regularPath)===r)return Object.assign({},t[i],{type:"page",path:f(t[i].path)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(n,'"')),{}}function g(t,n,e,r){var i=e.pages,u=e.themeConfig,a=r&&u.locales&&u.locales[r]||u;if("auto"===(t.frontmatter.sidebar||a.sidebar||u.sidebar))return d(t);var s=a.sidebar||u.sidebar;if(s){var o=function(t,n){if(Array.isArray(n))return{base:"/",config:n};for(var e in n)if(0===(r=t,/(\.html|\/)$/.test(r)?r:r+"/").indexOf(encodeURI(e)))return{base:e,config:n[e]};var r;return{}}(n,s),l=o.base,c=o.config;return"auto"===c?d(t):c?c.map((function(t){return function t(n,e,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if("string"==typeof n)return p(e,n,r);if(Array.isArray(n))return Object.assign(p(e,n[0],r),{title:n[1]});var u=n.children||[];return 0===u.length&&n.path?Object.assign(p(e,n.path,r),{title:n.title}):{type:"group",path:n.path,title:n.title,sidebarDepth:n.sidebarDepth,initialOpenGroupIndex:n.initialOpenGroupIndex,children:u.map((function(n){return t(n,e,r,i+1)})),collapsable:!1!==n.collapsable}}(t,i,l)})):[]}return[]}function d(t){var n=v(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:n.map((function(n){return{type:"auto",title:n.title,basePath:t.path,path:t.path+"#"+n.slug,children:n.children||[]}}))}]}function v(t){var n;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?n=t:n&&(n.children||(n.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}function m(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},317:function(t,n,e){"use strict";var r=e(4),i=e(321);r({target:"String",proto:!0,forced:e(322)("link")},{link:function(t){return i(this,"a","href",t)}})},318:function(t,n,e){"use strict";var r=e(169),i=e(7),u=e(20),a=e(22),s=e(25),o=e(170),l=e(171);r("match",(function(t,n,e){return[function(n){var e=s(this),r=null==n?void 0:n[t];return void 0!==r?r.call(n,e):new RegExp(n)[t](a(e))},function(t){var r=i(this),s=a(t),c=e(n,r,s);if(c.done)return c.value;if(!r.global)return l(r,s);var f=r.unicode;r.lastIndex=0;for(var h,p=[],g=0;null!==(h=l(r,s));){var d=a(h[0]);p[g]=d,""===d&&(r.lastIndex=o(s,u(r.lastIndex),f)),g++}return 0===g?null:p}]}))},319:function(t,n,e){"use strict";e(317),e(99);var r=e(316),i={name:"NavLink",props:{item:{required:!0}},computed:{link:function(){return Object(r.b)(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some((function(n){return n===t.link})):"/"===this.link},isNonHttpURI:function(){return Object(r.g)(this.link)||Object(r.h)(this.link)},isBlankTarget:function(){return"_blank"===this.target},isInternal:function(){return!Object(r.f)(this.link)&&!this.isBlankTarget},target:function(){return this.isNonHttpURI?null:this.item.target?this.item.target:Object(r.f)(this.link)?"_blank":""},rel:function(){return this.isNonHttpURI||!1===this.item.rel?null:this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":null}},methods:{focusoutAction:function(){this.$emit("focusout")}}},u=e(45),a=Object(u.a)(i,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.isInternal?e("RouterLink",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(n){return t.focusoutAction(n)}}},[t._v("\n  "+t._s(t.item.text)+"\n")]):e("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.target,rel:t.rel},on:{focusout:t.focusoutAction}},[t._v("\n  "+t._s(t.item.text)+"\n  "),t.isBlankTarget?e("OutboundLink"):t._e()],1)}),[],!1,null,null,null);n.a=a.exports},320:function(t,n,e){"use strict";var r=e(169),i=e(172),u=e(7),a=e(25),s=e(101),o=e(170),l=e(20),c=e(22),f=e(171),h=e(74),p=e(173),g=e(3),d=p.UNSUPPORTED_Y,v=[].push,m=Math.min;r("split",(function(t,n,e){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,e){var r=c(a(this)),u=void 0===e?4294967295:e>>>0;if(0===u)return[];if(void 0===t)return[r];if(!i(t))return n.call(r,t,u);for(var s,o,l,f=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),g=0,d=new RegExp(t.source,p+"g");(s=h.call(d,r))&&!((o=d.lastIndex)>g&&(f.push(r.slice(g,s.index)),s.length>1&&s.index<r.length&&v.apply(f,s.slice(1)),l=s[0].length,g=o,f.length>=u));)d.lastIndex===s.index&&d.lastIndex++;return g===r.length?!l&&d.test("")||f.push(""):f.push(r.slice(g)),f.length>u?f.slice(0,u):f}:"0".split(void 0,0).length?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,e){var i=a(this),u=null==n?void 0:n[t];return void 0!==u?u.call(n,i,e):r.call(c(i),n,e)},function(t,i){var a=u(this),h=c(t),p=e(r,a,h,i,r!==n);if(p.done)return p.value;var g=s(a,RegExp),v=a.unicode,b=(a.ignoreCase?"i":"")+(a.multiline?"m":"")+(a.unicode?"u":"")+(d?"g":"y"),k=new g(d?"^(?:"+a.source+")":a,b),x=void 0===i?4294967295:i>>>0;if(0===x)return[];if(0===h.length)return null===f(k,h)?[h]:[];for(var I=0,y=0,j=[];y<h.length;){k.lastIndex=d?0:y;var O,w=f(k,d?h.slice(y):h);if(null===w||(O=m(l(k.lastIndex+(d?y:0)),h.length))===I)y=o(h,y,v);else{if(j.push(h.slice(I,y)),j.length===x)return j;for(var _=1;_<=w.length-1;_++)if(j.push(w[_]),j.length===x)return j;y=I=O}}return j.push(h.slice(I)),j}]}),!!g((function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var e="ab".split(t);return 2!==e.length||"a"!==e[0]||"b"!==e[1]})),d)},321:function(t,n,e){var r=e(25),i=e(22),u=/"/g;t.exports=function(t,n,e,a){var s=i(r(t)),o="<"+n;return""!==e&&(o+=" "+e+'="'+i(a).replace(u,"&quot;")+'"'),o+">"+s+"</"+n+">"}},322:function(t,n,e){var r=e(3);t.exports=function(t){return r((function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3}))}},342:function(t,n,e){},371:function(t,n,e){"use strict";e(342)},382:function(t,n,e){"use strict";e.r(n);var r={name:"CanIUseSection",components:{NavLink:e(319).a},props:{feature:{type:String,required:!0}},computed:{href:function(){return"https://caniuse.com/#feat="+this.feature},title:function(){return"Click here to read more about support for the "+this.feature+" on CanIUse.com"},jpg:function(){return"https://caniuse.bitsofco.de/image/"+this.feature+".jpg"},png:function(){return"https://caniuse.bitsofco.de/image/"+this.feature+".png"},webp:function(){return"https://caniuse.bitsofco.de/image/"+this.feature+".webp"},alt:function(){return"Data on support for the "+this.feature+" feature across the major browsers from caniuse.com"},linkItem:function(){return{text:this.title,link:this.href}}}},i=(e(371),e(45)),u=Object(i.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",[e("a",{staticClass:"link",attrs:{href:t.href,title:t.title}},[e("picture",[e("source",{attrs:{type:"image/webp",srcset:t.webp}}),t._v(" "),e("source",{attrs:{type:"image/png",srcset:t.png}}),t._v(" "),e("img",{attrs:{src:t.jpg,alt:t.alt}})]),t._v(" "),e("small",[e("NavLink",{attrs:{item:t.linkItem}})],1)])])}),[],!1,null,"20001344",null);n.default=u.exports}}]);