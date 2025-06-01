import { read } from "$app/server";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

const blogDir = "/src/lib/articles";

export const load: PageServerLoad = async ({ params }) => {
    const { slug } = params;

    try {
        const content = read(`${blogDir}/${slug}.md`);
        return {
            content: await content.text()
        };
    } catch (e) {
        error(404, "Post not found");
    }
};
