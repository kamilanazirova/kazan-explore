import React from "react";
import { useTranslation } from 'react-i18next';

import line from '../../assets/icons/line.png'

import './footer.styled'; 
import { Body, ContactLine, Container, Head, SocialSiteLine, StyledBloc, StyledFooter } from "./footer.styled";


export function Footer() {
    const { t } = useTranslation()

    return (
        <StyledFooter>
            <Container>
                <StyledBloc>
                    <Head className="tcontacts">{t('footer.tcontacts')}</Head>
                    <ContactLine src={line} />
                    <Body className="phone">+7 999 999 99 99</Body>
                    <Body className="username1">@cityguide.ru</Body>
                </StyledBloc>
                <StyledBloc>
                    <Head className="tsocialsites">{t('footer.tsocialsites')}</Head>
                    <SocialSiteLine src={line} />
                    <Body className="username2">@cityguide</Body>
                </StyledBloc>
            </Container>
        </StyledFooter>
    );
}
