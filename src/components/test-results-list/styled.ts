import { styled, Typography } from "@mui/material";

export const ClickTypography = styled(Typography)(({ theme }) => ({
    textAlign: 'center',
    cursor: 'pointer',
    color: theme.palette.primary.main,
    fontWeight: 500,
    position: 'relative',
    display: 'inline-block',
    '&:hover::after': {
        transform: 'scaleX(1)',
        opacity: 1,
    },
    '&::after': {
        content: '""',
        position: 'absolute',
        bottom: -1,
        left: 0,
        right: 0,
        margin: 'auto',
        width: '100%',
        height: 2,
        backgroundColor: theme.palette.primary.main,
        transform: 'scaleX(0)',
        transformOrigin: 'center',
        transition: 'transform 0.3s ease, opacity 0.3s ease',
        opacity: 0,
    },
}))