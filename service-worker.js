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
    "revision": "1ecae2b736f74be3d08e1e145303cb0e"
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
    "revision": "8d6c6e77117581efc58e9fecdaf44cd6"
  },
  {
    "url": "api-reference/index.html",
    "revision": "5938c0bd829346202b31fee3faf42ae3"
  },
  {
    "url": "api-reference/integration-react/index.html",
    "revision": "ef206e803b39f8a2c7b270f4cacd829d"
  },
  {
    "url": "api-reference/integration-vue/index.html",
    "revision": "c0a2439acf276cd1091fdaf56ab6ec5d"
  },
  {
    "url": "api-reference/plugin-autoplay/index.html",
    "revision": "a7b09ef218dedc95ba20105c5b4e9691"
  },
  {
    "url": "api-reference/plugin-custom-events/index.html",
    "revision": "124ebe75ad042f5fddc7cf58a184af1f"
  },
  {
    "url": "api-reference/plugin-mouse-drag/index.html",
    "revision": "ca93ed24579efa0d948877f2c22b06cb"
  },
  {
    "url": "api-reference/plugin-scroll-snap-fallback/index.html",
    "revision": "87a0377617a2d8cabf4c8de4ffcbe077"
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
    "url": "assets/js/17.b7e592b6.js",
    "revision": "13b995d84e38dc81ff0a8ae25c720779"
  },
  {
    "url": "assets/js/18.2d10d2e4.js",
    "revision": "488870666697bfae91edd7c1628e83fc"
  },
  {
    "url": "assets/js/19.2cf78061.js",
    "revision": "8519a78573536070660f08ef2445796b"
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
    "url": "assets/js/app.c46b1dce.js",
    "revision": "52c1c549b0706ed663bd924829352176"
  },
  {
    "url": "CHANGELOG/index.html",
    "revision": "ad94db6eaf8e246d58fbff4f3ba775ab"
  },
  {
    "url": "contribution/index.html",
    "revision": "f836cfc2bcb7d7f662411b90acf26699"
  },
  {
    "url": "ecosystem/index.html",
    "revision": "b668e8511ce14e723a1034d4e2b9e53b"
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
    "revision": "14a4a3fe04e8b6f9ed936a081882c80c"
  },
  {
    "url": "guide/installation/index.html",
    "revision": "8c7b6c9caf3c599c667fde248219f033"
  },
  {
    "url": "guide/usage/index.html",
    "revision": "98a6e81eebda916f414fd7509178e488"
  },
  {
    "url": "index.html",
    "revision": "46fc9774154db41f8f4dcdc71d2ba5c9"
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