'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "4f47e682fe3af7b566368c4877e6929e",
"version.json": "87aca050f03d7bd225829a24fdc6e8ae",
"index.html": "4cd092d6842720f782a1d3bc1fa1ec18",
"/": "4cd092d6842720f782a1d3bc1fa1ec18",
"main.dart.js": "6878ffa92091dd26ec1a4d5bb7d4d310",
"flutter.js": "baab3b6ad5e74e3f0d43d96274f5fba9",
"favicon.png": "13875c740fa145a54a5a89af1d985a30",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "06d306b27ab2e9f0284450c81187c950",
"assets/AssetManifest.json": "d8867edf12ee8da308a346976bf72ce7",
"assets/NOTICES": "c69c83eec526544ffa60201853b0a142",
"assets/FontManifest.json": "89f1907a210019a7cd08bfeb09d788e1",
"assets/AssetManifest.bin.json": "c24787a8e376cbc34c227cd07ac95cdb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "fec5063f25a94ebb0f70ff2bcdceb014",
"assets/fonts/SeriaSans-Bold.ttf": "f0bcd695fb5f1f265bcb7582f63cdc42",
"assets/fonts/Raleway-Medium.ttf": "28ea37f0eb58c57e01eed0b06fc359d6",
"assets/fonts/Raleway-Regular.ttf": "6310192cd2011f527e18b1586a1245c8",
"assets/fonts/Raleway-Light.ttf": "1aa2abd0c1ee7d067e6df27f82f1f0b2",
"assets/fonts/Raleway-Black.ttf": "0560c808e614a5550655e58cf7ff4ed7",
"assets/fonts/Raleway-VariableFont_wght.ttf": "8e6eb72257cc3a1746fa1ed974407b70",
"assets/fonts/MaterialIcons-Regular.otf": "5087653ec59abc46418495138c89a9c0",
"assets/assets/port.jpg": "7c39ba61f816c1f7cdbaf6c711707b6d",
"assets/assets/oilrig2.jpg": "150b20f6c23378601282d6df788b0f99",
"assets/assets/maintenance.png": "8afb1b9d0c513a967fb6ec42b124497c",
"assets/assets/highpressure.jpg": "e5aeadb037cb80576a93bc67948e0d38",
"assets/assets/excavator-2.png": "fd47fe731e60db81ad581d863ca97ec7",
"assets/assets/containertruck.jpg": "93cc1647458b6c47bb755cf208cec32d",
"assets/assets/vision.png": "e0397d0eefdd7e3b8c9f19c089e64f44",
"assets/assets/transportation.png": "82dc10db9daf9e9898cc5964140c61b7",
"assets/assets/pump.png": "803ff08bced2473415de309f00e5c242",
"assets/assets/oilrig.png": "8da215a1fa8923c4c2e62874961d1900",
"assets/assets/clear&for.png": "7480b4431293bf9f00db52aa46624202",
"assets/assets/envelope.png": "cbb04938d96da4140f308a365597b966",
"assets/assets/values.png": "eefc8a2b1e3d4c172732cc9291339951",
"assets/assets/nitropump.jpg": "a1c5db1c7bd5fdf7d2581d40b3ad7e8c",
"assets/assets/propipe.jpg": "924483bee6894502bf75ea4faaa32a3c",
"assets/assets/Schlumberger.png": "d4e52b04f87ae8c9a1a0f703a440590c",
"assets/assets/Emmaspot2.png": "4ed6dcf0916c4ad8908b82e6ef73f402",
"assets/assets/NDDC.jpeg": "78e6b1a1ae41c332a6a9899759e51a29",
"assets/assets/export3.png": "e16b938c6e83c19ffabb28728cbb1ad1",
"assets/assets/shipping.png": "b312c16564c9e2034bcf577705a1c89f",
"assets/assets/shell.png": "f031d32c47dbff926dee5334c9211969",
"assets/assets/heavyequip.jpg": "3295dccf663ecb4abd290919b47f93d5",
"assets/assets/cargotrucks2.jpg": "27d6392fbdb21199ac7c66db1293f928",
"assets/assets/export.jpg": "e13c8422c44f505c2635fbe4847502be",
"assets/assets/Halliburton.jpeg": "3ca38ddbd24609bcf9b0a622d4074324",
"assets/assets/Emmaspot.png": "a096a7103fbb50292dfd9406acd91944",
"assets/assets/letter.png": "5b146b7fe3261271abd2b6e4100001eb",
"assets/assets/cargotrucks.jpg": "c053472137c116edf24e3b0aef64d357",
"assets/assets/custom-clearance.png": "94225dd83d01872005b45f23fd0972f5",
"assets/assets/target.png": "5b6651d7694b6f84de392bfec2d4405a",
"assets/assets/minhealth.jpeg": "3d9033d36a7c7dcbce637e5999b81ca7",
"assets/assets/procurement.png": "3a16b9daa352beac766a588eb21b99ae",
"assets/assets/worker.png": "69d78aa98fad3b7cddba9efa5ed01de1",
"assets/assets/unitednations.jpeg": "73ee62f34a813f14adc3c1a074540714",
"assets/assets/port4.png": "47714775592b706b6e8528e5aa6c22e0",
"assets/assets/Indorama.png": "b448d8d66d41d7eaea87e2b97409f436",
"assets/assets/Freightservices.jpg": "6beaf2215fcd492b4f0f1666a0e9ac9b",
"assets/assets/aboutframe2.png": "96ae2045cd8591a7fa1b1c02b9f52f2c",
"assets/assets/construct.jpg": "8af573205070d56859c0bee74e76a821",
"assets/assets/emmadrotlogo.png": "a7d390f7dc22ff13c878417fb474af8a",
"assets/assets/construction-silhouette.jpg": "290b62ae70445832acc28cc926f8b906",
"assets/assets/port3.jpg": "12f761c2f9e09e50f6dd1ea0fbfb2c9c",
"assets/assets/pipeline.png": "b44d7b9107ea58d96790998ba27c10bf",
"assets/assets/location.png": "11abdde0c31967fe44b9f8f241190db9",
"assets/assets/procurement1.png": "1629f948765e91ded53bfbbf8509f9c7",
"assets/assets/port2.jpg": "1bb21f98779748fae43596428343edcf",
"assets/assets/tata.png": "76b8604fe055b4d5176e562adcf014eb",
"assets/assets/pipe.png": "a7e9f32c22c0a74e898a1e9f874f4c47",
"assets/assets/pressure-gauge.png": "0c386f8a66c1d022e47e473e2b62b29e",
"assets/assets/loneb.jpeg": "4fab4cd014c4709ddbd0ef6d76ea4790",
"assets/assets/phone-call.png": "8db6dffd5afb3f3ec7220788e5fb180e",
"assets/assets/excavator.png": "9b07c5230c8219380c4b70d0ce8606f1",
"assets/assets/pipeline2.png": "b2edf4c256bd32ede4819ad8d49329db",
"assets/assets/freight2.png": "2af72cd319c1c7fe394308dd779892fc",
"assets/assets/crudepipe.jpg": "d63e08ffe9b51d3141f03013008bea9c",
"canvaskit/skwasm.js": "37fdb662bbaa915adeee8461576d69d7",
"canvaskit/skwasm_heavy.js": "f5c1413d222bc68856296fc97ac9fec0",
"canvaskit/skwasm.js.symbols": "c259d0523dd2a12504b8e4a79fac58e2",
"canvaskit/canvaskit.js.symbols": "2c3db1934a292cfd50461d786bcd1af5",
"canvaskit/skwasm_heavy.js.symbols": "1672d99de27795c2f5633eb4e102923d",
"canvaskit/skwasm.wasm": "e4c14dd94c91efe290443501d6f794a6",
"canvaskit/chromium/canvaskit.js.symbols": "1fc268aa3ba393a5c656dd9a5a15ef4e",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "ca285670b5b9ea1089902d7c9da32bd5",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "caa99ba2940e4a5ed1411a8283a94809",
"canvaskit/skwasm_heavy.wasm": "5375f071fa111dac4638c8f94f3db63a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
