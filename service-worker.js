if(!self.define){let e,s={};const l=(l,i)=>(l=new URL(l+".js",i).href,s[l]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=s,document.head.appendChild(e)}else e=l,importScripts(l),s()})).then((()=>{let e=s[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(i,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let a={};const t=e=>l(e,r),u={module:{uri:r},exports:a,require:t};s[r]=Promise.all(i.map((e=>u[e]||t(e)))).then((e=>(n(...e),a)))}}define(["./workbox-6c6cf662"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"05485e69410e65246df4a88c9e122bd4"},{url:"android-chrome-192x192.png",revision:"99866d603fbab750d1ff66b609618fc3"},{url:"android-chrome-512x512.png",revision:"6108f7d8a8daf428fa8e702e296a0864"},{url:"api-reference/core.html",revision:"0d40d5c1b6c9b3eea8efbcbc9f19ee2d"},{url:"api-reference/index.html",revision:"a352528be096dd681779a796af9068d1"},{url:"api-reference/integration-react.html",revision:"e7a905e6a54d557926b73ab32e2effd9"},{url:"api-reference/integration-vue.html",revision:"e48e221870d362d643cc6643f4942817"},{url:"api-reference/plugin-autoplay.html",revision:"589097c8801cb162141dadd673245d2f"},{url:"api-reference/plugin-custom-events.html",revision:"5d2d564b551f0df228abf5afdc8e1541"},{url:"api-reference/plugin-mouse-drag.html",revision:"db5e7abc65af08256e8772e86b60e13b"},{url:"api-reference/plugin-scroll-snap-fallback.html",revision:"74308a288fcdd1ce35e0c9fcf1db2d97"},{url:"apple-touch-icon.png",revision:"815d34c8e80ecf432b4c8b8b84c25ec0"},{url:"assets/404.c9bd4216.js",revision:null},{url:"assets/404.html.1c007520.js",revision:null},{url:"assets/404.html.d341cb57.js",revision:null},{url:"assets/app.1dbac153.js",revision:null},{url:"assets/AutoLink.4a155071.js",revision:null},{url:"assets/back-to-top.8efcbe56.svg",revision:null},{url:"assets/CanIUseSection.64b6bd1d.js",revision:null},{url:"assets/core.html.06ff40b5.js",revision:null},{url:"assets/core.html.760298e3.js",revision:null},{url:"assets/ExampleSection.6da0f52b.js",revision:null},{url:"assets/Footer.0e29d7ae.js",revision:null},{url:"assets/HeroSection.50b9f5c6.js",revision:null},{url:"assets/index.ca88147e.js",revision:null},{url:"assets/index.html.024eeb41.js",revision:null},{url:"assets/index.html.1f85ae17.js",revision:null},{url:"assets/index.html.39e9d7bd.js",revision:null},{url:"assets/index.html.3baf5c65.js",revision:null},{url:"assets/index.html.7c358a52.js",revision:null},{url:"assets/index.html.86a73bf7.js",revision:null},{url:"assets/index.html.bca09719.js",revision:null},{url:"assets/index.html.db1a50b0.js",revision:null},{url:"assets/index.html.eb3d4dd2.js",revision:null},{url:"assets/index.html.ef21a9ec.js",revision:null},{url:"assets/installation.html.ba4bbfc6.js",revision:null},{url:"assets/installation.html.d981fb61.js",revision:null},{url:"assets/integration-react.html.a1c282ac.js",revision:null},{url:"assets/integration-react.html.dc68eba9.js",revision:null},{url:"assets/integration-vue.html.7b944080.js",revision:null},{url:"assets/integration-vue.html.b3a4026a.js",revision:null},{url:"assets/Layout.54b8bff1.js",revision:null},{url:"assets/NavLink.985bf885.js",revision:null},{url:"assets/plugin-autoplay.html.5e8b57c5.js",revision:null},{url:"assets/plugin-autoplay.html.f50d9d4c.js",revision:null},{url:"assets/plugin-custom-events.html.05f4b30a.js",revision:null},{url:"assets/plugin-custom-events.html.3f2ba86d.js",revision:null},{url:"assets/plugin-mouse-drag.html.7ca5860d.js",revision:null},{url:"assets/plugin-mouse-drag.html.a8512bff.js",revision:null},{url:"assets/plugin-scroll-snap-fallback.html.494bf8ee.js",revision:null},{url:"assets/plugin-scroll-snap-fallback.html.94921f6c.js",revision:null},{url:"assets/style.d77cb9a9.css",revision:null},{url:"assets/usage.html.045358cf.js",revision:null},{url:"assets/usage.html.6b91841f.js",revision:null},{url:"contribution/index.html",revision:"76c00fc56b58942afccc8ad6b95ad84d"},{url:"ecosystem/index.html",revision:"ddf5b72814013ee3c75617a584540ebe"},{url:"favicon-16x16.png",revision:"2901e4f062ec96c8e1be019581fe3de8"},{url:"favicon-32x32.png",revision:"bb80bf2aff9dc997ba2136245c56e770"},{url:"guide/index.html",revision:"e9a5aaead273ad330c1f4b2b840f84ef"},{url:"guide/installation.html",revision:"6e93859ea056239edd4e28312b368b62"},{url:"guide/usage.html",revision:"8e604bf4605fbd650d70c63481a6506b"},{url:"index.html",revision:"4bab5cd94b169e6b80d94650ede6e5bd"},{url:"logo.jpg",revision:"85c8a5d8d293ba0087bc0aff9714b0c1"},{url:"logo.svg",revision:"7a424c76e4fd34957ba14636ce37bf6d"},{url:"mstile-150x150.png",revision:"d61095d12c87835e67131f5e68f3922f"},{url:"safari-pinned-tab.svg",revision:"3a498fab85e168832cd725bd1b9d53e6"}],{})}));
