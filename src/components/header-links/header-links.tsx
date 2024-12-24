import React, { useState, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/logo.svg';
import { StyledNav, ImgLogo, MenuLi, OverlayLogin, StyledLogin, StyledMenu } from './header-links.styled';
import { URLs } from "../../__data__/urls";
import { LoginContext } from '../../context/login-context';
import { Link } from 'react-router-dom';
import { UserAvatar } from '../user-avatar';
import { LanguageSwitcher } from '../translate/translate'; 

const nav = {
  places: { key: 'header.places', href: URLs.ui.places },
  transport: { key: 'header.transport', href: URLs.ui.transport },
  sport: { key: 'header.sport', href: URLs.ui.sport },
  history: { key: 'header.history', href: URLs.ui.history },
  education: { key: 'header.education', href: URLs.ui.education },
};

export function HeaderLinks({ isOpen }) {
  const { currentUser, setCurrentUser } = useContext(LoginContext);
  const [isAuth, setAuth] = useState(false);
  const onLogOut = () => {
    setCurrentUser(null);
  };

  const { t } = useTranslation()

  useEffect(() => {
    setAuth(currentUser && !!currentUser.email);
  }, [currentUser]);

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

      {URLs.ui.profile && isAuth && (
        <Link to={URLs.ui.profile.getUrl(`${currentUser.email}`)}>
          <UserAvatar email={currentUser.email} variant="small" />
        </Link>
      )}
    </StyledNav>
  );
}
