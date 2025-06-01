import { read } from "$app/server";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params, parent }) => {
    const { slug } = params;
    const { articles } = await parent();

    const article = articles.find((article) => article.slug === slug);

    if (!article) {
        error(404, "Post not found");
    }

    try {
        const response = read(article.fileUrl);
        return { content: await response.text() };
    } catch (e) {
        error(404, "Post not found");
    }
};
