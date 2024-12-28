import React, { createContext, useState, useContext, ReactNode } from "react";
import { useTranslation } from "react-i18next";

// Тип для контекста
interface LanguageContextType {
  language: string;
  changeLanguage: (lng: string) => void;
}

// Тип для пропсов компонента LanguageProvider
interface LanguageProviderProps {
  children: ReactNode;
}

// Создаем контекст
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Провайдер контекста
export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);  // меняем язык через i18next
    setLanguage(lng);  // обновляем состояние языка
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Хук для использования контекста
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
