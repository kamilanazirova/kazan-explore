import React from "react";
import { useTranslation } from 'react-i18next';

import history_icon from '../assets/icons/history_icon.svg'
import collage from '../assets/history/collage.png'

import { Header } from "../components/header";
import { Title } from "../components/title";
import { Footer } from "../components/footer"
import { Wrapper } from "../global-styles";
import { ErrorBoundary } from "../components/error-boundary";
import { mainApi } from "../__data__/service/main-api";
import { HistoryList } from "../components/hostory-list";
import { ApplicationForm } from "../components/application-form";
import CultureQuiz from "../components/quize-culture/culture-quize";
import SportQuiz from "../components/quize-sport/sport-quize";


const History = () => {
    const { t } = useTranslation()

    const { data: historyText, } = mainApi.useHistoryTextQuery()
    const { data: historyList, } = mainApi.useHistoryListQuery()


    return (
        <>
            <Header />
            <Wrapper>
                <Title image={history_icon} title={t('kazan-explore.history.title')} alt="иконка культуры" />
                <h3>Проверь свои знания о Казани — пройди увлекательный тест и узнай, насколько хорошо ты знаешь этот удивительный город! </h3>
                <ErrorBoundary>
                    <SportQuiz sport={"history"}/>
                </ErrorBoundary>
                <br />
                <ErrorBoundary>
                    <div className="text">
                        <p>{historyText?.first}</p>
                    </div>
                    <div className="App">
                    <ApplicationForm />
                </div>
                </ErrorBoundary>
                <ErrorBoundary>
                    {historyList?.map((item, index) => (
                        <HistoryList
                            key={index}
                            head={item.head}
                            title={item.title}
                            content={item.content}
                        />
                    ))}
                </ErrorBoundary>
                <ErrorBoundary>
                    <h2>{historyText?.second.head}</h2>
                    <div className="text">
                        <p>{historyText?.second.body.map((body: string, index: number) => (
                            <p key={index}>{body}</p>))}
                        </p>
                    </div>
                </ErrorBoundary>
            </Wrapper>
            <img src={collage} className="collage-full-width" alt="Различные исторические фотографии татар в начиональном костюме" />
            <Footer />
        </>
    );
};

export default History;
