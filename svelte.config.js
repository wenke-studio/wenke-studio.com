import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { mdsvex } from "mdsvex";

const config = {
    preprocess: [vitePreprocess(), mdsvex({ extensions: [".svx", ".md"] })],
    kit: { adapter: adapter() },
    extensions: [".svelte", ".svx", ".md"]
};

export default config;
