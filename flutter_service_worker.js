'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "1f68cc35fe51731b41b95caab07cdf1f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "8ee278cd120f33c8738e9ec2b6c52606",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7ca3252fb86be65a35c7a1b2b810277e",
".git/logs/refs/heads/main": "075e865228914b5fa8eda42fc2dbdb1c",
".git/logs/refs/remotes/origin/main": "69b0993a31b0f51fab3c8444d6624690",
".git/objects/0a/fc4f305b6f79cdc02fe114ef1218de9dc0878c": "835c7a79854bb9e2637b302298d8606e",
".git/objects/10/4222007cc0b8a8a4ececacd927bf52231d1de9": "ca5822c531dbf02557a227e776457a68",
".git/objects/10/75ad813445620c7bfbcaac7ffee6d0ca3c81e3": "1cd3af064eba32fe634a6cc09d5e276e",
".git/objects/13/2c5eac8cbfcd28e650d6160b8f37259f123ccf": "ca7328fbde0e1176f35b793791ef5b00",
".git/objects/21/3793494aa7c8cb29cd56b1c21e9a4c4b2cbe66": "c03322ca6a9fbdec1d03a4f3e0ff317f",
".git/objects/26/f7c177e8025a06ba93db4ea1a698068b5ced15": "bdbf3e026eae33fb301f794a08da5d1a",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/53/0ea37c0056f95a0838762cc98a430580a2389e": "0ba86977945ab41191ab9828eebc6d80",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/e1ac239e0b0b075de65d7fc1d76eb608d5d339": "2fc3405786384a22a7737678f7b72168",
".git/objects/7f/52f1b68912234d660af166d2250b1f3fbd1283": "187c18c37d57e46d8190af2435aa0a35",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/33b5a64846bac855c340e91ff3f48a451177d1": "5940f25ea8f99cbf4214447dfb32f980",
".git/objects/8c/3be5cc0b28eb8deee26fc16a00561f3ac843b8": "c3246086fa35b6a81ccd0bd53b1b860c",
".git/objects/8e/c6c0c18d0c3c6411d03744022b7cdbe465cb28": "f3c157ba1a437a0c35d54a36da6666aa",
".git/objects/92/a9eb5f1359ee96cd6c1bce6231d603a2b0e68b": "5010bda59a3d41214304c9ce9bec8e73",
".git/objects/9a/9d6b200016913ccde5d1904822d994bab9548c": "f51adc76e8f1cffe44e31de9cbcbf6bd",
".git/objects/9b/1f03586669ba3c57a8c7d6e62f36d6e335835f": "23a36962f6da389c672dc5ba921411df",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a4/a03341fe48fcb73a4d9e101ff36c3ecb0c7a9c": "924863206e24581b456c2b6af7b4a870",
".git/objects/a6/14e4b8deb99ee8b3ab2b2e2ae4244d9eef2a39": "eeb990d50b25ca1f8ef94ffe260f1640",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/0ee091bb4fe49b9fe748408a8d0d0e7e4749d0": "479892ea6e05e38a17ecec93b7ebd388",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bf/a9753ce677137b8f6964aac1e19a2338547457": "5f519fc9ac7fbae393ea7171e576af3f",
".git/objects/d0/33ecc2dae52cdea061f455fa0515ac72d78fa3": "918e5e5ba1cc4f0ea2c61b9bb75b50fc",
".git/objects/d3/0c9ecdc31e478dc4c3ea3c00f75e01a17bbd5b": "2a373825b59e176e9355f47c9bf338d3",
".git/objects/d5/7f59b228dd1b4902e4e7cc4d4dc8d5602cf2b9": "cc99076e918dd11e4a946a26b8cccc80",
".git/objects/d6/5a91d5e5210c1c5655e0ae069928ff7d76cb91": "f580a71072307b717b0f610e071ccea5",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/f6f7c6d6e4186c4a9d36449fb386533eb1475e": "cfb90dbdc987b99aca48be77f7301ede",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fd/207ca94d297ecae6a1d3a94605ba0a9f7b1dc0": "d1f6e4a624285e06695dff012254890c",
".git/objects/fe/64b206894719d8c28b3209ac959fb9633eeb56": "a87efbf3bb4761ce260f4b77dffe63aa",
".git/refs/heads/main": "1bbd6b3b626caf8ae43eee392f82785f",
".git/refs/remotes/origin/main": "1bbd6b3b626caf8ae43eee392f82785f",
"assets/AssetManifest.json": "0898cb283f67663b4cd29abadf5cfe4c",
"assets/assets/icons/facebookLH.png": "9c8bf990645fc6189df6caedab34628c",
"assets/assets/icons/human.png": "ddb0239603cf4b8700c20cd9cba47048",
"assets/assets/icons/icon_face.png": "596edf1a3a614aba61f8186cf3bb6a4c",
"assets/assets/icons/icon_gmail.png": "8d73098d48176f0bc0dce3dd7b773f20",
"assets/assets/icons/loading.gif": "5bec1639ef6b8292f8197b6191ae4410",
"assets/assets/icons/telephone.png": "bd6f3f5e4fea9e7d3b56140862af659c",
"assets/assets/icons/user.png": "d30e15a23e08f09fd62e87f4d5fe5f49",
"assets/assets/images/manager.png": "e14e96101603753c25cf64c5f7e3cdf1",
"assets/assets/images/undraw_BU.png": "29464f8ebc1b1bd77e63638d2cbc8b53",
"assets/assets/images/undraw_HR.png": "1881d2a2c3f7bb5e1b4ac0b2622291b0",
"assets/assets/images/undraw_InterView.png": "96526bd03379d5eb02e2893a1e17d84e",
"assets/assets/images/undraw_Marketing.png": "4ca190aab548c83c2dbe94a8031c688f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "f7432a5118673bc457d09e5060511f7e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2394ed871dca7caa4b4a51220be808e9",
"/": "2394ed871dca7caa4b4a51220be808e9",
"main.dart.js": "d0b1155f52b8759a3bced3111377e07a",
"manifest.json": "1342e07d69afca80e36e2d2fad6fb663",
"version.json": "ea9ebf3e5fcd3490ed3d319536384a81"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
