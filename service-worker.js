if(!self.define){let e,s={};const l=(l,i)=>(l=new URL(l+".js",i).href,s[l]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=s,document.head.appendChild(e)}else e=l,importScripts(l),s()})).then((()=>{let e=s[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(i,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let a={};const t=e=>l(e,r),u={module:{uri:r},exports:a,require:t};s[r]=Promise.all(i.map((e=>u[e]||t(e)))).then((e=>(n(...e),a)))}}define(["./workbox-6c6cf662"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"aaebae230898bd3c105f144c727d2a94"},{url:"android-chrome-192x192.png",revision:"99866d603fbab750d1ff66b609618fc3"},{url:"android-chrome-512x512.png",revision:"6108f7d8a8daf428fa8e702e296a0864"},{url:"api-reference/core.html",revision:"f664b29815611efeaa24b3ed361d2ba5"},{url:"api-reference/index.html",revision:"0486f68ca939f7f18290572d14d4aab0"},{url:"api-reference/integration-react.html",revision:"a777fffc4849d44ac3b4895c2b6f7a82"},{url:"api-reference/integration-vue.html",revision:"786a2c2ee9c00782e161413be70e9291"},{url:"api-reference/plugin-autoplay.html",revision:"c71153379d237f6f1e19d6505c00b2d9"},{url:"api-reference/plugin-custom-events.html",revision:"90ab5d9cd134a4ee9161dbd1923b14bc"},{url:"api-reference/plugin-mouse-drag.html",revision:"0fca13f85d5b6d34e703196431da2c74"},{url:"api-reference/plugin-scroll-snap-fallback.html",revision:"0806876232739b2d6254393291d5497d"},{url:"apple-touch-icon.png",revision:"815d34c8e80ecf432b4c8b8b84c25ec0"},{url:"assets/404.932b41cb.js",revision:null},{url:"assets/404.html.6e7fe90c.js",revision:null},{url:"assets/404.html.d341cb57.js",revision:null},{url:"assets/app.7f4a4ff6.js",revision:null},{url:"assets/AutoLink.5afc09d7.js",revision:null},{url:"assets/back-to-top.8efcbe56.svg",revision:null},{url:"assets/CanIUseSection.ab3f2d09.js",revision:null},{url:"assets/core.html.0d402cfb.js",revision:null},{url:"assets/core.html.68170a57.js",revision:null},{url:"assets/ExampleSection.d4ba52a8.js",revision:null},{url:"assets/Footer.895e8ae1.js",revision:null},{url:"assets/HeroSection.ad6c8e8e.js",revision:null},{url:"assets/index.ca88147e.js",revision:null},{url:"assets/index.html.18056754.js",revision:null},{url:"assets/index.html.26ef05ac.js",revision:null},{url:"assets/index.html.49e25550.js",revision:null},{url:"assets/index.html.7eafae10.js",revision:null},{url:"assets/index.html.7f6fa87a.js",revision:null},{url:"assets/index.html.8c0e098b.js",revision:null},{url:"assets/index.html.a0ff87c6.js",revision:null},{url:"assets/index.html.a343e082.js",revision:null},{url:"assets/index.html.baf21173.js",revision:null},{url:"assets/index.html.f4490423.js",revision:null},{url:"assets/installation.html.667f135d.js",revision:null},{url:"assets/installation.html.9e41109f.js",revision:null},{url:"assets/integration-react.html.2beb1ccb.js",revision:null},{url:"assets/integration-react.html.7a2a505d.js",revision:null},{url:"assets/integration-vue.html.05ce8265.js",revision:null},{url:"assets/integration-vue.html.f11281aa.js",revision:null},{url:"assets/Layout.d46b9af9.js",revision:null},{url:"assets/NavLink.43be72ce.js",revision:null},{url:"assets/plugin-autoplay.html.51655cc8.js",revision:null},{url:"assets/plugin-autoplay.html.67fd439f.js",revision:null},{url:"assets/plugin-custom-events.html.879a9af0.js",revision:null},{url:"assets/plugin-custom-events.html.ab64868d.js",revision:null},{url:"assets/plugin-mouse-drag.html.0da1707b.js",revision:null},{url:"assets/plugin-mouse-drag.html.80dee8c1.js",revision:null},{url:"assets/plugin-scroll-snap-fallback.html.4acaa629.js",revision:null},{url:"assets/plugin-scroll-snap-fallback.html.ce7b5a93.js",revision:null},{url:"assets/style.5f25c8b5.css",revision:null},{url:"assets/usage.html.0a253df2.js",revision:null},{url:"assets/usage.html.e0ebaedf.js",revision:null},{url:"contribution/index.html",revision:"23b420b84755c92a1150629b674deb72"},{url:"ecosystem/index.html",revision:"4196058989fa969ab635d0a2decca6b5"},{url:"favicon-16x16.png",revision:"2901e4f062ec96c8e1be019581fe3de8"},{url:"favicon-32x32.png",revision:"bb80bf2aff9dc997ba2136245c56e770"},{url:"guide/index.html",revision:"2c6ed941193de00175ad3dfc98035007"},{url:"guide/installation.html",revision:"5a1dfee9a8ad1eb61b9f028c32839bef"},{url:"guide/usage.html",revision:"a5a63031698d92e42243a1e296f1dc9a"},{url:"index.html",revision:"623fe1640c1928360a07fedb6bfd2082"},{url:"logo.jpg",revision:"85c8a5d8d293ba0087bc0aff9714b0c1"},{url:"logo.svg",revision:"7a424c76e4fd34957ba14636ce37bf6d"},{url:"mstile-150x150.png",revision:"d61095d12c87835e67131f5e68f3922f"},{url:"safari-pinned-tab.svg",revision:"3a498fab85e168832cd725bd1b9d53e6"}],{})}));
