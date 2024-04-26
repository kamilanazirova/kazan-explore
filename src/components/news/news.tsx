import React from "react";

import { newsimg } from "../../assets/news"
import { Link } from "../link";

import { Container, Photo } from "./news.styled";

export const News = ({  
    image, 
    link,
    text}) => (
  <Container>

    <Photo src={newsimg[image]}/>
    <Link href={link}>{text}</Link>
  </Container>
);
