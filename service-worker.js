if(!self.define){let e,s={};const l=(l,i)=>(l=new URL(l+".js",i).href,s[l]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=s,document.head.appendChild(e)}else e=l,importScripts(l),s()})).then((()=>{let e=s[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(i,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let a={};const t=e=>l(e,r),u={module:{uri:r},exports:a,require:t};s[r]=Promise.all(i.map((e=>u[e]||t(e)))).then((e=>(n(...e),a)))}}define(["./workbox-6c6cf662"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"b32cb9b8712a642191e920ea1847c3de"},{url:"android-chrome-192x192.png",revision:"99866d603fbab750d1ff66b609618fc3"},{url:"android-chrome-512x512.png",revision:"6108f7d8a8daf428fa8e702e296a0864"},{url:"api-reference/core.html",revision:"2cbf394efa87f1454f0878a514e8baed"},{url:"api-reference/index.html",revision:"6d0936ef95354351b112794b7d18965b"},{url:"api-reference/integration-react.html",revision:"0b5dc9d69e0dbc083fff4c02a9694c82"},{url:"api-reference/integration-vue.html",revision:"3f8eaac7b2e97fd9eee5a624a9d53847"},{url:"api-reference/plugin-autoplay.html",revision:"8a35fee277839b56cbc6e47b70684a41"},{url:"api-reference/plugin-custom-events.html",revision:"f58ac973b43c18f5012f1b65552f8701"},{url:"api-reference/plugin-mouse-drag.html",revision:"0bbeed37debf2a09eb7db88ceb12a9d5"},{url:"api-reference/plugin-scroll-snap-fallback.html",revision:"50f309b1484779f6ea31cbd25607472b"},{url:"apple-touch-icon.png",revision:"815d34c8e80ecf432b4c8b8b84c25ec0"},{url:"assets/404.0e2adeec.js",revision:null},{url:"assets/404.html.58b24de7.js",revision:null},{url:"assets/404.html.d341cb57.js",revision:null},{url:"assets/app.258c9a9f.js",revision:null},{url:"assets/AutoLink.aea45699.js",revision:null},{url:"assets/back-to-top.8efcbe56.svg",revision:null},{url:"assets/CanIUseSection.db17e5f7.js",revision:null},{url:"assets/core.html.a0e5f5dc.js",revision:null},{url:"assets/core.html.d114ed70.js",revision:null},{url:"assets/ExampleSection.20f9e219.js",revision:null},{url:"assets/Footer.c6dd867e.js",revision:null},{url:"assets/HeroSection.2eada9fd.js",revision:null},{url:"assets/index.ca88147e.js",revision:null},{url:"assets/index.html.1b084c00.js",revision:null},{url:"assets/index.html.1e12d6b3.js",revision:null},{url:"assets/index.html.2329c2ce.js",revision:null},{url:"assets/index.html.2af216a7.js",revision:null},{url:"assets/index.html.2cb77f0e.js",revision:null},{url:"assets/index.html.59106b69.js",revision:null},{url:"assets/index.html.8e9a6da6.js",revision:null},{url:"assets/index.html.c645bb55.js",revision:null},{url:"assets/index.html.d6d0d0ca.js",revision:null},{url:"assets/index.html.e9d91777.js",revision:null},{url:"assets/installation.html.005b1ae2.js",revision:null},{url:"assets/installation.html.d5a7045f.js",revision:null},{url:"assets/integration-react.html.146bbf0a.js",revision:null},{url:"assets/integration-react.html.e34e0a94.js",revision:null},{url:"assets/integration-vue.html.8417d56c.js",revision:null},{url:"assets/integration-vue.html.a4c2c238.js",revision:null},{url:"assets/Layout.b695b97c.js",revision:null},{url:"assets/NavLink.eb1cf31c.js",revision:null},{url:"assets/plugin-autoplay.html.2995602b.js",revision:null},{url:"assets/plugin-autoplay.html.a58dd580.js",revision:null},{url:"assets/plugin-custom-events.html.57e666cb.js",revision:null},{url:"assets/plugin-custom-events.html.88fe474b.js",revision:null},{url:"assets/plugin-mouse-drag.html.21ce9ae0.js",revision:null},{url:"assets/plugin-mouse-drag.html.d11937bc.js",revision:null},{url:"assets/plugin-scroll-snap-fallback.html.4981f6df.js",revision:null},{url:"assets/plugin-scroll-snap-fallback.html.fa401948.js",revision:null},{url:"assets/style.d77cb9a9.css",revision:null},{url:"assets/usage.html.b40ad227.js",revision:null},{url:"assets/usage.html.f8e0d70d.js",revision:null},{url:"contribution/index.html",revision:"d31315a80f6e38654be6ada6c861e117"},{url:"ecosystem/index.html",revision:"44f43607e3d531ef2eab694a08252402"},{url:"favicon-16x16.png",revision:"2901e4f062ec96c8e1be019581fe3de8"},{url:"favicon-32x32.png",revision:"bb80bf2aff9dc997ba2136245c56e770"},{url:"guide/index.html",revision:"af8ed7a8dd4e2d3789f7be6a826a7c82"},{url:"guide/installation.html",revision:"e8798838b8e6620fe772947d946a55d6"},{url:"guide/usage.html",revision:"9958f167c0b397f281b140c292fd6906"},{url:"index.html",revision:"75d764faefb86ea2b22203bda1d505bb"},{url:"logo.jpg",revision:"85c8a5d8d293ba0087bc0aff9714b0c1"},{url:"logo.svg",revision:"7a424c76e4fd34957ba14636ce37bf6d"},{url:"mstile-150x150.png",revision:"d61095d12c87835e67131f5e68f3922f"},{url:"safari-pinned-tab.svg",revision:"3a498fab85e168832cd725bd1b9d53e6"}],{})}));
