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
    "revision": "e1c0019d97fbb18f9b5afcd5369fd6a2"
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
    "revision": "0e302c2fcfb6bf763bb3aeed9aefb408"
  },
  {
    "url": "api-reference/index.html",
    "revision": "1be2ab43f8e4209b87ba8de3d4eabedb"
  },
  {
    "url": "api-reference/plugin-autoplay/index.html",
    "revision": "e1d2d0f759c816e72fd60799d5a29904"
  },
  {
    "url": "api-reference/plugin-custom-events/index.html",
    "revision": "1b6f083aacd6f06efc848a34d680af67"
  },
  {
    "url": "api-reference/plugin-mouse-drag/index.html",
    "revision": "a25c5880d373f2de2816f0a825cf1959"
  },
  {
    "url": "api-reference/plugin-scroll-snap-fallback/index.html",
    "revision": "9f7cde435a96458071cdd408f14c9224"
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
    "url": "assets/js/app.57fbf9d4.js",
    "revision": "c2598e8e677a7a9a085a9f9d819b543b"
  },
  {
    "url": "CHANGELOG/index.html",
    "revision": "d2fc395880557ae5a07f19a8005600fd"
  },
  {
    "url": "contribution/index.html",
    "revision": "b1f04a69b98dd4b373debbaea24cf964"
  },
  {
    "url": "ecosystem/index.html",
    "revision": "90bb99a83133bdffc9a829e7fa4a8566"
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
    "revision": "830adebb9fa8b87599a0cb6b323add75"
  },
  {
    "url": "guide/installation/index.html",
    "revision": "417933de0f71253509e331c4bc081f61"
  },
  {
    "url": "guide/usage/index.html",
    "revision": "9e6cc6479f3ea0e12aac89db82e7dde9"
  },
  {
    "url": "index.html",
    "revision": "83fe103b60d032f532b614fdf82fd5f4"
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
