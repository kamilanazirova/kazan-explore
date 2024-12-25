import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Flag from 'react-world-flags';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import tatarstanFlag from '../../assets/flags/tatarstan.png'; 

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng); // Меняем язык
    localStorage.setItem("i18nextLng", lng); // Сохраняем выбранный язык в localStorage
  };

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
       <DropdownToggle tag="span" data-toggle="dropdown" aria-expanded={dropdownOpen}>
        {/* Показываем флаг в зависимости от языка */}
        {i18n.language === "tt" ? (
          <img
            src={tatarstanFlag}
            alt="Tatarstan flag"
            width={25}
            height={15}
          />
        ) : (
          <Flag
            code={i18n.language === "ru" ? "RU" : "GB"}
            width={25}
            height={25}
          />
        )}
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={() => changeLanguage("ru")}>
          <Flag code="RU" width={25} height={25} /> Русский
        </DropdownItem>
        <DropdownItem onClick={() => changeLanguage("en")}>
          <Flag code="GB" width={25} height={25} /> English
        </DropdownItem>
        <DropdownItem onClick={() => changeLanguage("tt")}>
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