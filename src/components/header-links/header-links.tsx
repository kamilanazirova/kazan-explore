import React from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/logo.svg'
import { URLs } from "../../__data__/urls";
import { Link } from 'react-router-dom';
import {
  ImgLogo,
  MenuLi,
  StyledMenu,
  StyledNav
} from './header-links.styled';
import { LanguageSwitcher } from '../translate/translate';
import { AccountMenu } from '../account-menu';


const nav = {
  places: { key: 'header.places', href: URLs.ui.places },
  transport: { key: 'header.transport', href: URLs.ui.transport },
  sport: { key: 'header.sport', href: URLs.ui.sport },
  history: { key: 'header.history', href: URLs.ui.history },
  education: { key: 'header.education', href: URLs.ui.education },
  selector: { key: 'header.selector', href: URLs.ui.selector }
};

export function   HeaderLinks({ isOpen }) {
  const { t } = useTranslation()

  return (
    <StyledNav isOpen={isOpen}>

      <Link to={URLs.baseUrl}>
        <ImgLogo src={logo} alt="логотип сайта" />
      </Link>

      <StyledMenu>
        {Object.values(nav).map(({ key, href }) => (
          <MenuLi key={key}>
            <Link to={href}>{t(key)}</Link>
          </MenuLi>
        ))}
      </StyledMenu>
      <LanguageSwitcher />
      <AccountMenu/>
    </StyledNav>
  );
}
