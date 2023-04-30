importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js');

workbox.routing.registerRoute(
	/.*/,
	new workbox.strategies.NetworkFirst()
);