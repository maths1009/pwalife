const CACHE_NAME = "pwa-cache-v1";
const ASSETS_TO_CACHE = [
	"/", // Accueil
	"/index.html",
	"/styles.css",
	"/scripts.js",
	"/icons/icon-192x192.png",
	"/icons/icon-512x512.png",
];

self.addEventListener("install", (event) => {
	console.log("[Service Worker] Installation...");
	event.waitUntil(
		caches.open(CACHE_NAME).then((cache) => {
			console.log("[Service Worker] Mise en cache des ressources...");
			return cache.addAll(ASSETS_TO_CACHE);
		}),
	);
	self.skipWaiting();
});

// Activer le Service Worker et nettoyer les anciens caches
self.addEventListener("activate", (event) => {
	console.log("[Service Worker] Activation...");
	event.waitUntil(
		caches.keys().then((cacheNames) =>
			Promise.all(
				cacheNames.map((cache) => {
					if (cache !== CACHE_NAME) {
						console.log(
							"[Service Worker] Suppression de l'ancien cache:",
							cache,
						);
						return caches.delete(cache);
					}
				}),
			),
		),
	);
	self.clients.claim();
});

self.addEventListener("fetch", (event) => {
	event.respondWith(
		caches.match(event.request).then((response) => {
			return response || fetch(event.request);
		}),
	);
});
