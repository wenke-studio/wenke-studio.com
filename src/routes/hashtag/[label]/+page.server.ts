import { env } from "$env/dynamic/private";
import { genApiKey } from "$lib/auth";

export const load = async ({ fetch, setHeaders, params, parent }) => {
    const { hashtags, categories } = await parent();
    const { label } = params;

    const apiKey = genApiKey();
    const response = await fetch(`${env.API_SERVICE_URL}/api/hashtags/${label}`, {
        headers: {
            "X-API-Key": apiKey
        }
    });
    // setHeaders({ "Cache-Control": "max-age=3600" });

    if (!response.ok) return { hashtag: {}, sidebar: { hashtags, categories } };

    const data = await response.json();

    return { hashtag: data.item, sidebar: { hashtags, categories } };
};
