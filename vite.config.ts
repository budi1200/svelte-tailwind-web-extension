import { defineConfig, UserConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import tsconfigPaths from "vite-tsconfig-paths";
import Icons from "unplugin-icons/vite";

export const sharedConfig: UserConfig = {
    plugins: [
        tsconfigPaths(),
        svelte(),
        Icons({
            compiler: "svelte",
        }),
    ],
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
