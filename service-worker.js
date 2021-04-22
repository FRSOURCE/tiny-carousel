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
    "revision": "747e00c9db230ff88aac124b7c21b7cf"
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
    "revision": "807342cb1701f2abcec0b0f60b9f81b8"
  },
  {
    "url": "api-reference/index.html",
    "revision": "894db83c6d69ee3535b34f68c4cd5512"
  },
  {
    "url": "api-reference/integration-vue/index.html",
    "revision": "e8b1f6babc8f9acb74a028a5b8d31499"
  },
  {
    "url": "api-reference/plugin-autoplay/index.html",
    "revision": "0be505ec2bba8b1eeb257cae6c306983"
  },
  {
    "url": "api-reference/plugin-custom-events/index.html",
    "revision": "245ecf9aa4ef7e8e6c7203e43672a263"
  },
  {
    "url": "api-reference/plugin-mouse-drag/index.html",
    "revision": "c93e22ced90891fea88a4cf322bf08f6"
  },
  {
    "url": "api-reference/plugin-scroll-snap-fallback/index.html",
    "revision": "d3b7aef87b13af0cc57e45c40ca5e98f"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "815d34c8e80ecf432b4c8b8b84c25ec0"
  },
  {
    "url": "assets/css/0.styles.94390372.css",
    "revision": "15290f8a26dadb4adbbab956f2c7a6d4"
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
    "url": "assets/js/13.629be189.js",
    "revision": "0f5c73d892d3eed8a2f99b8dcaaddaaf"
  },
  {
    "url": "assets/js/14.991ff816.js",
    "revision": "61fe3ba0435d6da3cf7575e07a27a5a8"
  },
  {
    "url": "assets/js/15.76cfa313.js",
    "revision": "716df164f37934c05ff3baa5cdf9610e"
  },
  {
    "url": "assets/js/16.e467312b.js",
    "revision": "4d6ab1ef2f9d4844bbfd68425389be37"
  },
  {
    "url": "assets/js/17.efa0ad98.js",
    "revision": "22be69e3a4483733cb4b2fac27e91dd9"
  },
  {
    "url": "assets/js/18.d5454d9f.js",
    "revision": "d21dd5ce880f6ef0a21eebee7db339fb"
  },
  {
    "url": "assets/js/19.7ad9c5df.js",
    "revision": "02723d04f4e378d352654d9740586058"
  },
  {
    "url": "assets/js/2.4faf5456.js",
    "revision": "af606a0503ced5ced8f3685e25ac5c2c"
  },
  {
    "url": "assets/js/20.65ad7673.js",
    "revision": "8f554f7f605cbef8ef15ca9dd195d53a"
  },
  {
    "url": "assets/js/21.8be3f6ff.js",
    "revision": "f8d6018b6875a121085b667349150b66"
  },
  {
    "url": "assets/js/22.e7322d75.js",
    "revision": "a1beef770a2e5e941ee1d25d1b035f2f"
  },
  {
    "url": "assets/js/23.d6ad70b6.js",
    "revision": "ff9729c160e922798acb442b8964296f"
  },
  {
    "url": "assets/js/24.9136296c.js",
    "revision": "0c466fb30c2c0436c3c9351195a1dff0"
  },
  {
    "url": "assets/js/25.1d67d940.js",
    "revision": "6c414034976d5b346d8c9ec03d429c79"
  },
  {
    "url": "assets/js/26.5365757c.js",
    "revision": "eac542baa20e7eb60a8b910614dc66e3"
  },
  {
    "url": "assets/js/27.0dbca146.js",
    "revision": "66f7a8c14f6dd638b6f81c2bb2997edb"
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
    "url": "assets/js/6.ee746da7.js",
    "revision": "0b4d6460ee56ac7e632dc1eadc1aa00f"
  },
  {
    "url": "assets/js/7.7e596ab4.js",
    "revision": "6ace42218b07dc7cc817f0eba6c7b650"
  },
  {
    "url": "assets/js/8.0bf62ed6.js",
    "revision": "5192a78199efd97326d8eeeb8faa2461"
  },
  {
    "url": "assets/js/9.236a077d.js",
    "revision": "203e9cdb69aabd3804e144b9c1cd69d4"
  },
  {
    "url": "assets/js/app.6fafab79.js",
    "revision": "656edf5bae5e656fd2fbbc5c95408ae7"
  },
  {
    "url": "CHANGELOG/index.html",
    "revision": "583786f72a1ad484174637f26c197851"
  },
  {
    "url": "contribution/index.html",
    "revision": "8d9e685f95271a108dd4b3db46fa99ec"
  },
  {
    "url": "ecosystem/index.html",
    "revision": "2cd50b13cead09e071f2e6567dbd544c"
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
    "revision": "a760900f6b925c109cd53c2129fd76d6"
  },
  {
    "url": "guide/installation/index.html",
    "revision": "a931c4ad4f3cbcf7f93adf560ab40923"
  },
  {
    "url": "guide/usage/index.html",
    "revision": "214e5b5ee5cf92faa73eba10088c287d"
  },
  {
    "url": "index.html",
    "revision": "33cd200a20e4a9d6d904dc23c93c9b0d"
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
