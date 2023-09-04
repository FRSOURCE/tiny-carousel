import{_ as s,r as a,o as c,c as i,b as l,d as e,a as o,w as t}from"./app.ac9f4dba.js";const u={},p=e("h1",{id:"plugin-scroll-snap-fallback",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#plugin-scroll-snap-fallback","aria-hidden":"true"},"#"),l(" Plugin Scroll Snap Fallback")],-1),d={href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scroll_Snap",target:"_blank",rel:"noopener noreferrer"},f=e("a",{href:"#pluginconfig"},"force configuration property",-1),_=e("h2",{id:"pluginconfig",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#pluginconfig","aria-hidden":"true"},"#"),l(" PluginConfig")],-1),h=e("li",null,[e("p",null,[e("strong",null,"Properties:")]),l(),e("ul",null,[e("li",null,[e("code",null,"{boolean} force")])])],-1),g=e("p",null,[e("strong",null,"Details:")],-1),S=e("code",null,"carousel.use",-1),m=e("code",null,"force",-1),b=e("code",null,"false",-1);function k(v,x){const r=a("ExternalLinkIcon"),n=a("RouterLink");return c(),i("div",null,[p,l(),e("p",null,[l("This module provides automatic support mechanism and polyfill for "),e("a",d,[l("CSS scroll-snap feature"),o(r)]),l(". You can force polyfill usage using "),f,l(".")]),l(),e("p",null,[l("To learn on how to install and use plugin, "),o(n,{to:"/guide/usage/#plugin-scroll-snap-fallback"},{default:t(()=>[l("please see our usage guide")]),_:1}),l(".")]),l(),_,l(),e("ul",null,[h,l(),e("li",null,[g,l(),e("p",null,[l("Config is an object passed along to the "),o(n,{to:"/api-reference/core/#carousel-use"},{default:t(()=>[S,l(" method")]),_:1}),l(`.
`),m,l(" configuration property allows you to override the result of support detection mechanism and force usage of JavaScript CSS Scroll Snap polyfill. By default value: "),b,l(".")])])])])}var y=s(u,[["render",k],["__file","plugin-scroll-snap-fallback.html.vue"]]);export{y as default};