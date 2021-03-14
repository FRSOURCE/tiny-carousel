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
    "revision": "5f819364859543236b3ae476a64774e5"
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
    "revision": "6a49e512a0b10c6701693730716697f7"
  },
  {
    "url": "api-reference/index.html",
    "revision": "3549ed069adcd856efe92be94044dd6b"
  },
  {
    "url": "api-reference/plugin-autoplay/index.html",
    "revision": "ffd9fa408438ffe68b22edb8eb2c9a2c"
  },
  {
    "url": "api-reference/plugin-custom-events/index.html",
    "revision": "9381328a1ed52b1b85815b4c503cc55d"
  },
  {
    "url": "api-reference/plugin-scroll-snap-fallback/index.html",
    "revision": "bc1cd59a5ea090e3fc00b44875f02ed0"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "815d34c8e80ecf432b4c8b8b84c25ec0"
  },
  {
    "url": "assets/css/0.styles.2e384b3c.css",
    "revision": "d0f5df890ac1a462757d79146898106a"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a774892d.js",
    "revision": "bad6248d8bd03e8d86d3bafe4023b634"
  },
  {
    "url": "assets/js/11.8e24fe0f.js",
    "revision": "09b7f757b7ab545f268ec96f9e6834ea"
  },
  {
    "url": "assets/js/12.53e93854.js",
    "revision": "b756e7120a0a1d9dcb6476f386428f97"
  },
  {
    "url": "assets/js/13.93fa58af.js",
    "revision": "40e6f7456292323429dd3b006ac86195"
  },
  {
    "url": "assets/js/14.38c44ff7.js",
    "revision": "6c4b0bf74a716729edd48218d4c55e86"
  },
  {
    "url": "assets/js/15.233ff95c.js",
    "revision": "d58fed2f19298954b4205a8eda47617f"
  },
  {
    "url": "assets/js/16.ae4a4890.js",
    "revision": "94de79077bb3c553153c709423f7ce0a"
  },
  {
    "url": "assets/js/17.3ff64ba3.js",
    "revision": "f2b771040628fa9c6ea3493d2cfbab0e"
  },
  {
    "url": "assets/js/18.7d0c8d1f.js",
    "revision": "ecac0f39d911598906e403c5e32a6199"
  },
  {
    "url": "assets/js/19.82b4ceec.js",
    "revision": "72ab8957b7f57b128bc019130df7f14e"
  },
  {
    "url": "assets/js/2.f52272d5.js",
    "revision": "13c993758d40d3255308452780270738"
  },
  {
    "url": "assets/js/20.61e3a735.js",
    "revision": "b3b37bdb09c60aa192c09cde347adc9e"
  },
  {
    "url": "assets/js/21.71590cde.js",
    "revision": "da392f85850de17ca29dcac118d17a53"
  },
  {
    "url": "assets/js/22.271080f1.js",
    "revision": "96417fd8965f491d620068a861e1eaaf"
  },
  {
    "url": "assets/js/23.8de2231f.js",
    "revision": "71572cc43d142aa8c8d17bad7878b71d"
  },
  {
    "url": "assets/js/24.947a00e9.js",
    "revision": "2b4fb2e63c6dfa33e1a2f3f45fa364a9"
  },
  {
    "url": "assets/js/25.89bdf951.js",
    "revision": "57935ea8009a6e8f16acc8c8fd88acf7"
  },
  {
    "url": "assets/js/3.80994a72.js",
    "revision": "72733d0b8fb4413764ad014d8f9f6a58"
  },
  {
    "url": "assets/js/4.08c08704.js",
    "revision": "fab32637d3609e38ba57811d5efa9705"
  },
  {
    "url": "assets/js/5.62e61928.js",
    "revision": "cf80b57e9035157d76c1c4c996862274"
  },
  {
    "url": "assets/js/6.d74bda37.js",
    "revision": "c6e6d16bb642d83e9d2e245758791cef"
  },
  {
    "url": "assets/js/7.2431fc4e.js",
    "revision": "f2257ee77ec7156564c8b5216a53e4b5"
  },
  {
    "url": "assets/js/8.fb44adcc.js",
    "revision": "99cf5ef5985979fedd99c7213b665d2f"
  },
  {
    "url": "assets/js/9.ebb04173.js",
    "revision": "410004a5cefb90a6d3a818caff429e02"
  },
  {
    "url": "assets/js/app.dbecac66.js",
    "revision": "5a1195192d4a7df9f94c8b3612839b0c"
  },
  {
    "url": "CHANGELOG/index.html",
    "revision": "bf5bb374ceb1ffb126b729427070bdef"
  },
  {
    "url": "contribution/index.html",
    "revision": "f51d3b08fef147dfb862f05c9e2d28b6"
  },
  {
    "url": "ecosystem/index.html",
    "revision": "ca86e3aed359f10d45e7d9a6436ef5f8"
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
    "revision": "8bb0df8fbd71d9b199c73e60d36efde6"
  },
  {
    "url": "guide/installation/index.html",
    "revision": "08abdd773626434f9ed650a34192cca9"
  },
  {
    "url": "guide/usage/index.html",
    "revision": "c501fa6653b36479869f766189a3f5c4"
  },
  {
    "url": "index.html",
    "revision": "4fdbb39b62f5ad55fbef7a5dfc70afbc"
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
