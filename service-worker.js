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
    "revision": "6ff3fb53292eb6f294ecb81c8cd6e5a5"
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
    "revision": "ec90cb7fdfb9972e54308bbc40fb468e"
  },
  {
    "url": "api-reference/index.html",
    "revision": "0583d3efdf3fbceffb4b6fc5238e1206"
  },
  {
    "url": "api-reference/plugin-autoplay/index.html",
    "revision": "fb171732f2019041e8d3806d1e93775e"
  },
  {
    "url": "api-reference/plugin-custom-events/index.html",
    "revision": "9e6f7e97cdb52fba6e2873969d0bc80c"
  },
  {
    "url": "api-reference/plugin-mouse-drag/index.html",
    "revision": "3627dbe78bcf384a134231d3c7fbed38"
  },
  {
    "url": "api-reference/plugin-scroll-snap-fallback/index.html",
    "revision": "3698637605326066a94c196094c353b1"
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
    "url": "assets/js/10.ed261d86.js",
    "revision": "317ee232c3f9e4950acaee8bf90cc4e5"
  },
  {
    "url": "assets/js/11.837d372d.js",
    "revision": "bf92f62c5339c94fa38d569b7e29bd65"
  },
  {
    "url": "assets/js/12.cda31ef4.js",
    "revision": "4d756c6b57357f24c2655d35a8258248"
  },
  {
    "url": "assets/js/13.40df5e15.js",
    "revision": "ce9d60b59c20a2a03636757b00d0316c"
  },
  {
    "url": "assets/js/14.ac6faccb.js",
    "revision": "61fe3ba0435d6da3cf7575e07a27a5a8"
  },
  {
    "url": "assets/js/15.e039f708.js",
    "revision": "1607e9a6b9ba6fffaff00108d088da98"
  },
  {
    "url": "assets/js/16.b8881349.js",
    "revision": "8465d03f50450c32bf5e9dc3b68f5226"
  },
  {
    "url": "assets/js/17.111e0c0b.js",
    "revision": "38b11c572791cb1b5dab9e6157c29be9"
  },
  {
    "url": "assets/js/18.c846c6aa.js",
    "revision": "6ed414f3f11bf52befc551628d836964"
  },
  {
    "url": "assets/js/19.06fe8450.js",
    "revision": "4dc95eb39374e95e3912ebcfbb1deb77"
  },
  {
    "url": "assets/js/2.0a2e1656.js",
    "revision": "dac3ebdad7b6eb2f4466c1d368771565"
  },
  {
    "url": "assets/js/20.cedb50e6.js",
    "revision": "79c856a8cfa08946e70f45ea2d7b9817"
  },
  {
    "url": "assets/js/21.15572484.js",
    "revision": "6feb6969f72d8a1748c360af5d3750ca"
  },
  {
    "url": "assets/js/22.6ba99e07.js",
    "revision": "713cc2e1d9431bb5e2a278a7522bd8a3"
  },
  {
    "url": "assets/js/23.69b9e611.js",
    "revision": "54c6d521100f2f1eb283685d7134e453"
  },
  {
    "url": "assets/js/24.9b06dc73.js",
    "revision": "5a3cd31632f32a6604efd2922cb11ac4"
  },
  {
    "url": "assets/js/25.29d00714.js",
    "revision": "a4d683ef68e3530adf2d915e461088a7"
  },
  {
    "url": "assets/js/26.bb5b9e7b.js",
    "revision": "05cc3be145d6b806a2fce7fda371f92e"
  },
  {
    "url": "assets/js/3.0330996c.js",
    "revision": "061f82b59a433c7daf421950e08aaf39"
  },
  {
    "url": "assets/js/4.5efeebd0.js",
    "revision": "1057d0fad896486e5d5731a739e6b842"
  },
  {
    "url": "assets/js/5.66e091f2.js",
    "revision": "5bafcfd97723dcec29e75d967a147132"
  },
  {
    "url": "assets/js/6.21c31c58.js",
    "revision": "112201b9491aa7ae4fb34cca7f406138"
  },
  {
    "url": "assets/js/7.97ddd7d1.js",
    "revision": "a4afe41a3ccdcdc4b781e82b2805f705"
  },
  {
    "url": "assets/js/8.627e0591.js",
    "revision": "2ab93e3dd6e3fb19ffba1ad36ef38a56"
  },
  {
    "url": "assets/js/9.7dcdbe61.js",
    "revision": "e09b10eed7c4009d85b0987420343d66"
  },
  {
    "url": "assets/js/app.57e819ac.js",
    "revision": "28eb0b28f70e19ca3d44ea29b8a37a66"
  },
  {
    "url": "CHANGELOG/index.html",
    "revision": "0f88154de60fcef7ebb170f1ea8fa85d"
  },
  {
    "url": "contribution/index.html",
    "revision": "5ca637a2f28ba889f2e759df41232ff1"
  },
  {
    "url": "ecosystem/index.html",
    "revision": "a7ca6449f2a54e08a03b4ed059ef97d3"
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
    "revision": "e4b56151ff26a530cf927e861c4415c2"
  },
  {
    "url": "guide/installation/index.html",
    "revision": "8635f1802d03091a7ed4883bdb0fc63d"
  },
  {
    "url": "guide/usage/index.html",
    "revision": "4d1bb8586435cbf5d352ec9a6f876e59"
  },
  {
    "url": "index.html",
    "revision": "381744ed3988e2673172170c16cee275"
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
