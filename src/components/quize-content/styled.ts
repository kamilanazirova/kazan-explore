import { SxProps } from "@mui/material";
import { CSSProperties } from "react";

export const introContainer: CSSProperties = {
    textAlign: "center", 
};
export const introTypography = {
    fontFamily: "Cursive, Arial, sans-serif",
    fontWeight: "bold",
    fontSize: "32px",
};

export const introImageStyle: CSSProperties = {
    width: "90%",
    borderRadius: "40px", 
    margin: "20px 0",
};

export const quizImageStyle: CSSProperties = {
    width: "60%",
    borderRadius: "30px", 
    margin: "40px 0 10px 20px", 
};

export const startButtonStyle = {
    backgroundColor: "#006400", 
    "&:hover": {
        backgroundColor: "#004d00", 
    },
    display: "block",
    margin: "20px auto", 
    padding: "10px 20px", 
};

export const nextButtonStyle = {
    backgroundColor: "#006400", 
    "&:hover": {
        backgroundColor: "#004d00",
    },
    padding: "10px 20px", 
    display: "block", 
    margin: "10px auto",
};

export const radioGroup = {
    padding: "85px 0 0 40px",
    "& .Mui-checked": {
        color: "#006400", 
    },
}

export const progress = {
    color: "grey", 
}
