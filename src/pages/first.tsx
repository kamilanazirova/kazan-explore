import React, { useEffect, useState } from "react";

import kazan from '../assets/first/kazan.webp';
import kazann from '../assets/first/kazann.png'


import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Overlay } from "../components/overlay";
import { Weather } from "../components/weather";
import { News } from "../components/news";
import { Wrapper } from "../global-styles";
import { URLs } from "../__data__/urls";

const first = () => {

  const [news, setNews] = useState([])
    useEffect(() => {
        fetch(`${URLs.api.main}/getNews`).then((response) => response.json()).then((data) => setNews(data))
    }, [])

  return (
    <>
      <Header/>
      <Wrapper>
        <section className="headline">
          <div className="headline-img">
            <img src={kazan} alt="Казань" className="headline-image" />
          </div>
          <Overlay/>
        </section>
        <section className="information">
          <div className="info">
            <div className="video">
            <img src={kazann} alt="Казань с высоты птичьего полёта" className="kazan-video" />
              <p className="about-video">Фото, снятое с высоты птичьего полета над Казанью представляет захватывающий панорамный обзор города, раскрывая его красоту и архитектурное многообразие.</p>
            </div>
            <Weather/>
          </div>
        </section>
        <section className="news">
          <p className="tnews">Новости в Казани</p>
          {news.map((item, index) => (
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
