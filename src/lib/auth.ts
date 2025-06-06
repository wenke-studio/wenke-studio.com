import { env } from "$env/dynamic/private";

export const genApiKey = () => {
    return env.SECRET_KEY;
};
