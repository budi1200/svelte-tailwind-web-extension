import { defineConfig, UserConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import tsconfigPaths from "vite-tsconfig-paths";

export const sharedConfig: UserConfig = {
    plugins: [tsconfigPaths(), svelte()],
};

export default defineConfig({
    ...sharedConfig,
    build: {
        emptyOutDir: false,
        rollupOptions: {
            input: {
                popup: "src/pages/popup/popup.html",
                options: "src/pages/options/options.html",
                background: "src/pages/background/background.ts",
            },
            output: {
                entryFileNames: "assets/[name].js",
                assetFileNames: "assets/[name].[ext]",
            },
        },
    },
});
