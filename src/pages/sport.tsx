import React from "react";
import { useTranslation } from 'react-i18next';

import sport_icon from '../assets/icons/sport_icon.svg'
import sport_arenas from '../assets/sport/sport_arenas.png'

import { Header } from "../components/header";
import { Title } from "../components/title";
import { SpoortCard } from "../components/sport-card";
import { Footer } from "../components/footer"
import { Wrapper } from "../global-styles";
import { ErrorBoundary } from "../components/error-boundary";
import { mainApi } from "../__data__/service/main-api";

const Sport = () => {
    const { t } = useTranslation()

    const { data: sportsList } = mainApi.useSportsListQuery()
    const { data: sportSecondTextData } = mainApi.useSportSecondTextDataQuery()

    const { data: sportFirstTextData, isLoading, error } = mainApi.useSportFirstTextDataQuery();

    if (isLoading) return <p>Loading...</p>;
    if (error || !sportFirstTextData) return <p>Error loading data or no data available.</p>;

    return (
        <>
            <Header />
            <Wrapper>
                <Title image={sport_icon} title={t('sport.title')} alt="спортивная иконка" />
                <ErrorBoundary>
                    <div className="text">
                        <h2>{sportFirstTextData.title}</h2>
                        <div className="descriptions">
                            {sportFirstTextData?.descriptions.map((description: string, index: number) => (
                                <p key={index}>{description}</p>
                            ))}
                        </div>
                    </div>
                    <h1> {t('sport.list_title')} </h1>
                    <ErrorBoundary>
                        {sportsList?.map((item, index) => (
                            <SpoortCard key={index}
                                type={item.type}
                                title={item.title}
                                text={item.text}
                                logo={item.logo}
                                logo_alt={item.logo_alt}
                                image={item.image}
                                img_alt={item.img_alt}
                                link={item.link}
                            >
                            </SpoortCard>
                        ))}
                    </ErrorBoundary>
                    <div className="text">
                        <div className="descriptions">
                            {sportSecondTextData?.descriptions.map((description: string, index: number) => (
                                <p key={index}>{description}</p>
                            ))}
                        </div>
                    </div>
                </ErrorBoundary>
            </Wrapper>
            <img src={sport_arenas} className="collage-full-width" alt="Фоторгафия различных спортивных арен Казани" />
            <Footer />
        </>
    );
};

export default Sport;
