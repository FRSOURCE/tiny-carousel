if(!self.define){let e,s={};const l=(l,i)=>(l=new URL(l+".js",i).href,s[l]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=s,document.head.appendChild(e)}else e=l,importScripts(l),s()})).then((()=>{let e=s[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(i,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let a={};const t=e=>l(e,r),u={module:{uri:r},exports:a,require:t};s[r]=Promise.all(i.map((e=>u[e]||t(e)))).then((e=>(n(...e),a)))}}define(["./workbox-6c6cf662"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"e05496c97856a71545e8b1ca009f40cc"},{url:"android-chrome-192x192.png",revision:"99866d603fbab750d1ff66b609618fc3"},{url:"android-chrome-512x512.png",revision:"6108f7d8a8daf428fa8e702e296a0864"},{url:"api-reference/core.html",revision:"5522b2fb87bd36eed7bca75dae795ccd"},{url:"api-reference/index.html",revision:"4a558f08cec11db2322c76ef124582a4"},{url:"api-reference/integration-react.html",revision:"73a875aabccae76bff1db22cfced3c34"},{url:"api-reference/integration-vue.html",revision:"e705126d75cc1d9defeac08f42118c76"},{url:"api-reference/plugin-autoplay.html",revision:"9653a1c815bbfc2cf7d7987dbd4f266e"},{url:"api-reference/plugin-custom-events.html",revision:"eff5023588abeee3bd77219cadc1b2c4"},{url:"api-reference/plugin-mouse-drag.html",revision:"4806dd5051351a3b6f98feb5c6d027b8"},{url:"api-reference/plugin-scroll-snap-fallback.html",revision:"b81c09ad2f63424d5ba8384e04f2ce29"},{url:"apple-touch-icon.png",revision:"815d34c8e80ecf432b4c8b8b84c25ec0"},{url:"assets/404.3f7558b8.js",revision:null},{url:"assets/404.html.b9e536a4.js",revision:null},{url:"assets/404.html.d341cb57.js",revision:null},{url:"assets/app.c832b732.js",revision:null},{url:"assets/AutoLink.0699c756.js",revision:null},{url:"assets/back-to-top.8efcbe56.svg",revision:null},{url:"assets/CanIUseSection.212563d5.js",revision:null},{url:"assets/core.html.04dffda8.js",revision:null},{url:"assets/core.html.d1f7ed56.js",revision:null},{url:"assets/ExampleSection.8860b8a2.js",revision:null},{url:"assets/Footer.90e089f6.js",revision:null},{url:"assets/HeroSection.f1cbf0cf.js",revision:null},{url:"assets/index.ca88147e.js",revision:null},{url:"assets/index.html.17cfae1e.js",revision:null},{url:"assets/index.html.2e374b77.js",revision:null},{url:"assets/index.html.5b2aaa3e.js",revision:null},{url:"assets/index.html.a4f81bd6.js",revision:null},{url:"assets/index.html.bfffd0b4.js",revision:null},{url:"assets/index.html.d3aa3e57.js",revision:null},{url:"assets/index.html.d4df2d2f.js",revision:null},{url:"assets/index.html.d6d34fda.js",revision:null},{url:"assets/index.html.deffa242.js",revision:null},{url:"assets/index.html.e54b5505.js",revision:null},{url:"assets/installation.html.7d5377ac.js",revision:null},{url:"assets/installation.html.ea9b68a8.js",revision:null},{url:"assets/integration-react.html.08a825f6.js",revision:null},{url:"assets/integration-react.html.6c7e5476.js",revision:null},{url:"assets/integration-vue.html.4e1cae07.js",revision:null},{url:"assets/integration-vue.html.7611ea43.js",revision:null},{url:"assets/Layout.81cbfb53.js",revision:null},{url:"assets/NavLink.76188b16.js",revision:null},{url:"assets/plugin-autoplay.html.519a8a65.js",revision:null},{url:"assets/plugin-autoplay.html.a155c13e.js",revision:null},{url:"assets/plugin-custom-events.html.4a0c352c.js",revision:null},{url:"assets/plugin-custom-events.html.ed6109e5.js",revision:null},{url:"assets/plugin-mouse-drag.html.075bc03c.js",revision:null},{url:"assets/plugin-mouse-drag.html.249bab87.js",revision:null},{url:"assets/plugin-scroll-snap-fallback.html.29eef6c7.js",revision:null},{url:"assets/plugin-scroll-snap-fallback.html.c643ce05.js",revision:null},{url:"assets/style.d77cb9a9.css",revision:null},{url:"assets/usage.html.05bf5756.js",revision:null},{url:"assets/usage.html.fba39a9f.js",revision:null},{url:"contribution/index.html",revision:"a15cb5063aa2da00214a065149295448"},{url:"ecosystem/index.html",revision:"29cd2f5ddcc7fc8cbe0af707cc81e18a"},{url:"favicon-16x16.png",revision:"2901e4f062ec96c8e1be019581fe3de8"},{url:"favicon-32x32.png",revision:"bb80bf2aff9dc997ba2136245c56e770"},{url:"guide/index.html",revision:"cbc9a692ccdca975090a4719b2139530"},{url:"guide/installation.html",revision:"e4283f6bf487d43e851b94a6c196d494"},{url:"guide/usage.html",revision:"d7e5828e39ef14becf16f54a2327c45f"},{url:"index.html",revision:"a1fc0be81aec760f753ca42b2564fc88"},{url:"logo.jpg",revision:"85c8a5d8d293ba0087bc0aff9714b0c1"},{url:"logo.svg",revision:"7a424c76e4fd34957ba14636ce37bf6d"},{url:"mstile-150x150.png",revision:"d61095d12c87835e67131f5e68f3922f"},{url:"safari-pinned-tab.svg",revision:"3a498fab85e168832cd725bd1b9d53e6"}],{})}));
