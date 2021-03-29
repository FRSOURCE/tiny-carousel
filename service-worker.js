/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "3f8f75a5cc513797b51d5256c9e1d576"
  },
  {
    "url": "android-chrome-192x192.png",
    "revision": "99866d603fbab750d1ff66b609618fc3"
  },
  {
    "url": "android-chrome-512x512.png",
    "revision": "6108f7d8a8daf428fa8e702e296a0864"
  },
  {
    "url": "api-reference/core/index.html",
    "revision": "e0daf53d14f7fd08c1cb2404eff01ec7"
  },
  {
    "url": "api-reference/index.html",
    "revision": "26cdb680944b2d02ebdb3e2ef262196b"
  },
  {
    "url": "api-reference/plugin-autoplay/index.html",
    "revision": "c15a26034257304bbd9380ee5262d547"
  },
  {
    "url": "api-reference/plugin-custom-events/index.html",
    "revision": "75ac0a6ede82c90413e3f5c2432f9b57"
  },
  {
    "url": "api-reference/plugin-mouse-drag/index.html",
    "revision": "0a32a09d51678fae3e7a0039e7c8302c"
  },
  {
    "url": "api-reference/plugin-scroll-snap-fallback/index.html",
    "revision": "de914cb454a81972cfd305a91d77afb3"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "815d34c8e80ecf432b4c8b8b84c25ec0"
  },
  {
    "url": "assets/css/0.styles.1ac6cb22.css",
    "revision": "21cd909263220b58fd88250141211235"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.0410b9df.js",
    "revision": "49fe71b3b1a25abbd2a8a827258b7e03"
  },
  {
    "url": "assets/js/11.e0c7a336.js",
    "revision": "66731f5f71fc84760127d32c538f810f"
  },
  {
    "url": "assets/js/12.1bd6a1c2.js",
    "revision": "4d756c6b57357f24c2655d35a8258248"
  },
  {
    "url": "assets/js/13.48912267.js",
    "revision": "b8eac0618b56f599b99f8a6af7a50344"
  },
  {
    "url": "assets/js/14.991ff816.js",
    "revision": "61fe3ba0435d6da3cf7575e07a27a5a8"
  },
  {
    "url": "assets/js/15.b393cadf.js",
    "revision": "c6ea3032780bbe39ee256e2f0df87d16"
  },
  {
    "url": "assets/js/16.0a5ca09f.js",
    "revision": "8465d03f50450c32bf5e9dc3b68f5226"
  },
  {
    "url": "assets/js/17.c4952a7e.js",
    "revision": "38b11c572791cb1b5dab9e6157c29be9"
  },
  {
    "url": "assets/js/18.bfeaae96.js",
    "revision": "6ed414f3f11bf52befc551628d836964"
  },
  {
    "url": "assets/js/19.d33455d1.js",
    "revision": "4dc95eb39374e95e3912ebcfbb1deb77"
  },
  {
    "url": "assets/js/2.dd88b603.js",
    "revision": "dac3ebdad7b6eb2f4466c1d368771565"
  },
  {
    "url": "assets/js/20.bdb37436.js",
    "revision": "79c856a8cfa08946e70f45ea2d7b9817"
  },
  {
    "url": "assets/js/21.d9c86f3e.js",
    "revision": "6feb6969f72d8a1748c360af5d3750ca"
  },
  {
    "url": "assets/js/22.34cb04ad.js",
    "revision": "713cc2e1d9431bb5e2a278a7522bd8a3"
  },
  {
    "url": "assets/js/23.bc6dd9e3.js",
    "revision": "83fea126eb7b19d44028b9941bab08ac"
  },
  {
    "url": "assets/js/24.392fc841.js",
    "revision": "5a3cd31632f32a6604efd2922cb11ac4"
  },
  {
    "url": "assets/js/25.20df4ac6.js",
    "revision": "a4d683ef68e3530adf2d915e461088a7"
  },
  {
    "url": "assets/js/26.bb5b9e7b.js",
    "revision": "05cc3be145d6b806a2fce7fda371f92e"
  },
  {
    "url": "assets/js/3.273db0a8.js",
    "revision": "061f82b59a433c7daf421950e08aaf39"
  },
  {
    "url": "assets/js/4.cd86141d.js",
    "revision": "1057d0fad896486e5d5731a739e6b842"
  },
  {
    "url": "assets/js/5.90d92c9f.js",
    "revision": "5bafcfd97723dcec29e75d967a147132"
  },
  {
    "url": "assets/js/6.1d513af8.js",
    "revision": "112201b9491aa7ae4fb34cca7f406138"
  },
  {
    "url": "assets/js/7.ac438a86.js",
    "revision": "0dfe4fe392ea646b156e5a09cbc79200"
  },
  {
    "url": "assets/js/8.0bf62ed6.js",
    "revision": "5192a78199efd97326d8eeeb8faa2461"
  },
  {
    "url": "assets/js/9.d2202761.js",
    "revision": "1a0ae6471734daf0e254eb6dc83e4d2a"
  },
  {
    "url": "assets/js/app.1b21df88.js",
    "revision": "af9a665e27e160d7f402d58f1300588d"
  },
  {
    "url": "CHANGELOG/index.html",
    "revision": "c8ef58818d822649a4db1aa3fb11be8c"
  },
  {
    "url": "contribution/index.html",
    "revision": "a41b5d7940ba50bfb0acd53dc6b9eefc"
  },
  {
    "url": "ecosystem/index.html",
    "revision": "9b312c413c384516541c45543fde4b0f"
  },
  {
    "url": "favicon-16x16.png",
    "revision": "2901e4f062ec96c8e1be019581fe3de8"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "bb80bf2aff9dc997ba2136245c56e770"
  },
  {
    "url": "guide/index.html",
    "revision": "cdf1889b69593a48467faa7d33d6a341"
  },
  {
    "url": "guide/installation/index.html",
    "revision": "076fd6de7e42b3de209927e6b324d3da"
  },
  {
    "url": "guide/usage/index.html",
    "revision": "35f81c8a16d1a5c3961978dcf188d80a"
  },
  {
    "url": "index.html",
    "revision": "3753da77e648e7c49ad5382dc7544419"
  },
  {
    "url": "logo.jpg",
    "revision": "85c8a5d8d293ba0087bc0aff9714b0c1"
  },
  {
    "url": "logo.svg",
    "revision": "7a424c76e4fd34957ba14636ce37bf6d"
  },
  {
    "url": "mstile-150x150.png",
    "revision": "d61095d12c87835e67131f5e68f3922f"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "3a498fab85e168832cd725bd1b9d53e6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
