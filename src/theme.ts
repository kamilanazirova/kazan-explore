import { createTheme } from "@mui/material";

const kazanTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: "10px 20px",
          textTransform: "none",
          transition: "background-color 0.3s ease",
        },
        containedPrimary: {
          boxShadow: "0px 3px 8px rgba(123, 97, 255, 0.3)",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          transition: "transform 0.2s ease-in-out",
          "&:hover": {
            transform: "scale(1.03)",
          },
        },
      },
    },
  },
});

export default kazanTheme;