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
    "revision": "ffd15655b8259644a43dc22e4a109bb2"
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
    "revision": "6d04b2213029a06ba168fb7976f9106b"
  },
  {
    "url": "api-reference/index.html",
    "revision": "4f07f1ab7447ee0a34056dfe557652f1"
  },
  {
    "url": "api-reference/integration-react/index.html",
    "revision": "ff85fbf07be2bc8bb391963e0bb8f9dc"
  },
  {
    "url": "api-reference/integration-vue/index.html",
    "revision": "6a107f9156ee06cb4302b735c9baf625"
  },
  {
    "url": "api-reference/plugin-autoplay/index.html",
    "revision": "459a2af22dc5d5703eb12c4a47cbe30d"
  },
  {
    "url": "api-reference/plugin-custom-events/index.html",
    "revision": "90eb31759adf6de7b0bc59682ebd5cb5"
  },
  {
    "url": "api-reference/plugin-mouse-drag/index.html",
    "revision": "797a67da91e3c8f986e9db7b08bb3afa"
  },
  {
    "url": "api-reference/plugin-scroll-snap-fallback/index.html",
    "revision": "064776ab33c670ecb3935b6dad025ca7"
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
    "url": "assets/js/app.eb2a1dd6.js",
    "revision": "661f87fdc88079a2276425b297276d8c"
  },
  {
    "url": "CHANGELOG/index.html",
    "revision": "8845ba4fc2fe42faaa020b6e95e9cd1e"
  },
  {
    "url": "contribution/index.html",
    "revision": "f27135aa617daecfb3f2d0f53cf79b2c"
  },
  {
    "url": "ecosystem/index.html",
    "revision": "a68d5a8cbcb41dd4ff89fd2761fa8f1a"
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
    "revision": "3af7285deb43468e4c8593f2add40ca0"
  },
  {
    "url": "guide/installation/index.html",
    "revision": "35c54e266f8c6298f0e52962cdc045eb"
  },
  {
    "url": "guide/usage/index.html",
    "revision": "a9afd88743cec0cbb3b09deafdd63df1"
  },
  {
    "url": "index.html",
    "revision": "8b5e394e7a6afa3e1cf61f227e5e6b6c"
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
