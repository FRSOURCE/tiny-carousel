if(!self.define){let e,s={};const l=(l,i)=>(l=new URL(l+".js",i).href,s[l]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=s,document.head.appendChild(e)}else e=l,importScripts(l),s()})).then((()=>{let e=s[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(i,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let a={};const t=e=>l(e,r),u={module:{uri:r},exports:a,require:t};s[r]=Promise.all(i.map((e=>u[e]||t(e)))).then((e=>(n(...e),a)))}}define(["./workbox-6c6cf662"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"406419e3b03db4505457fa9b7ef46769"},{url:"android-chrome-192x192.png",revision:"99866d603fbab750d1ff66b609618fc3"},{url:"android-chrome-512x512.png",revision:"6108f7d8a8daf428fa8e702e296a0864"},{url:"api-reference/core.html",revision:"e9e7f7dee78aa7825f6b49563da09a94"},{url:"api-reference/index.html",revision:"487aebfa3c00421d574332174f40c359"},{url:"api-reference/integration-react.html",revision:"2c9393c82c5f7bece1b0acdab28bd26d"},{url:"api-reference/integration-vue.html",revision:"fc2ae258174a867dca05619f08aafc91"},{url:"api-reference/plugin-autoplay.html",revision:"712209237b85a0c12d9edea71c4d520e"},{url:"api-reference/plugin-custom-events.html",revision:"cb46be33c4a802abb8ac54c50fd1dfb9"},{url:"api-reference/plugin-mouse-drag.html",revision:"3b0a71e0f295658cb0b222ac30361dea"},{url:"api-reference/plugin-scroll-snap-fallback.html",revision:"a03564c8990182e93eac425670d700ed"},{url:"apple-touch-icon.png",revision:"815d34c8e80ecf432b4c8b8b84c25ec0"},{url:"assets/404.f6839d0d.js",revision:null},{url:"assets/404.html.bcb7f149.js",revision:null},{url:"assets/404.html.d341cb57.js",revision:null},{url:"assets/app.2eb228d9.js",revision:null},{url:"assets/AutoLink.e3395a41.js",revision:null},{url:"assets/back-to-top.8efcbe56.svg",revision:null},{url:"assets/CanIUseSection.d8a6964c.js",revision:null},{url:"assets/core.html.ca36a689.js",revision:null},{url:"assets/core.html.f80fbb6a.js",revision:null},{url:"assets/ExampleSection.1da7f916.js",revision:null},{url:"assets/Footer.0b67c45b.js",revision:null},{url:"assets/HeroSection.dfa12b48.js",revision:null},{url:"assets/index.ca88147e.js",revision:null},{url:"assets/index.html.05f37450.js",revision:null},{url:"assets/index.html.275906df.js",revision:null},{url:"assets/index.html.2f53a78f.js",revision:null},{url:"assets/index.html.5637b1a6.js",revision:null},{url:"assets/index.html.90cf8abf.js",revision:null},{url:"assets/index.html.95499036.js",revision:null},{url:"assets/index.html.ace51fbb.js",revision:null},{url:"assets/index.html.afe875f1.js",revision:null},{url:"assets/index.html.bad1f44c.js",revision:null},{url:"assets/index.html.fa0d9c94.js",revision:null},{url:"assets/installation.html.3e74494b.js",revision:null},{url:"assets/installation.html.76194058.js",revision:null},{url:"assets/integration-react.html.0e45569b.js",revision:null},{url:"assets/integration-react.html.f47fb491.js",revision:null},{url:"assets/integration-vue.html.479a0da9.js",revision:null},{url:"assets/integration-vue.html.e89ad562.js",revision:null},{url:"assets/Layout.2c5f8abd.js",revision:null},{url:"assets/NavLink.606785b6.js",revision:null},{url:"assets/plugin-autoplay.html.472d7b3a.js",revision:null},{url:"assets/plugin-autoplay.html.7b74779b.js",revision:null},{url:"assets/plugin-custom-events.html.b29bc65a.js",revision:null},{url:"assets/plugin-custom-events.html.b9efff53.js",revision:null},{url:"assets/plugin-mouse-drag.html.7a64014b.js",revision:null},{url:"assets/plugin-mouse-drag.html.9ea497a7.js",revision:null},{url:"assets/plugin-scroll-snap-fallback.html.0b2242e8.js",revision:null},{url:"assets/plugin-scroll-snap-fallback.html.c1340d43.js",revision:null},{url:"assets/style.5f25c8b5.css",revision:null},{url:"assets/usage.html.a114c3aa.js",revision:null},{url:"assets/usage.html.b04d628d.js",revision:null},{url:"contribution/index.html",revision:"04a95bc83e94868fb541794a8f20ba1d"},{url:"ecosystem/index.html",revision:"d56c1ac70030247ae14eaa706d57de58"},{url:"favicon-16x16.png",revision:"2901e4f062ec96c8e1be019581fe3de8"},{url:"favicon-32x32.png",revision:"bb80bf2aff9dc997ba2136245c56e770"},{url:"guide/index.html",revision:"a98bc79eee9acd160fb1d8ff620137de"},{url:"guide/installation.html",revision:"7b7ee1c3d41fd9c0efe64128b3034239"},{url:"guide/usage.html",revision:"15b93e27a6b6944dff2f537eb0b65e25"},{url:"index.html",revision:"9a565772d0b28b4391012dfb9dec7055"},{url:"logo.jpg",revision:"85c8a5d8d293ba0087bc0aff9714b0c1"},{url:"logo.svg",revision:"7a424c76e4fd34957ba14636ce37bf6d"},{url:"mstile-150x150.png",revision:"d61095d12c87835e67131f5e68f3922f"},{url:"safari-pinned-tab.svg",revision:"3a498fab85e168832cd725bd1b9d53e6"}],{})}));
