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
    "revision": "181d62a9f2d39a70d60ff685607fa389"
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
    "revision": "e253517b5b65b2e75fc41fe1fd25872f"
  },
  {
    "url": "api-reference/index.html",
    "revision": "046ad05abfab010a71728d027449add1"
  },
  {
    "url": "api-reference/integration-vue/index.html",
    "revision": "b4f16a64a6875ef3379f186194e156ae"
  },
  {
    "url": "api-reference/plugin-autoplay/index.html",
    "revision": "6663b3929f2225ac05b05b9be0c3e3a3"
  },
  {
    "url": "api-reference/plugin-custom-events/index.html",
    "revision": "fd4b5002e953bd37b9d0c14cced1f88f"
  },
  {
    "url": "api-reference/plugin-mouse-drag/index.html",
    "revision": "de5c7c799b463f62d0b67f271676a5f4"
  },
  {
    "url": "api-reference/plugin-scroll-snap-fallback/index.html",
    "revision": "001a1142c58cb3f5e8af0fd905cb0fd8"
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
    "url": "assets/js/13.7788e421.js",
    "revision": "a22fc09bc562dcadb883708ccb86c1c7"
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
    "url": "assets/js/25.af2d764f.js",
    "revision": "a61bb0e669029cbb93da0e33ac458a93"
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
    "url": "assets/js/app.19915daa.js",
    "revision": "ed39e256aebd7cd9ad916fd7cf02bc56"
  },
  {
    "url": "CHANGELOG/index.html",
    "revision": "6107dad6388cb9635a406b1f5fd75da9"
  },
  {
    "url": "contribution/index.html",
    "revision": "7d0689deca59b4dc613b2621eebea303"
  },
  {
    "url": "ecosystem/index.html",
    "revision": "06786cc35a4e863157aae13b69127d78"
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
    "revision": "380f8880e55b7025acc36eb29be0a11e"
  },
  {
    "url": "guide/installation/index.html",
    "revision": "f84597306c74a2a4d979dbbe11d2c290"
  },
  {
    "url": "guide/usage/index.html",
    "revision": "2853bb1684dbfd7d173d6ce8256d9019"
  },
  {
    "url": "index.html",
    "revision": "056beffd955b18bc01c75cd74856f2b1"
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
