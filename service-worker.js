if(!self.define){let e,s={};const l=(l,i)=>(l=new URL(l+".js",i).href,s[l]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=s,document.head.appendChild(e)}else e=l,importScripts(l),s()})).then((()=>{let e=s[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(i,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let a={};const t=e=>l(e,r),u={module:{uri:r},exports:a,require:t};s[r]=Promise.all(i.map((e=>u[e]||t(e)))).then((e=>(n(...e),a)))}}define(["./workbox-6c6cf662"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"11fbea02d78baeafd7429fefd105a5ff"},{url:"android-chrome-192x192.png",revision:"99866d603fbab750d1ff66b609618fc3"},{url:"android-chrome-512x512.png",revision:"6108f7d8a8daf428fa8e702e296a0864"},{url:"api-reference/core.html",revision:"e78acc2ec6395e377d46a1ea0e50c446"},{url:"api-reference/index.html",revision:"30fd731676f20b68053d89c12bd84feb"},{url:"api-reference/integration-react.html",revision:"938b285645f691c7241483ecfe7dfd03"},{url:"api-reference/integration-vue.html",revision:"ac9ff829e46785cb0a9e05a4d4e0e417"},{url:"api-reference/plugin-autoplay.html",revision:"e68245e1baf612ce4acaad051122cd26"},{url:"api-reference/plugin-custom-events.html",revision:"0e163e1f769f8b036b3b3f08a0a6119c"},{url:"api-reference/plugin-mouse-drag.html",revision:"327ddb90cddd75d8509d2dcc92e77467"},{url:"api-reference/plugin-scroll-snap-fallback.html",revision:"85dc6f6003ca803da01c8078010302b6"},{url:"apple-touch-icon.png",revision:"815d34c8e80ecf432b4c8b8b84c25ec0"},{url:"assets/404.a9e110d0.js",revision:null},{url:"assets/404.html.0b28d9a5.js",revision:null},{url:"assets/404.html.d341cb57.js",revision:null},{url:"assets/app.944f5872.js",revision:null},{url:"assets/AutoLink.e59070e6.js",revision:null},{url:"assets/back-to-top.8efcbe56.svg",revision:null},{url:"assets/CanIUseSection.611027f2.js",revision:null},{url:"assets/core.html.40cd6125.js",revision:null},{url:"assets/core.html.43301868.js",revision:null},{url:"assets/ExampleSection.89943502.js",revision:null},{url:"assets/Footer.a2c54ce7.js",revision:null},{url:"assets/HeroSection.3197a68e.js",revision:null},{url:"assets/index.ca88147e.js",revision:null},{url:"assets/index.html.061084f4.js",revision:null},{url:"assets/index.html.2b9f025b.js",revision:null},{url:"assets/index.html.35a6144a.js",revision:null},{url:"assets/index.html.559cea39.js",revision:null},{url:"assets/index.html.589a2c9b.js",revision:null},{url:"assets/index.html.8d98fc04.js",revision:null},{url:"assets/index.html.cd3a0511.js",revision:null},{url:"assets/index.html.d127f25d.js",revision:null},{url:"assets/index.html.d579b7bc.js",revision:null},{url:"assets/index.html.eedb5516.js",revision:null},{url:"assets/installation.html.2fd200d7.js",revision:null},{url:"assets/installation.html.61bbb6e0.js",revision:null},{url:"assets/integration-react.html.3ca10973.js",revision:null},{url:"assets/integration-react.html.a30a79d5.js",revision:null},{url:"assets/integration-vue.html.31cb8965.js",revision:null},{url:"assets/integration-vue.html.c50f144a.js",revision:null},{url:"assets/Layout.f27746df.js",revision:null},{url:"assets/NavLink.e284f241.js",revision:null},{url:"assets/plugin-autoplay.html.7a89d32d.js",revision:null},{url:"assets/plugin-autoplay.html.90dca441.js",revision:null},{url:"assets/plugin-custom-events.html.735d995e.js",revision:null},{url:"assets/plugin-custom-events.html.f435da21.js",revision:null},{url:"assets/plugin-mouse-drag.html.c8cc3629.js",revision:null},{url:"assets/plugin-mouse-drag.html.f8cebf66.js",revision:null},{url:"assets/plugin-scroll-snap-fallback.html.412ce6db.js",revision:null},{url:"assets/plugin-scroll-snap-fallback.html.cf6df505.js",revision:null},{url:"assets/style.d77cb9a9.css",revision:null},{url:"assets/usage.html.4e0d1474.js",revision:null},{url:"assets/usage.html.c0f6f388.js",revision:null},{url:"contribution/index.html",revision:"2aa621b8aa4405c9c93f99106724902b"},{url:"ecosystem/index.html",revision:"fda8ae10a7fe75a9f7920fa0adb8b223"},{url:"favicon-16x16.png",revision:"2901e4f062ec96c8e1be019581fe3de8"},{url:"favicon-32x32.png",revision:"bb80bf2aff9dc997ba2136245c56e770"},{url:"guide/index.html",revision:"2f13a337a13f1de33756f56ed283e144"},{url:"guide/installation.html",revision:"ac8c593ad866c59675c1fad61b5ad826"},{url:"guide/usage.html",revision:"b502d0852ada3f9ca7af2997142ab3dc"},{url:"index.html",revision:"f52c897fb119f26ee3ae972dd1286a24"},{url:"logo.jpg",revision:"85c8a5d8d293ba0087bc0aff9714b0c1"},{url:"logo.svg",revision:"7a424c76e4fd34957ba14636ce37bf6d"},{url:"mstile-150x150.png",revision:"d61095d12c87835e67131f5e68f3922f"},{url:"safari-pinned-tab.svg",revision:"3a498fab85e168832cd725bd1b9d53e6"}],{})}));
