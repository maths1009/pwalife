import { precacheAndRoute } from "workbox-precaching";

precacheAndRoute(self.__WB_MANIFEST);

self.addEventListener("install", (_) => {
	console.log("[PWA life - SW] Installation...");
	self.skipWaiting();
});

self.addEventListener("activate", (event) => {
	console.log("[PWA life - SW] Activation...");
	event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
	event.respondWith(
		caches.match(event.request).then((response) => {
			return response || fetch(event.request);
		}),
	);
});
