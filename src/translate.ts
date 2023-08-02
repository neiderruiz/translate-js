import { TRANSLATE_SERIVES } from "./services";

const translate = async (
  text: string,
  locale: string = "es",
  dest: string = "en"
): Promise<string> => {
  const service_rand =
    TRANSLATE_SERIVES[Math.floor(Math.random() * TRANSLATE_SERIVES.length)];

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

  return '';
};


export { translate };
