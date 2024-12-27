import React, { useState, useEffect } from 'react';

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

const nav = {
  places: { title: "Интересные места", href: URLs.ui.places },
  transport: { title: "Транспорт и инфраструктура", href: URLs.ui.transport },
  sport: { title: "Спорт и развлечения", href: URLs.ui.sport },
  history: { title: "История и культура", href: URLs.ui.history },
  education: { title: "Наука и образование", href: URLs.ui.education },
}

export function HeaderLinks({ isOpen }) {
  const [isAuth, setAuth] = useState(false);
  const { user, removeUser } = useUser();

  const onLogOut = () => {
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
        {URLs.ui.places && (<MenuLi>
          <Link
            to={nav.places.href}>{nav.places.title}
          </Link>
        </MenuLi>
        )}
        {URLs.ui.transport && (<MenuLi>
          <Link
            to={nav.transport.href}>{nav.transport.title}
          </Link>
        </MenuLi>
        )}
        {URLs.ui.sport && (<MenuLi>
          <Link
            to={nav.sport.href}>{nav.sport.title}
          </Link>
        </MenuLi>
        )}
        {URLs.ui.history && (<MenuLi>
          <Link
            to={nav.history.href}>{nav.history.title}
          </Link>
        </MenuLi>
        )}
        {URLs.ui.education && (<MenuLi>
          <Link
            to={nav.education.href}>{nav.education.title}
          </Link>
        </MenuLi>
        )}
      </StyledMenu>

      <OverlayLogin>
        {URLs.ui.entrance && (
          <StyledLogin>
            {!isAuth && <Link to={URLs.ui.entrance}>Войти</Link>}
            {isAuth && <Link onClick={onLogOut} to={URLs.ui.entrance}>Выйти</Link>}
          </StyledLogin>
        )}
      </OverlayLogin>
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
