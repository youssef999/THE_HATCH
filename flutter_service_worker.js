'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "558e34b07921d861cf4f891bb7c990c7",
"version.json": "d04d1a9c83e1d85c40359053e2e7cd8f",
"index.html": "2ba4f0671fb96ed87fc3848c4d1ac245",
"/": "2ba4f0671fb96ed87fc3848c4d1ac245",
"main.dart.js": "f0fdbfc97ef86ddb3427736cbddafe33",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon2.png": "5dcef449791fa27946b3d35ad8803796",
"favicon.png": "f64a8aa5f21304f86aa81b2ba51e19dc",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "9458659101e4cc161850abb73864a2c0",
".git/config": "1ddbbbdbbd661928467383cd09872aa8",
".git/objects/95/72d8372f20ca99df2f6267f4aee27726c8df36": "973c5bcc17b137af2bca1a4b9b4997b5",
".git/objects/3e/d53f5cf4c4d02714e44ce2804f86eaf8f2d976": "369f2835d06d1ca8854fde896ac5077e",
".git/objects/50/0d2e23d1e7991306a6a456b03ff920998a23d2": "3db9db4a05bacdc91721a7ef6f2d40a6",
".git/objects/57/8a6adc10eaf5278c4a74df337b89e2569d4d25": "014964efbc40d8e295fd4494266ab6f3",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/35/f0c2267b011cac7ef95db44e2cb14c7d7d562a": "c45121e44cc99eccdbeac7dd8f26fda8",
".git/objects/58/ebd962b4ea3274fed4e10868f441cd67c76789": "6f53dc5da856c90e411f145041f55ac0",
".git/objects/58/31840272dc1c691085a1cda9eff0467b035365": "adfbc6c173c4e9b037c82eb43ea9b9d0",
".git/objects/0b/963da0f3b79ded97520ff402d93de0b8d333df": "40ad8f9ad9a95be96ee3369b6ae8a584",
".git/objects/0b/a9b1556c519dcfd483f404e463fa0d01b6b1b9": "8e8a0755d8d6956831af46bf28cd36fa",
".git/objects/05/54a41b961d366671e1f4bbb860ed39125ab2dc": "07eba03a4ba7bbe7bdc631118cc754d9",
".git/objects/02/ff6fff07885b50373c35a6f59819b68e3ca8f3": "5da2ce61fd26311760edfa680b6dd662",
".git/objects/a4/ccb6665b311ea87a0f360195a3486f6d4e6192": "9bcab4be38acc5009a334b6d6d005491",
".git/objects/a3/095ae041025750cb1b82688bbc17e9e36835ea": "120d0a590b04ad03fb4d0a65728b6c37",
".git/objects/be/2405981521764a712752c611c47a516e71c38c": "3bfe7e24ab5820a7395424926f870577",
".git/objects/df/bcfe4f25b6754e907e8e51c87c386baa377d1d": "64c9fdbbfce14cea20331b6a91b0e50c",
".git/objects/bd/e3f59d3ecce30c5a27da3561aec26fcc671ba6": "5eef05ad3ddcb209353bd569e83db826",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/bcc2082c9092a3e517d3098315f3391eb94574": "6b8dc41c74d45639a3eec71cfa9d175b",
".git/objects/bc/2363a7545fc0677cfa50b7f6d436ace12cfa10": "8c760fa58d11d695ed1cac67b7076118",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c0/69d305eb8a909a8b63ef1f749cb224aa67b161": "939b2493ca5feb0a33c7f81fa38ca7c9",
".git/objects/c9/8b0b2a2765e9aa116c304e27e64bdd07eee9bc": "b5a5d0ba24b47e0e6fbceccdfe56fef5",
".git/objects/c9/feffe9703f4d92e44c602bad491e34089e5ab7": "2d2deed4109726720a9276d5028e5113",
".git/objects/fc/670d19e6e092a6aaa54a55eee38b010849b592": "db30ba7b07ab1aaa8d98491333de54a7",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/c8/8e5eb385f1e48cafeceaacde94dc354e77cd29": "12b060c1a0b0f5d6725edf271fadcecc",
".git/objects/c6/4c00d9a56a99fe8735755b5409a6eed52872fd": "ca76483868d2773ce094ccea22dd4d61",
".git/objects/c6/342af54f3a896970dc20175a5ae6847501b507": "f73bba7c6224b3f3ad0860b11138eed2",
".git/objects/18/c9159d7a59f1862c8212d110e46c5cefba5f2e": "a6929e9df569597224f600ff012ea5fe",
".git/objects/27/38afa3ea494f62f39337c34561146637c49bc1": "db792365fb5a21def37e8e28a798e4b3",
".git/objects/7c/7ac465906634182edff03533905be32d9553c6": "c670a8f36c2c0b420fac0b8d2a302f60",
".git/objects/87/9093369ddaa380397f813888b594a11836e182": "b91021088b31a79c584d99b938a161d5",
".git/objects/80/d46a539db488e8965f4646ccc529962eb3765a": "4796be826fbfd5b764ab37b4f4589163",
".git/objects/28/b0c3f1c806dc4c457d98dee055f8a5e6c97beb": "714d936a5d2c7204137c9daa63838c49",
".git/objects/17/d762a9fd4bf470f29be2aa3fdadab9693e160d": "2fe36bf807534003f6163c3a1b3af95e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/ac3288023e45aa8c684cfc7202b20b589389cd": "baf8dd33baa9cfe4cb77fc45e0c701ff",
".git/objects/26/31e1819c1b190325d0cb7e9706a0917895bda3": "92b14a91bd6c8bae8597b58bf2db089c",
".git/objects/21/4215a03b2343798e31d9cbcc9d8029380a11ad": "b0486f433d29368a047e2605d1a4d154",
".git/objects/2f/5cc8a5666866cabe32f29ca881cb0d62bf49bd": "efc2c4346f61190dfbaa3b3cf7556de8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6b/6c428b1c3f444ad9d243426f559c38360b5d43": "9e1317bc7ff88fd33f009f7234bd88e3",
".git/objects/9a/54a12e07518d774d1aec7f8994c2ac75cc147f": "62e5b19dc0e38064163a0f5de7638115",
".git/objects/9a/1e3f004b02d219116bc1e21aad928c11518937": "4e7d2ccb4c35f707c057c9746be3ccc2",
".git/objects/36/066c9ec38c9451103b49c4b4bff0455419dbe7": "6577ed1a53863803ff477d95498fa7f3",
".git/objects/09/8707f6a3ec29c470f75b8af37c747aaeef34cc": "edc1127b28580cd2845693773d6f552e",
".git/objects/62/87908b720c629a2011e618113f05bafb2fb1da": "909c8d8a2aaa44c26a59209a7f01c198",
".git/objects/3a/493f1972a3cb89e1978d0589ec7e6023b34821": "7cd7f3f097e44f5dcb2f07e4f8d55077",
".git/objects/6d/6810a421b93b48c304e2b777fc66bc70f6ccd8": "d0f9992048f020e604bc50aa29310879",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/55/1d91184c01277c00373f6437037fdb4e25cf3d": "dd6e277fa6a64b69e18af1fadc70d5c9",
".git/objects/0f/94869765819eba4e0a70a61110f1a4418e94e8": "9c5ef90f33f25ff5fbae6fbb67d5a033",
".git/objects/0a/187712e27175df7442ac33657ed4ff08e871f0": "b008fa941176d2495b72dcae42731e67",
".git/objects/64/47ec3acb4a72dd12354f8f0d89807f6c86186c": "b6a37965d8af1d1153086c88cc9b8bf0",
".git/objects/90/9d4fb6c185d39d997bebca23e34abe22c5c09c": "190e43eaf1621e94c4c9da37de997917",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/28a74405fe97df69b085ca0fc9bde48c3428ae": "2e278d6e27bd2ae4e0e81d9848d8e8ba",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/a9/4fde752a9f46a610b877a94efbe3fa9e3e2032": "c9a0838bd27ea0307236717d00090df9",
".git/objects/d2/23598ce193be5c982866084c38207aea559cc1": "647e09c3cb092abdeccd78d9b2c2aa66",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a6/d0e10247858c69fb119d7131da9519a2021f72": "ad04e4dda0b44e59e828705798b05d01",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/a1/e16071c06b80217725da8a300b01a28e3f9c51": "2eec7f946131f85b27468ec2ac406f75",
".git/objects/ef/01872726330f2b39a3f98ac73e3da961eb800f": "5f338038c35796c73afbaf3d214f0f85",
".git/objects/e1/7ccb1c34e1455bf615294dc0509afa05983386": "74294090e31c4b5f6ab96a70dd123c91",
".git/objects/cd/11e87ce3e89571e3f59025340af4e4fff993d9": "1560a25a02986e65db73f747bc11324e",
".git/objects/c2/67ecd4855980e309520cb912b876f385de20e7": "48acd0fbfe6c5940ec46dec85092343d",
".git/objects/e9/2b46bec421e3db2f1d4999886e08fc1af23130": "776869b0977f039b20713bc120fdbb2b",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/2c/c2127ce8ab5403234873b3ed99938c5f92549d": "30bdb75ee62e6ad81344fd1d5a374e64",
".git/objects/79/ad22e71f3054624aede48041000cc05896ecab": "e3f7cd754cecca9f2b1f59edd8b34fc2",
".git/objects/79/fc885559c36b28c46551ae81ebbd590d0ff4f2": "bbb8329debbce52dc87eb576ea5328ec",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/48/ba65ed33dff18e74c62b0f08d8165db64a3085": "9aa3a7fdcbc6e5a4b96701d6dc3f541c",
".git/objects/48/37533a8ffb636e111644446b8b5254d152a146": "54ab11d80a5332cf91fd2999264849ea",
".git/objects/48/05586c8f04565c205c2a79df9596ee3b1f249e": "d59e7cd64c5df8b3b4fa2d50652d5c50",
".git/objects/70/6526a97cb032af29c43237c9d2a6b554edb2da": "6563e3a35e91ed300a926c4c99d3397c",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/82/83b45173f6f78a4e78a1e1e13e6aca74fb699c": "40f852983ba9837ca54ccc04e4b1b86d",
".git/objects/82/371516a796c022299bc2a0979fc4082f16d1b8": "8ea6226c6865e30ed21320885d38daee",
".git/objects/82/09f77036655d8ecf486cdd18a05782e2e620e2": "9b6cad28330df1623ec7051c0aaa1b13",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b4a334d09795aa0eb61356d5143726d8",
".git/logs/refs/heads/master": "b4a334d09795aa0eb61356d5143726d8",
".git/logs/refs/remotes/origin/HEAD": "7e00209315d170bcfd50a3e16b4c1667",
".git/logs/refs/remotes/origin/master": "4cd3f1cffdb9c06ca92465a478ce80da",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "a90c791793d4240348d256a73123aeb3",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "a90c791793d4240348d256a73123aeb3",
".git/index": "25a76fef9d8d3fbd8cc4bcd3d17f2e86",
".git/COMMIT_EDITMSG": "60b725f10c9c85c70d97880dfe8191b3",
".git/FETCH_HEAD": "2cefc1d715ff777c625cfc3b83f4c8c2",
"assets/AssetManifest.json": "ccb196996b94e31cb9f51674c9c77c22",
"assets/NOTICES": "b1a2d0b0ec22f75f64b56ddb0b4530aa",
"assets/FontManifest.json": "76163d06c51a77f0dc634644b73dacc5",
"assets/AssetManifest.bin.json": "82961d3207fa909787b15d26f588d163",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/youtube_player_iframe/assets/player.html": "663ba81294a9f52b1afe96815bb6ecf9",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "95efae863e9eb1eab929ddd964634bde",
"assets/fonts/MaterialIcons-Regular.otf": "bd2e8ebdd73623b4d380db53371ad9ff",
"assets/assets/images/logo3.gif": "4c6615ecb3ed7cf1f7bd79cd89515cff",
"assets/assets/images/Montserrat-Medium.ttf": "ee130b491bf120cdb261d27ec29e2805",
"assets/assets/images/logo2.gif": "019da8a5cb70f867b77f24ae0635c6d3",
"assets/assets/images/logo6.gif": "f891157fcd785cfad9428181497dff49",
"assets/assets/images/cardbg1.png": "a4ddac1e0797ae1f3fe626a52ce09c78",
"assets/assets/images/logo7.gif": "56533c0efd9e013eef854fd8f0fe1140",
"assets/assets/images/logo5.gif": "a1046ab73d5548c7832f39685a4ef3ae",
"assets/assets/images/cardbg2.png": "e7965391410709f7f60994bafb99afad",
"assets/assets/images/Comp.gif": "14d25220467f3d1b5fe8e305caf82a98",
"assets/assets/images/logo4.gif": "517cf5bde06050ef4e20d22d9f3e48c3",
"assets/assets/images/Tajawal-Bold.ttf": "76f83be859d749342ba420e1bb010d6a",
"assets/assets/images/logoL.png": "bf0b2785afa8e8f30aab372656a4fe59",
"assets/assets/images/Montserrat-Bold.ttf": "354dc625a35bef1b6ec00a79c6cfc0c8",
"assets/assets/images/sub33.gif": "0d8c40b50af46fbadd480c2842af3eb2",
"assets/assets/images/Tajawal-Regular.ttf": "e3fe295c55a0cb720f766bccc5eecf63",
"assets/assets/images/Tajawal-Medium.ttf": "3358032dd0994cf4a2116f0b16f80d70",
"assets/assets/images/card3.png": "6197286d1c82bdc0f0767b32e741028b",
"assets/assets/images/card2.png": "ee88eb024e2d8778668a7fecae440c36",
"assets/assets/images/card1.png": "2997febb2bba69a6d5cf8a66130d4c72",
"assets/assets/images/logoD.png": "fffce7b5db9ef765305f2c3195a87c88",
"assets/assets/images/Montserrat-Regular.ttf": "38712903602f88435ddddec98862f8b8",
"assets/assets/images/logo8.gif": "993056b2131fd20e5b751c32d584a73a",
"assets/assets/images/sub1.gif": "fa99eab9cf794ba949555ac02fc3e504",
"assets/assets/images/Comp22.gif": "d10f6972f899b6377ef3828855a9bbe9",
"assets/assets/images/whats.webp": "8f567958f6bea291de8bccb918ea6422",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c"};
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
