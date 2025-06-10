import { fetchData } from "$lib/auth";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ fetch }) => {
    const response = await Promise.all([
        fetchData("articles"),
        fetchData("articles/featured"),
        fetchData("articles/popular")
    ]);

    return {
        articles: response[0],
        featured: response[1],
        popular: response[2]
    };
};
