import { TRANSLATE_SERIVES } from "./services";

export const checkLangs = async () => {
    const statusResults = await Promise.all(TRANSLATE_SERIVES.map(async (url) => {
        try {
            const response = await fetch(`https://${url}`, { method: 'GET' });
            return { url, status: response.status };
        } catch (error) {
            return { url, status: 'No accesible' };
        }
    }));

    return statusResults;
}