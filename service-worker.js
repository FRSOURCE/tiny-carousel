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
    "revision": "bcf95b18d0d971db808442c540d1ddcc"
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
    "revision": "ade5c20499396f9ade97e3eff068575c"
  },
  {
    "url": "api-reference/index.html",
    "revision": "19fbf15c00a0663ace98309bb0d964fa"
  },
  {
    "url": "api-reference/plugin-autoplay/index.html",
    "revision": "a97a1435a11745e8d52ba91af028e004"
  },
  {
    "url": "api-reference/plugin-custom-events/index.html",
    "revision": "0c80303c1aa9a581a1ffa67d91e1f10c"
  },
  {
    "url": "api-reference/plugin-scroll-snap-fallback/index.html",
    "revision": "907008cd024d64c04b113f10b730a7a6"
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
    "url": "assets/js/10.ed261d86.js",
    "revision": "317ee232c3f9e4950acaee8bf90cc4e5"
  },
  {
    "url": "assets/js/11.837d372d.js",
    "revision": "bf92f62c5339c94fa38d569b7e29bd65"
  },
  {
    "url": "assets/js/12.cda31ef4.js",
    "revision": "4d756c6b57357f24c2655d35a8258248"
  },
  {
    "url": "assets/js/13.d40e9808.js",
    "revision": "1696831b15d6be73117d39fdabcb0f4b"
  },
  {
    "url": "assets/js/14.ac6faccb.js",
    "revision": "61fe3ba0435d6da3cf7575e07a27a5a8"
  },
  {
    "url": "assets/js/15.bbba61ca.js",
    "revision": "137f69f139345597b43c58ab1175a55b"
  },
  {
    "url": "assets/js/16.b8881349.js",
    "revision": "8465d03f50450c32bf5e9dc3b68f5226"
  },
  {
    "url": "assets/js/17.111e0c0b.js",
    "revision": "38b11c572791cb1b5dab9e6157c29be9"
  },
  {
    "url": "assets/js/18.024f6b6a.js",
    "revision": "0be0a4373867ede64a83826619926b05"
  },
  {
    "url": "assets/js/19.40994c16.js",
    "revision": "29d6bcf694230067a7f0a3689f1b8ebc"
  },
  {
    "url": "assets/js/2.0a2e1656.js",
    "revision": "dac3ebdad7b6eb2f4466c1d368771565"
  },
  {
    "url": "assets/js/20.a92f227d.js",
    "revision": "ef68419ed833a58328eeba81a5890724"
  },
  {
    "url": "assets/js/21.c0cc506a.js",
    "revision": "47ced2d5dfcd76acefb13e9937c83746"
  },
  {
    "url": "assets/js/22.bb8ea2ce.js",
    "revision": "e85fabb762db262ebadd2a0dbcd15e79"
  },
  {
    "url": "assets/js/23.12688d9b.js",
    "revision": "f680ada7aef7b5133199080539c1d2e7"
  },
  {
    "url": "assets/js/24.c54d7770.js",
    "revision": "7a1113cef408fd2344fd05d4ad8a585d"
  },
  {
    "url": "assets/js/25.af46948a.js",
    "revision": "f3f6eac44cc7c931b18c26ce1e4f50c6"
  },
  {
    "url": "assets/js/3.0330996c.js",
    "revision": "061f82b59a433c7daf421950e08aaf39"
  },
  {
    "url": "assets/js/4.5efeebd0.js",
    "revision": "1057d0fad896486e5d5731a739e6b842"
  },
  {
    "url": "assets/js/5.66e091f2.js",
    "revision": "5bafcfd97723dcec29e75d967a147132"
  },
  {
    "url": "assets/js/6.5f4681da.js",
    "revision": "885a9a3ace3db3fc30b90f7a0b773155"
  },
  {
    "url": "assets/js/7.97ddd7d1.js",
    "revision": "a4afe41a3ccdcdc4b781e82b2805f705"
  },
  {
    "url": "assets/js/8.8c9baf43.js",
    "revision": "754ba46e02416441a17468b0858da209"
  },
  {
    "url": "assets/js/9.7dcdbe61.js",
    "revision": "e09b10eed7c4009d85b0987420343d66"
  },
  {
    "url": "assets/js/app.6c92d41f.js",
    "revision": "1b1cc4db17e68ef143cb1ae4448babdd"
  },
  {
    "url": "CHANGELOG/index.html",
    "revision": "1f32afa1a9af6f43d1a59ee38c434330"
  },
  {
    "url": "contribution/index.html",
    "revision": "d6dd3538405570f0c0295c03b86c5733"
  },
  {
    "url": "ecosystem/index.html",
    "revision": "94170584b9a2125fb89dbacbe6e02dc3"
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
    "revision": "304c8e5b06013c0f3eae74463af707da"
  },
  {
    "url": "guide/installation/index.html",
    "revision": "0da35627c0ee8f61ad2419ba9d864109"
  },
  {
    "url": "guide/usage/index.html",
    "revision": "61ecd7479d18a5405b2a73892851e60b"
  },
  {
    "url": "index.html",
    "revision": "d7e13d339c360410b7a3d438ee8b1eec"
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
