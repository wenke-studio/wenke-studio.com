import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ parent }) => {
    const { hashtags, categories } = await parent();

    return { sidebar: { hashtags, categories } };
};
