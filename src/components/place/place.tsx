import React from "react";

import { places } from "../../assets/places"

import { Container, Photo, Head, Text } from "./place.styled";

export const Place = ({  
    image, 
    head,
    text}) => (
    <Container>
        <Photo src = {places[image]}/>
        <Head>{head}</Head>
        <Text>{text}</Text>
    </Container>  
);