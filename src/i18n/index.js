import { i18n, initReactI18next } from "@plugin/i18n";
import zhCN from "./zh_CN.json";
import en from "./en.json";

const resources = {
  en: {
    translation: en,
  },
  zh_CN: {
    translation: zhCN,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "zh_CN",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
