import { createContext, useState } from 'react';
import { dictionary } from '../languages/dictionary';

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const initialLanguage =
    window.navigator.language?.split('-')[0] === 'es' ? 'es' : 'en';
  const [language, setLanguage] = useState(initialLanguage);
  const [translations, setTranslations] = useState(dictionary[language]);

  function handleLang(e) {
    setLanguage(e);
    setTranslations(dictionary[e]);
  }

  return (
    <LanguageContext.Provider value={{ language, translations, handleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}
