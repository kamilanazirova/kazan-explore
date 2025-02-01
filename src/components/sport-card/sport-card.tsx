import React from "react";

import { Link } from "../link";
import SportQuiz from "../quize-sport/sport-quize";

import { SportCardImages } from "../../assets/sport";
import line from '../../assets/sport/line.png';

import './sport-card.styled';
import { Wrapper, Text, BodyText, Images, Line, H3 } from "./sport-card.styled";
import { URLs } from "../../__data__/urls";

export const SpoortCard = ({
    sport,
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
        {type && (
            <h2><div style={{ display: 'flex', alignItems: 'center' }}>
                {type} <span style={{ margin: '0 8px' }}></span> {URLs.features.quizzes.sport && <SportQuiz sport={sport}/>}
            </div></h2>
        )}
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
