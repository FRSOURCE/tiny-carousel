if(!self.define){let e,s={};const l=(l,i)=>(l=new URL(l+".js",i).href,s[l]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=s,document.head.appendChild(e)}else e=l,importScripts(l),s()})).then((()=>{let e=s[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(i,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let a={};const t=e=>l(e,r),u={module:{uri:r},exports:a,require:t};s[r]=Promise.all(i.map((e=>u[e]||t(e)))).then((e=>(n(...e),a)))}}define(["./workbox-6c6cf662"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"0414d076c96023c86bec141336108a74"},{url:"android-chrome-192x192.png",revision:"99866d603fbab750d1ff66b609618fc3"},{url:"android-chrome-512x512.png",revision:"6108f7d8a8daf428fa8e702e296a0864"},{url:"api-reference/core.html",revision:"a04929a4e413b1d658beb42b17c848e0"},{url:"api-reference/index.html",revision:"61032c3bf7f76c0af55028fc11191083"},{url:"api-reference/integration-react.html",revision:"e13e0c5945ae05e9c5cefc7c38ccf4f9"},{url:"api-reference/integration-vue.html",revision:"bc7a72614b9d40bacdf285d1dd451ae9"},{url:"api-reference/plugin-autoplay.html",revision:"098b278e6405d158c8c41c3eb2ecb4e0"},{url:"api-reference/plugin-custom-events.html",revision:"c3fc3d992d3d4c135f51553a0a03ec86"},{url:"api-reference/plugin-mouse-drag.html",revision:"5ba4088f0debc7c9ec6dc58d44424a47"},{url:"api-reference/plugin-scroll-snap-fallback.html",revision:"a4182dd88c8917877466daed395a98aa"},{url:"apple-touch-icon.png",revision:"815d34c8e80ecf432b4c8b8b84c25ec0"},{url:"assets/404.4aa7ba80.js",revision:null},{url:"assets/404.html.7ab7b62b.js",revision:null},{url:"assets/404.html.d341cb57.js",revision:null},{url:"assets/app.42d2f4b6.js",revision:null},{url:"assets/AutoLink.365ed9eb.js",revision:null},{url:"assets/back-to-top.8efcbe56.svg",revision:null},{url:"assets/CanIUseSection.0cb09b6a.js",revision:null},{url:"assets/core.html.874272e2.js",revision:null},{url:"assets/core.html.f534ad17.js",revision:null},{url:"assets/ExampleSection.9b54997b.js",revision:null},{url:"assets/Footer.a87c737e.js",revision:null},{url:"assets/HeroSection.5ec5d542.js",revision:null},{url:"assets/index.ca88147e.js",revision:null},{url:"assets/index.html.0202685a.js",revision:null},{url:"assets/index.html.379d26c8.js",revision:null},{url:"assets/index.html.665e38d5.js",revision:null},{url:"assets/index.html.6ed79547.js",revision:null},{url:"assets/index.html.9b2daf38.js",revision:null},{url:"assets/index.html.bdc13a82.js",revision:null},{url:"assets/index.html.ced2b4d8.js",revision:null},{url:"assets/index.html.d9c38e89.js",revision:null},{url:"assets/index.html.eae924e3.js",revision:null},{url:"assets/index.html.ff2f6681.js",revision:null},{url:"assets/installation.html.063b7108.js",revision:null},{url:"assets/installation.html.d1bf25e6.js",revision:null},{url:"assets/integration-react.html.1243199f.js",revision:null},{url:"assets/integration-react.html.fe52913f.js",revision:null},{url:"assets/integration-vue.html.0eea0bbb.js",revision:null},{url:"assets/integration-vue.html.c9ce0045.js",revision:null},{url:"assets/Layout.a91ff4de.js",revision:null},{url:"assets/NavLink.043b4485.js",revision:null},{url:"assets/plugin-autoplay.html.26982043.js",revision:null},{url:"assets/plugin-autoplay.html.4c850cec.js",revision:null},{url:"assets/plugin-custom-events.html.a6eb3b0b.js",revision:null},{url:"assets/plugin-custom-events.html.f01551a0.js",revision:null},{url:"assets/plugin-mouse-drag.html.02fde318.js",revision:null},{url:"assets/plugin-mouse-drag.html.af295b1e.js",revision:null},{url:"assets/plugin-scroll-snap-fallback.html.e3c9aa48.js",revision:null},{url:"assets/plugin-scroll-snap-fallback.html.f31a9b6a.js",revision:null},{url:"assets/style.013dc597.css",revision:null},{url:"assets/usage.html.193449b1.js",revision:null},{url:"assets/usage.html.fef6a96e.js",revision:null},{url:"contribution/index.html",revision:"634c1def4be1213eb6a2e954723ce106"},{url:"ecosystem/index.html",revision:"138f2710d5f93d8d87a3a39a63732a08"},{url:"favicon-16x16.png",revision:"2901e4f062ec96c8e1be019581fe3de8"},{url:"favicon-32x32.png",revision:"bb80bf2aff9dc997ba2136245c56e770"},{url:"guide/index.html",revision:"da9c8cf436cc4877038ccb0e696e30fa"},{url:"guide/installation.html",revision:"2df21ac515d0e8d638fb0ef1ab1aed39"},{url:"guide/usage.html",revision:"22df23192f892a697beb56d181279dd2"},{url:"index.html",revision:"a750eb8107117b05b897dc909082c790"},{url:"logo.jpg",revision:"85c8a5d8d293ba0087bc0aff9714b0c1"},{url:"logo.svg",revision:"7a424c76e4fd34957ba14636ce37bf6d"},{url:"mstile-150x150.png",revision:"d61095d12c87835e67131f5e68f3922f"},{url:"safari-pinned-tab.svg",revision:"3a498fab85e168832cd725bd1b9d53e6"}],{})}));
