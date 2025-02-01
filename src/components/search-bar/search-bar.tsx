import React from "react";
import { useTranslation } from "react-i18next";
import { SearchInput } from "./search-bar.styled";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  const { t } = useTranslation(); // Подключение мультиязычности

  return (
    <SearchInput
      type="text"
      placeholder={t("places.searchPlaceholder", "Поиск мест...")}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
