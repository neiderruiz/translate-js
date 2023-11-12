"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkLangs = void 0;
const services_1 = require("./services");
const checkLangs = async () => {
    const statusResults = await Promise.all(services_1.TRANSLATE_SERIVES.map(async (url) => {
        try {
            const response = await fetch(`https://${url}`, { method: 'GET' });
            return { url, status: response.status };
        }
        catch (error) {
            return { url, status: 'No accesible' };
        }
    }));
    return statusResults;
};
exports.checkLangs = checkLangs;
