import React from "react";
import { useTranslation } from 'react-i18next';

import interesting_logo from '../assets/places/LibraryOutline.png'
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Place } from "../components/place"
import { Wrapper } from "../global-styles";
import { Title } from "../components/title";
import { ErrorBoundary } from "../components/error-boundary";
import { MapWithMarkers } from "../components/map-with-markers";
import { mainApi } from "../__data__/service/main-api";

const Places = () => {
  const { data: placesList } = mainApi.usePlacesListQuery();
  const { t } = useTranslation()

  return (
    <>
      <Header />
      <Wrapper>
        <Title image={interesting_logo} title={t('places.title')} alt="interesting logo" />
        <h3>{t('places.info')}</h3>
        <ErrorBoundary>
          {placesList?.map((item, index) => (
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
