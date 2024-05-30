import React from "react";

import { education } from "../../assets/education"

import { Container, Photo, Head, Text } from "./card-education.styled";

export const EducationCard = ({  
    image, 
    head,
    text}) => (
    <Container>
        <Head>{head}</Head>
        <Text>{text}</Text>
        <Photo src = {education[image]}/>
    </Container>  
);