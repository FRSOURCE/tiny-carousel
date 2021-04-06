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
    "revision": "e2778490ef1d568285d8d8670e0ae3b4"
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
    "revision": "b03f887ebe9ba9d8f6afa480dcccfcf4"
  },
  {
    "url": "api-reference/index.html",
    "revision": "ad74ad06e3f853820872c7af94efde7e"
  },
  {
    "url": "api-reference/plugin-autoplay/index.html",
    "revision": "f19ca2bac7638455d8d6aeecae4ad085"
  },
  {
    "url": "api-reference/plugin-custom-events/index.html",
    "revision": "0d636a2d81963d923a989b472e5e5d6a"
  },
  {
    "url": "api-reference/plugin-mouse-drag/index.html",
    "revision": "cb49e9f11584f3d062cf426fc0955b12"
  },
  {
    "url": "api-reference/plugin-scroll-snap-fallback/index.html",
    "revision": "0a22b08bea3dd5c515c1a86566d8cf96"
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
    "url": "assets/js/13.60073d5b.js",
    "revision": "37fb0afaed29ec1dd317916a4337b8bc"
  },
  {
    "url": "assets/js/14.cc20bf28.js",
    "revision": "eae9a58861be7d1e3e3f2fba2e3b981c"
  },
  {
    "url": "assets/js/15.5e842117.js",
    "revision": "00652a850a98626329a1bfe7bf2a4062"
  },
  {
    "url": "assets/js/16.451a5074.js",
    "revision": "13695807dcaf57f7ce283580f1a3473a"
  },
  {
    "url": "assets/js/17.2d23f2cd.js",
    "revision": "d5003442f4004a18ee9eb29b7820ee4a"
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
    "url": "assets/js/21.037754b4.js",
    "revision": "ff6f0a5148ca07e9643ebb9e552367b6"
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
    "url": "assets/js/24.20776577.js",
    "revision": "77e61210ffe8ec5fd9535337a40da8f3"
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
    "url": "assets/js/app.fee4699a.js",
    "revision": "b8d86e75dcb14e885d4cb0cfb9eb2738"
  },
  {
    "url": "CHANGELOG/index.html",
    "revision": "bdb4b6a2d474f05f0ad6e8ef66367b92"
  },
  {
    "url": "contribution/index.html",
    "revision": "a597183fbbb9c4629e1d9591dfc82c13"
  },
  {
    "url": "ecosystem/index.html",
    "revision": "35c8c8bf65d53d18af67999b73a71fe8"
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
    "revision": "0e65f1378f168e78d3fef1c00553b256"
  },
  {
    "url": "guide/installation/index.html",
    "revision": "494617b10750553b9cc97bad15987568"
  },
  {
    "url": "guide/usage/index.html",
    "revision": "76b2674cba2f83bce062efd1b46ad6a3"
  },
  {
    "url": "index.html",
    "revision": "d81407c137b641e0765560fd6292c2f0"
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
