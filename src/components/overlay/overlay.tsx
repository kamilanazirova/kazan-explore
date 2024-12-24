import React from "react";
import { useTranslation } from 'react-i18next';

import './overlay.styled';

import like from '../../assets/first/like.png'
import { StyledOverlay, Icon, Head, Body, Button1, Button2 } from "./overlay.styled";
import { Link } from "../link";
import { mainApi } from "../../__data__/service/main-api";

export function Overlay() {
    
    const { t } = useTranslation()
    const { data: infoFirstData } = mainApi.useInfoFirstDataQuery();
 
    return (
        <StyledOverlay>
            <Icon className='like' src={like} alt="Поставить лайк городу Казань" />
            <Head className="title">Explore Kazan</Head>
            <Body className="text-about-kazan">{infoFirstData?.description}</Body>
            <Button1>
                <Link href="https://2chak.ru/">{t('main.chakchak')}</Link>
            </Button1>
            <Button2>
                <Link href="https://tubatay.com/">{t('main.uchpuchmak')}</Link>
            </Button2>
        </StyledOverlay>
    )
}
