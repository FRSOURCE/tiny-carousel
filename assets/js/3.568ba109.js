(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{323:function(t,n,e){"use strict";e.d(n,"d",(function(){return r})),e.d(n,"a",(function(){return u})),e.d(n,"i",(function(){return a})),e.d(n,"f",(function(){return l})),e.d(n,"g",(function(){return o})),e.d(n,"h",(function(){return c})),e.d(n,"b",(function(){return f})),e.d(n,"e",(function(){return h})),e.d(n,"k",(function(){return p})),e.d(n,"l",(function(){return g})),e.d(n,"c",(function(){return v})),e.d(n,"j",(function(){return m}));e(48),e(78),e(325),e(327),e(181),e(77),e(105),e(35);var r=/#.*$/,i=/\.(md|html)$/,u=/\/$/,a=/^[a-z]+:/i;function s(t){return decodeURI(t).replace(r,"").replace(i,"")}function l(t){return a.test(t)}function o(t){return/^mailto:/.test(t)}function c(t){return/^tel:/.test(t)}function f(t){if(l(t))return t;var n=t.match(r),e=n?n[0]:"",i=s(t);return u.test(i)?t:i+".html"+e}function h(t,n){var e=decodeURIComponent(t.hash),i=function(t){var n=t.match(r);if(n)return n[0]}(n);return(!i||e===i)&&s(t.path)===s(n)}function p(t,n,e){if(l(n))return{type:"external",path:n};e&&(n=function(t,n,e){var r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return n+t;var i=n.split("/");e&&i[i.length-1]||i.pop();for(var u=t.replace(/^\//,"").split("/"),a=0;a<u.length;a++){var s=u[a];".."===s?i.pop():"."!==s&&i.push(s)}""!==i[0]&&i.unshift("");return i.join("/")}(n,e));for(var r=s(n),i=0;i<t.length;i++)if(s(t[i].regularPath)===r)return Object.assign({},t[i],{type:"page",path:f(t[i].path)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(n,'"')),{}}function g(t,n,e,r){var i=e.pages,u=e.themeConfig,a=r&&u.locales&&u.locales[r]||u;if("auto"===(t.frontmatter.sidebar||a.sidebar||u.sidebar))return d(t);var s=a.sidebar||u.sidebar;if(s){var l=function(t,n){if(Array.isArray(n))return{base:"/",config:n};for(var e in n)if(0===(r=t,/(\.html|\/)$/.test(r)?r:r+"/").indexOf(encodeURI(e)))return{base:e,config:n[e]};var r;return{}}(n,s),o=l.base,c=l.config;return"auto"===c?d(t):c?c.map((function(t){return function t(n,e,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if("string"==typeof n)return p(e,n,r);if(Array.isArray(n))return Object.assign(p(e,n[0],r),{title:n[1]});var u=n.children||[];return 0===u.length&&n.path?Object.assign(p(e,n.path,r),{title:n.title}):{type:"group",path:n.path,title:n.title,sidebarDepth:n.sidebarDepth,initialOpenGroupIndex:n.initialOpenGroupIndex,children:u.map((function(n){return t(n,e,r,i+1)})),collapsable:!1!==n.collapsable}}(t,i,o)})):[]}return[]}function d(t){var n=v(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:n.map((function(n){return{type:"auto",title:n.title,basePath:t.path,path:t.path+"#"+n.slug,children:n.children||[]}}))}]}function v(t){var n;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?n=t:n&&(n.children||(n.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}function m(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},324:function(t,n,e){"use strict";var r=e(4),i=e(328);r({target:"String",proto:!0,forced:e(329)("link")},{link:function(t){return i(this,"a","href",t)}})},325:function(t,n,e){"use strict";var r=e(176),i=e(8),u=e(21),a=e(22),s=e(26),l=e(47),o=e(177),c=e(178);r("match",(function(t,n,e){return[function(n){var e=s(this),r=null==n?void 0:l(n,t);return r?r.call(n,e):new RegExp(n)[t](a(e))},function(t){var r=i(this),s=a(t),l=e(n,r,s);if(l.done)return l.value;if(!r.global)return c(r,s);var f=r.unicode;r.lastIndex=0;for(var h,p=[],g=0;null!==(h=c(r,s));){var d=a(h[0]);p[g]=d,""===d&&(r.lastIndex=o(s,u(r.lastIndex),f)),g++}return 0===g?null:p}]}))},326:function(t,n,e){"use strict";e(324),e(104);var r=e(323),i={name:"NavLink",props:{item:{required:!0}},computed:{link:function(){return Object(r.b)(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some((function(n){return n===t.link})):"/"===this.link},isNonHttpURI:function(){return Object(r.g)(this.link)||Object(r.h)(this.link)},isBlankTarget:function(){return"_blank"===this.target},isInternal:function(){return!Object(r.f)(this.link)&&!this.isBlankTarget},target:function(){return this.isNonHttpURI?null:this.item.target?this.item.target:Object(r.f)(this.link)?"_blank":""},rel:function(){return this.isNonHttpURI||!1===this.item.rel?null:this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":null}},methods:{focusoutAction:function(){this.$emit("focusout")}}},u=e(46),a=Object(u.a)(i,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.isInternal?e("RouterLink",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(n){return t.focusoutAction.apply(null,arguments)}}},[t._v("\n  "+t._s(t.item.text)+"\n")]):e("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.target,rel:t.rel},on:{focusout:t.focusoutAction}},[t._v("\n  "+t._s(t.item.text)+"\n  "),t.isBlankTarget?e("OutboundLink"):t._e()],1)}),[],!1,null,null,null);n.a=a.exports},327:function(t,n,e){"use strict";var r=e(176),i=e(179),u=e(8),a=e(26),s=e(106),l=e(177),o=e(21),c=e(22),f=e(47),h=e(178),p=e(79),g=e(180),d=e(3),v=g.UNSUPPORTED_Y,m=[].push,b=Math.min;r("split",(function(t,n,e){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,e){var r=c(a(this)),u=void 0===e?4294967295:e>>>0;if(0===u)return[];if(void 0===t)return[r];if(!i(t))return n.call(r,t,u);for(var s,l,o,f=[],h=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),g=0,d=new RegExp(t.source,h+"g");(s=p.call(d,r))&&!((l=d.lastIndex)>g&&(f.push(r.slice(g,s.index)),s.length>1&&s.index<r.length&&m.apply(f,s.slice(1)),o=s[0].length,g=l,f.length>=u));)d.lastIndex===s.index&&d.lastIndex++;return g===r.length?!o&&d.test("")||f.push(""):f.push(r.slice(g)),f.length>u?f.slice(0,u):f}:"0".split(void 0,0).length?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,e){var i=a(this),u=null==n?void 0:f(n,t);return u?u.call(n,i,e):r.call(c(i),n,e)},function(t,i){var a=u(this),f=c(t),p=e(r,a,f,i,r!==n);if(p.done)return p.value;var g=s(a,RegExp),d=a.unicode,m=(a.ignoreCase?"i":"")+(a.multiline?"m":"")+(a.unicode?"u":"")+(v?"g":"y"),k=new g(v?"^(?:"+a.source+")":a,m),x=void 0===i?4294967295:i>>>0;if(0===x)return[];if(0===f.length)return null===h(k,f)?[f]:[];for(var I=0,y=0,j=[];y<f.length;){k.lastIndex=v?0:y;var O,w=h(k,v?f.slice(y):f);if(null===w||(O=b(o(k.lastIndex+(v?y:0)),f.length))===I)y=l(f,y,d);else{if(j.push(f.slice(I,y)),j.length===x)return j;for(var _=1;_<=w.length-1;_++)if(j.push(w[_]),j.length===x)return j;y=I=O}}return j.push(f.slice(I)),j}]}),!!d((function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var e="ab".split(t);return 2!==e.length||"a"!==e[0]||"b"!==e[1]})),v)},328:function(t,n,e){var r=e(26),i=e(22),u=/"/g;t.exports=function(t,n,e,a){var s=i(r(t)),l="<"+n;return""!==e&&(l+=" "+e+'="'+i(a).replace(u,"&quot;")+'"'),l+">"+s+"</"+n+">"}},329:function(t,n,e){var r=e(3);t.exports=function(t){return r((function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3}))}},349:function(t,n,e){},378:function(t,n,e){"use strict";e(349)},389:function(t,n,e){"use strict";e.r(n);var r={name:"CanIUseSection",components:{NavLink:e(326).a},props:{feature:{type:String,required:!0}},computed:{href:function(){return"https://caniuse.com/#feat="+this.feature},title:function(){return"Click here to read more about support for the "+this.feature+" on CanIUse.com"},jpg:function(){return"https://caniuse.bitsofco.de/image/"+this.feature+".jpg"},png:function(){return"https://caniuse.bitsofco.de/image/"+this.feature+".png"},webp:function(){return"https://caniuse.bitsofco.de/image/"+this.feature+".webp"},alt:function(){return"Data on support for the "+this.feature+" feature across the major browsers from caniuse.com"},linkItem:function(){return{text:this.title,link:this.href}}}},i=(e(378),e(46)),u=Object(i.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",[e("a",{staticClass:"link",attrs:{href:t.href,title:t.title}},[e("picture",[e("source",{attrs:{type:"image/webp",srcset:t.webp}}),t._v(" "),e("source",{attrs:{type:"image/png",srcset:t.png}}),t._v(" "),e("img",{attrs:{src:t.jpg,alt:t.alt}})]),t._v(" "),e("small",[e("NavLink",{attrs:{item:t.linkItem}})],1)])])}),[],!1,null,"20001344",null);n.default=u.exports}}]);