if(!self.define){let e,s={};const l=(l,i)=>(l=new URL(l+".js",i).href,s[l]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=s,document.head.appendChild(e)}else e=l,importScripts(l),s()})).then((()=>{let e=s[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(i,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let a={};const t=e=>l(e,r),u={module:{uri:r},exports:a,require:t};s[r]=Promise.all(i.map((e=>u[e]||t(e)))).then((e=>(n(...e),a)))}}define(["./workbox-6c6cf662"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"0023798036ece54a850d86bada994b3e"},{url:"android-chrome-192x192.png",revision:"99866d603fbab750d1ff66b609618fc3"},{url:"android-chrome-512x512.png",revision:"6108f7d8a8daf428fa8e702e296a0864"},{url:"api-reference/core.html",revision:"a378ff9d5fe3bcdffd1f30b88f9b76cf"},{url:"api-reference/index.html",revision:"b376ea0e7beab2a7abd27891a18a7832"},{url:"api-reference/integration-react.html",revision:"7b390c36fadf6576be864c78d00c36ad"},{url:"api-reference/integration-vue.html",revision:"795cd8f8f406fc8036b426f7256418fc"},{url:"api-reference/plugin-autoplay.html",revision:"b853a6c338a1a1cef67cbf71d363badc"},{url:"api-reference/plugin-custom-events.html",revision:"f7b3a1698ec1f6e55dddeca50be145b3"},{url:"api-reference/plugin-mouse-drag.html",revision:"d206d72e49708d002929658cd89578b5"},{url:"api-reference/plugin-scroll-snap-fallback.html",revision:"e27c880fefb34d91f1afb0e956979242"},{url:"apple-touch-icon.png",revision:"815d34c8e80ecf432b4c8b8b84c25ec0"},{url:"assets/404.e887f9de.js",revision:null},{url:"assets/404.html.4849fcef.js",revision:null},{url:"assets/404.html.d341cb57.js",revision:null},{url:"assets/app.468bc449.js",revision:null},{url:"assets/AutoLink.0b718c3d.js",revision:null},{url:"assets/back-to-top.8efcbe56.svg",revision:null},{url:"assets/CanIUseSection.bddac57a.js",revision:null},{url:"assets/core.html.224c1759.js",revision:null},{url:"assets/core.html.5dd43b48.js",revision:null},{url:"assets/ExampleSection.d4cde570.js",revision:null},{url:"assets/Footer.f4e6041d.js",revision:null},{url:"assets/HeroSection.d4fb4550.js",revision:null},{url:"assets/index.ca88147e.js",revision:null},{url:"assets/index.html.237d1aab.js",revision:null},{url:"assets/index.html.49c7024c.js",revision:null},{url:"assets/index.html.5c8e99d7.js",revision:null},{url:"assets/index.html.7a5e94e1.js",revision:null},{url:"assets/index.html.8f226b42.js",revision:null},{url:"assets/index.html.b07e74d5.js",revision:null},{url:"assets/index.html.b790820a.js",revision:null},{url:"assets/index.html.b9c5bb7f.js",revision:null},{url:"assets/index.html.e5b91ba7.js",revision:null},{url:"assets/index.html.ece863c1.js",revision:null},{url:"assets/installation.html.22ec7d21.js",revision:null},{url:"assets/installation.html.5c180d3e.js",revision:null},{url:"assets/integration-react.html.920da016.js",revision:null},{url:"assets/integration-react.html.9787c497.js",revision:null},{url:"assets/integration-vue.html.0daab434.js",revision:null},{url:"assets/integration-vue.html.0f0ac0a4.js",revision:null},{url:"assets/Layout.90afe2a4.js",revision:null},{url:"assets/NavLink.cdb561a2.js",revision:null},{url:"assets/plugin-autoplay.html.47141cb0.js",revision:null},{url:"assets/plugin-autoplay.html.ebbec5c6.js",revision:null},{url:"assets/plugin-custom-events.html.e9e77a70.js",revision:null},{url:"assets/plugin-custom-events.html.f2bd553b.js",revision:null},{url:"assets/plugin-mouse-drag.html.78f1e61f.js",revision:null},{url:"assets/plugin-mouse-drag.html.95c2a637.js",revision:null},{url:"assets/plugin-scroll-snap-fallback.html.bd138b7d.js",revision:null},{url:"assets/plugin-scroll-snap-fallback.html.d9cfcb58.js",revision:null},{url:"assets/style.d77cb9a9.css",revision:null},{url:"assets/usage.html.22e4e1db.js",revision:null},{url:"assets/usage.html.b54bf88c.js",revision:null},{url:"contribution/index.html",revision:"57c73e7f4f39ee8194050ee0a1a24cb9"},{url:"ecosystem/index.html",revision:"8cc136ca7c008a5563888ee87feb2ea5"},{url:"favicon-16x16.png",revision:"2901e4f062ec96c8e1be019581fe3de8"},{url:"favicon-32x32.png",revision:"bb80bf2aff9dc997ba2136245c56e770"},{url:"guide/index.html",revision:"148c9f10e1ff1135f5d03e7cf6713cb7"},{url:"guide/installation.html",revision:"43aa53d8e48fedf426d6ecc6ac8e37c8"},{url:"guide/usage.html",revision:"0c9895b721f913332ca013f7657b8f41"},{url:"index.html",revision:"bfe8f33eaaf0bd510bfadc8bbcea8c58"},{url:"logo.jpg",revision:"85c8a5d8d293ba0087bc0aff9714b0c1"},{url:"logo.svg",revision:"7a424c76e4fd34957ba14636ce37bf6d"},{url:"mstile-150x150.png",revision:"d61095d12c87835e67131f5e68f3922f"},{url:"safari-pinned-tab.svg",revision:"3a498fab85e168832cd725bd1b9d53e6"}],{})}));
