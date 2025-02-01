import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import interesting_logo from "../assets/places/LibraryOutline.png";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Place } from "../components/place";
import { Wrapper } from "../global-styles";
import { Title } from "../components/title";
import { ErrorBoundary } from "../components/error-boundary";
import { MapWithMarkers } from "../components/map-with-markers";
import { mainApi } from "../__data__/service/main-api";
import { SearchBar } from "../components/search-bar"; 

const Places = () => {
  const { data: placesList } = mainApi.usePlacesListQuery();
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState(""); 

  const filteredPlaces =
    placesList?.filter((item) => {
      return (
        item.head.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.text.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }) || [];

  return (
    <>
      <Header />
      <Wrapper>
        <Title image={interesting_logo} title={t("kazan-explore.places.title")} alt="interesting logo" />
        <h3>{t("kazan-explore.places.info")}</h3>

        {}
        <SearchBar value={searchQuery} onChange={setSearchQuery} />

        <ErrorBoundary>
          {filteredPlaces.length > 0 ? (
            filteredPlaces.map((item, index) => (
              <Place
                key={index}
                type={item.type}
                head={item.head}
                text={item.text}
                image={item.image}
                componentKey={item.id}
              />
            ))
          ) : (
            <p style={{ textAlign: "center", color: "gray" }}>
              {t("kazan-explore.places.noResults", "Ничего не найдено.")}
            </p>
          )}
        </ErrorBoundary>

        <MapWithMarkers />
      </Wrapper>
      <Footer />
    </>
  );
};

export default Places;
