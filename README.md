# WebExtension Svelte & TailwindCSS

A template for developing WebExtensions with Svelte & TailwindCSS

# Features

-   [Svelte](https://svelte.dev/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [TailwindCSS](https://tailwindcss.com/)
    -   [MD3 Color Tokens](https://m3.material.io/styles/color/the-color-system/tokens)
    -   Dark Mode support
-   [Unplugin Icons (Iconify)](https://github.com/antfu/unplugin-icons)
-   [WebExtension polyfill](https://github.com/mozilla/webextension-polyfill)

## Dev Tools

-   [pnpm](https://pnpm.io/)
-   [npm-run-all](https://github.com/mysticatea/npm-run-all)

# Usage

## Directories

-   `src/` - main source

    -   `assets/` - assets for Svelte components
    -   `components/` - Svelte components that can be used on all pages
    -   `pages/` - directory for all extension _pages_
        -   `background/` - background scripts (additional scripts need to be added to `vite.config.ts` and `manifest.json`)
        -   `content/` - scripts and components to be used for content_script
        -   `options/` - options page files
        -   `popup/` - popup page files
    -   `theme/` - theme files

-   `public/` - static extension files

    -   `icon/` - extension icon files
    -   `manifest.json` - manifest file

-   `dist/` - built files, use this directory for loading the extension

## Development

```
pnpm dev
```

Then load the extension in browser from the dist/ directory.
There is a [nodemon](https://www.npmjs.com/package/nodemon) config file for automatic building.

## Build

```
pnpm prod
```

Then pack/zip files in the `dist` directory.

## Things to change

-   Change page titles in `popup.html` & `options.html`
-   Change extension name and description in `manifest.json`
-   Change package name in `package.json`
-   Change extension icon in `public/icon`
-   Setup colors in `src/theme/tokens.css`

### Icons

-   Preinstalled icon pack is Material Design Icons (`@iconify-json/mdi`)
-   Learn how to install other icon packs [here](https://github.com/antfu/unplugin-icons#icons-data)

# Todo

-   Linter/ESLint
-   Find an elegant way to do HMR
-   Find a way to have only one vite config
-   Build manifest with typescript
-   Many other optimizations
