import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { URLs } from "../../__data__/urls";
import { useUser } from "../../hooks/useUser";

import { OverlayLogin, StyledLogin } from "../header/header.styled";
import { Link } from "react-router-dom";
import { MenuItem, Tooltip } from "@mui/material";
import { MenuIconButton, StyledMenu } from "./styled"
import { UserAvatar } from "../user-avatar";


export const AccountMenu = () => {
    const { t } = useTranslation()

    const [isAuth, setAuth] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const { user, removeUser } = useUser();

    useEffect(() => {
        if (user && user.email) {
            setAuth(true);
        } else {
            setAuth(false);
        }
    }, [user]);

    const onLogOut = () => {
        removeUser();
        location.replace(URLs.ui.entrance || URLs.baseUrl);
    }

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            {URLs.ui.entrance && !isAuth && (
                <OverlayLogin>
                    <StyledLogin>
                        <Link to={URLs.ui.entrance}>{t('header.login')}</Link>
                    </StyledLogin>
                </OverlayLogin>
            )}
            {URLs.ui.profile.on && isAuth && (
                <>
                    <Tooltip title={t('header.profile')}>
                        <MenuIconButton onClick={handleMenuOpen}>
                            <UserAvatar name={user?.name} variant="small" />
                        </MenuIconButton>
                    </Tooltip>

                    <StyledMenu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                    >
                        {URLs.ui.profile.on &&
                            <MenuItem onClick={handleMenuClose}>
                                <Link to={URLs.ui.profile.getUrl(`${user?.email}`)}>{t('header.profile')}</Link>
                            </MenuItem>
                        }
                        <MenuItem
                            onClick={() => {
                                onLogOut();
                                handleMenuClose();
                            }}
                        >
                            {t('header.logout')}
                        </MenuItem>
                    </StyledMenu>
                </>
            )}
        </>
    );
}

export default AccountMenu;