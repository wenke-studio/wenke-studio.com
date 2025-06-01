import { sveltekit } from "@sveltejs/kit/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import { plugin as markdown } from "vite-plugin-markdown";

export default defineConfig({
    plugins: [tailwindcss(), sveltekit(), markdown()]
});
