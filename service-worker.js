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
    "revision": "7bc59e21591a24718d2a2b030c966b56"
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
    "revision": "a3f4865ab354f12d12e17cc9267cfa4e"
  },
  {
    "url": "api-reference/index.html",
    "revision": "35bb31fdd1cd28b56cb804c3cf6afa78"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "815d34c8e80ecf432b4c8b8b84c25ec0"
  },
  {
    "url": "assets/css/0.styles.4629baa5.css",
    "revision": "1336752aeeb7e57c80071262b9a68570"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.9145666e.js",
    "revision": "782249110f41bd876561da3c343999de"
  },
  {
    "url": "assets/js/11.8a307610.js",
    "revision": "b352cc83be6587bf2b064a2ee0ab406a"
  },
  {
    "url": "assets/js/12.6c46675f.js",
    "revision": "1f841c368104370417542476a4621250"
  },
  {
    "url": "assets/js/13.cffb821d.js",
    "revision": "c74afcce336371797d2cd903881f653b"
  },
  {
    "url": "assets/js/14.400b8bec.js",
    "revision": "910abea713074fd0cf09a6024987652f"
  },
  {
    "url": "assets/js/15.a36c78a3.js",
    "revision": "1a73505d91ae40a7520f89e4faf3a31a"
  },
  {
    "url": "assets/js/16.debf0431.js",
    "revision": "cb18c03f1131cadb73d78f0bd751e31f"
  },
  {
    "url": "assets/js/17.7cc310b3.js",
    "revision": "83760a06f31198b322fa18727bd38cb7"
  },
  {
    "url": "assets/js/18.9206ac66.js",
    "revision": "bf6b8272135959aa518cf7224b67174e"
  },
  {
    "url": "assets/js/19.7920df4d.js",
    "revision": "06aaa00444fbcaf7bc7a9786d676df8b"
  },
  {
    "url": "assets/js/2.9321ed64.js",
    "revision": "db552a3dab24727e61e09008101fdedb"
  },
  {
    "url": "assets/js/20.692a1687.js",
    "revision": "34fa35a0ee9a1bca017f7e71266e9072"
  },
  {
    "url": "assets/js/21.660d7999.js",
    "revision": "35eb64a48b4d605a4c835eee96874c42"
  },
  {
    "url": "assets/js/3.7dbdfef8.js",
    "revision": "501bf5b241fa0056623f0fabf065d9d8"
  },
  {
    "url": "assets/js/4.9300524e.js",
    "revision": "aacbd9970fec96a7d7a7b815479c3bd3"
  },
  {
    "url": "assets/js/5.d7479338.js",
    "revision": "de6600458a5a90029e0796d94c1f656e"
  },
  {
    "url": "assets/js/6.45f224f7.js",
    "revision": "be0e3529153be1358eba14da282f1cad"
  },
  {
    "url": "assets/js/7.8d201935.js",
    "revision": "4be3b3265cc17cd68b177a4574242d57"
  },
  {
    "url": "assets/js/8.d5d82f90.js",
    "revision": "afd4acd8cc0d26b65d6c23668d41fc34"
  },
  {
    "url": "assets/js/9.1d394619.js",
    "revision": "f4b5c1748aad343589a3e94943a9a232"
  },
  {
    "url": "assets/js/app.4118f28e.js",
    "revision": "e04ffba2db302d80ba5237b36551b317"
  },
  {
    "url": "CHANGELOG/index.html",
    "revision": "63399aaed206e96b8708e38ed420121d"
  },
  {
    "url": "contribution/index.html",
    "revision": "555aafa6f2940c52cf01b5a78240c220"
  },
  {
    "url": "ecosystem/index.html",
    "revision": "e9ce70603c4d84b53c3460d54868ce5c"
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
    "revision": "47d725c108b840c6af7f1df29b4a9187"
  },
  {
    "url": "guide/installation/index.html",
    "revision": "1f59e6c76130f90a916aab54f0cdae28"
  },
  {
    "url": "guide/usage/index.html",
    "revision": "0609c68d3fe550969378b04725115e22"
  },
  {
    "url": "index.html",
    "revision": "be29ee72561e6b38a7fcb0fd701c7a78"
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
