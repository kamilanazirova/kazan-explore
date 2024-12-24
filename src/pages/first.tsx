import React, { useEffect } from "react";
import { useTranslation } from 'react-i18next';

import kazan from '../assets/first/kazan.webp';
import kazann from '../assets/first/kazann.png'

import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Overlay } from "../components/overlay";
import { Weather } from "../components/weather";
import { News } from "../components/news";
import { Wrapper } from "../global-styles";
import { mainApi } from "../__data__/service/main-api";

const first = () => {
  const { t } = useTranslation()

  const { isFetching, isLoading, data: newsList, error } = mainApi.useNewsListQuery()
  useEffect(() =>
    console.log(newsList), [newsList])

  return (
    <>
      <Header />
      <Wrapper>
        <section className="headline">
          <div className="headline-img">
            <img src={kazan} alt="Казань" className="headline-image" />
          </div>
          <Overlay />
        </section>
        <section className="information">
          <div className="info">
            <div className="video">
              <img src={kazann} alt="Казань с высоты птичьего полёта" className="kazan-video" />
              <p className="about-video">{t('main.under_video')}</p>
            </div>
            <Weather />
          </div>
        </section>
        <section className="news">
          <p className="tnews">{t('news.title')}</p> {/* Заголовок локализован через i18n */}
          {newsList?.map((item, index) => (
            <News
              key={index}
              image={item.image}
              title={item.title} 
              text={item.text}
            />
          ))}
        </section>
      </Wrapper>
      <Footer />
    </>
  );
};

export default first;
