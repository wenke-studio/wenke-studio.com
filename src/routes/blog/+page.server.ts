import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    const modules = import.meta.glob("/src/lib/articles/*.md");

    const posts = Object.entries(modules)?.map(([path, module]) => {
        const slug = path?.split("/").pop()?.replace(".md", "");
        return { slug };
    });

    return { posts };
};
