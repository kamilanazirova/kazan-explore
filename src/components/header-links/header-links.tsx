import React, { useState, useContext, useEffect } from 'react';

import logo from '../../assets/logo.svg'

import { StyledNav } from './header-links.styled';

import { URLs } from "../../__data__/urls";
import { LoginContext } from '../../context/login-context';
import { Link } from 'react-router-dom';
import { ImgLogo, MenuLi, OverlayLogin, StyledLogin, StyledMenu } from './header-links.styled';
import { UserAvatar } from '../user-avatar';

const nav = {
  places: { title: "Интересные места", href: URLs.ui.places },
  transport: { title: "Транспорт и инфраструктура", href: URLs.ui.transport },
  sport: { title: "Спорт и развлечения", href: URLs.ui.sport },
  history: { title: "История и культура", href: URLs.ui.history },
  education: { title: "Наука и образование", href: URLs.ui.education },
}

export function HeaderLinks({ isOpen }) {
  const { currentUser, setCurrentUser } = useContext(LoginContext);
  const [isAuth, setAuth] = useState(false);
  const onLogOut = () => {
    setCurrentUser(null);
  }

  useEffect(() => {
    if (currentUser && currentUser.email) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, [currentUser]);

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
      {URLs.ui.profile && isAuth &&
        <Link to={URLs.ui.profile.getUrl(`${currentUser.email}`)}>
          <UserAvatar email={currentUser.email} variant="small" />
        </Link>
      }
    </StyledNav>
  );
}
