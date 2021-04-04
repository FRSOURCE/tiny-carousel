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
    "revision": "5b49bfe82bfe3ed71616c76709dbf86e"
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
    "revision": "d5bf2d13cb2870a3d8c1f48ba807832c"
  },
  {
    "url": "api-reference/index.html",
    "revision": "ae853cfb5493e57f099abd051bdbea0c"
  },
  {
    "url": "api-reference/plugin-autoplay/index.html",
    "revision": "e0227b44d5621fd69302051ee5ed8d17"
  },
  {
    "url": "api-reference/plugin-custom-events/index.html",
    "revision": "6d2a8dfdbddf65d041c99bab889917b9"
  },
  {
    "url": "api-reference/plugin-mouse-drag/index.html",
    "revision": "8d619ee00d04bd93d80813655e0cf8aa"
  },
  {
    "url": "api-reference/plugin-scroll-snap-fallback/index.html",
    "revision": "a6ee015549d64ddb6e12ce4794033904"
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
    "url": "assets/js/11.e0c7a336.js",
    "revision": "66731f5f71fc84760127d32c538f810f"
  },
  {
    "url": "assets/js/12.1bd6a1c2.js",
    "revision": "4d756c6b57357f24c2655d35a8258248"
  },
  {
    "url": "assets/js/13.21bc2f38.js",
    "revision": "b49e0768e121f4b91fd0606573f468d7"
  },
  {
    "url": "assets/js/14.991ff816.js",
    "revision": "61fe3ba0435d6da3cf7575e07a27a5a8"
  },
  {
    "url": "assets/js/15.d9a68f1e.js",
    "revision": "4e21be325dfdab564e279af38498b7df"
  },
  {
    "url": "assets/js/16.4762f36c.js",
    "revision": "4694e1741be169228b11e96337edc91b"
  },
  {
    "url": "assets/js/17.6e663b56.js",
    "revision": "41660c5dcde124e109ea0036317bd4fc"
  },
  {
    "url": "assets/js/18.0c2f134d.js",
    "revision": "c0a998f31cc51861b031dbcc865e7db9"
  },
  {
    "url": "assets/js/19.3494901a.js",
    "revision": "c66ba177f5e92c63e37ac2c5d9d93888"
  },
  {
    "url": "assets/js/2.dd88b603.js",
    "revision": "dac3ebdad7b6eb2f4466c1d368771565"
  },
  {
    "url": "assets/js/20.46e3f9bc.js",
    "revision": "99c14407f024cde96ce1bae9ee0c0476"
  },
  {
    "url": "assets/js/21.d5c86743.js",
    "revision": "7a792ce58b3c38a038dd3fcde1a566ce"
  },
  {
    "url": "assets/js/22.20026a23.js",
    "revision": "1f1d26984921644e0aabab8dd9f30388"
  },
  {
    "url": "assets/js/23.bc6dd9e3.js",
    "revision": "83fea126eb7b19d44028b9941bab08ac"
  },
  {
    "url": "assets/js/24.e791652b.js",
    "revision": "40a58f3ef3f8069ef8e8a2cd3e936559"
  },
  {
    "url": "assets/js/25.4a1b06ca.js",
    "revision": "0a8e078596c865f29c8d8a69b1be2c8c"
  },
  {
    "url": "assets/js/26.bb5b9e7b.js",
    "revision": "05cc3be145d6b806a2fce7fda371f92e"
  },
  {
    "url": "assets/js/3.273db0a8.js",
    "revision": "061f82b59a433c7daf421950e08aaf39"
  },
  {
    "url": "assets/js/4.cd86141d.js",
    "revision": "1057d0fad896486e5d5731a739e6b842"
  },
  {
    "url": "assets/js/5.90d92c9f.js",
    "revision": "5bafcfd97723dcec29e75d967a147132"
  },
  {
    "url": "assets/js/6.1d513af8.js",
    "revision": "112201b9491aa7ae4fb34cca7f406138"
  },
  {
    "url": "assets/js/7.ac438a86.js",
    "revision": "0dfe4fe392ea646b156e5a09cbc79200"
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
    "url": "assets/js/app.aac65023.js",
    "revision": "c52fb050a575610c3d2ee010adaccdd7"
  },
  {
    "url": "CHANGELOG/index.html",
    "revision": "9708756bc5e0e6e5eedbb5be086a1948"
  },
  {
    "url": "contribution/index.html",
    "revision": "32da879470420811994084b0d9bdd52a"
  },
  {
    "url": "ecosystem/index.html",
    "revision": "c1741e41b6a11acc8176ce6d6e29d57e"
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
    "revision": "43a02a0cd597d1b9a26ba9f73df8017c"
  },
  {
    "url": "guide/installation/index.html",
    "revision": "76207f327bea10c7480d8e13599ff1c9"
  },
  {
    "url": "guide/usage/index.html",
    "revision": "492d3850a3eeac447d67905be24ed7a3"
  },
  {
    "url": "index.html",
    "revision": "b208264984daec381df6783463be97bf"
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
