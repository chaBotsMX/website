import adapter from '@sveltejs/adapter-node'; // Check this line!
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),
    kit: {
        adapter: adapter() // This produces the 'build' folder
    }
};
export default config;
