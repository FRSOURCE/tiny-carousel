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
    "revision": "12d229a096d2d5c4a9b6f617e70c12a8"
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
    "revision": "385a8743971aaa6c962bb4ca2f52d7f1"
  },
  {
    "url": "api-reference/index.html",
    "revision": "1dc6ea1b130f2424013d57a0690a1834"
  },
  {
    "url": "api-reference/plugin-autoplay/index.html",
    "revision": "27ed62c292f22c97f3e2c1dfcc59f30d"
  },
  {
    "url": "api-reference/plugin-custom-events/index.html",
    "revision": "0af10f1f74cb27c534aa0e4d7b28196b"
  },
  {
    "url": "api-reference/plugin-scroll-snap-fallback/index.html",
    "revision": "5ee998813d11ef649990a884050af4c5"
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
    "url": "assets/js/13.3f20a468.js",
    "revision": "e92be8748f058276a837ed4355c16120"
  },
  {
    "url": "assets/js/14.04821bc9.js",
    "revision": "c054eea23797481709205c2042133295"
  },
  {
    "url": "assets/js/15.a677267f.js",
    "revision": "0d90adf21703e1bf40debe8f81829dca"
  },
  {
    "url": "assets/js/16.3e524c74.js",
    "revision": "3c5f63a1ea397d273ca7ac2e51f798db"
  },
  {
    "url": "assets/js/17.73c54896.js",
    "revision": "6153ab18e25f8b33e2be5970dd9d9417"
  },
  {
    "url": "assets/js/18.01d6f870.js",
    "revision": "8da2ebdeb82b76e38ed8ed7246781c18"
  },
  {
    "url": "assets/js/19.807ef9e9.js",
    "revision": "261de58f7f847c089a33a5b277cce786"
  },
  {
    "url": "assets/js/2.f52272d5.js",
    "revision": "13c993758d40d3255308452780270738"
  },
  {
    "url": "assets/js/20.dc92bcf1.js",
    "revision": "cf366ba95d386fef0792a7fd24de964f"
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
    "url": "assets/js/app.df6fa66c.js",
    "revision": "57478cac5d26f60632721f675155613f"
  },
  {
    "url": "CHANGELOG/index.html",
    "revision": "e15dea906fea6d911a6c536fa8f8e182"
  },
  {
    "url": "contribution/index.html",
    "revision": "59237224d7459f999a7b06d8bcfd024f"
  },
  {
    "url": "ecosystem/index.html",
    "revision": "b7222e51b3f712cfed13d8a6b77ee850"
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
    "revision": "d04fc15fe2269055a5d47789b5378080"
  },
  {
    "url": "guide/installation/index.html",
    "revision": "3d934a966242b42a20f51fbe8ee186e6"
  },
  {
    "url": "guide/usage/index.html",
    "revision": "1ceb49100adbafa48b24a0768914184b"
  },
  {
    "url": "index.html",
    "revision": "9bef18cba9164694c3ae572cb847b5ab"
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
