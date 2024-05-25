import React from "react";
import { Link } from 'react-router-dom';

import './header.styled';

import logo from '../../assets/logo.svg'
import { HeaderBlock, ImgLogo, MenuLi, StyledLogin, StyledMenu, StyledNav, OverlayLogin } from "./header.styled";
import { URLs } from "../../__data__/urls";

const nav = {
  places: { title: "Интересные места", href: URLs.ui.places },
  transport: { title: "Транспорт и инфраструктура", href: URLs.ui.transport },
  sport: { title: "Спорт и развлечения", href: URLs.ui.sport },
  history: { title: "История и культура", href: URLs.ui.history },
  education: { title: "Наука и образование", href: URLs.ui.education },
}

export function Header() {
  return (
    <HeaderBlock>
      <StyledNav>
        <a href="/kazan-explore">
          <ImgLogo src={logo} alt="логотип сайта" />
        </a>
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
            <Link to={URLs.ui.entrance}>Войти</Link>
          </StyledLogin>
        </OverlayLogin>
      </StyledNav>
    </HeaderBlock>
  );
}
