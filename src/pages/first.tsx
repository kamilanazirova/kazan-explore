import React, { useEffect } from "react";

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
              <p className="about-video">Фото, снятое с высоты птичьего полета над Казанью представляет захватывающий панорамный обзор города, раскрывая его красоту и архитектурное многообразие.</p>
            </div>
            <Weather />
          </div>
        </section>
        <section className="news">
          <p className="tnews">Новости в Казани</p>
          {newsList?.map((item, index) => (
            <News key={index}
              image={item.image}
              title={item.title}
              text={item.text}
            >
            </News>
          ))}
        </section>
      </Wrapper>
      <Footer />
    </>
  );
};

export default first;
