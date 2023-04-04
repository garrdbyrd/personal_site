import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import adapter from '@sveltejs/adapter-static';

const dev = process.argv.includes('dev');
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null,
      precompress: false,
      strict: true
    }),
    paths: {
      // base: process.env.NODE_ENV === "production" ? "/sveltekit-gh-pages" : "",
      base: dev ? '' : '/personal_site',
    },
  }
};

export default config