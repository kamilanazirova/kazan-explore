import React from "react";

import './info-image.styled';
import { Wrapper, WrapperImage, WrapperText } from "./info-image.styled";
import { idText } from "typescript";

export const InformationImage = ({ text, image, alt}) => (
    <Wrapper>
        <WrapperText>
            {text.map((number) =>
            (
                <p>{number}</p>
            ))
            }
        </WrapperText>
        <WrapperImage>
            <img src={image} alt={alt} />
        </WrapperImage>
    </Wrapper>

);
