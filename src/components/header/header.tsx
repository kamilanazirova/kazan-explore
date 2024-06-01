import React, { useState } from 'react';

import './header.styled';

import { HeaderBlock } from "./header.styled";
import { HeaderLinks } from '../header-links';
import { Burger } from './burger';

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
