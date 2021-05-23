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
    "revision": "358a9002442148b287b6ed43a66da84d"
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
    "revision": "9b35bc624663affd3dc7fe6b47550c6e"
  },
  {
    "url": "api-reference/index.html",
    "revision": "b39eb0802d2320c69fa95daaa951b90d"
  },
  {
    "url": "api-reference/integration-react/index.html",
    "revision": "029157cb41e035836c18a00c4b9123f7"
  },
  {
    "url": "api-reference/integration-vue/index.html",
    "revision": "c48363b561a362e6c05d4081a525a04c"
  },
  {
    "url": "api-reference/plugin-autoplay/index.html",
    "revision": "d26b29bfb8dcc88bd2d469cb40a9d8b9"
  },
  {
    "url": "api-reference/plugin-custom-events/index.html",
    "revision": "3254164700748b32d83ce0bc04ffa4bb"
  },
  {
    "url": "api-reference/plugin-mouse-drag/index.html",
    "revision": "8ec77e9976a9dca4a8750c34ac54a090"
  },
  {
    "url": "api-reference/plugin-scroll-snap-fallback/index.html",
    "revision": "c36135ef6dc1daa0ab2cc9b070d40ab5"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "815d34c8e80ecf432b4c8b8b84c25ec0"
  },
  {
    "url": "assets/css/0.styles.d873a1ad.css",
    "revision": "d27b8a72e1a5b569bf729bfd0cae2c76"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.3c647b62.js",
    "revision": "f5574650440b87806d994228240eb0b4"
  },
  {
    "url": "assets/js/11.ad5798ba.js",
    "revision": "5b581e06875bf12ef036cf2666c67f11"
  },
  {
    "url": "assets/js/12.eb8d44fc.js",
    "revision": "7bb35931654d7ef598bea3ef9713dd37"
  },
  {
    "url": "assets/js/13.b204d3b0.js",
    "revision": "8605b46f429384ce6b9aed503d847dc1"
  },
  {
    "url": "assets/js/14.6836c155.js",
    "revision": "e05a59d5a4e31438d20ad4048071e3fc"
  },
  {
    "url": "assets/js/15.b17eeb2d.js",
    "revision": "2e857cfd4260d53def07e09d83bf5cb7"
  },
  {
    "url": "assets/js/16.0c839d71.js",
    "revision": "b956f9dc405ff3e938585ba5370eac8a"
  },
  {
    "url": "assets/js/17.bf484e2d.js",
    "revision": "2823efb25bbdd9aec9441563a2a8dd3a"
  },
  {
    "url": "assets/js/18.647dc50a.js",
    "revision": "7adbb2f1334fd16de00c1d4e2549c543"
  },
  {
    "url": "assets/js/19.b7be6bdf.js",
    "revision": "4650a7b44e7b67e036581faaaf461462"
  },
  {
    "url": "assets/js/2.07590a64.js",
    "revision": "f02bca07c34456524d84703f5f14709f"
  },
  {
    "url": "assets/js/20.1ec7b6ff.js",
    "revision": "d2393efbfe9a8eb57ceecdcbf397f182"
  },
  {
    "url": "assets/js/21.dbd56ea8.js",
    "revision": "96ac968bd0c74256ce3088c49c353ccf"
  },
  {
    "url": "assets/js/22.4a3063d9.js",
    "revision": "1637d6d7286251aec920ffc4f7f9a960"
  },
  {
    "url": "assets/js/23.96919a6e.js",
    "revision": "ea63aab5d482c862ff52846279568cf9"
  },
  {
    "url": "assets/js/24.bb505d88.js",
    "revision": "00437f43f3a6ea4b9b911ff5c78f0cf4"
  },
  {
    "url": "assets/js/25.4b2820d0.js",
    "revision": "66c5ecf6270502b275b791c90b9687b0"
  },
  {
    "url": "assets/js/26.53d0e937.js",
    "revision": "69f6906b910adac57a11a61d772c82fd"
  },
  {
    "url": "assets/js/27.2fbbb26a.js",
    "revision": "7d17c49b6364fd7680f8a6d00997fe50"
  },
  {
    "url": "assets/js/28.a88819c1.js",
    "revision": "7d8ef7c7b4205ce10e1688d4e6df14dc"
  },
  {
    "url": "assets/js/3.1110c641.js",
    "revision": "4bf1b6c847c1883490c487f6a629d578"
  },
  {
    "url": "assets/js/4.4e0524eb.js",
    "revision": "20ae7fe51c60a5e4df7de183984e63b4"
  },
  {
    "url": "assets/js/5.2e38f9c3.js",
    "revision": "8385be252c0eb3bf21a4438f6e8bb335"
  },
  {
    "url": "assets/js/6.c5e810bb.js",
    "revision": "bf92b8cfc823066244a33bf70f5b095f"
  },
  {
    "url": "assets/js/7.3b6e7c16.js",
    "revision": "6c3c80b79bd5b56c01abf452ebeb1f40"
  },
  {
    "url": "assets/js/8.7d8c50f4.js",
    "revision": "d9ac61838b93d74fa4d6aed8403514c8"
  },
  {
    "url": "assets/js/9.a947d4de.js",
    "revision": "72113f1a512ca13953ec476f2866b001"
  },
  {
    "url": "assets/js/app.c257369a.js",
    "revision": "0dfe0d87ed3c6b26e0144978a913bef6"
  },
  {
    "url": "CHANGELOG/index.html",
    "revision": "06d1c3a70adb0606b93519817ac5eafa"
  },
  {
    "url": "contribution/index.html",
    "revision": "2820ac18a4817ee030338a86593f2a87"
  },
  {
    "url": "ecosystem/index.html",
    "revision": "83c9f95ae9b821ffec2455c8661af1c9"
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
    "revision": "598f12680b6eb3bb44408ab0e67be704"
  },
  {
    "url": "guide/installation/index.html",
    "revision": "c10dd86135ad27268eb69cf5d4f6eb85"
  },
  {
    "url": "guide/usage/index.html",
    "revision": "8f8b111725a650e6a337fbdaa88ffe09"
  },
  {
    "url": "index.html",
    "revision": "ac0b84f53c090f0e643d73ed49f6e7b9"
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
