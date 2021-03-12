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
    "revision": "c143a958a15df04be656b126b9d81260"
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
    "revision": "f4f4142b4132d14dcd37c0c3665b8bb0"
  },
  {
    "url": "api-reference/index.html",
    "revision": "4df2bf0044bdea0000c60399eacc0ead"
  },
  {
    "url": "api-reference/plugin-autoplay/index.html",
    "revision": "fe1203409e093a55b73648b9fb36f2d2"
  },
  {
    "url": "api-reference/plugin-custom-events/index.html",
    "revision": "1a0cfef9593ea387d514a90ce3d9b435"
  },
  {
    "url": "api-reference/plugin-scroll-snap-fallback/index.html",
    "revision": "e1b16aa4afb0971340a32cf85b50374d"
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
    "url": "assets/js/13.e89528ff.js",
    "revision": "9ecd125cad06265cf1d275b5a098df71"
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
    "url": "assets/js/16.00769698.js",
    "revision": "6841c8270a76a151c5b285be1cdc4b24"
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
    "url": "assets/js/23.b2e73d9d.js",
    "revision": "9f4e23e1c89434f510d823e15ac82d54"
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
    "url": "assets/js/app.8e69534d.js",
    "revision": "72901a97cd87c3a57de1d509a821bfec"
  },
  {
    "url": "CHANGELOG/index.html",
    "revision": "cdb386657f5aa0687106e2c9fc829e0b"
  },
  {
    "url": "contribution/index.html",
    "revision": "f5b342233eb0b612b3a850f056a282ce"
  },
  {
    "url": "ecosystem/index.html",
    "revision": "8d6f3e27b81cee2e5ba2f8650c98c295"
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
    "revision": "d00d1432b053326ba967b2b967fc573f"
  },
  {
    "url": "guide/installation/index.html",
    "revision": "18f844411b3545bc39ac7643a34f1b09"
  },
  {
    "url": "guide/usage/index.html",
    "revision": "1a39512f3b340c7a2215cf092a11ee6e"
  },
  {
    "url": "index.html",
    "revision": "a7703c533fe159a9e4bf87c779b6095c"
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
