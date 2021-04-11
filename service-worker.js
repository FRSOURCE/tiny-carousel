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
    "revision": "c9e7a170ef371a0d37c82c0d69f41ae8"
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
    "revision": "71b3de924553149a18db5d8d512be025"
  },
  {
    "url": "api-reference/index.html",
    "revision": "b4e5ec2ff1b5f7b8af1504bef09ede76"
  },
  {
    "url": "api-reference/plugin-autoplay/index.html",
    "revision": "a162cbeed22569436a4f0a54cb097f0a"
  },
  {
    "url": "api-reference/plugin-custom-events/index.html",
    "revision": "5d067f0036f7d20d868ce0b112e2cfd6"
  },
  {
    "url": "api-reference/plugin-mouse-drag/index.html",
    "revision": "2010c2d9ed4c87e0d63502356fed67db"
  },
  {
    "url": "api-reference/plugin-scroll-snap-fallback/index.html",
    "revision": "da8c08dfc454069de1c2b0ebcefdebb6"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "815d34c8e80ecf432b4c8b8b84c25ec0"
  },
  {
    "url": "assets/css/0.styles.1ac6cb22.css",
    "revision": "21cd909263220b58fd88250141211235"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.0410b9df.js",
    "revision": "49fe71b3b1a25abbd2a8a827258b7e03"
  },
  {
    "url": "assets/js/11.53bc898e.js",
    "revision": "06cccc183182f1f680c8c844f7e19058"
  },
  {
    "url": "assets/js/12.1bd6a1c2.js",
    "revision": "4d756c6b57357f24c2655d35a8258248"
  },
  {
    "url": "assets/js/13.08ecf4bc.js",
    "revision": "877911d9308c502d3e3a194bc57f764c"
  },
  {
    "url": "assets/js/14.991ff816.js",
    "revision": "61fe3ba0435d6da3cf7575e07a27a5a8"
  },
  {
    "url": "assets/js/15.59f48cde.js",
    "revision": "1ad70d8722d31161a66a5354edc6ad38"
  },
  {
    "url": "assets/js/16.0a5ca09f.js",
    "revision": "8465d03f50450c32bf5e9dc3b68f5226"
  },
  {
    "url": "assets/js/17.2d23f2cd.js",
    "revision": "d5003442f4004a18ee9eb29b7820ee4a"
  },
  {
    "url": "assets/js/18.bfeaae96.js",
    "revision": "6ed414f3f11bf52befc551628d836964"
  },
  {
    "url": "assets/js/19.d33455d1.js",
    "revision": "4dc95eb39374e95e3912ebcfbb1deb77"
  },
  {
    "url": "assets/js/2.15883a4f.js",
    "revision": "1ed4220274e12f59ff8d9c552c0c3f5e"
  },
  {
    "url": "assets/js/20.bdb37436.js",
    "revision": "79c856a8cfa08946e70f45ea2d7b9817"
  },
  {
    "url": "assets/js/21.037754b4.js",
    "revision": "ff6f0a5148ca07e9643ebb9e552367b6"
  },
  {
    "url": "assets/js/22.34cb04ad.js",
    "revision": "713cc2e1d9431bb5e2a278a7522bd8a3"
  },
  {
    "url": "assets/js/23.bc6dd9e3.js",
    "revision": "83fea126eb7b19d44028b9941bab08ac"
  },
  {
    "url": "assets/js/24.20776577.js",
    "revision": "77e61210ffe8ec5fd9535337a40da8f3"
  },
  {
    "url": "assets/js/25.20df4ac6.js",
    "revision": "a4d683ef68e3530adf2d915e461088a7"
  },
  {
    "url": "assets/js/26.bb5b9e7b.js",
    "revision": "05cc3be145d6b806a2fce7fda371f92e"
  },
  {
    "url": "assets/js/3.1fb87dc8.js",
    "revision": "8308b9ed8000720f2da9629a71bab58b"
  },
  {
    "url": "assets/js/4.60264e63.js",
    "revision": "bff5404817e51ea076fcfc88eb78bd4d"
  },
  {
    "url": "assets/js/5.3de353f3.js",
    "revision": "299e505cb56ab0a0458f5da8add8028c"
  },
  {
    "url": "assets/js/6.429251fc.js",
    "revision": "6b1f73194451d5c41c59d3dff87ef91d"
  },
  {
    "url": "assets/js/7.6d68d5bb.js",
    "revision": "677ed003c584b98c1d4f1479be65f1cc"
  },
  {
    "url": "assets/js/8.0bf62ed6.js",
    "revision": "5192a78199efd97326d8eeeb8faa2461"
  },
  {
    "url": "assets/js/9.d2202761.js",
    "revision": "1a0ae6471734daf0e254eb6dc83e4d2a"
  },
  {
    "url": "assets/js/app.69a41379.js",
    "revision": "d5d30abf118286efa20abe3cb4ac826c"
  },
  {
    "url": "CHANGELOG/index.html",
    "revision": "ac29ca4ecfbe057589e15227e0f7195a"
  },
  {
    "url": "contribution/index.html",
    "revision": "d7042e6b8ce2b5bbba910c64aa504163"
  },
  {
    "url": "ecosystem/index.html",
    "revision": "363aec81e4dcca2d6341a24d7069f68b"
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
    "revision": "0d2df4503a56e724d45f098c65fb66ec"
  },
  {
    "url": "guide/installation/index.html",
    "revision": "7661153e610cca866723d1c453703618"
  },
  {
    "url": "guide/usage/index.html",
    "revision": "0f4753ffd7ea3276f14a6b75034e6293"
  },
  {
    "url": "index.html",
    "revision": "33a9c853063e95d8efcd70fb75bf8489"
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
