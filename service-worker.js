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
    "revision": "a968655faba8126ef67dd501ad4f4535"
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
    "revision": "b92545d7c5eb774a3647b0bbddc20b63"
  },
  {
    "url": "api-reference/index.html",
    "revision": "59af4f834ea997e69b822a7f47d8ade3"
  },
  {
    "url": "api-reference/integration-react/index.html",
    "revision": "7c36dd0039218f5f9584b92876fe5f60"
  },
  {
    "url": "api-reference/integration-vue/index.html",
    "revision": "45afb8fa166f9b3cc015b1123710bb69"
  },
  {
    "url": "api-reference/plugin-autoplay/index.html",
    "revision": "40bd4c1a6edc7d9204555d5e14971453"
  },
  {
    "url": "api-reference/plugin-custom-events/index.html",
    "revision": "7c6eaf6258bf91b680110e45b4717323"
  },
  {
    "url": "api-reference/plugin-mouse-drag/index.html",
    "revision": "caf5b6e1f06f5732758901d0eb366dc6"
  },
  {
    "url": "api-reference/plugin-scroll-snap-fallback/index.html",
    "revision": "193f3f77c05fae0aebf8b688ed322958"
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
    "url": "assets/js/10.b10ca882.js",
    "revision": "75dcc1fefc60d2571e257676716d129d"
  },
  {
    "url": "assets/js/11.6c5ff56f.js",
    "revision": "cd9b8e13fc73b4d856f0c30156af1148"
  },
  {
    "url": "assets/js/12.f6ecc870.js",
    "revision": "17d7aec6f32dda4283098c8a45abe74b"
  },
  {
    "url": "assets/js/13.916cb4d2.js",
    "revision": "1491eb51ccbcf01c957f7b5cd4f5240d"
  },
  {
    "url": "assets/js/14.6472394d.js",
    "revision": "b1efa590351e512fbb6e0cf409f566f9"
  },
  {
    "url": "assets/js/15.58626919.js",
    "revision": "3002a31cc192a1d49b38f450f27ed7ef"
  },
  {
    "url": "assets/js/16.55acf4f9.js",
    "revision": "1e8ba4f21aa989ebba41c785e65f1f9b"
  },
  {
    "url": "assets/js/17.089a1e4b.js",
    "revision": "8de542d39348cbd576e57c4e6bbbf17a"
  },
  {
    "url": "assets/js/18.daae1de4.js",
    "revision": "1bfdb0febb3486369b76e60594375b06"
  },
  {
    "url": "assets/js/19.210795b4.js",
    "revision": "e506e709ab352ac3ef2fb59a627abbdd"
  },
  {
    "url": "assets/js/2.b781d32e.js",
    "revision": "b4731e40de523934fb95393a55ee831e"
  },
  {
    "url": "assets/js/20.b426d8c0.js",
    "revision": "8d43419f02eb324ee268d82c635dc45b"
  },
  {
    "url": "assets/js/21.88c14885.js",
    "revision": "f1a7f476e33cfd8c241720d1a1e0166d"
  },
  {
    "url": "assets/js/22.85193a2f.js",
    "revision": "128a5a3cb5c14f17f847174ab2d6694b"
  },
  {
    "url": "assets/js/23.3c5e5eeb.js",
    "revision": "5c40b929454d387b6919679f536dbc98"
  },
  {
    "url": "assets/js/24.f998ceb7.js",
    "revision": "d361e9df4c67abd23b1a7eebb0852fb0"
  },
  {
    "url": "assets/js/25.9a980f8d.js",
    "revision": "d76f6ea48de308a2e100f02f2ef67bd1"
  },
  {
    "url": "assets/js/26.64408a24.js",
    "revision": "20fec67d63d7cf28dc8e02dd5ef027a8"
  },
  {
    "url": "assets/js/27.214c418d.js",
    "revision": "3a485111f8dac96f4d05d9db0f65e6e1"
  },
  {
    "url": "assets/js/28.fbd1b5eb.js",
    "revision": "af1428510a4188e0e639fc7c28b47408"
  },
  {
    "url": "assets/js/3.f6b1ebab.js",
    "revision": "bcbfea64d064164132687d6dbc7a7433"
  },
  {
    "url": "assets/js/4.d08da503.js",
    "revision": "a8f815771c5076a7a1865382981a1ebc"
  },
  {
    "url": "assets/js/5.a5e1e75a.js",
    "revision": "3d514b1eaf81b6806f26a797a26eee90"
  },
  {
    "url": "assets/js/6.049166a3.js",
    "revision": "8739bc29e2cc9e2e9aaf2670ab3cd533"
  },
  {
    "url": "assets/js/7.e1f393ed.js",
    "revision": "abe61d00ec04c4fb56261655b499c7da"
  },
  {
    "url": "assets/js/8.3985bd24.js",
    "revision": "d4b9003828f5962da57b8b9e492f5ac8"
  },
  {
    "url": "assets/js/9.660ecdad.js",
    "revision": "266f910762c32c56cbb02aa265507908"
  },
  {
    "url": "assets/js/app.b78e82c4.js",
    "revision": "ed66f0b762dc7eb9cf1d752f8258f359"
  },
  {
    "url": "CHANGELOG/index.html",
    "revision": "478f8fffd0cfc4860f724c42692c4593"
  },
  {
    "url": "contribution/index.html",
    "revision": "b5741f16b25b0435767f99bc91515b06"
  },
  {
    "url": "ecosystem/index.html",
    "revision": "eab2c52a58b5b70b86aaf510f6d28f1a"
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
    "revision": "067daf1dace59a56a967864185788043"
  },
  {
    "url": "guide/installation/index.html",
    "revision": "04eed2ecb0923064024c85685b23af58"
  },
  {
    "url": "guide/usage/index.html",
    "revision": "25eeea604632b23cd4f6c7c5311e8a4b"
  },
  {
    "url": "index.html",
    "revision": "d683367155238d1f109d58c39f2d10ea"
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
