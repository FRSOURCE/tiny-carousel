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
    "revision": "82926ba2472fc99b1add24e2b47fc42d"
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
    "revision": "5b0692958c49373c351dffe25e3beadf"
  },
  {
    "url": "api-reference/index.html",
    "revision": "3ccef7d41c51adcf8ad52c719b507b3a"
  },
  {
    "url": "api-reference/integration-react/index.html",
    "revision": "09645095502a267eddde9c8570d654d8"
  },
  {
    "url": "api-reference/integration-vue/index.html",
    "revision": "5c1e88639719d74ffb13b01c980ad0e7"
  },
  {
    "url": "api-reference/plugin-autoplay/index.html",
    "revision": "f354c802d973e65d13529c49eada02f2"
  },
  {
    "url": "api-reference/plugin-custom-events/index.html",
    "revision": "1f3e22715b21c6c7de141b9ccf4bf69c"
  },
  {
    "url": "api-reference/plugin-mouse-drag/index.html",
    "revision": "99c40134fe94f81f523ea71629fb1e5e"
  },
  {
    "url": "api-reference/plugin-scroll-snap-fallback/index.html",
    "revision": "f1bef875a503db3d300e204bb6e402ea"
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
    "url": "assets/js/10.73b62080.js",
    "revision": "89d6657e457e1f021d781b36c35995cc"
  },
  {
    "url": "assets/js/11.fe617ef1.js",
    "revision": "60d56c98a8540ba1255c32a98e7fc356"
  },
  {
    "url": "assets/js/12.786ff608.js",
    "revision": "6347a5bc5471cf2f378751183085dffa"
  },
  {
    "url": "assets/js/13.0277ffe4.js",
    "revision": "a4a46f92da50c29e64fcb9c05b45d528"
  },
  {
    "url": "assets/js/14.462b030d.js",
    "revision": "16faf9028bc9628bc57cce1129ca2d50"
  },
  {
    "url": "assets/js/15.d40e7a5c.js",
    "revision": "e925268aeea9e063c99810caec7041d0"
  },
  {
    "url": "assets/js/16.79af406e.js",
    "revision": "18edf54625be326e2a59442f9ae0a3b9"
  },
  {
    "url": "assets/js/17.a0cfa7f3.js",
    "revision": "3047b2575754cbe8f018dde3ee7ea349"
  },
  {
    "url": "assets/js/18.6d6cadc2.js",
    "revision": "fb13f9faa0da5eb67d7e476efce98dfc"
  },
  {
    "url": "assets/js/19.11b6125a.js",
    "revision": "1e0a4ddbc603e665a3b9490ac38951bf"
  },
  {
    "url": "assets/js/2.b26fdfed.js",
    "revision": "f5e9de9b8e6d9cbddb4b74fd5e27785d"
  },
  {
    "url": "assets/js/20.23cea17e.js",
    "revision": "a6b2ef5263084bc8f506e8b31a6f99c4"
  },
  {
    "url": "assets/js/21.0d2e5794.js",
    "revision": "d488d958f82f7bb92e3424e1dddb9599"
  },
  {
    "url": "assets/js/22.03ceca6b.js",
    "revision": "a462d86545a8841e579bb3f49f272f21"
  },
  {
    "url": "assets/js/23.6d4af283.js",
    "revision": "caa53b838179c86b044c832288c3f583"
  },
  {
    "url": "assets/js/24.750a1bfb.js",
    "revision": "1da443ed5bc08e34d63bca92c482d3e2"
  },
  {
    "url": "assets/js/25.22cccf3d.js",
    "revision": "821b093fd10b5e368454ae8191420c0d"
  },
  {
    "url": "assets/js/26.dc78c55c.js",
    "revision": "619f7a1a62d3693dabdeb5dbcefff6c4"
  },
  {
    "url": "assets/js/27.e62a4bd4.js",
    "revision": "1df2c4baced7ce09e44de512ca7ff907"
  },
  {
    "url": "assets/js/28.a7554720.js",
    "revision": "b5af93f64603741611fd32d5447c6fd4"
  },
  {
    "url": "assets/js/3.568ba109.js",
    "revision": "7ec889a9d88cb45d4762a5ceab9d8969"
  },
  {
    "url": "assets/js/4.9c69b17c.js",
    "revision": "a25c2a824534447f187ca00f72ee9ea4"
  },
  {
    "url": "assets/js/5.49443d7b.js",
    "revision": "61b89b75ebea8eea464f7015361f3275"
  },
  {
    "url": "assets/js/6.625906a4.js",
    "revision": "e1003612c5463e5bc8f88b50fb8cbb54"
  },
  {
    "url": "assets/js/7.ef331394.js",
    "revision": "cd5c04b57caf7d0fc2e464577997b798"
  },
  {
    "url": "assets/js/8.31e03bd0.js",
    "revision": "e088b9dd00e3a984e38e7c22e9351c5e"
  },
  {
    "url": "assets/js/9.b66839a5.js",
    "revision": "899426a96dcba7b793f16c651fad9677"
  },
  {
    "url": "assets/js/app.e9c35bac.js",
    "revision": "c1de32e8472fa950a8dce7e36e5c50e8"
  },
  {
    "url": "CHANGELOG/index.html",
    "revision": "f6a1d0d3d353208585b32e7462e64a27"
  },
  {
    "url": "contribution/index.html",
    "revision": "7c45559892a8bc47fa16d6add9c6f6e8"
  },
  {
    "url": "ecosystem/index.html",
    "revision": "0bf1100704b89d5c9a154696483f62d0"
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
    "revision": "ed8f75d8e5fce591f0dffe7a26afd5bb"
  },
  {
    "url": "guide/installation/index.html",
    "revision": "3141d31d4be6ff66c040112a7db8751a"
  },
  {
    "url": "guide/usage/index.html",
    "revision": "fe2a4807b3918e5a0b2c3755b7b052b8"
  },
  {
    "url": "index.html",
    "revision": "e8adbddc37bd886ffb360c3709abaa79"
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
