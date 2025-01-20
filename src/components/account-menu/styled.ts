import { styled, alpha, IconButton, Menu } from "@mui/material"

export const MenuIconButton = styled(IconButton)(({ theme }) => ({
    padding: 0,
    transition: 'box-shadow 0.2s ease-out',
    '&:hover, &.Mui-focusVisible': {
        boxShadow: `0px 0px 0px 5px ${alpha("#ffffff", 0.16)}`,
    },
}));

export const StyledMenu = styled(Menu)(({ theme }) => ({
    '& .MuiPaper-root': {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        color: theme.palette.common.white,
        backdropFilter: 'blur(8px)',
    },
}));