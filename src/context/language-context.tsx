import React, { createContext, useState, useContext, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { mainApi } from "../__data__/service/main-api";

interface LanguageContextType {
  language: string;
  changeLanguage: (lng: string) => void;
}

interface LanguageProviderProps {
  children: ReactNode;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
  const dispatch = useDispatch();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
    dispatch(mainApi.util.invalidateTags([
      'InfoAboutKazanData',
      'NewsData',
      'SportsList',
      'SportFirstTextData',
      'SportSecondTextData',
      'SportQuizData',
      'PlaceData',
      'InfoTransportData',
      'TralData',
      'TripScheduleData',
      'HistoryText',
      'HistoryList',
      'EducationText',
      'EducationList',
      'KfuData',
      'UserData',
      'QuizResultData'
    ]))
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
