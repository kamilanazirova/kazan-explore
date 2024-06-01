import React from "react";
import { YMaps, Map, Placemark } from 'react-yandex-maps';

export const MyMap = ({  
    _image, 
    _head,
    _text}) => (
    <YMaps>
  <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '50px'}}>
    <Map defaultState={{ center: [55.797557, 49.107295], zoom: 9 }} style={{ width: '800px', height: '600px' }}>
      <Placemark geometry={[55.797557, 49.107295]} />
    </Map>
  </div>
</YMaps>
);