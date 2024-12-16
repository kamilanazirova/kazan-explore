import { styled, Typography } from "@mui/material";

export const ResultsLabel = styled(Typography)(({ theme }) => ({
    ...theme.typography.h6,
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(0)
}));