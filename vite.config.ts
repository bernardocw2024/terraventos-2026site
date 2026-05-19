import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Separa vendor e i18n em chunks específicos
          vendor: [
            "react",
            "react-dom",
            "react-i18next",
            "react-hot-toast",
            "react-zoom-pan-pinch",
          ],
          i18n: ["i18next", "i18next-browser-languagedetector"],
          emailjs: ["@emailjs/browser"],
        },
      },
    },
    // Reduz tamanho do main chunk
    chunkSizeWarningLimit: 600,
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
} as any);
