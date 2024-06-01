// src/YandexMap.js
import React from 'react';
import { YMaps, Map, RoutePanel } from 'react-yandex-maps';
import { MapWrapper } from './ymaps.styled';

const center = [55.797557, 49.107295];
const api = '6dd153f0-0ff6-4bf8-958b-36727c8743ef';

const YandexMap = () => {
  return (
    <YMaps query={{ apikey: api }}>
        <MapWrapper>
        <Map
          defaultState={{ center, zoom: 12 }}
          width="100%"
          height="100%"
        >
          <RoutePanel
            options={{ float: 'right' }}
            defaultRoute={{ from: '', to: '' }}
            instanceRef={(ref) => {
              if (ref) {
                ref.routePanel.state.set({
                  fromEnabled: true,
                  from: '',
                  to: '',
                });
                ref.routePanel.options.set({
                  types: { auto: true, masstransit: true },
                });
              }
            }}
          />
        </Map>
        </MapWrapper>
    </YMaps>
  );
};

export default YandexMap;
