import { TRANSLATE_SERIVES } from "./services";

const serviceRand = () => {
    return TRANSLATE_SERIVES[Math.floor(Math.random() * TRANSLATE_SERIVES.length)];
}

export default serviceRand;