import React from 'react';

import { HeaderBlock } from "./header.styled";
import { HeaderLinks } from '../header-links';

const Header = () => {
  return (
    <HeaderBlock>
        <HeaderLinks />
    </HeaderBlock>
  );
}

export default Header;
