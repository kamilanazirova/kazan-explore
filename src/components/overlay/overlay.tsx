import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';

import './overlay.styled';

import like from '../../assets/first/like.png'
import { StyledOverlay, Icon, Head, Body, Button1, Button2 } from "./overlay.styled";
import { Link } from "../link";
import { mainApi } from "../../__data__/service/main-api";
import { useLanguage } from "../../context/language-context"

export function Overlay() {
    
    const { t, i18n } = useTranslation()
    const { data: infoFirstData } = mainApi.useInfoFirstDataQuery();
    const [localizedData, setLocalizedData] = useState(infoFirstData);
    // Слушаем изменения языка
    useEffect(() => {
        const fetchLocalizedData = async () => {
            const response = await fetch(`/stubs/json/first/info-about-kazan/${i18n.language}/success.json`);
            const data = await response.json();
            setLocalizedData(data);
        };

        fetchLocalizedData();
    }, [i18n.language]); // Перезагрузка данных при смене языка

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


