if(!self.define){let e,s={};const l=(l,i)=>(l=new URL(l+".js",i).href,s[l]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=s,document.head.appendChild(e)}else e=l,importScripts(l),s()})).then((()=>{let e=s[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(i,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let t={};const u=e=>l(e,r),a={module:{uri:r},exports:t,require:u};s[r]=Promise.all(i.map((e=>a[e]||u(e)))).then((e=>(n(...e),t)))}}define(["./workbox-6c6cf662"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"e229c856b116ed8d984e743c478c3603"},{url:"android-chrome-192x192.png",revision:"99866d603fbab750d1ff66b609618fc3"},{url:"android-chrome-512x512.png",revision:"6108f7d8a8daf428fa8e702e296a0864"},{url:"api-reference/core.html",revision:"544df1f3b53a2765b67558b0e6836122"},{url:"api-reference/index.html",revision:"544c40e5c7459332c1e2c85cc08a230e"},{url:"api-reference/integration-react.html",revision:"9636dbde53f212b0e9823877178992d1"},{url:"api-reference/integration-vue.html",revision:"b612bc8312b00e874f418122462f4fa6"},{url:"api-reference/plugin-autoplay.html",revision:"3308f5562e73372b241b3574670812f2"},{url:"api-reference/plugin-custom-events.html",revision:"29cf549f5bb0db670762cc7619113819"},{url:"api-reference/plugin-mouse-drag.html",revision:"a24229c41bcc676e3d08b5a130ad76a5"},{url:"api-reference/plugin-scroll-snap-fallback.html",revision:"81339822ec003b6c38170d4e222a36a0"},{url:"apple-touch-icon.png",revision:"815d34c8e80ecf432b4c8b8b84c25ec0"},{url:"assets/404.8162ccc4.js",revision:null},{url:"assets/404.html.7f8b206f.js",revision:null},{url:"assets/404.html.d341cb57.js",revision:null},{url:"assets/app.71cdcd0f.js",revision:null},{url:"assets/AutoLink.9e411a70.js",revision:null},{url:"assets/back-to-top.8efcbe56.svg",revision:null},{url:"assets/CanIUseSection.7275cd05.js",revision:null},{url:"assets/core.html.63d3a405.js",revision:null},{url:"assets/core.html.ee6acd5e.js",revision:null},{url:"assets/ExampleSection.4b184914.js",revision:null},{url:"assets/Footer.3f496202.js",revision:null},{url:"assets/HeroSection.b468e107.js",revision:null},{url:"assets/index.ca88147e.js",revision:null},{url:"assets/index.html.4210436e.js",revision:null},{url:"assets/index.html.4dad0780.js",revision:null},{url:"assets/index.html.6337b155.js",revision:null},{url:"assets/index.html.a0d41cc8.js",revision:null},{url:"assets/index.html.b5454049.js",revision:null},{url:"assets/index.html.bc7f66ee.js",revision:null},{url:"assets/index.html.e4096bd8.js",revision:null},{url:"assets/index.html.e569c4dc.js",revision:null},{url:"assets/index.html.f5b405cc.js",revision:null},{url:"assets/index.html.f9ea470a.js",revision:null},{url:"assets/installation.html.4986ce87.js",revision:null},{url:"assets/installation.html.80edfa1d.js",revision:null},{url:"assets/integration-react.html.1783140a.js",revision:null},{url:"assets/integration-react.html.44eae560.js",revision:null},{url:"assets/integration-vue.html.18408527.js",revision:null},{url:"assets/integration-vue.html.b3f7e312.js",revision:null},{url:"assets/Layout.821490dc.js",revision:null},{url:"assets/NavLink.195c507f.js",revision:null},{url:"assets/plugin-autoplay.html.ed87ea00.js",revision:null},{url:"assets/plugin-autoplay.html.f1698db0.js",revision:null},{url:"assets/plugin-custom-events.html.3cc54ef1.js",revision:null},{url:"assets/plugin-custom-events.html.6037f522.js",revision:null},{url:"assets/plugin-mouse-drag.html.0dff05bf.js",revision:null},{url:"assets/plugin-mouse-drag.html.795ffc29.js",revision:null},{url:"assets/plugin-scroll-snap-fallback.html.8bc61ffa.js",revision:null},{url:"assets/plugin-scroll-snap-fallback.html.e4951444.js",revision:null},{url:"assets/style.013dc597.css",revision:null},{url:"assets/usage.html.6dd9efc7.js",revision:null},{url:"assets/usage.html.a839ec7b.js",revision:null},{url:"contribution/index.html",revision:"47d193b565fb99a813fef37ff5925f03"},{url:"ecosystem/index.html",revision:"5598db7dc52be05352d03e61de65711e"},{url:"favicon-16x16.png",revision:"2901e4f062ec96c8e1be019581fe3de8"},{url:"favicon-32x32.png",revision:"bb80bf2aff9dc997ba2136245c56e770"},{url:"guide/index.html",revision:"a4957098a8c64beffb05ae4f1187dfab"},{url:"guide/installation.html",revision:"e8fef7c26e49d1383f19b7f38ef719a9"},{url:"guide/usage.html",revision:"51551555a44eda1a588e1a92c9e05add"},{url:"index.html",revision:"2f9efe1c634f4c1d0b5b5e00c7c55765"},{url:"logo.jpg",revision:"85c8a5d8d293ba0087bc0aff9714b0c1"},{url:"logo.svg",revision:"7a424c76e4fd34957ba14636ce37bf6d"},{url:"mstile-150x150.png",revision:"d61095d12c87835e67131f5e68f3922f"},{url:"safari-pinned-tab.svg",revision:"3a498fab85e168832cd725bd1b9d53e6"}],{})}));
