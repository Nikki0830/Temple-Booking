
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
 
import { TRANSLATIONS_AR } from "./ar/translations";
import { TRANSLATIONS_EN } from "./en/translations";
import { TRANSLATIONS_HI } from "./hi/translations";
import i18n from "i18next";
 
i18n
.use(initReactI18next)
.use(LanguageDetector)
 .init({
   resources: {
     en: {
       translation: TRANSLATIONS_EN
     },
     ar: {
       translation: TRANSLATIONS_AR
     },
     hi: {
        translation: TRANSLATIONS_HI
      }
   },
   fallbackLng:"hi"
 });
 
export default i18n