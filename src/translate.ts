import serviceRand from "./service-rand";
import { TRANSLATE_SERIVES } from "./services";


const translate = async (
  text: string,
  locale: string = "es",
  dest: string = "en"
): Promise<string> => {
  let attempts = 0;
  const maxAttempts = 5; 
  const delay = (ms: number) => new Promise(res => setTimeout(res, ms)); 

  while (attempts < maxAttempts) {
    try {
      const response = await fetch(
        `https://${serviceRand()}/translate_a/single?client=gtx&sl=${locale}&tl=${dest}&dt=t&q=${encodeURIComponent(
          text.trim()
        )}`
      );

      if (response.status === 200) {
        const translation = await response.json();
        if (Array.isArray(translation)) {
          return translation[0][0][0];
        }
      }
    } catch (error) {
      console.error(error);
      attempts++;
      await delay(1000); 
      continue;
    }
  }

  return '';
};



export { translate };
