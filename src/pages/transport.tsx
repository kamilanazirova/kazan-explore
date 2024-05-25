import React from "react";

import transport_icon from '../assets/icons/transport_icon.svg'
import bus from '../assets/transport/bus.png'
import map from '../assets/transport/map.png'
import bus_numbers from '../__stubs__/transport/bus-numbers.json'
import tral_numbers from '../__stubs__/transport/tral-numbers.json'
import info from '../__stubs__/transport/info-about-page.json'

import { Header } from "../components/header";
import { Title } from "../components/title";
import { Footer } from "../components/footer";
import { Button } from "../components/transport-components/button";
import { Map } from "../components/transport-components/map";
import { InformationImage } from "../components/info-plus-image/info-image";
import { Wrapper } from "../global-styles";

const Transport = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <Title
          image={transport_icon}
          title="Транспорт и инфраструктура" 
          alt="иконка транспорт" />
        <InformationImage
          text={info}
          image={bus}
          alt="Фотография автобуса изнутри"
        />

        <h2>Нажмите на интересующий маршрут, чтобы увидеть его схему движения</h2>
        <Button type="Автобусы" numbers={bus_numbers} />
        <Button type="Троллейбусы" numbers={tral_numbers} />
        <Map image={map} />
      </Wrapper>
      <Footer />
    </>
  );
};

export default Transport;
