if(!self.define){let e,s={};const l=(l,i)=>(l=new URL(l+".js",i).href,s[l]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=s,document.head.appendChild(e)}else e=l,importScripts(l),s()})).then((()=>{let e=s[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(i,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let a={};const t=e=>l(e,r),u={module:{uri:r},exports:a,require:t};s[r]=Promise.all(i.map((e=>u[e]||t(e)))).then((e=>(n(...e),a)))}}define(["./workbox-6c6cf662"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"0716f60c69c5980cbead199ef8183208"},{url:"android-chrome-192x192.png",revision:"99866d603fbab750d1ff66b609618fc3"},{url:"android-chrome-512x512.png",revision:"6108f7d8a8daf428fa8e702e296a0864"},{url:"api-reference/core.html",revision:"a8e7745a3fdaea813a08a077d5d4a99c"},{url:"api-reference/index.html",revision:"ee6e21bb39909e8891ccb3f88311cabf"},{url:"api-reference/integration-react.html",revision:"ba058764ef9c81d9325c060a3fab66f1"},{url:"api-reference/integration-vue.html",revision:"15d7487a36b58196ba09b8beb59567ec"},{url:"api-reference/plugin-autoplay.html",revision:"ae09a9e2c7c61370b783670172dc9a31"},{url:"api-reference/plugin-custom-events.html",revision:"976add028233fdfb3b207bf9cd4725b9"},{url:"api-reference/plugin-mouse-drag.html",revision:"e03c0e2e0f0198c7b16a972b9fd88aed"},{url:"api-reference/plugin-scroll-snap-fallback.html",revision:"3563904510e4a04cf0f48123f1d27830"},{url:"apple-touch-icon.png",revision:"815d34c8e80ecf432b4c8b8b84c25ec0"},{url:"assets/404.3682c79e.js",revision:null},{url:"assets/404.html.88537453.js",revision:null},{url:"assets/404.html.d341cb57.js",revision:null},{url:"assets/app.09b1f193.js",revision:null},{url:"assets/AutoLink.2d5bed36.js",revision:null},{url:"assets/back-to-top.8efcbe56.svg",revision:null},{url:"assets/CanIUseSection.48e4d251.js",revision:null},{url:"assets/core.html.55cf77fa.js",revision:null},{url:"assets/core.html.56e1047e.js",revision:null},{url:"assets/ExampleSection.479d0b15.js",revision:null},{url:"assets/Footer.3a6d1e33.js",revision:null},{url:"assets/HeroSection.4b025ea2.js",revision:null},{url:"assets/index.ca88147e.js",revision:null},{url:"assets/index.html.029cd254.js",revision:null},{url:"assets/index.html.090cac6d.js",revision:null},{url:"assets/index.html.2fc34952.js",revision:null},{url:"assets/index.html.6094219e.js",revision:null},{url:"assets/index.html.95af149a.js",revision:null},{url:"assets/index.html.cac7fca1.js",revision:null},{url:"assets/index.html.cccc78ce.js",revision:null},{url:"assets/index.html.da7cab7a.js",revision:null},{url:"assets/index.html.e8119b5d.js",revision:null},{url:"assets/index.html.f96cc005.js",revision:null},{url:"assets/installation.html.489be06e.js",revision:null},{url:"assets/installation.html.88b83848.js",revision:null},{url:"assets/integration-react.html.8231a2ad.js",revision:null},{url:"assets/integration-react.html.f71257ef.js",revision:null},{url:"assets/integration-vue.html.12218daf.js",revision:null},{url:"assets/integration-vue.html.2e2295e9.js",revision:null},{url:"assets/Layout.54a868d3.js",revision:null},{url:"assets/NavLink.706be22c.js",revision:null},{url:"assets/plugin-autoplay.html.4a9b46de.js",revision:null},{url:"assets/plugin-autoplay.html.a6e7c069.js",revision:null},{url:"assets/plugin-custom-events.html.aaaf4215.js",revision:null},{url:"assets/plugin-custom-events.html.ab764cfb.js",revision:null},{url:"assets/plugin-mouse-drag.html.d32549ac.js",revision:null},{url:"assets/plugin-mouse-drag.html.f0b188ba.js",revision:null},{url:"assets/plugin-scroll-snap-fallback.html.34b84ede.js",revision:null},{url:"assets/plugin-scroll-snap-fallback.html.b1ec80aa.js",revision:null},{url:"assets/style.d77cb9a9.css",revision:null},{url:"assets/usage.html.2fa25985.js",revision:null},{url:"assets/usage.html.f1774615.js",revision:null},{url:"contribution/index.html",revision:"862ad5efa48c1abe41c5dd4f140926b4"},{url:"ecosystem/index.html",revision:"74f08210fe6d3f37ff16c06991dcaaa8"},{url:"favicon-16x16.png",revision:"2901e4f062ec96c8e1be019581fe3de8"},{url:"favicon-32x32.png",revision:"bb80bf2aff9dc997ba2136245c56e770"},{url:"guide/index.html",revision:"f60af0608e9c95835191c04fdd864aa6"},{url:"guide/installation.html",revision:"885be33002c3134ce5cdc72bb53451da"},{url:"guide/usage.html",revision:"a22a06907b3aeb870675dda015f88837"},{url:"index.html",revision:"5c9dfb0f4f3ffd2af0413932ea6f9b6b"},{url:"logo.jpg",revision:"85c8a5d8d293ba0087bc0aff9714b0c1"},{url:"logo.svg",revision:"7a424c76e4fd34957ba14636ce37bf6d"},{url:"mstile-150x150.png",revision:"d61095d12c87835e67131f5e68f3922f"},{url:"safari-pinned-tab.svg",revision:"3a498fab85e168832cd725bd1b9d53e6"}],{})}));
