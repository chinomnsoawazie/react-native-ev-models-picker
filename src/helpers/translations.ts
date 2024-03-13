import { SupportedLangues, TranslationCopy } from "../types/evData";

type TranslationsProps = {
  language: SupportedLangues;
};

const translations = (x: TranslationsProps): TranslationCopy => {
  const { language } = x;
  switch (language) {
    case "en": {
      return {
        carMake: "Car Make",
        carModel: "Car Model",
        carYear: "Car Year",
        carTrim: "Car Trim",
      };
    }
    case "fr": {
      return {
        carMake: "Car Make",
        carModel: "Car Model",
        carYear: "Car Year",
        carTrim: "Car Trim",
      };
    }
    default: {
      return {
        carMake: "Car Make",
        carModel: "Car Model",
        carYear: "Car Year",
        carTrim: "Car Trim",
      };
    }
  }
};

export { translations };
