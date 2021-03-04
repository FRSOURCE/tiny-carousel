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
    "revision": "174c1b8546b50422f3e1eeb8da76d382"
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
    "revision": "e96f7d45c7243269b9d0a5f824fd3fe2"
  },
  {
    "url": "api-reference/index.html",
    "revision": "045f7708b7bb1ff9474e48e06afeb73c"
  },
  {
    "url": "api-reference/plugin-custom-events/index.html",
    "revision": "af22433994d0bef5894751c45de061da"
  },
  {
    "url": "api-reference/plugin-scroll-snap-fallback/index.html",
    "revision": "32ae62df304cb16b9d7f424c5a33c6dd"
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
    "url": "assets/js/13.77af7ab8.js",
    "revision": "469f14e436768ef9c738646255c31167"
  },
  {
    "url": "assets/js/14.52a47957.js",
    "revision": "cc1860c3017e8b9af8778c58aaecbbe4"
  },
  {
    "url": "assets/js/15.955a38b3.js",
    "revision": "2c211ef3f841cbfe5054be52d5b1b562"
  },
  {
    "url": "assets/js/16.a9cd7a00.js",
    "revision": "e64cc3717e2304052df725cb48a5caa6"
  },
  {
    "url": "assets/js/17.78bc3de2.js",
    "revision": "0e97fdc9a9f1ab7aff07e8a830c32e0f"
  },
  {
    "url": "assets/js/18.f98a756a.js",
    "revision": "9ea768c1ffca3f5863d3131419e0af5b"
  },
  {
    "url": "assets/js/19.cb9e12cf.js",
    "revision": "2d9763c9dfd09d31de7009c72dae6c54"
  },
  {
    "url": "assets/js/2.d4c769cc.js",
    "revision": "8a8ee7230017223e588a219b8e8c0905"
  },
  {
    "url": "assets/js/20.d5007902.js",
    "revision": "69013fcd7b5be4188d9e1384167463f9"
  },
  {
    "url": "assets/js/21.c3a7e700.js",
    "revision": "ed48885be9ce907c65e6059f50c27206"
  },
  {
    "url": "assets/js/22.418cccda.js",
    "revision": "7e797d69a42582ba5dc643ee0206ac34"
  },
  {
    "url": "assets/js/23.a54fb6d6.js",
    "revision": "a27a154081176d6fb0c9593735b4e8f8"
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
    "url": "assets/js/app.ac2644a7.js",
    "revision": "51b61ef669bb9f5c452c55ce05c18f4a"
  },
  {
    "url": "CHANGELOG/index.html",
    "revision": "603c9262a208c17fb5ca05e574bc5e52"
  },
  {
    "url": "contribution/index.html",
    "revision": "23b76a58622c0f21d8dba44956b9fe7c"
  },
  {
    "url": "ecosystem/index.html",
    "revision": "f1dd1f99d774997c4d21717cca9a2a47"
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
    "revision": "d7f422eb133ece3eb717ba131230e209"
  },
  {
    "url": "guide/installation/index.html",
    "revision": "e50e45bfbd3429c89621bbe076ee5e96"
  },
  {
    "url": "guide/usage/index.html",
    "revision": "0bc1ae7b1ee92bae2f83793473a8b9ca"
  },
  {
    "url": "index.html",
    "revision": "1edbad65f455593149a37f7c4fdfd502"
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
