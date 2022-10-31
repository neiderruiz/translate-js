import fetch from "node-fetch";
import { TRANSLATE_SERIVES } from "./services";
type TypeTranslate = {
  locale?: string;
  text: string;
  dest?: string;
};

const translate = async ({
  text,
  locale = "es",
  dest = "en",
}: TypeTranslate): Promise<boolean | string> => {
  var service_rand =
    TRANSLATE_SERIVES[(Math.random() * TRANSLATE_SERIVES.length) | 0];

  const response = await fetch(
    `https://${service_rand}/translate_a/single?client=gtx&sl=${locale}&tl=${dest}&dt=t&q=${encodeURIComponent(
      text.trim()
    )}`
  );

  if (response.status === 200) {
    const translation = await response.json();
    if (Array.isArray(translation)) {
      return translation[0][0][0];
    }
  }

  return false;
};

export { translate };
