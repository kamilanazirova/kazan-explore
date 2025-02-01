import React, { useState } from 'react';

import { useTranslation } from 'react-i18next';
import logo from '../../assets/logo.svg';
import { URLs } from "../../__data__/urls";
import { Link } from 'react-router-dom';
import {
  ImgLogo,
  MenuLi,
  StyledMenu
} from './header-links.styled';
import { NavigationDrawer } from '../navigation-drawer';
import { LanguageSwitcher } from '../translate/translate';
import { AccountMenu } from '../account-menu';
import Burger from './burger';
import {
  Toolbar,
  useMediaQuery,
  useTheme,
  Box
} from '@mui/material';

const nav = {
  places: { key: 'kazan-explore.header.places', href: URLs.ui.places },
  transport: { key: 'kazan-explore.header.transport', href: URLs.ui.transport },
  sport: { key: 'kazan-explore.header.sport', href: URLs.ui.sport },
  history: { key: 'kazan-explore.header.history', href: URLs.ui.history },
  education: { key: 'kazan-explore.header.education', href: URLs.ui.education },
};

export function HeaderLinks() {
  const { t } = useTranslation();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(1000));
  const hasLinks = Object.values(nav).some((item) => item.href);

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  return (
    <>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          {hasLinks && isMobile && (
            <Burger onClick={() => toggleDrawer(true)} />
          )}
          <Link to={URLs.baseUrl}>
            <ImgLogo src={logo} alt="логотип сайта" />
          </Link>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          {!isMobile && (
            <StyledMenu>
              {Object.values(nav).map(({ key, href }) => (
                (href) && <MenuLi key={key}>
                  <Link to={href}>{t(key)}</Link>
                </MenuLi>
              ))}
            </StyledMenu>
          )}
          <LanguageSwitcher />
          <AccountMenu />
        </Box>
      </Toolbar>
      {hasLinks && <NavigationDrawer drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} nav={nav} />}
    </>
  );
}
