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
    "revision": "9a5d4d7a160fadf3f23bc07941498572"
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
    "revision": "977eda5c107c73dc09888a3c6ac83c5b"
  },
  {
    "url": "api-reference/index.html",
    "revision": "c4b84bfc44e4916aec6bf4438ed08cdd"
  },
  {
    "url": "api-reference/plugin-autoplay/index.html",
    "revision": "27fc971390542e56abdd8b75f4c34ff0"
  },
  {
    "url": "api-reference/plugin-custom-events/index.html",
    "revision": "4262ec68b67e3f0408b0b6e4d9fca021"
  },
  {
    "url": "api-reference/plugin-scroll-snap-fallback/index.html",
    "revision": "012661a40a01d307aa00add3acc56c50"
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
    "url": "assets/js/13.ab24c4c2.js",
    "revision": "5fe0c9c1cfa2eb531162cca81f08cb2a"
  },
  {
    "url": "assets/js/14.52a47957.js",
    "revision": "cc1860c3017e8b9af8778c58aaecbbe4"
  },
  {
    "url": "assets/js/15.4032b737.js",
    "revision": "dece00bffe5c119357bdd00cc8f15b4a"
  },
  {
    "url": "assets/js/16.87a7c416.js",
    "revision": "562f9ab40c727784ecfce82fda1ae947"
  },
  {
    "url": "assets/js/17.27d78a5a.js",
    "revision": "37759a8698d8f14dc0938c3df91dd61f"
  },
  {
    "url": "assets/js/18.062f27e4.js",
    "revision": "ccad2b447b6414a807d7c470e7ae444d"
  },
  {
    "url": "assets/js/19.1e5e6e8b.js",
    "revision": "6fc6ac12d3faf35553c246db3506db03"
  },
  {
    "url": "assets/js/2.d4c769cc.js",
    "revision": "8a8ee7230017223e588a219b8e8c0905"
  },
  {
    "url": "assets/js/20.78123286.js",
    "revision": "2b848434433b6ade08003b03ef529ed8"
  },
  {
    "url": "assets/js/21.23df3dd2.js",
    "revision": "55fd0d0472873caf687420683e497f3b"
  },
  {
    "url": "assets/js/22.230ceeed.js",
    "revision": "03232ae210c8633c480a5f638657a03c"
  },
  {
    "url": "assets/js/23.b7438885.js",
    "revision": "29d31b0260a9c9feef1a2e7a1a9dca9f"
  },
  {
    "url": "assets/js/24.e0648122.js",
    "revision": "273ec1895ddfdae82ea00e22328349b1"
  },
  {
    "url": "assets/js/25.badfaa23.js",
    "revision": "301a4e291dd172a791cbdc9a1a13f887"
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
    "url": "assets/js/6.6aa7d56a.js",
    "revision": "c123f9c0dd11694c79495a735dc56745"
  },
  {
    "url": "assets/js/7.9fe074c6.js",
    "revision": "32fe771d8d26a3c7e39848061a03acaa"
  },
  {
    "url": "assets/js/8.ce1804aa.js",
    "revision": "f21fed561072f63a07c4d07485f8f65e"
  },
  {
    "url": "assets/js/9.4ff5dd6d.js",
    "revision": "dfc152e750aca6ac96849d18207dc107"
  },
  {
    "url": "assets/js/app.fdea5c63.js",
    "revision": "99c38ea8cb478b8c44803465184a792e"
  },
  {
    "url": "CHANGELOG/index.html",
    "revision": "8177f0fde1180439556d320c62a40dc6"
  },
  {
    "url": "contribution/index.html",
    "revision": "d204a9237844487fe1f1961341ab0fac"
  },
  {
    "url": "ecosystem/index.html",
    "revision": "c5336e3e97256f6ddbaf38475ef86a0b"
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
    "revision": "63a3d83454ccb3adc22f4ddb65d4c301"
  },
  {
    "url": "guide/installation/index.html",
    "revision": "e5d314b4d76e3823700a16ec8a63aa2e"
  },
  {
    "url": "guide/usage/index.html",
    "revision": "cbf295bc9ebdb7fb253d9acc7a852123"
  },
  {
    "url": "index.html",
    "revision": "30c26b1f22793fab88481b3258b6191a"
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
