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
    "revision": "2dde0022380d7b04b5fd270ac7b10054"
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
    "revision": "5dc2b77542592fafa9682e77f37e4884"
  },
  {
    "url": "api-reference/index.html",
    "revision": "75862618392f40ffc9c3d7be2f227d14"
  },
  {
    "url": "api-reference/plugin-custom-events/index.html",
    "revision": "04d632182825d960f82a9d2cda46017c"
  },
  {
    "url": "api-reference/plugin-scroll-snap-fallback/index.html",
    "revision": "6b13c374f0be6f0dd8bd19fc09661cb2"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "815d34c8e80ecf432b4c8b8b84c25ec0"
  },
  {
    "url": "assets/css/0.styles.c273e701.css",
    "revision": "7ab8e1922a22668525e6afd77e056929"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.fdd737d5.js",
    "revision": "375bcbb38f7e152f035cb35c1b5f4b37"
  },
  {
    "url": "assets/js/11.18ee0f58.js",
    "revision": "d928f2d733a1ad0f91a353f5fcc95625"
  },
  {
    "url": "assets/js/12.17db63fa.js",
    "revision": "1e352aa468ffbbecc4ab8a8015017587"
  },
  {
    "url": "assets/js/13.dd63786f.js",
    "revision": "f3f77bd78d53a2c6a17c71d1f097133b"
  },
  {
    "url": "assets/js/14.52a47957.js",
    "revision": "cc1860c3017e8b9af8778c58aaecbbe4"
  },
  {
    "url": "assets/js/15.cd2bdcae.js",
    "revision": "0a6cbd0c3b50c6fc7cb3a8031c80c636"
  },
  {
    "url": "assets/js/16.a9cd7a00.js",
    "revision": "e64cc3717e2304052df725cb48a5caa6"
  },
  {
    "url": "assets/js/17.ee471115.js",
    "revision": "c43857c529bf5e9bd8d7be001bab9f38"
  },
  {
    "url": "assets/js/18.f7f84e3a.js",
    "revision": "0d7db8e3de2a85129f62348122f4506c"
  },
  {
    "url": "assets/js/19.27bae682.js",
    "revision": "6ad8621a489736dba524c7733c1173a5"
  },
  {
    "url": "assets/js/2.d4c769cc.js",
    "revision": "8a8ee7230017223e588a219b8e8c0905"
  },
  {
    "url": "assets/js/20.9eedad4e.js",
    "revision": "25fa336b6543c8f739ddd6c162c99f8a"
  },
  {
    "url": "assets/js/21.b48cbe6c.js",
    "revision": "6c6c9ac8d198ef3fd41f1464e7bf9a92"
  },
  {
    "url": "assets/js/22.1739a71a.js",
    "revision": "fd414d1bea3bab8bd8c233e6a7dff374"
  },
  {
    "url": "assets/js/23.c41b121d.js",
    "revision": "276b2d0d3a59efb9fd0f8e8ebaef82b9"
  },
  {
    "url": "assets/js/24.1918a204.js",
    "revision": "13a2232ce9f0147d316c053837f9755f"
  },
  {
    "url": "assets/js/3.5771eaee.js",
    "revision": "e337d8a2602b6a2d909435dbd580e10a"
  },
  {
    "url": "assets/js/4.7f184ee8.js",
    "revision": "acbd25a5aa8398403adf9902b862d96d"
  },
  {
    "url": "assets/js/5.ca223e85.js",
    "revision": "4ebba14abe07f06a793115142510b749"
  },
  {
    "url": "assets/js/6.90f6ad02.js",
    "revision": "555333c5ea7ee97140a4d767bf411c7d"
  },
  {
    "url": "assets/js/7.9fe074c6.js",
    "revision": "32fe771d8d26a3c7e39848061a03acaa"
  },
  {
    "url": "assets/js/8.1aace441.js",
    "revision": "649986341cc9cf4d501d4de81d880586"
  },
  {
    "url": "assets/js/9.4ff5dd6d.js",
    "revision": "dfc152e750aca6ac96849d18207dc107"
  },
  {
    "url": "assets/js/app.2ad63751.js",
    "revision": "c8c9bfce9a2b4d69c3196a7cfa87f698"
  },
  {
    "url": "CHANGELOG/index.html",
    "revision": "b1c0843385333c1aea33d7c4ad8e8bec"
  },
  {
    "url": "contribution/index.html",
    "revision": "e830e6dfbe6b7debf0f1c7e403c294ca"
  },
  {
    "url": "ecosystem/index.html",
    "revision": "42018953c40ae5b7c505aad458006676"
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
    "revision": "40b525e557b9188004d5277e404392b7"
  },
  {
    "url": "guide/installation/index.html",
    "revision": "e15b229ffbae9ae789a24ae6ee7e2846"
  },
  {
    "url": "guide/usage/index.html",
    "revision": "0c71dc3f20c691d4477a27af6e543479"
  },
  {
    "url": "index.html",
    "revision": "979dbdb09e6dc8c0538e9075ffb4859b"
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
