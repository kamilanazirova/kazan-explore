import React, { useState } from 'react';
import { useLanguage } from '../../context/language-context'; // Используем контекст
import Flag from 'react-world-flags';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import tatarstanFlag from '../../assets/flags/tatarstan.png';

export const LanguageSwitcher = () => {
  const { language, changeLanguage } = useLanguage(); // Используем контекст
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleLanguageChange = (lng: string) => {
    changeLanguage(lng); // Меняем язык через контекст
    localStorage.setItem("i18nextLng", lng); // Сохраняем в localStorage
  };

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
      <DropdownToggle tag="span" data-toggle="dropdown" aria-expanded={dropdownOpen}>
        {/* Показываем флаг в зависимости от языка */}
        {language === "tt" ? (
          <img
            src={tatarstanFlag}
            alt="Tatarstan flag"
            width={25}
            height={15}
          />
        ) : (
          <Flag
            code={language === "ru" ? "RU" : "GB"}
            width={25}
            height={25}
          />
        )}
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={() => handleLanguageChange("ru")}>
          <Flag code="RU" width={25} height={25} /> Русский
        </DropdownItem>
        <DropdownItem onClick={() => handleLanguageChange("en")}>
          <Flag code="GB" width={25} height={25} /> English
        </DropdownItem>
        <DropdownItem onClick={() => handleLanguageChange("tt")}>
          <img
            src={tatarstanFlag}
            alt="Tatarstan flag"
            width={25}
            height={15}
          />{" "}
          Татарча
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
