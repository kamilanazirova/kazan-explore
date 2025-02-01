import React from "react";
import { Box, Drawer, List, ListItem, Link as MuiLink } from "@mui/material";
import { useTranslation } from "react-i18next";
import { ClickTypography } from '../test-results-list/styled';


type NavItem = {
    key: string;
    href: string;
};

type Nav = Record<string, NavItem>;

type StyledDrawerProps = {
    drawerOpen: boolean;
    toggleDrawer: (open: boolean) => void;
    nav: Nav;
};

const NavigationDrawer = ({ drawerOpen, toggleDrawer, nav }: StyledDrawerProps) => {
    const { t } = useTranslation();

    return (
        <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={() => toggleDrawer(false)}
            sx={{
                "& .MuiDrawer-paper": {
                    width: 300,
                    bgcolor: "#121212",
                    color: "#ffffff",
                },
            }}
        >
            <List>
                {Object.values(nav).map(({ key, href }) => (
                    (href) && <MuiLink
                        key={key}
                        href={href}
                        sx={{
                            color: "inherit",
                            "&:hover": {
                                color: "#90caf9",
                            },
                        }}
                    >
                        <ClickTypography
                            sx={{
                                width: "100%",
                                padding: "10px 0px",
                                color: "white",
                                borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                                "&:hover": {
                                    bgcolor: "rgba(255, 255, 255, 0.1)",
                                },
                            }}
                        >
                            {t(key)}
                        </ClickTypography>
                    </MuiLink>
                ))}
            </List>
            <Box onClick={() => toggleDrawer(false)} sx ={{width: "100%", height: "100%"}}/>
        </Drawer>
    );
};

export default NavigationDrawer;
