import { env } from "$env/dynamic/private";
import { genApiKey } from "$lib/auth";
import type { LayoutServerLoad } from "./$types";

const fetchData = async (endpoint: string, apiKey: string) => {
    try {
        const response = await fetch(`${env.API_SERVICE_URL}/api/${endpoint}/`, {
            headers: { "X-API-Key": apiKey }
        });
        if (!response.ok) return [];
        const data = await response.json();
        return data.items;
    } catch {
        return [];
    }
};

export const load: LayoutServerLoad = async ({ fetch, setHeaders }) => {
    const apiKey = genApiKey();

    const [hashtags, categories] = await Promise.all([
        fetchData("hashtags", apiKey),
        fetchData("categories", apiKey)
    ]);

    return { hashtags, categories };
};
