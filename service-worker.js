if(!self.define){let e,s={};const l=(l,i)=>(l=new URL(l+".js",i).href,s[l]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=s,document.head.appendChild(e)}else e=l,importScripts(l),s()})).then((()=>{let e=s[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(i,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let a={};const t=e=>l(e,r),u={module:{uri:r},exports:a,require:t};s[r]=Promise.all(i.map((e=>u[e]||t(e)))).then((e=>(n(...e),a)))}}define(["./workbox-6c6cf662"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"578ad814557a449be373e7d8c5ec8cc1"},{url:"android-chrome-192x192.png",revision:"99866d603fbab750d1ff66b609618fc3"},{url:"android-chrome-512x512.png",revision:"6108f7d8a8daf428fa8e702e296a0864"},{url:"api-reference/core.html",revision:"b0551b7206b42c5b9c0984efdbbc1e7a"},{url:"api-reference/index.html",revision:"b2805abda15bdd2a50ea44793f6ea69a"},{url:"api-reference/integration-react.html",revision:"ca6e08a41ef464fb1de673538038aae8"},{url:"api-reference/integration-vue.html",revision:"e7dd02e5cde9e61830d62652d6c3f599"},{url:"api-reference/plugin-autoplay.html",revision:"240896683d94b03763a2705bbc177814"},{url:"api-reference/plugin-custom-events.html",revision:"84338cc8ac0376e9a32ec81963017d74"},{url:"api-reference/plugin-mouse-drag.html",revision:"9e23b02045f1ea40ecfc727e1ed3e210"},{url:"api-reference/plugin-scroll-snap-fallback.html",revision:"d83aa5db4e9ac6f2339230dc9e9e91f9"},{url:"apple-touch-icon.png",revision:"815d34c8e80ecf432b4c8b8b84c25ec0"},{url:"assets/404.3db3206d.js",revision:null},{url:"assets/404.html.d341cb57.js",revision:null},{url:"assets/404.html.fb7a6a04.js",revision:null},{url:"assets/app.e97bb1a3.js",revision:null},{url:"assets/AutoLink.ea0c19b3.js",revision:null},{url:"assets/back-to-top.8efcbe56.svg",revision:null},{url:"assets/CanIUseSection.5c28b833.js",revision:null},{url:"assets/core.html.e43a6ed6.js",revision:null},{url:"assets/core.html.f0f3dfaf.js",revision:null},{url:"assets/ExampleSection.b7f81c0d.js",revision:null},{url:"assets/Footer.930600b4.js",revision:null},{url:"assets/HeroSection.8d0689d4.js",revision:null},{url:"assets/index.ca88147e.js",revision:null},{url:"assets/index.html.2f2c29dd.js",revision:null},{url:"assets/index.html.302234eb.js",revision:null},{url:"assets/index.html.5a9e222f.js",revision:null},{url:"assets/index.html.6abe9153.js",revision:null},{url:"assets/index.html.97f19d7e.js",revision:null},{url:"assets/index.html.a17d7fef.js",revision:null},{url:"assets/index.html.aba70870.js",revision:null},{url:"assets/index.html.b20498ef.js",revision:null},{url:"assets/index.html.c5a40d29.js",revision:null},{url:"assets/index.html.d81516f3.js",revision:null},{url:"assets/installation.html.224c0873.js",revision:null},{url:"assets/installation.html.e04ebd87.js",revision:null},{url:"assets/integration-react.html.115e8822.js",revision:null},{url:"assets/integration-react.html.a47555b8.js",revision:null},{url:"assets/integration-vue.html.5f8f2c2a.js",revision:null},{url:"assets/integration-vue.html.a8045415.js",revision:null},{url:"assets/Layout.c6d632ff.js",revision:null},{url:"assets/NavLink.6cb2459b.js",revision:null},{url:"assets/plugin-autoplay.html.9b83aadd.js",revision:null},{url:"assets/plugin-autoplay.html.ec2388d5.js",revision:null},{url:"assets/plugin-custom-events.html.2802aff9.js",revision:null},{url:"assets/plugin-custom-events.html.d6a5f463.js",revision:null},{url:"assets/plugin-mouse-drag.html.cf1c6c6e.js",revision:null},{url:"assets/plugin-mouse-drag.html.e1b41f5f.js",revision:null},{url:"assets/plugin-scroll-snap-fallback.html.093bd566.js",revision:null},{url:"assets/plugin-scroll-snap-fallback.html.1353d25c.js",revision:null},{url:"assets/style.5f25c8b5.css",revision:null},{url:"assets/usage.html.2a1e39af.js",revision:null},{url:"assets/usage.html.d3bac2ab.js",revision:null},{url:"contribution/index.html",revision:"cd44634df6aa17de6dd4268142301b65"},{url:"ecosystem/index.html",revision:"b585c7e7babff8bb4bc7e2a86b43a3f8"},{url:"favicon-16x16.png",revision:"2901e4f062ec96c8e1be019581fe3de8"},{url:"favicon-32x32.png",revision:"bb80bf2aff9dc997ba2136245c56e770"},{url:"guide/index.html",revision:"94f9ea911d66e7f16964fb6c1bbe47c0"},{url:"guide/installation.html",revision:"d4e44f599af88b363e6b82229b9d2b0c"},{url:"guide/usage.html",revision:"04e1ca73efecf801a415fb2d88dd5c86"},{url:"index.html",revision:"676b19d6d81709fcaee262d41394c237"},{url:"logo.jpg",revision:"85c8a5d8d293ba0087bc0aff9714b0c1"},{url:"logo.svg",revision:"7a424c76e4fd34957ba14636ce37bf6d"},{url:"mstile-150x150.png",revision:"d61095d12c87835e67131f5e68f3922f"},{url:"safari-pinned-tab.svg",revision:"3a498fab85e168832cd725bd1b9d53e6"}],{})}));
