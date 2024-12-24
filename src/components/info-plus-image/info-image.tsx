import React from "react";

import './info-image.styled';
import { Wrapper, WrapperImage, WrapperText } from "./info-image.styled";

export const InformationImage = ({ text, image, alt}) => (
    <Wrapper>
        <WrapperText>
            {text?.map((number, index) =>
            (
                <p key={index}>{number}</p>
            ))
            }
        </WrapperText>
        <WrapperImage>
            <img src={image} alt={alt} />
        </WrapperImage>
    </Wrapper>

);
  