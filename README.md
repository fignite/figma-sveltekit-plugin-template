# Readme

> This is a work in progress and does not work completely yet

- For now, need to manually copy the index file from `.svelte/figma_tmp` over to `plugin/dist`
- Use `npm link svelte-adapter-figma`
- To rebuild main thread code run `npm run build:main`
- To rebuild UI files run `npm run build:ui`

## Learnings

When you enable single-page app by disabling ssr (see: https://kit.svelte.dev/docs/single-page-apps)

For example:

```
// src/routes/+layout.js
export const ssr = false;
```

Svelte bundles the app into several js modules which are imported by the `index.html` file. This means figma failed to run them because Figma cannot execute `import` or `require`. When using `inline-source`, it doesn't inline these imports. However, if you keep ssr enabled, the HTML content does get added using `inline-source` instead of being bundled into a js file, but the pages are not in a single file, and would need to be bundled into the same file, and then a solution to link them together.

For now, I've decided that it is easier/better to bundle Figma plugins using svelte and a router rather than using svelte-kit. Alternatively another approach could be to run your plugin on a server with svelte-kit and link the plugin iframe to the server/website.
