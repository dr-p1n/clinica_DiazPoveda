'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import esTranslations from '@/locales/es.json';
import enTranslations from '@/locales/en.json';

type Lang = 'es' | 'en';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Translations = Record<string, any>;

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tObj: (key: string) => any;
}

const translations: Record<Lang, Translations> = {
  es: esTranslations,
  en: enTranslations,
};

const LanguageContext = createContext<LanguageContextType>({
  lang: 'es',
  setLang: () => {},
  t: (key) => key,
  tObj: (key) => key,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('es');

  useEffect(() => {
    const saved = localStorage.getItem('lang') as Lang | null;
    if (saved === 'es' || saved === 'en') {
      setLangState(saved);
    }
  }, []);

  const setLang = useCallback((newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem('lang', newLang);
  }, []);

  // Dot-notation key resolver: "nav.book" → translations[lang]["nav"]["book"]
  const resolve = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (key: string): any => {
      const parts = key.split('.');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let current: any = translations[lang];
      for (const part of parts) {
        if (current == null) return key;
        current = current[part];
      }
      return current ?? key;
    },
    [lang]
  );

  const t = useCallback(
    (key: string): string => {
      const val = resolve(key);
      return typeof val === 'string' ? val : key;
    },
    [resolve]
  );

  const tObj = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (key: string): any => {
      return resolve(key);
    },
    [resolve]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, tObj }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  return useContext(LanguageContext);
}
