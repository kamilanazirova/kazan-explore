import React, { useEffect, useState } from "react";

import transport_icon from '../../assets/icons/transport_icon.svg'
import bus from '../../assets/transport/bus.png'

import { Wrapper } from "../global-styles";
import { Header } from "../components/header";
import { Title } from "../components/title";
import { Footer } from "../components/footer";
import { Button } from "../components/transport-components/button";
import { InformationImage } from "../components/info-plus-image/info-image";
import { ErrorBoundary } from "../components/error-boundary";
import YandexMap from "../components/yandex-map/yandex-map";
import { URLs } from "../__data__/urls";
import { Events } from "../components/transport-components/events";
import { TableEvents } from "../components/transport-components/events/events.styled";

const Transport = () => {
  const [busNumbers, setBusNumbers] = useState([])
  useEffect(() => {
    fetch(`${URLs.api.main}/getBus`).then((response) => response.json()).then((data) => setBusNumbers(data))
  }, [])

  const [tral, setTral] = useState([])
  useEffect(() => {
    fetch(`${URLs.api.main}/getTral`).then((response) => response.json()).then((data) => setTral(data))
  }, [])

  const [info, setInfo] = useState([])
  useEffect(() => {
    fetch(`${URLs.api.main}/getInfoAboutTransportPage`).then((response) => response.json()).then((data) => setInfo(data))
  }, [])

  const [event, setEvent] = useState([])
  useEffect(() => {
    fetch(`${URLs.api.main}/getEvents`).then((response) => response.json()).then((data) => setEvent(data))
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
            <h2>Нажмите на интересующий маршрут, чтобы увидеть его схему движения</h2>
            <Button type="Автобусы" numbers={busNumbers} />
            <Button type="Троллейбусы" numbers={tral} />
          </ErrorBoundary>
          <ErrorBoundary>
            <YandexMap />
          </ErrorBoundary>
        </ErrorBoundary>

        <h1>Календарь культурных и общественных событий</h1>
        <TableEvents>
            <tr>
                <td width="350">Название</td>
                <td width="500">Описание</td>
                <td width="350">Место проведения</td>
            </tr>
        </TableEvents>
        {event.map((item, index) => (
          <Events key={index}
            month={item.month}
            name={item.name}
            body={item.body}
            place={item.place}
          >
          </Events>
        ))}
      </Wrapper>
      <Footer />
    </>
  );
};

export default Transport;
