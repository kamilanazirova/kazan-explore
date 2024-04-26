import React from "react";

import './header.styled';

import logo from '../../assets/logo.svg'
import { HeaderBlock, ImgLogo, MenuLink, StyledLogin, StyledMenu, StyledNav, OverlayLogin } from "./header.styled";
import { Overlay } from "../overlay";

const navList = [
  //{ title: "Home", href: "#01" },
  { title: "Интересные места", href: "#02" },
  { title: "Транспорт и инфраструктура", href: "#03" },
  { title: "Спорт и развлечения", href: "#04" },
  { title: "История и культура", href: "#05" },
  { title: "Наука и образование", href: "#06" },
];

export function Header() {
  return (
    <HeaderBlock>
      <StyledNav>
        <a className="logo">
          <ImgLogo src={logo} alt="логотип сайта" />
        </a>
        <StyledMenu>
          {navList.map((element, index) => (
            <li key={element.href}>
              <MenuLink href={element.href}>{element.title}</MenuLink>
            </li>
          ))}
        </StyledMenu>
        <OverlayLogin>
        <StyledLogin>
          <a href="#" className="login-link">Войти</a>
        </StyledLogin>
        </OverlayLogin>
      </StyledNav>
    </HeaderBlock>
  );
}
