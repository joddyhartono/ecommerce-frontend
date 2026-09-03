import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      "/midtrans": {
        target: "http://localhost:5136",
        changeOrigin: true,
      },
    },
    allowedHosts: ["envoy-bronze-sprout.ngrok-free.dev"],
  },
});
