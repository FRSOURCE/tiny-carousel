(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{350:function(t,e,a){},379:function(t,e,a){"use strict";a(350)},390:function(t,e,a){"use strict";a.r(e);var r,s=a(44),n=a(33),i=(a(82),a(10),a(183),a(36),a(37),void 0),c=function(){r=document.createElement("script"),i=new Promise((function(t){return r.addEventListener("load",(function(){t()}))})),r.src="https://static.codepen.io/assets/embed/ei.js",r.async=!0;var t=document.head||document.getElementsByTagName("head")[0];return t.insertBefore(r,t.firstChild),i},u={name:"ExampleSection",props:{title:{type:String,required:!0},description:{type:String,required:!0},defaultTab:{type:String,default:function(){return"html"}},tags:{type:Array,default:function(){return[]}},height:{type:String,default:"400px"},scripts:{type:Array,default:function(){return[]}}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i||c();case 2:window.__CPEmbed("."+t.className);case 3:case"end":return e.stop()}}),e)})))()},computed:{preparsedDefaultTab:function(){return this.defaultTab+",result"},className:function(){return"codepen-"+this._uid},parsedTags:function(){return["tiny-carousel","@frsource/tiny-carousel"].concat(Object(s.a)(this.tags))},prefilDataStringified:function(){return JSON.stringify({title:this.title,description:this.description,tags:this.parsedTags,html_classes:[],head:"<meta name='viewport' content='width=device-width, initial-scale=1'>",stylesheets:"https://unpkg.com/water.css@2.0.0/out/water.min.css",scripts:this.scripts})}}},o=(a(379),a(46)),d=Object(o.a)(u,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{style:{height:t.height}},[a("div",{class:t.className,style:{height:t.height,overflow:"auto"},attrs:{"data-prefill":t.prefilDataStringified,"data-height":t.height,"data-active-tab-color":"rgb(241, 80, 160)","data-border":"none","data-default-tab":t.preparsedDefaultTab,"data-editable":"true","data-preview":"true"}},[t.$slots.html?a("pre",{attrs:{"data-lang":"html"}},[t._t("html")],2):t._e(),t._v(" "),t.$slots.pug?a("pre",{attrs:{"data-lang":"pug"}},[t._t("pug")],2):t._e(),t._v(" "),t.$slots.scss?a("pre",{attrs:{"data-lang":"scss"}},[t._t("scss")],2):t._e(),t._v(" "),t.$slots.js?a("pre",{attrs:{"data-lang":"js"}},[t._t("js")],2):t._e(),t._v(" "),t.$slots.typescript?a("pre",{attrs:{"data-lang":"typescript"}},[t._t("typescript")],2):t._e()])])}),[],!1,null,"919e2166",null);e.default=d.exports}}]);