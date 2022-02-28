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
    "revision": "893a6676eb42215d0923322206761b92"
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
    "revision": "4ed6787d17282eb264aed6ae4db4551c"
  },
  {
    "url": "api-reference/index.html",
    "revision": "cba2d70ea094687dab4606ab638a75ae"
  },
  {
    "url": "api-reference/integration-react/index.html",
    "revision": "66ee26a868e4f57bd5d9b003695cf2a7"
  },
  {
    "url": "api-reference/integration-vue/index.html",
    "revision": "40270db64a03648b12f051c5bd652e59"
  },
  {
    "url": "api-reference/plugin-autoplay/index.html",
    "revision": "2f2ae5c6148b869cc6d2b65c7e41bb11"
  },
  {
    "url": "api-reference/plugin-custom-events/index.html",
    "revision": "12ac827ee0d0d983cc748ad2be0be0b7"
  },
  {
    "url": "api-reference/plugin-mouse-drag/index.html",
    "revision": "651b4ccfc3c1c6b25c399ea2321b5a70"
  },
  {
    "url": "api-reference/plugin-scroll-snap-fallback/index.html",
    "revision": "7e2d3e3be6535bd4e04aea6d1585b531"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "815d34c8e80ecf432b4c8b8b84c25ec0"
  },
  {
    "url": "assets/css/0.styles.d873a1ad.css",
    "revision": "a588e781fbebc80c359f463ad1438318"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.534805b7.js",
    "revision": "5c7500aa06f0dade345cf360e4187157"
  },
  {
    "url": "assets/js/11.f13926a7.js",
    "revision": "756979134ae4d93137a15795c42a01ba"
  },
  {
    "url": "assets/js/12.a1290cbd.js",
    "revision": "73064c478d9cf048cb09e6ad53c32bb7"
  },
  {
    "url": "assets/js/13.dde2eace.js",
    "revision": "3bed2274659749d6c0825c853737e564"
  },
  {
    "url": "assets/js/14.dc2e2d08.js",
    "revision": "8c360bafe3c87581a0c53993732b3fa7"
  },
  {
    "url": "assets/js/15.4f5d8002.js",
    "revision": "2ee51e1b729bdbc2ddd4d7dedcd81182"
  },
  {
    "url": "assets/js/16.7b1058a0.js",
    "revision": "74af36ba515b2a9e65ac0ff8ba691f4a"
  },
  {
    "url": "assets/js/17.eb4a2ef8.js",
    "revision": "674b683d5f596a7094f879b6ec435586"
  },
  {
    "url": "assets/js/18.0575a26f.js",
    "revision": "5f465b66ea1b3bdc789c9f3e7d8370f1"
  },
  {
    "url": "assets/js/19.fc370141.js",
    "revision": "583b4d990fd95d6933e55c9f3df97dda"
  },
  {
    "url": "assets/js/2.5effc7ce.js",
    "revision": "b1bf9b711bb868e134dfc4054f88c8e6"
  },
  {
    "url": "assets/js/20.57d4d15e.js",
    "revision": "44abc16f66286f6bb53f3a843e59788d"
  },
  {
    "url": "assets/js/21.b2ff979e.js",
    "revision": "0ea9c3baffbe959430da358e708eeb2e"
  },
  {
    "url": "assets/js/22.fc2744e1.js",
    "revision": "9c23da4a8aba558f1841a13b2ede2ab9"
  },
  {
    "url": "assets/js/23.59d5392d.js",
    "revision": "54adf125e7941a2c6fd24a74c05db9fb"
  },
  {
    "url": "assets/js/24.82e8c60b.js",
    "revision": "aac548c40c78274ea50c43363980473c"
  },
  {
    "url": "assets/js/25.b88f14d7.js",
    "revision": "08fb18fe8acbb697b8961335cd05c506"
  },
  {
    "url": "assets/js/26.8ee331b1.js",
    "revision": "d7f2c2b01f05d0c18aef6f33849d9bc0"
  },
  {
    "url": "assets/js/27.17578d70.js",
    "revision": "d996d52f8ef0ffa636e046a5fbddbf9d"
  },
  {
    "url": "assets/js/28.1667a86a.js",
    "revision": "ca2a2db0e34cc3ce57bb0eaf6fa52d9d"
  },
  {
    "url": "assets/js/3.ca851151.js",
    "revision": "d7c6290d620745593af7ddcea9aef236"
  },
  {
    "url": "assets/js/4.b90e5e9d.js",
    "revision": "7ca5718de7f54ef91389975ba62142c7"
  },
  {
    "url": "assets/js/5.0e8e1367.js",
    "revision": "c7dbb3a963ac4b40da878b798078c97c"
  },
  {
    "url": "assets/js/6.92412bd4.js",
    "revision": "7261d5921ecf38300a6a376724751a5e"
  },
  {
    "url": "assets/js/7.7090a678.js",
    "revision": "4041ba87dd6b3dc56a1c376d12ee9397"
  },
  {
    "url": "assets/js/8.2f40c0e7.js",
    "revision": "2d52308a5f355321465c76a075468b5d"
  },
  {
    "url": "assets/js/9.b7c6e867.js",
    "revision": "e6c37d68fb48fdb9bb7d6e8c5bf26340"
  },
  {
    "url": "assets/js/app.611fb3c9.js",
    "revision": "ee8cebe56e1c52e833e6eb7b6ddff761"
  },
  {
    "url": "CHANGELOG/index.html",
    "revision": "0985a5ab412a09161a08cc769a0f4535"
  },
  {
    "url": "contribution/index.html",
    "revision": "d4e2a8222fac2b065f33022a5c511d17"
  },
  {
    "url": "ecosystem/index.html",
    "revision": "b1c320e000dabff089cc95a392786864"
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
    "revision": "c3a4fc70b58e9f5b3a202a2e00851ef0"
  },
  {
    "url": "guide/installation/index.html",
    "revision": "a5365ef731601ae407b35cfb7e1f2e2c"
  },
  {
    "url": "guide/usage/index.html",
    "revision": "c5210f48eec2a3b81e0fa4bddd29e3fa"
  },
  {
    "url": "index.html",
    "revision": "83b8ab22aa845f444b8ed50a17855567"
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
