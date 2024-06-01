import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './header.styled';

import logo from '../../assets/logo.svg'
import { HeaderBlock, ImgLogo, MenuLi, StyledLogin, StyledMenu, OverlayLogin } from "./header.styled";
import { LoginContext  } from '../../context/login-context';
import { URLs } from "../../__data__/urls";
import { HeaderLinks } from '../header-links';
import { Burger } from './burger';

const nav = {
  places: { title: "Интересные места", href: URLs.ui.places },
  transport: { title: "Транспорт и инфраструктура", href: URLs.ui.transport },
  sport: { title: "Спорт и развлечения", href: URLs.ui.sport },
  history: { title: "История и культура", href: URLs.ui.history },
  education: { title: "Наука и образование", href: URLs.ui.education },
}

export function Header() {
  const [isHeaderLinksOpen, setIsHeaderLinksOpen] = useState(false);

  const handleHeaderLinksToggle = () => {
    setIsHeaderLinksOpen(!isHeaderLinksOpen);
  };

  return (
    <HeaderBlock>
        <HeaderLinks isOpen={isHeaderLinksOpen} />
        <Burger onHeaderLinksToggle={handleHeaderLinksToggle} />
    </HeaderBlock>
  );
}
