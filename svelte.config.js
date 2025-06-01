import adapter from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

const config = {
    preprocess: [vitePreprocess()],
    kit: {
        adapter: adapter({
            runtime: "nodejs22.x"
        })
    },
    extensions: [".svelte"]
};

export default config;
