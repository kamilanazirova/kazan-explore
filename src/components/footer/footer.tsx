import React from "react";

import line from '../../assets/icons/line.png'

import './footer.styled'; 
import { Body, ContactLine, Container, Head, SocialSiteLine, StyledBloc, StyledFooter } from "./footer.styled";

export function Footer() {
    return (
        <StyledFooter>
            <Container>
                <StyledBloc>
                    <Head className="tcontacts">Контактная информация</Head>
                    <ContactLine src={line} />
                    <Body className="phone">+7 999 999 99 99</Body>
                    <Body className="username1">@cityguide.ru</Body>
                </StyledBloc>
                <StyledBloc>
                    <Head className="tsocialsites">Мы в социальных сетях</Head>
                    <SocialSiteLine src={line} />
                    <Body className="username2">@cityguide</Body>
                </StyledBloc>
            </Container>
        </StyledFooter>
    );
}
