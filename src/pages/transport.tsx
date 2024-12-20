import React, { useEffect, useState } from "react";

import transport_icon from '../assets/icons/transport_icon.svg'
import bus from '../assets/transport/bus.png'

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
import { TableEvents, Table, Th  } from "../components/transport-components/events/events.styled";
import { Schedule } from "../components/transport-components/schedule";
import { mainApi } from "../__data__/service/main-api";

const Transport = () => {
  const currentLocation = location.pathname.split('/').pop();

  const [busNumbers, setBusNumbers] = useState([]);
  const [tralNumbers, setTralNumbers] = useState([]);
  const [schedule, setSchedule] = useState([]);
  const [info, setInfo] = useState([]);
  const [event, setEvent] = useState([]);
  const [selectedBus, setSelectedBus] = useState(null);
  const { isFetching, isLoading, data: busData, error } = mainApi.useBusDataQuery()

  useEffect(() => {
    // fetch(`${URLs.api.main}/getBus`).then((response) => response.json()).then((data) => setBusNumbers(data));
    fetch(`${URLs.api.main}/getTral`).then((response) => response.json()).then((data) => setTralNumbers(data));
    fetch(`${URLs.api.main}//getTripSchedule`).then((response) => response.json()).then((data) => setSchedule(data))
    fetch(`${URLs.api.main}/getInfoAboutTransportPage`).then((response) => response.json()).then((data) => setInfo(data))
    fetch(`${URLs.api.main}/getEvents`).then((response) => response.json()).then((data) => setEvent(data))
  }, []);

  const handleBusClick = (busNumber) => {
    setSelectedBus(busNumber);
  };

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
            <h2>Нажмите на интересующий маршрут, чтобы увидеть его расписание</h2>
            <Button onBusClick={handleBusClick} type="Автобусы" numbers={busData} />
            <ErrorBoundary>
              {selectedBus && (
                <>
                  {schedule
                    .filter(item => item.id == selectedBus)
                    .map((item, index) => (
                      <Schedule key={index}
                        id={item.id}
                        from={item.from}
                        to={item.to}
                        route_length={item.route_length}
                        operating_mode_weekdays={item.operating_mode_weekdays}
                        operating_mode_weekend={item.operating_mode_weekend}
                      />
                    ))}
                </>
              )}
            </ErrorBoundary>
            {/* <Button onBusClick={handleBusClick} type="Троллейбусы" numbers={tralNumbers} /> */}
          </ErrorBoundary>

          <ErrorBoundary>
            <YandexMap />
          </ErrorBoundary>

        </ErrorBoundary>

        <h1>Календарь культурных и общественных событий</h1>
        <Table>
          <thead>
            <tr>
              <Th>Название</Th>
              <Th>Описание</Th>
              <Th>Место проведения</Th>
            </tr>
          </thead>
        </Table>
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
