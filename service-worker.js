if(!self.define){let e,s={};const l=(l,i)=>(l=new URL(l+".js",i).href,s[l]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=s,document.head.appendChild(e)}else e=l,importScripts(l),s()})).then((()=>{let e=s[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(i,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let a={};const t=e=>l(e,r),u={module:{uri:r},exports:a,require:t};s[r]=Promise.all(i.map((e=>u[e]||t(e)))).then((e=>(n(...e),a)))}}define(["./workbox-6c6cf662"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"c3134691136173458845f47ca6036f14"},{url:"android-chrome-192x192.png",revision:"99866d603fbab750d1ff66b609618fc3"},{url:"android-chrome-512x512.png",revision:"6108f7d8a8daf428fa8e702e296a0864"},{url:"api-reference/core.html",revision:"1df8108dfadf92b0fe27c645b6f7a317"},{url:"api-reference/index.html",revision:"1bd200acd32336ed302e3e1d516fda6d"},{url:"api-reference/integration-react.html",revision:"c382d0d0ac3aa3bba5f691d8774fa884"},{url:"api-reference/integration-vue.html",revision:"6ab2b689ecfafcb1a00ad6e6dda4b654"},{url:"api-reference/plugin-autoplay.html",revision:"66189acbe5fafa1b1d0e402f2fbc2402"},{url:"api-reference/plugin-custom-events.html",revision:"82686754a46842ef31bd499759063425"},{url:"api-reference/plugin-mouse-drag.html",revision:"9f2b0fd4e71af4c8295fad74d3bfda88"},{url:"api-reference/plugin-scroll-snap-fallback.html",revision:"9fb8638326b2d680bcc77d5fd863705e"},{url:"apple-touch-icon.png",revision:"815d34c8e80ecf432b4c8b8b84c25ec0"},{url:"assets/404.2ab86645.js",revision:null},{url:"assets/404.html.a0940f15.js",revision:null},{url:"assets/404.html.d341cb57.js",revision:null},{url:"assets/app.15682841.js",revision:null},{url:"assets/AutoLink.8e5c17b8.js",revision:null},{url:"assets/back-to-top.8efcbe56.svg",revision:null},{url:"assets/CanIUseSection.b12ed9b0.js",revision:null},{url:"assets/core.html.87b40a08.js",revision:null},{url:"assets/core.html.922ea190.js",revision:null},{url:"assets/ExampleSection.5a6d4e88.js",revision:null},{url:"assets/Footer.2900a496.js",revision:null},{url:"assets/HeroSection.fa5cff14.js",revision:null},{url:"assets/index.ca88147e.js",revision:null},{url:"assets/index.html.083034da.js",revision:null},{url:"assets/index.html.34d8aaf7.js",revision:null},{url:"assets/index.html.9c558501.js",revision:null},{url:"assets/index.html.a5d6872e.js",revision:null},{url:"assets/index.html.ae2efa13.js",revision:null},{url:"assets/index.html.b8d4af9e.js",revision:null},{url:"assets/index.html.cd7dd231.js",revision:null},{url:"assets/index.html.d9dc9b70.js",revision:null},{url:"assets/index.html.dd794b2f.js",revision:null},{url:"assets/index.html.f3e597e2.js",revision:null},{url:"assets/installation.html.260bc2a4.js",revision:null},{url:"assets/installation.html.8f15f71c.js",revision:null},{url:"assets/integration-react.html.060f8150.js",revision:null},{url:"assets/integration-react.html.89a32525.js",revision:null},{url:"assets/integration-vue.html.38664d54.js",revision:null},{url:"assets/integration-vue.html.538bb5ee.js",revision:null},{url:"assets/Layout.1c4714d4.js",revision:null},{url:"assets/NavLink.41f7d377.js",revision:null},{url:"assets/plugin-autoplay.html.118d59ef.js",revision:null},{url:"assets/plugin-autoplay.html.f3ab1e63.js",revision:null},{url:"assets/plugin-custom-events.html.9e6643f7.js",revision:null},{url:"assets/plugin-custom-events.html.d62b1f29.js",revision:null},{url:"assets/plugin-mouse-drag.html.817e7537.js",revision:null},{url:"assets/plugin-mouse-drag.html.de47760d.js",revision:null},{url:"assets/plugin-scroll-snap-fallback.html.0c771961.js",revision:null},{url:"assets/plugin-scroll-snap-fallback.html.cf54ae6f.js",revision:null},{url:"assets/style.013dc597.css",revision:null},{url:"assets/usage.html.5e089f57.js",revision:null},{url:"assets/usage.html.85a986bc.js",revision:null},{url:"contribution/index.html",revision:"921f4814f76eaf9fabff60b5f7a82c50"},{url:"ecosystem/index.html",revision:"3cda4886c670509d7b18bfbc2299ce7c"},{url:"favicon-16x16.png",revision:"2901e4f062ec96c8e1be019581fe3de8"},{url:"favicon-32x32.png",revision:"bb80bf2aff9dc997ba2136245c56e770"},{url:"guide/index.html",revision:"04c92770f549de3c60bc8ea923587796"},{url:"guide/installation.html",revision:"7e048726564d8a2251f86c9e6d33994b"},{url:"guide/usage.html",revision:"79ebe0ad41d9ef3043f6d90a4e2abb4d"},{url:"index.html",revision:"452e498682b734aa384735e879d26ad3"},{url:"logo.jpg",revision:"85c8a5d8d293ba0087bc0aff9714b0c1"},{url:"logo.svg",revision:"7a424c76e4fd34957ba14636ce37bf6d"},{url:"mstile-150x150.png",revision:"d61095d12c87835e67131f5e68f3922f"},{url:"safari-pinned-tab.svg",revision:"3a498fab85e168832cd725bd1b9d53e6"}],{})}));
