import React, { useEffect } from 'react';
import { YMaps, Map, Placemark, RouteButton } from 'react-yandex-maps';

const YandexMap: React.FC = () => {
  return (
    <YMaps>
      <div style={{ width: '100%', height: '400px' }}>
        <Map defaultState={{ center: [55.751574, 37.573856], zoom: 9 }} width="100%" height="400px">
          <Placemark geometry={[55.751574, 37.573856]} properties={{ iconContent: 'Start' }} options={{ draggable: true }} />
          <Placemark geometry={[55.751574, 37.573856]} properties={{ iconContent: 'End' }} options={{ draggable: true }} />
          <RouteButton options={{ float: 'right' }} />
        </Map>
      </div>
    </YMaps>
  );
};

export default YandexMap;
