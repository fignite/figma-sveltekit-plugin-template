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

Svelte bundles the app into several js modules which are imported by the `index.html` file. This means Figma failed to run them because Figma cannot execute `import` or `require`. When using `inline-source`, it doesn't inline these imports. However, if you keep ssr enabled, the HTML content does get added using `inline-source` instead of being bundled into a js file, but the pages are not in a single file, and would need to be bundled into the same file, and then a solution to link them together.

I was able to use Svelte Kit to bundle routes into individual HTML files with their CSS inlined. However, using `inline-source` didn't work for inlining the client-side `JS` because Svelte uses link tags and imports, which `inline-source` won't process.

For now, I've decided that it is easier/better to bundle Figma plugins using Svelte and a router rather than using Svelte Kit. Alternatively, another approach could be to run your plugin on a server with Svelte Kit and link the plugin iframe to the server/website.

### What's needed?

- Something that can inline the JS that is created by Svelte Kit
- Something that can handles the views in one page (currently Svelte Kit still exports them as separate files)
- Router must be memory based

## Resources

https://github.com/vitejs/vite/issues/621
https://stackoverflow.com/questions/67893778/sveltekit-how-to-output-build-as-single-html-file-with-inlined-js-and-css
