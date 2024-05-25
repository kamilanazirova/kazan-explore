import React from "react";

import kazan from '../assets/kazan.webp'

import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Overlay } from "../components/overlay";
import { Weather } from "../components/weather";
import { News } from "../components/news";

const first = () => {
  return (
    <>
      <Header/>
      <main className="main">
        <section className="headline">
          <div className="headline-img">
            <img src={kazan} alt="Казань" className="headline-image" />
          </div>
          <Overlay/>
        </section>
        <section className="information">
          <div className="info">
            <div className="video">
              <video controls className="kazan-video">Казань с высоты птичьего полета</video>
              <p className="about-video">Видео, снятое с высоты птичьего полета над Казанью представляет захватывающий панорамный обзор города, раскрывая его красоту и архитектурное многообразие.</p>
            </div>
            <Weather/>
          </div>
        </section>
        <section className="news">
          <p className="tnews">Новости в Казани</p>
          <News
            image="new1"
            link="https://realty.ria.ru/20240305/apartamenty-1931291477.html"
            text="На фабрике Алафузова в Казани построят культурный центр и апартаменты "
          />
          <News
            image="new2"
            link="https://realty.ria.ru/20240305/apartamenty-1931291477.html"
            text="Автомобили разыграют в Татарстане среди проголосовавших на выборах "
          />
          <News
            image="new3"
            link="https://realty.ria.ru/20240305/apartamenty-1931291477.html"
            text="Казань закрыла Игры будущего "
          />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default first;
