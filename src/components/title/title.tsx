import React from "react";

import './title.styled';
import { StyledImage, StyledTitle } from "./title.styled";

export const Title = ({ image, title, alt }) => (
    <StyledTitle>
        <StyledImage src={image} alt={alt} />
        {title}
    </StyledTitle>
);
