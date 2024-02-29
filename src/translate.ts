import serviceRand from "./service-rand";
import { TRANSLATE_SERIVES } from "./services";


const translate = async (
  text: string,
  locale: string = "es",
  dest: string = "en"
): Promise<string> => {
  if(!text.trim()){
    return '';
  }
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
          const results: any = translation[0] 
          const text = results.map((trans: [string]) => trans[0])
          return text.join('');
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
