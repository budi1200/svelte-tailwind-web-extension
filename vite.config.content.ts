import { sharedConfig } from "./vite.config";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    ...sharedConfig,
    build: {
        emptyOutDir: false,
        rollupOptions: {
            input: {
                content: "src/pages/content/content.ts",
            },
            output: {
                format: "iife",
                entryFileNames: "content.js",
                assetFileNames: "assets/[name].[ext]",
            },
        },
    },
});
