import { env } from "$env/dynamic/private";

export const genApiKey = () => {
    return env.SECRET_KEY;
};

export const fetchData = async (endpoint: string) => {
    const apiKey = genApiKey();

    try {
        const response = await fetch(`${env.API_SERVICE_URL}/api/${endpoint}/`, {
            headers: { "X-API-Key": apiKey }
        });
        if (!response.ok) return [];
        const data = await response.json();
        return data.items;
    } catch (e) {
        console.error(e);
        return [];
    }
};
