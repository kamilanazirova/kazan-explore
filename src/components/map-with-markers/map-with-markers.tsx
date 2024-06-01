import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

export const MapWithMarkers = () => {
    const places = [
        { coordinates: [55.797557, 49.107295], name: 'Кремль' },
        { coordinates: [55.798379, 49.105238], name: 'Мечеть Кул-Шариф' },
        { coordinates: [55.800501, 49.105184], name: 'Башня Сююмбике' },
        { coordinates: [55.795530, 49.124813], name: 'Театр оперы и балета' },
        { coordinates: [55.779967, 49.138049], name: 'Театр Кукол' },
        { coordinates: [55.794103, 49.129974], name: 'Театр им. Карима Тинчурина' }
    ];

    return (
        <div style={{ width: '1100px', height: '700px' }}>
            <YMaps>
                <Map
                    defaultState={{ center: [55.797557, 49.107295], zoom: 15 }}
                    width="100%"
                    height="100%"
                >
                    {places.map((place, index) => (
                    <Placemark key={index} geometry={place.coordinates} properties={{ hintContent: place.name }} />
                ))}
                </Map>
            </YMaps>
        </div>
    );
};