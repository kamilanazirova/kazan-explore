import React, { useState, useEffect } from "react";

import interesting_logo from '../assets/places/LibraryOutline.png'
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Place } from "../components/place"
import { Wrapper } from "../global-styles";
import { Title } from "../components/title";
import { ErrorBoundary } from "../components/error-boundary";
import { URLs } from "../__data__/urls";
import YandexMap from "../components/yandex-map/yandex-map";
import { MapWithMarkers } from "../components/map-with-markers";

/* import { YMaps, Map, Placemark } from 'react-yandex-maps';
 */

const Places = () => {

  const [placesData, setPlacesData] = useState([])
    useEffect(() => {
        fetch(`${URLs.api.main}/getPlacesData`).then((response) => response.json()).then((data) => setPlacesData(data))
    }, [])

  return (
    <>
      <Header />
      <Wrapper>
        <Title image={interesting_logo} title="Интересные места" alt="interesting logo" />
        <p className="main-text">Ежегодно Казань посещает более 2 млн туристов,
          которые стремятся увидеть самые интересные места города. Сейчас мы расскажем о них.</p>
        <ErrorBoundary>
          {placesData.map((item, index) => (
            <Place key={index}
              type={item.type}
              head={item.head}
              text={item.text}
              image={item.image}
            >
            </Place>
          ))}
        </ErrorBoundary>
        
{/*         <YMaps>
          <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '50px' }}>
            <Map defaultState={{ center: [55.797557, 49.107295], zoom: 9 }} style={{ width: '800px', height: '600px' }}>
              <Placemark geometry={[55.797557, 49.107295]} />
            </Map>
          </div>
        </YMaps> */}
      <MapWithMarkers />
      </Wrapper>
      <Footer />
    </>
  );
};

export default Places;
