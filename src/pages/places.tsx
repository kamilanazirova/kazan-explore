import React, { useState, useEffect } from "react";

import interesting_logo from '../assets/places/LibraryOutline.png'
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Place } from "../components/place"
import { Wrapper } from "../global-styles";
import { Title } from "../components/title";
import { ErrorBoundary } from "../components/error-boundary";
import { URLs } from "../__data__/urls";
import { MapWithMarkers } from "../components/map-with-markers";
import { ReviewModal } from "../components/review";

const Places = () => {
  const [placesData, setPlacesData] = useState([])
    useEffect(() => {
        fetch(`${URLs.api.main}/getPlacesData`).then((response) => response.json()).then((data) => setPlacesData(data))
    }, []);
  return (
    <>
      <Header />
      <Wrapper>
        <Title image={interesting_logo} title="Интересные места" alt="interesting logo" />
        <h3>Ежегодно Казань посещает более 2 млн туристов,
          которые стремятся увидеть самые интересные места города. Сейчас мы расскажем о них.</h3>
        <ErrorBoundary>
          {placesData.map((item, index) => (
            <Place key={index}
              type={item.type}
              head={item.head}
              text={item.text}
              image={item.image}
              componentKey={item.id}
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
