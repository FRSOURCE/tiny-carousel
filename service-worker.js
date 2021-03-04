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
    "revision": "4040cfa6a4db710271bbfd1ede64dd3b"
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
    "revision": "fd998234550c0c881dd27088534c7feb"
  },
  {
    "url": "api-reference/index.html",
    "revision": "4953fb3b81b7ad704516cd427834fe29"
  },
  {
    "url": "api-reference/plugin-custom-events/index.html",
    "revision": "04ca85c776c3c1edf37427599f4e47b7"
  },
  {
    "url": "api-reference/plugin-scroll-snap-fallback/index.html",
    "revision": "6ab399c443341a41f013c7154e2932d8"
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
    "url": "assets/js/16.ed564130.js",
    "revision": "cd26f23e14da2bcf90835c31a1d5a78b"
  },
  {
    "url": "assets/js/17.f0fc4d38.js",
    "revision": "8ae7a5956c6aac1302a85d10d78bc876"
  },
  {
    "url": "assets/js/18.a2c8e24a.js",
    "revision": "99645af3a0a5dddfa23f5daff8f8b594"
  },
  {
    "url": "assets/js/19.9d9d0463.js",
    "revision": "aaaac0b410c2ed324c48159f3a3f6ef9"
  },
  {
    "url": "assets/js/2.d4c769cc.js",
    "revision": "8a8ee7230017223e588a219b8e8c0905"
  },
  {
    "url": "assets/js/20.bd394594.js",
    "revision": "4cbd717c537610403dec3607abf13e70"
  },
  {
    "url": "assets/js/21.10adf3d4.js",
    "revision": "3747898752bfc2d737df76a45ce77aa5"
  },
  {
    "url": "assets/js/22.b39d8881.js",
    "revision": "60c385516e0391354b1fd298140da132"
  },
  {
    "url": "assets/js/23.a216f1ca.js",
    "revision": "dd6b4d482e62c8df39f3eab51f00cec0"
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
    "url": "assets/js/app.520653b3.js",
    "revision": "3db1da5eeae805616cb858bd80d8af88"
  },
  {
    "url": "CHANGELOG/index.html",
    "revision": "ae8c1b05c08ce548179316df55fd2a40"
  },
  {
    "url": "contribution/index.html",
    "revision": "94478a971542ca2bfb5a4770a16046ee"
  },
  {
    "url": "ecosystem/index.html",
    "revision": "e6a89084bdab72f5c0bcbc7540614ed8"
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
    "revision": "bef664b1f4dee0f2686d7415f7f05384"
  },
  {
    "url": "guide/installation/index.html",
    "revision": "41303d9966bf4218b82f411deb73c305"
  },
  {
    "url": "guide/usage/index.html",
    "revision": "ca22e5f5bddad4f178ec99930319620c"
  },
  {
    "url": "index.html",
    "revision": "a8b00d4fa403d1b2eb900bcab49cc5d4"
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
