"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.translate = void 0;
const services_1 = require("./services");
const translate = async (text, locale = "es", dest = "en") => {
    const service_rand = services_1.TRANSLATE_SERIVES[Math.floor(Math.random() * services_1.TRANSLATE_SERIVES.length)];
    const response = await fetch(`https://${service_rand}/translate_a/single?client=gtx&sl=${locale}&tl=${dest}&dt=t&q=${encodeURIComponent(text.trim())}`);
    if (response.status === 200) {
        const translation = await response.json();
        if (Array.isArray(translation)) {
            return translation[0][0][0];
        }
    }
    return '';
};
exports.translate = translate;
