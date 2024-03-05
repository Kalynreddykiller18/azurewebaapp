// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
    esbuild: {
        target: "es2015",
    },
    optimizeDeps: {
        esbuildOptions: {
            format: "esm",
        },
    },
});
