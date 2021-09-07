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
    "revision": "3fc2beacce26349d81d64203221e0df1"
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
    "revision": "bd5e8c4d24a2a76127afe1e0bc8d9c6c"
  },
  {
    "url": "api-reference/index.html",
    "revision": "58e53f1c57b71ba73dc00cb588e7ccad"
  },
  {
    "url": "api-reference/integration-react/index.html",
    "revision": "ff1eeb477bdfff24418c29e09b63ace0"
  },
  {
    "url": "api-reference/integration-vue/index.html",
    "revision": "0711159f78cf89b5fadad8f64e370975"
  },
  {
    "url": "api-reference/plugin-autoplay/index.html",
    "revision": "88b05ce42d318febf77211d5d4eb51e5"
  },
  {
    "url": "api-reference/plugin-custom-events/index.html",
    "revision": "867698a0cec6add3101c3059ae1f364d"
  },
  {
    "url": "api-reference/plugin-mouse-drag/index.html",
    "revision": "9195e1bc288ee76de754fa00e016616e"
  },
  {
    "url": "api-reference/plugin-scroll-snap-fallback/index.html",
    "revision": "b0eb185021f9eebff0c2b2c7e026719e"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "815d34c8e80ecf432b4c8b8b84c25ec0"
  },
  {
    "url": "assets/css/0.styles.d873a1ad.css",
    "revision": "d27b8a72e1a5b569bf729bfd0cae2c76"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.ce550f3d.js",
    "revision": "18519b9069098b6285f21a45cc853a1d"
  },
  {
    "url": "assets/js/11.70174c38.js",
    "revision": "f3a310d11c63d4c420d0e5b69ad008f9"
  },
  {
    "url": "assets/js/12.79422328.js",
    "revision": "616c6f7df0411520abf6aecdfdd87f08"
  },
  {
    "url": "assets/js/13.af73d95f.js",
    "revision": "abefd5bd661c74155fd33d6722cd483b"
  },
  {
    "url": "assets/js/14.9647dad5.js",
    "revision": "b0c8ff0306d10a93f505e86f64c4f973"
  },
  {
    "url": "assets/js/15.c5b343b6.js",
    "revision": "54f85488fc3576d18ef14d3182622462"
  },
  {
    "url": "assets/js/16.e948b7f8.js",
    "revision": "958e9cae1c7fd44a56b8881214299f40"
  },
  {
    "url": "assets/js/17.7baa1012.js",
    "revision": "17b8f5334c646defa9df383ab08cc485"
  },
  {
    "url": "assets/js/18.18feb3cf.js",
    "revision": "8948c553638ad0b84be7b95c49370e34"
  },
  {
    "url": "assets/js/19.149b3038.js",
    "revision": "fd9c5ae66850b53d5ed33f3b73a894ff"
  },
  {
    "url": "assets/js/2.c1dbf3f5.js",
    "revision": "67c3ffd97b3461634a1ce3c85efe9642"
  },
  {
    "url": "assets/js/20.c4003655.js",
    "revision": "89d19e35df81343c3ca015107083ae84"
  },
  {
    "url": "assets/js/21.7768b9c5.js",
    "revision": "b51f0b6840ee332a07c4c969495194bf"
  },
  {
    "url": "assets/js/22.d4014d6f.js",
    "revision": "227fd9740b4915db5c57d0fc02daf7a0"
  },
  {
    "url": "assets/js/23.0235337b.js",
    "revision": "a45339f27a198cde450302f425b950d5"
  },
  {
    "url": "assets/js/24.a7649727.js",
    "revision": "d1385ba0400e274b14bc956a47e5246a"
  },
  {
    "url": "assets/js/25.2f52000a.js",
    "revision": "41d9ed7dc09155422cf1744c5b39aa0d"
  },
  {
    "url": "assets/js/26.1f33d6ba.js",
    "revision": "dc429429e90229bb623eda3f92cf7743"
  },
  {
    "url": "assets/js/27.593a84d7.js",
    "revision": "3479f3c4b2645fcae342481d883a8483"
  },
  {
    "url": "assets/js/28.95449c9f.js",
    "revision": "0ccd54f63a73f8d1203416bef5b5a3c8"
  },
  {
    "url": "assets/js/3.89acce8a.js",
    "revision": "92dde9f081f4239a0fac152e46abad4d"
  },
  {
    "url": "assets/js/4.a082e00d.js",
    "revision": "4dd19b31b51146c9eb8205ac34dce1b0"
  },
  {
    "url": "assets/js/5.71900593.js",
    "revision": "ee8028b1f4a48273eb5d298ca4e6f0e1"
  },
  {
    "url": "assets/js/6.618b5a86.js",
    "revision": "1b56b9ec330cc06a5701a89194cd0e0e"
  },
  {
    "url": "assets/js/7.fb962746.js",
    "revision": "83ca46c793fbbb3c8183f18baddad21b"
  },
  {
    "url": "assets/js/8.5a5bf114.js",
    "revision": "083d248a8e561eed3c32067f6c29ad0a"
  },
  {
    "url": "assets/js/9.675d65de.js",
    "revision": "5144db260529b4d90f9eac1bebcce9b2"
  },
  {
    "url": "assets/js/app.0f547dba.js",
    "revision": "f4ca765e84ed37a77859204997abd5cc"
  },
  {
    "url": "CHANGELOG/index.html",
    "revision": "5bace1ecf378fafa200c1722aabd7125"
  },
  {
    "url": "contribution/index.html",
    "revision": "dbb5bfd25c40d91b35f56c1c645d991c"
  },
  {
    "url": "ecosystem/index.html",
    "revision": "49e9ae508eb7c8fdd2aadf2ba81594e0"
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
    "revision": "a0031aed5449fbc296813b50012a0227"
  },
  {
    "url": "guide/installation/index.html",
    "revision": "f2c446cbce2a6976284c826801247ef1"
  },
  {
    "url": "guide/usage/index.html",
    "revision": "3582f44568d1c5bc080e18bc74551b9c"
  },
  {
    "url": "index.html",
    "revision": "723749f133116409b99116c9201a271a"
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
