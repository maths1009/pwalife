import type { VitePWAOptions } from "vite-plugin-pwa";

const manifest: Partial<VitePWAOptions> = {
	registerType: "autoUpdate",
	strategies: "injectManifest",
	srcDir: "src",
	filename: "sw.js",
	devOptions: { enabled: true, type: "module" },
	manifest: {
		name: "PWA life",
		short_name: "PWA",
		description: "Projet de cours sur les PWA",
		theme_color: "#ffffff",
		background_color: "#ffffff",
		display: "standalone",
		start_url: "/",
		icons: [
			{
				src: "pwa-64x64.png",
				sizes: "64x64",
				type: "image/png",
			},
			{
				src: "pwa-192x192.png",
				sizes: "192x192",
				type: "image/png",
			},
			{
				src: "pwa-512x512.png",
				sizes: "512x512",
				type: "image/png",
			},
			{
				src: "maskable-icon-512x512.png",
				sizes: "512x512",
				type: "image/png",
				purpose: "maskable",
			},
		],
	},
	workbox: {
		globPatterns: ["**/*.{js,css,html,png,svg}"],
	},
};

export { manifest };
