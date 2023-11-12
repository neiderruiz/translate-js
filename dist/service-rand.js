"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("./services");
const serviceRand = () => {
    return services_1.TRANSLATE_SERIVES[Math.floor(Math.random() * services_1.TRANSLATE_SERIVES.length)];
};
exports.default = serviceRand;
