import React, { useState } from "react";

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

import { Events } from "../components/transport-components/events";
import { Table, Th  } from "../components/transport-components/events/events.styled";
import { Schedule } from "../components/transport-components/schedule";
import { mainApi } from "../__data__/service/main-api";

const Transport = () => {

  const [selectedBus, setSelectedBus] = useState(null);
  const { data: busData } = mainApi.useBusDataQuery()
  const { data: tripScheduleData } = mainApi.useTripScheduleDataQuery()
  const { data: eventsData } = mainApi.useEventsDataQuery()
  const { data: infoTransportData } = mainApi.useInfoTransportDataQuery()

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
              text={infoTransportData}
              image={bus}
              alt="Фотография автобуса изнутри"
            />}
            <h2>Нажмите на интересующий маршрут, чтобы увидеть его расписание</h2>
            <Button onBusClick={handleBusClick} type="Автобусы" numbers={busData} />
            <ErrorBoundary>
              {selectedBus && (
                <>
                  {tripScheduleData
                    .filter(item => item.id == selectedBus)
                    ?.map((item, index) => (
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
        {eventsData?.map((item, index) => (
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
