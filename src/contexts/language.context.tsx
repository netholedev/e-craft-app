import React, { createContext, useState, ReactNode, useEffect } from 'react';
import i18n from 'i18next';

export const languageContext = createContext({});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const language = i18n.language;

  const setLanguage = (lang: string) => {
    localStorage.setItem('lang', lang);
    i18n.changeLanguage(lang);

    window.location.reload();
  }

  return (
    <languageContext.Provider value={{ setLanguage, language}}>
      {children}
    </languageContext.Provider>
  );
};
