import React, { useContext } from 'react';

import logo from '../../assets/logo.svg'


import { StyledNav } from './header-links.styled';

import { URLs } from "../../__data__/urls";
import { LoginContext  } from '../../context/login-context';
import { Link } from 'react-router-dom';
import { ImgLogo, MenuLi, OverlayLogin, StyledLogin, StyledMenu } from './header-links.styled';

const nav = {
    places: { title: "Интересные места", href: URLs.ui.places },
    transport: { title: "Транспорт и инфраструктура", href: URLs.ui.transport },
    sport: { title: "Спорт и развлечения", href: URLs.ui.sport },
    history: { title: "История и культура", href: URLs.ui.history },
    education: { title: "Наука и образование", href: URLs.ui.education },
  }

export function HeaderLinks({ isOpen }) {
  const { currentUser } = useContext(LoginContext);

  const isAuth = !!currentUser;

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
          <StyledLogin>
            {isAuth&&<Link to={URLs.ui.entrance}>Войти</Link>}
            {!isAuth&&<Link to={URLs.ui.entrance}>Выйти</Link>}
          </StyledLogin>
        </OverlayLogin>

  </StyledNav>
  );
}
