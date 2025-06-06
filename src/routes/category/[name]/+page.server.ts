import { env } from "$env/dynamic/private";
import { genApiKey } from "$lib/auth";

export const load = async ({ fetch, setHeaders, params, parent }) => {
    const { hashtags, categories } = await parent();
    const { name } = params;

    const apiKey = genApiKey();
    const response = await fetch(`${env.API_SERVICE_URL}/api/categories/${name}`, {
        headers: {
            "X-API-Key": apiKey
        }
    });
    // setHeaders({ "Cache-Control": "max-age=3600" });

    if (!response.ok) return { category: {}, sidebar: { hashtags, categories } };

    const data = await response.json();

    return { category: data.item, sidebar: { hashtags, categories } };
};
