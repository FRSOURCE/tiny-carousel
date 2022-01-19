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
    "revision": "591f8d9bdfaf1ab40f22228b6e87cf67"
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
    "revision": "bb94bbf86f0a778628a552b769260a57"
  },
  {
    "url": "api-reference/index.html",
    "revision": "a91541b12c91d380943aebf3e93e2d54"
  },
  {
    "url": "api-reference/integration-react/index.html",
    "revision": "fe6a356e87d2935f0b9629057b7ce134"
  },
  {
    "url": "api-reference/integration-vue/index.html",
    "revision": "d333e9ab834cd64d84b3e1d0bb8c03a7"
  },
  {
    "url": "api-reference/plugin-autoplay/index.html",
    "revision": "4209ce4d01559389baf819e4904a9ecb"
  },
  {
    "url": "api-reference/plugin-custom-events/index.html",
    "revision": "45a32aada3cae0724bafc1f971099fa1"
  },
  {
    "url": "api-reference/plugin-mouse-drag/index.html",
    "revision": "05ed7616b1ec28fbf91689e699ad9dcb"
  },
  {
    "url": "api-reference/plugin-scroll-snap-fallback/index.html",
    "revision": "560e07d7bd0178c632980ec187da0b13"
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
    "url": "assets/js/10.b10ca882.js",
    "revision": "75dcc1fefc60d2571e257676716d129d"
  },
  {
    "url": "assets/js/11.6c5ff56f.js",
    "revision": "cd9b8e13fc73b4d856f0c30156af1148"
  },
  {
    "url": "assets/js/12.f6ecc870.js",
    "revision": "17d7aec6f32dda4283098c8a45abe74b"
  },
  {
    "url": "assets/js/13.916cb4d2.js",
    "revision": "1491eb51ccbcf01c957f7b5cd4f5240d"
  },
  {
    "url": "assets/js/14.6472394d.js",
    "revision": "b1efa590351e512fbb6e0cf409f566f9"
  },
  {
    "url": "assets/js/15.58626919.js",
    "revision": "3002a31cc192a1d49b38f450f27ed7ef"
  },
  {
    "url": "assets/js/16.55acf4f9.js",
    "revision": "1e8ba4f21aa989ebba41c785e65f1f9b"
  },
  {
    "url": "assets/js/17.df0e1ae0.js",
    "revision": "afdfdb7bd6b32376c1ee293bd0a5b930"
  },
  {
    "url": "assets/js/18.5d405bf2.js",
    "revision": "eb13a7dc6c6499641c3050c111bec680"
  },
  {
    "url": "assets/js/19.210795b4.js",
    "revision": "e506e709ab352ac3ef2fb59a627abbdd"
  },
  {
    "url": "assets/js/2.b781d32e.js",
    "revision": "b4731e40de523934fb95393a55ee831e"
  },
  {
    "url": "assets/js/20.b426d8c0.js",
    "revision": "8d43419f02eb324ee268d82c635dc45b"
  },
  {
    "url": "assets/js/21.88c14885.js",
    "revision": "f1a7f476e33cfd8c241720d1a1e0166d"
  },
  {
    "url": "assets/js/22.85193a2f.js",
    "revision": "128a5a3cb5c14f17f847174ab2d6694b"
  },
  {
    "url": "assets/js/23.3c5e5eeb.js",
    "revision": "5c40b929454d387b6919679f536dbc98"
  },
  {
    "url": "assets/js/24.f998ceb7.js",
    "revision": "d361e9df4c67abd23b1a7eebb0852fb0"
  },
  {
    "url": "assets/js/25.9a980f8d.js",
    "revision": "d76f6ea48de308a2e100f02f2ef67bd1"
  },
  {
    "url": "assets/js/26.d7b80267.js",
    "revision": "1c4cfa5371f2f497e5f859c466318b8a"
  },
  {
    "url": "assets/js/27.214c418d.js",
    "revision": "3a485111f8dac96f4d05d9db0f65e6e1"
  },
  {
    "url": "assets/js/28.fbd1b5eb.js",
    "revision": "af1428510a4188e0e639fc7c28b47408"
  },
  {
    "url": "assets/js/3.f6b1ebab.js",
    "revision": "bcbfea64d064164132687d6dbc7a7433"
  },
  {
    "url": "assets/js/4.d08da503.js",
    "revision": "a8f815771c5076a7a1865382981a1ebc"
  },
  {
    "url": "assets/js/5.a5e1e75a.js",
    "revision": "3d514b1eaf81b6806f26a797a26eee90"
  },
  {
    "url": "assets/js/6.049166a3.js",
    "revision": "8739bc29e2cc9e2e9aaf2670ab3cd533"
  },
  {
    "url": "assets/js/7.e1f393ed.js",
    "revision": "abe61d00ec04c4fb56261655b499c7da"
  },
  {
    "url": "assets/js/8.3985bd24.js",
    "revision": "d4b9003828f5962da57b8b9e492f5ac8"
  },
  {
    "url": "assets/js/9.660ecdad.js",
    "revision": "266f910762c32c56cbb02aa265507908"
  },
  {
    "url": "assets/js/app.a43d6a2f.js",
    "revision": "ca9885f2abc671ce1747c840f0af46de"
  },
  {
    "url": "CHANGELOG/index.html",
    "revision": "19254b0a8f27fe33fa4d1e91a83bddeb"
  },
  {
    "url": "contribution/index.html",
    "revision": "10258b8792271b0ae3e85891c6452aba"
  },
  {
    "url": "ecosystem/index.html",
    "revision": "95163494ee4919fe8daa0468d1b8ee3e"
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
    "revision": "dc02f174d93ab1f67a966fb5fdd06cd6"
  },
  {
    "url": "guide/installation/index.html",
    "revision": "974ae0d2313a4d85f791515e8fc41874"
  },
  {
    "url": "guide/usage/index.html",
    "revision": "ffb2ef3ed46f5ced05448c1bc6655240"
  },
  {
    "url": "index.html",
    "revision": "dc229c00a2e36a8c14840f3899b6df15"
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
