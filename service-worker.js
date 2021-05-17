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
    "revision": "f38c3fc4d8a829b298bff31828db1dd0"
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
    "revision": "16745ad8168d4dbd7924c235e4e988dc"
  },
  {
    "url": "api-reference/index.html",
    "revision": "d517437c82db6083c860bafa89dde6fc"
  },
  {
    "url": "api-reference/integration-vue/index.html",
    "revision": "e6cc878ae3bcecf2e1d5929c159027a5"
  },
  {
    "url": "api-reference/plugin-autoplay/index.html",
    "revision": "1c729facbed1cbd75cb923fb3d46a47d"
  },
  {
    "url": "api-reference/plugin-custom-events/index.html",
    "revision": "37f7bdfb285c80df8a0233bf2dbfdd12"
  },
  {
    "url": "api-reference/plugin-mouse-drag/index.html",
    "revision": "6da2675627b1476b9cb03801d59899f9"
  },
  {
    "url": "api-reference/plugin-scroll-snap-fallback/index.html",
    "revision": "a4e7f39ef020fe793ad7c7694d2ffb34"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "815d34c8e80ecf432b4c8b8b84c25ec0"
  },
  {
    "url": "assets/css/0.styles.b5a73a5d.css",
    "revision": "d988edde76d6da4ffec1800badb2241b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.6d75d474.js",
    "revision": "b940afb58aec39fff9c2711461e42d88"
  },
  {
    "url": "assets/js/11.c2db89b2.js",
    "revision": "90d40d9675efa41bf6681d155ed7f162"
  },
  {
    "url": "assets/js/12.100471b4.js",
    "revision": "0e6fb89139512d68fa738fe706242b26"
  },
  {
    "url": "assets/js/13.5054a249.js",
    "revision": "ffb7139d4b705efefb81bebf2f9fcc0b"
  },
  {
    "url": "assets/js/14.98822e66.js",
    "revision": "f893287fdf433e098fef14389bfa83e5"
  },
  {
    "url": "assets/js/15.76cfa313.js",
    "revision": "716df164f37934c05ff3baa5cdf9610e"
  },
  {
    "url": "assets/js/16.0c1c5d02.js",
    "revision": "0d3939fc48aefd040f9e63e96ca3b9eb"
  },
  {
    "url": "assets/js/17.cab41e2b.js",
    "revision": "ea7b08207491db98b4d717044167ebe8"
  },
  {
    "url": "assets/js/18.da546410.js",
    "revision": "d942de2104af68ee67b7500071e79b4b"
  },
  {
    "url": "assets/js/19.ecd13a28.js",
    "revision": "148d91995e79521c70519628239b6af8"
  },
  {
    "url": "assets/js/2.a1d499ac.js",
    "revision": "1a25c7fd877304df8ac192c45feeb5c9"
  },
  {
    "url": "assets/js/20.5ec86cfd.js",
    "revision": "260e17b6eda863c65b625ad989b5fb25"
  },
  {
    "url": "assets/js/21.8be3f6ff.js",
    "revision": "f8d6018b6875a121085b667349150b66"
  },
  {
    "url": "assets/js/22.c37e5ac2.js",
    "revision": "31ad2a5a535e783c8f2a8ec5c6e0ecc0"
  },
  {
    "url": "assets/js/23.6f0d768d.js",
    "revision": "5274a83ec4b7f853b0e0e3eda4193bc2"
  },
  {
    "url": "assets/js/24.869b9471.js",
    "revision": "58dd31f5a9f15ac3d7891d61fac48266"
  },
  {
    "url": "assets/js/25.cbb8570a.js",
    "revision": "c2b670c275fec64f9d8d7befb2e7c34e"
  },
  {
    "url": "assets/js/26.5365757c.js",
    "revision": "eac542baa20e7eb60a8b910614dc66e3"
  },
  {
    "url": "assets/js/27.5d8a5323.js",
    "revision": "cd097bde8bc67266ea615beafc3c45da"
  },
  {
    "url": "assets/js/3.bd74832f.js",
    "revision": "055a60ec62f490dd0933dbc154ed11a0"
  },
  {
    "url": "assets/js/4.b71548aa.js",
    "revision": "cfcf04bbd1677cab6590ba36afe51342"
  },
  {
    "url": "assets/js/5.19d9ca9c.js",
    "revision": "b77a77931dfcfdb8a22d033f11c38ae9"
  },
  {
    "url": "assets/js/6.5cae4048.js",
    "revision": "02e78bd85e8a40371a740f92a5c41ffb"
  },
  {
    "url": "assets/js/7.9a103d79.js",
    "revision": "58ae319a761511ba49c3f9026009e9cc"
  },
  {
    "url": "assets/js/8.070f10a0.js",
    "revision": "2dbd4b40584d840ac3c3d660a26a654e"
  },
  {
    "url": "assets/js/9.e4277af5.js",
    "revision": "eccbe09aae39d373ce2fbd324009e256"
  },
  {
    "url": "assets/js/app.1691ab1c.js",
    "revision": "92dda454603feaecebf1c8e9ecb485f6"
  },
  {
    "url": "CHANGELOG/index.html",
    "revision": "6120a3dfaeacad5f80d49afd1205fe10"
  },
  {
    "url": "contribution/index.html",
    "revision": "97e742615a543fbac4b2c3a3eedd38b3"
  },
  {
    "url": "ecosystem/index.html",
    "revision": "5398da39e5f29d8ee97d5412c6575360"
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
    "revision": "a8a4918453b170e5645bd06a51d8358c"
  },
  {
    "url": "guide/installation/index.html",
    "revision": "84a8d338b4135a877c45e713b9865fbd"
  },
  {
    "url": "guide/usage/index.html",
    "revision": "329a9d600ac9b4bdcc0075a72624bbc9"
  },
  {
    "url": "index.html",
    "revision": "37c96bf922582e552a0d2488d929b1a9"
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
