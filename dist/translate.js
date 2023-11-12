"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.translate = void 0;
const service_rand_1 = __importDefault(require("./service-rand"));
const translate = async (text, locale = "es", dest = "en") => {
    let attempts = 0;
    const maxAttempts = 5;
    const delay = (ms) => new Promise(res => setTimeout(res, ms));
    while (attempts < maxAttempts) {
        try {
            const response = await fetch(`https://${(0, service_rand_1.default)()}/translate_a/single?client=gtx&sl=${locale}&tl=${dest}&dt=t&q=${encodeURIComponent(text.trim())}`);
            if (response.status === 200) {
                const translation = await response.json();
                if (Array.isArray(translation)) {
                    return translation[0][0][0];
                }
            }
        }
        catch (error) {
            console.error(error);
            attempts++;
            await delay(1000);
            continue;
        }
    }
    return '';
};
exports.translate = translate;
