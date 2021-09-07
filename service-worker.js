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
    "revision": "1f6965393448997c0959cb165cc28b74"
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
    "revision": "a0ccc4eeac810c3e7cd32bfc484f7a61"
  },
  {
    "url": "api-reference/index.html",
    "revision": "e9070e5080a441cdeb4ef7b22da387b6"
  },
  {
    "url": "api-reference/integration-react/index.html",
    "revision": "2191533c66207ff43606762a5c2df00d"
  },
  {
    "url": "api-reference/integration-vue/index.html",
    "revision": "04eb914d3e3c8e24fe3c93f5c7a32763"
  },
  {
    "url": "api-reference/plugin-autoplay/index.html",
    "revision": "420bb45d3ef256b6bc09e1d18123586a"
  },
  {
    "url": "api-reference/plugin-custom-events/index.html",
    "revision": "564b6d37b7bb677036cc390c67ed3c72"
  },
  {
    "url": "api-reference/plugin-mouse-drag/index.html",
    "revision": "114b5a1c79c94085eb95b8a166e61c72"
  },
  {
    "url": "api-reference/plugin-scroll-snap-fallback/index.html",
    "revision": "1c217a659f5787cd7a42626ead8164a7"
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
    "url": "assets/js/13.637c0fbe.js",
    "revision": "5316d60ac27ac0dcceea769aa1655f0f"
  },
  {
    "url": "assets/js/14.6836c155.js",
    "revision": "e05a59d5a4e31438d20ad4048071e3fc"
  },
  {
    "url": "assets/js/15.e179c232.js",
    "revision": "e4e13cc5315a2b6d9ebd413d09e23ab6"
  },
  {
    "url": "assets/js/16.7afcb8b6.js",
    "revision": "b4559a6a3299c6f22deba448cecb8763"
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
    "url": "assets/js/2.a1f78e9c.js",
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
    "url": "assets/js/22.318d06b3.js",
    "revision": "f3ed6c9d38f22e77759f9dbfcb38d843"
  },
  {
    "url": "assets/js/23.e5b36285.js",
    "revision": "0b07a334cd799d59527bb06a7967aaba"
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
    "url": "assets/js/3.5cb785e7.js",
    "revision": "4bf1b6c847c1883490c487f6a629d578"
  },
  {
    "url": "assets/js/4.2dc9b636.js",
    "revision": "20ae7fe51c60a5e4df7de183984e63b4"
  },
  {
    "url": "assets/js/5.620d2dce.js",
    "revision": "8385be252c0eb3bf21a4438f6e8bb335"
  },
  {
    "url": "assets/js/6.736d4f27.js",
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
    "url": "assets/js/app.6f6e0c11.js",
    "revision": "5355912d2256f348ed96b480b6173561"
  },
  {
    "url": "CHANGELOG/index.html",
    "revision": "ed791c9d8cd4c7dfd960c4227c46db57"
  },
  {
    "url": "contribution/index.html",
    "revision": "29cb87df5faa0f995215c0ee3203a170"
  },
  {
    "url": "ecosystem/index.html",
    "revision": "b508d53c928a8dfda974fe1cd46acdf0"
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
    "revision": "7aff5e90f2c99d821a75ad7fa3adb7c1"
  },
  {
    "url": "guide/installation/index.html",
    "revision": "c1117f32aaddd0e9c11849a52b20e5c1"
  },
  {
    "url": "guide/usage/index.html",
    "revision": "d47458f7d19301f9cbf3e41fa67bf35f"
  },
  {
    "url": "index.html",
    "revision": "17e14bb338503016faa333ed06745782"
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
