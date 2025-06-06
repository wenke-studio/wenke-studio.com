import { env } from "$env/dynamic/private";
import { genApiKey } from "$lib/auth";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params, fetch }) => {
    const { title } = params;

    const apiKey = genApiKey();
    const response = await fetch(`${env.API_SERVICE_URL}/api/articles/${title}`, {
        headers: { "x-api-key": apiKey }
    });
    if (!response.ok) error(404, "Post not found");

    const data = await response.json();
    return data.item;
};
