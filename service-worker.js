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
    "revision": "de7b19e42be76fe39ff36730e37d2bad"
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
    "revision": "2864e800718c238e6bdcd824af5bd87e"
  },
  {
    "url": "api-reference/index.html",
    "revision": "fbd8053694bbe55ddb8f1e7b356b390a"
  },
  {
    "url": "api-reference/integration-react/index.html",
    "revision": "432b8d6af424227f398fce37a3106774"
  },
  {
    "url": "api-reference/integration-vue/index.html",
    "revision": "936c2c7482e089125c8cbaaff5c9a1c5"
  },
  {
    "url": "api-reference/plugin-autoplay/index.html",
    "revision": "ba8b09e13da98f1cfc8c4b820d80ef90"
  },
  {
    "url": "api-reference/plugin-custom-events/index.html",
    "revision": "30cabde37c305576b7b90d60842a6980"
  },
  {
    "url": "api-reference/plugin-mouse-drag/index.html",
    "revision": "134b10a76290a0dcdb570a79e50ee18c"
  },
  {
    "url": "api-reference/plugin-scroll-snap-fallback/index.html",
    "revision": "2d502bcc31003e0272ce952b337e84ea"
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
    "url": "assets/js/10.c0097290.js",
    "revision": "84240dab1276cfecab6dd7d2aff368c8"
  },
  {
    "url": "assets/js/11.ed1fef58.js",
    "revision": "1110319340ef33a1cb1d6e4477e00e00"
  },
  {
    "url": "assets/js/12.b7860577.js",
    "revision": "04a448375bdac330913854a35e904f2e"
  },
  {
    "url": "assets/js/13.524d5024.js",
    "revision": "7480ba80402c0cc87f69877f915787ed"
  },
  {
    "url": "assets/js/14.aa880290.js",
    "revision": "3c17c311d6d0164fe6b778bc05e0f3d3"
  },
  {
    "url": "assets/js/15.2aa4e915.js",
    "revision": "1f7000ac444fdf7f2573ebf383cad307"
  },
  {
    "url": "assets/js/16.40e9b879.js",
    "revision": "ca808238f4aedc657851cbb8711407c8"
  },
  {
    "url": "assets/js/17.eb8b9939.js",
    "revision": "c2b12b23f364b8d71aa2c25c52174d35"
  },
  {
    "url": "assets/js/18.24b3375f.js",
    "revision": "f4b32a307bc1d2b8d2b97c3cfc682cd9"
  },
  {
    "url": "assets/js/19.3bae7bba.js",
    "revision": "c957684932a0b95d96375261f7dccdce"
  },
  {
    "url": "assets/js/2.56ce9304.js",
    "revision": "a00bddc67265a4c5a7db6aaa4952414e"
  },
  {
    "url": "assets/js/20.e1163eec.js",
    "revision": "9e8bd81bbebfba1a2e38254a86417646"
  },
  {
    "url": "assets/js/21.c2c3a44f.js",
    "revision": "16604c95215e7cbd87208ec44b35a404"
  },
  {
    "url": "assets/js/22.d39a4da5.js",
    "revision": "25a3a695a336812bf109108d0696d659"
  },
  {
    "url": "assets/js/23.9163ab60.js",
    "revision": "3c8ea9503efd4f9e3d8554e3b64c8562"
  },
  {
    "url": "assets/js/24.a1681f6d.js",
    "revision": "0077af72ddb78e6416b374c2155e6de0"
  },
  {
    "url": "assets/js/25.56f6fddf.js",
    "revision": "e18b6e2461c4c29ff1479970022eb6ee"
  },
  {
    "url": "assets/js/26.42aba4da.js",
    "revision": "4c5cd943c6bc5a3fcce8c07eb8ef6e36"
  },
  {
    "url": "assets/js/27.f0b6b654.js",
    "revision": "d861e9bb4644a70f1ae92cd5b3b43fd9"
  },
  {
    "url": "assets/js/28.3188e704.js",
    "revision": "038eb58c799cae3006f5d796f19434a0"
  },
  {
    "url": "assets/js/3.3bdfe576.js",
    "revision": "5147dce05144d709875252c5c75e8fa0"
  },
  {
    "url": "assets/js/4.d0a9deaa.js",
    "revision": "295c6e85c9c665e4872f47ba4b3eb4c5"
  },
  {
    "url": "assets/js/5.acb7427b.js",
    "revision": "6e1d9265e6588c2c4be90d892503cb1d"
  },
  {
    "url": "assets/js/6.78ea64f5.js",
    "revision": "87a032e6eb84c48546eb687ee695d72c"
  },
  {
    "url": "assets/js/7.ba9965dc.js",
    "revision": "5ccbada0dc81f35dc161125d43f2a654"
  },
  {
    "url": "assets/js/8.debad876.js",
    "revision": "419b6ca063bef783c758069d387fc3d5"
  },
  {
    "url": "assets/js/9.8dbab93d.js",
    "revision": "028297bd8dc186caec9ee9fed92bd9df"
  },
  {
    "url": "assets/js/app.27c2a929.js",
    "revision": "e6e566e4cd230109f6b1af3d540b498f"
  },
  {
    "url": "CHANGELOG/index.html",
    "revision": "9e313e1e20e215719feda250d4e6d254"
  },
  {
    "url": "contribution/index.html",
    "revision": "d892a6f06fa523f3f593f68b264fabb6"
  },
  {
    "url": "ecosystem/index.html",
    "revision": "1f7fbaa643d7bd50fc3cb6af891ffa67"
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
    "revision": "e89d329a5b3b01585c13584ca0bf164b"
  },
  {
    "url": "guide/installation/index.html",
    "revision": "21889df5fc98fc8ae9cda04ca085e170"
  },
  {
    "url": "guide/usage/index.html",
    "revision": "8ca9a5764b9818b10b55e00b2d679534"
  },
  {
    "url": "index.html",
    "revision": "d0bbd25092d617f1e8e012506af23619"
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
