import { env } from "$env/dynamic/private";
import { genApiKey } from "$lib/auth";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ fetch }) => {
    const apiKey = genApiKey();
    const response = await fetch(`${env.API_SERVICE_URL}/api/articles/`, {
        headers: { "x-api-key": apiKey }
    });
    if (!response.ok) return { articles: [] };

    const data = await response.json();
    console.log(data);
    return { articles: data.items };
};
