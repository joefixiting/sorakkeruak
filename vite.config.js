import { screenGraphPlugin } from "@animaapp/vite-plugin-screen-graph";
import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react(), mode === "development" && screenGraphPlugin()],
  publicDir: "./static",
  base: "./",
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
  // --- BARIS YANG DITAMBAHKAN ---
  // Ini akan memberitahu Vite untuk memperlakukan format ini sebagai aset
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.svg', '**/*.gif', '**/*.JPG'],
}));