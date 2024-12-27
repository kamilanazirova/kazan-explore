import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/logo.svg'
import { URLs } from "../../__data__/urls";
import { Link } from 'react-router-dom';
import {
  ImgLogo,
  MenuLi,
  OverlayLogin,
  StyledLogin,
  StyledMenu,
  MenuIconButton,
  StyledNav
} from './header-links.styled';
import { UserAvatar } from '../user-avatar';
import { useUser } from '../../hooks/useUser';
import { Tooltip } from '@mui/material';
import { LanguageSwitcher } from '../translate/translate'; 


const nav = {
  places: { key: 'header.places', href: URLs.ui.places },
  transport: { key: 'header.transport', href: URLs.ui.transport },
  sport: { key: 'header.sport', href: URLs.ui.sport },
  history: { key: 'header.history', href: URLs.ui.history },
  education: { key: 'header.education', href: URLs.ui.education },
};

export function HeaderLinks({ isOpen }) {
  const [isAuth, setAuth] = useState(false);
  const { user, removeUser } = useUser();

  const onLogOut = () => {
    const { t } = useTranslation()

    removeUser();
  }

  useEffect(() => {
    if (user && user.email) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, [user]);

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

      <OverlayLogin>
        {URLs.ui.entrance && (
          <StyledLogin>
            {!isAuth ? (
              <Link to={URLs.ui.entrance}>{t('header.login')}</Link>
            ) : (
              <Link onClick={onLogOut} to={URLs.ui.entrance}>{t('header.logout')}</Link>
            )}
          </StyledLogin>
        )}
      </OverlayLogin>
      <LanguageSwitcher />

      {URLs.ui.profile.on && isAuth &&
        <Tooltip title="Профиль">
          <MenuIconButton>
            <Link to={URLs.ui.profile.getUrl(`${user.email}`)}>
              <UserAvatar name={user.name} variant="small" />
            </Link>
          </MenuIconButton>
        </Tooltip>
      }
    </StyledNav>
  );
}
