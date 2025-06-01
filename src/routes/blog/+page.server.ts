import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ parent }) => {
    const { articles } = await parent();

    // 只需要 slug 資訊用於顯示文章列表
    const posts = articles.map((article) => ({
        slug: article.slug
    }));

    return { posts };
};
