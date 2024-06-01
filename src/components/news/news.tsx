import React from "react";

import { newsimg } from "../../assets/first/news"

import { Container, Photo, Title, Text, Info } from "./news.styled";

export const News = ({  
    image, 
    title,
    text}) => (
  <Container>
    <Photo src={newsimg[image]}/>
    <Info>
    <Title>{title}</Title>
    <Text>{text}</Text>
    </Info>
  </Container>
);
