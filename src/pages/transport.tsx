import React, { useEffect, useState } from "react";

import transport_icon from '../assets/icons/transport_icon.svg'
import bus from '../assets/transport/bus.png'

import { Header } from "../components/header";
import { Title } from "../components/title";
import { Footer } from "../components/footer";
import { Button } from "../components/transport-components/button";
import { InformationImage } from "../components/info-plus-image/info-image";
import { Wrapper } from "../global-styles";
import { ErrorBoundary } from "../components/error-boundary";
import YandexMap from "../components/yandex-map/yandex-map";

const Transport = () => {
  const [busNumbers, setBusNumbers] = useState()
  useEffect(() => {
    fetch('/api/getBus').then((response) => response.json()).then((data) => setBusNumbers(data))
  }, [])

  const [tral, setTral] = useState()
  useEffect(() => {
    fetch('/api/getTral').then((response) => response.json()).then((data) => setTral(data))
  }, [])

  const [info, setInfo] = useState()
  useEffect(() => {
    fetch('/api/getInfoAboutTransportPage').then((response) => response.json()).then((data) => setInfo(data))
  }, [])

  return (
    <>
      <Header />
      <Wrapper>
        <ErrorBoundary>

          {<Title
            image={transport_icon}
            title="Транспорт и инфраструктура"
            alt="иконка транспорт" />}
          <ErrorBoundary>
            {<InformationImage
              text={info}
              image={bus}
              alt="Фотография автобуса изнутри"
            />}
          </ErrorBoundary>
          <ErrorBoundary>
            <h2>Нажмите на интересующий маршрут, чтобы увидеть его схему движения</h2>
            <Button type="Автобусы" numbers={busNumbers} />
            <Button type="Троллейбусы" numbers={tral} />
          </ErrorBoundary>
          <YandexMap />
        </ErrorBoundary>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Transport;
