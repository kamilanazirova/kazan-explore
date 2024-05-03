import React from "react";

import { Link } from "../link";

import { SportCardImages } from "../../assets/sport";
import line from '../../assets/sport/line.png';

import './sport-card.styled';
import { Wrapper, Text, BodyText, Images, Line, H3 } from "./sport-card.styled";

export const SpoortCard = ({ 
    type, 
    title, 
    text, 
    logo, 
    image, 
    logo_alt, 
    img_alt, 
    link 
}) => (
    <>
        {type && (<h2>{type}</h2>)}
        <Wrapper>
            <Text>
                <H3><Link href={link}>{title}</Link></H3>
                <BodyText>{text}</BodyText>
            </Text>
            <Images>
                <img src={SportCardImages[logo]} alt={logo_alt} />
                <Line src={line} />
                <img src={SportCardImages[image]} alt={img_alt} />
            </Images>
        </Wrapper>
    </>
);
