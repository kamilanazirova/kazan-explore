import { Avatar, styled } from "@mui/material";

export const StyledAvatar = styled(Avatar)(({ theme }) => ({
    border: `1px solid ${theme.palette.primary.light}`,
    backgroundColor: theme.palette.primary.main,
    variants: [
        {
            props: {
                variant: 'small',
            },
            style: {
                width: theme.spacing(4),
                height: theme.spacing(4),
                fontSize: theme.spacing(2),
                backgroundColor: theme.palette.primary.dark
            },
        },
        {
            props: {
                variant: 'medium',
            },
            style: {
                width: theme.spacing(7),
                height: theme.spacing(7),
                fontSize: theme.spacing(3.5),
                backgroundColor: theme.palette.primary.dark
            },
        },
        {
            props: {
                variant: 'large',
            },
            style: {
                width: theme.spacing(9),
                height: theme.spacing(9),
                fontSize: theme.spacing(4.5),
                backgroundColor: theme.palette.primary.dark
            },
        },
    ],

}));