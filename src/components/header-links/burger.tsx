import React from "react";
import { Box } from "@mui/material";

const BuggerLine = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: 4,
        bgcolor: "white",
        borderRadius: 1,
      }}
    />
  );
}

const Burger = ({ onClick }) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: 24,
        height: 18,
        cursor: "pointer",
      }}
    >
      <BuggerLine/>
      <BuggerLine/>
      <BuggerLine/>
    </Box>
  );
};

export default Burger;
