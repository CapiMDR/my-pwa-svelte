import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  base: "/Svelter/",
  plugins: [
    svelte(),

    VitePWA({
      registerType: "autoUpdate",

      includeAssets: ["favicon.svg", "icon-192.png", "icon-512.png"],

      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,webmanifest}"],
        navigateFallback: "index.html",
        cleanupOutdatedCaches: true,
      },

      manifest: {
        start_url: "/Svelter/",
        scope: "/Svelter/",

        name: "Svelter",
        short_name: "Svelter",

        display: "standalone",

        theme_color: "#1A2A4E",
        background_color: "#121212",

        icons: [
          {
            src: "icon-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "icon-512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
