// import adapter from 'svelte-adapter-figma';
// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { viteSingleFile } from "vite-plugin-singlefile"

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
			// This is required if adapter-static is used and ssr is turned off is (ie single-page app) 
			fallback: '200.html' // may differ from host to host
		}),
		// prerender: {
		// 	handleHttpError: "ignore"
		// }
	},
	vite: {
		plugins: [viteSingleFile()],
		build: {
			target: 'es2019',
			assetsInlineLimit: 100000000,
			chunkSizeWarningLimit: 100000000,
			cssCodeSplit: false,
			sourcemap: false,
			brotliSize: false,
			rollupOptions: {
				inlineDynamicImports: true,
				output: {
					manualChunks: () => 'everything.js',
				},
			},
			outDir: 'build'
		}
	},
};

export default config;
