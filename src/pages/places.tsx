import React, { useState, useEffect } from "react";

import interesting_logo from '../assets/places/LibraryOutline.png'

import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Place } from "../components/place"
import { Wrapper } from "../global-styles";
import { Title } from "../components/title";
import { ErrorBoundary } from "../components/error-boundary";
import { MapWithMarkers } from "../components/map-with-markers";

import { URLs } from "../__data__/urls";

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
        <MapWithMarkers />
      </Wrapper>
      <Footer />
    </>
  );
};

export default Places;
