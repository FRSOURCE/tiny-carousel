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
    "revision": "ab90d0646bb129ea9320a4248fa54cae"
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
    "revision": "fea6dc92fe94bb46a254b921053e83f0"
  },
  {
    "url": "api-reference/index.html",
    "revision": "7828e441e644cf609dc5295c58a16819"
  },
  {
    "url": "api-reference/plugin-autoplay/index.html",
    "revision": "45c50c2a6309523fff8740c0e7dd863a"
  },
  {
    "url": "api-reference/plugin-custom-events/index.html",
    "revision": "1e2d79414afe58875116b9ea8c8fa389"
  },
  {
    "url": "api-reference/plugin-mouse-drag/index.html",
    "revision": "0c0a4150df11309063cbea62c14dee73"
  },
  {
    "url": "api-reference/plugin-scroll-snap-fallback/index.html",
    "revision": "519cbc685479e5b8198d45b68ae0f313"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "815d34c8e80ecf432b4c8b8b84c25ec0"
  },
  {
    "url": "assets/css/0.styles.fecbc0bb.css",
    "revision": "1af335d077b6891c59475aae2e2fb3fd"
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
    "url": "assets/js/2.4faf5456.js",
    "revision": "af606a0503ced5ced8f3685e25ac5c2c"
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
    "url": "assets/js/3.96306e92.js",
    "revision": "c9e630b9ff7034d87207f62902d0ccd8"
  },
  {
    "url": "assets/js/4.99e0bfd6.js",
    "revision": "f41a78e4f80c2642fd417e0aa0539f3f"
  },
  {
    "url": "assets/js/5.a830c199.js",
    "revision": "fe81d066e8d8153abc8164f2d139b41b"
  },
  {
    "url": "assets/js/6.421a422d.js",
    "revision": "83b8933baf7aef5eed8f0540d3c015ad"
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
    "url": "assets/js/app.7bd7d065.js",
    "revision": "34b23ed303fd06b5444c3aa76d094899"
  },
  {
    "url": "CHANGELOG/index.html",
    "revision": "fe0e17d07b38d0bca6e0d401ebf10f77"
  },
  {
    "url": "contribution/index.html",
    "revision": "51747bfe77e69de44cadfafe19d3a4f4"
  },
  {
    "url": "ecosystem/index.html",
    "revision": "1476a82ad6035fe10478b90145d24747"
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
    "revision": "5a169d903e74384dd6f0954e7afb6bb6"
  },
  {
    "url": "guide/installation/index.html",
    "revision": "77edc7446aef04165e3f532d7f0dc4ec"
  },
  {
    "url": "guide/usage/index.html",
    "revision": "7d286707fcbd7af8776d92debad75064"
  },
  {
    "url": "index.html",
    "revision": "6ad2efb1937748ba74f376e62150d990"
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
