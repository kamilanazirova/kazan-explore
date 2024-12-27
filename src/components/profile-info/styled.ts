import { styled, Box, Typography } from "@mui/material";

export const UserInfoBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    borderRadius: 8,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[1],
    '&:hover': {
        boxShadow: theme.shadows[3],
    },
}));

export const InfoTextBox = styled(Box)(({ theme }) => ({
    marginLeft: theme.spacing(2),
}));

export const InfoTitle = styled(Typography)(({ theme }) => ({
    marginTop: theme.spacing(0.5),
    display: 'flex',
    alignItems: 'center',
    fontWeight: 700,
    color: theme.palette.text.primary,
    flexWrap: 'wrap',
}));

export const StyledEmail = styled(Typography)(({ theme }) => ({
    marginLeft: theme.spacing(1),
    fontStyle: 'italic',
    color: theme.palette.text.secondary,
}));

export const InfoLabel = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.secondary,
    variant: 'body2',
    flexWrap: 'wrap',
}));