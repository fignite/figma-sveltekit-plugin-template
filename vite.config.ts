import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";
import svgLoader from "vite-svg-loader";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    sveltekit(),
    viteSingleFile(),
    svgLoader({
      defaultImport: "raw",
    }),
  ],
});

// import { defineConfig } from "vite";
// // import { svelte } from "@sveltejs/vite-plugin-svelte";
// import { viteSingleFile } from "vite-plugin-singlefile";
// import svgLoader from "vite-svg-loader";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     svelteKit(),
//     viteSingleFile(),
//     svgLoader({
//       defaultImport: "raw", // or 'raw'
//     }),
//   ],
//   build: {
//     watch: true,
//   },
// });
