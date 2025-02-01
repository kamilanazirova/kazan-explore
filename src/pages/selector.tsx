import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { useTranslation } from 'react-i18next';

//import interesting_logo from '../assets/places/LibraryOutline.png'
import gpt_logo from '../assets/icons/gpt-tiny-logo.png'

import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Wrapper } from "../global-styles";
import { Title } from "../components/title";
import { ErrorBoundary } from "../components/error-boundary";
import { MapWithMarkers } from "../components/map-with-markers";
import { mainApi } from "../__data__/service/main-api";
import { Place } from "../components/place";
import YandexMap from "../components/yandex-map/yandex-map";
//import { t } from "i18next";

// Styled components
const PageContainer = styled.div`
  background-color: #0f0f0f;
  color: white;
  font-family: Arial, sans-serif;
  padding: 20px;
  min-height: 100vh;
`;

const Description = styled.p`
  font-size: 1.3rem;
  line-height: 1.5;
  margin-bottom: 20px;  
`;

const InputSection = styled.div`
  background-color: #e8e8e8;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  text-align: center;
  color: black;
  display: flex;
  flex-direction: column;  /* Размещаем элементы вертикально */
  align-items: center; /* Центрируем содержимое */
  gap: 10px; /* Добавляем небольшой отступ между элементами */
`;

const Input = styled.textarea`
  width: 100%;
  height: 100px;
  font-size: 1rem;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
  resize: none;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  color: white;
  background-color: #35c7ad;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #2aa890;
  }
`;

const MapSection = styled.section`
  margin-top: 20px;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const Card = styled.div`
  background-color: #2b2b2b;
  color: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const InputField = styled.textarea`
  width: 100%;
  height: 80px;
  font-size: 2rem;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: none;
  text-align: left;
  vertical-align: top;
  overflow-y: auto;
  
`;

export const SubmitButton = styled.button`
  margin-top: 16px;
  padding: 12px 24px;
  font-size: 18px;
  background-color: #ffcc00; /* Жёлтая кнопка, ближе к дизайну */
  color: black;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: #e6b800; /* Чуть темнее при наведении */
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;
  margin-right: 150px;
`;

// Component
const Selector = () => {
  const { data: placesList } = mainApi.usePlacesListQuery();
  const [query, setQuery] = useState("");
  const [cards, setCards] = useState([]);
  const { t } = useTranslation()

  const handleSearch = () => {
    
    if (!query.trim()) {
      alert("Поле запроса не должно быть пустым!");
      return;
    }

    // Заглушка: Добавление фиктивных карточек
    setCards([
      { id: 1, title: "Кремль Казани", description: "Описание места 1" },
      { id: 2, title: "Музей Чак-Чака", description: "Описание места 2" },
      { id: 3, title: "Центр семьи 'Казан'", description: "Описание места 3" },
    ]);
  };

  return (
    <PageContainer>
      <Header />
      <Wrapper>
      <Title image={gpt_logo} 
            title={t('selector.title')} 
            alt="Иконка подборщика" />
      <h3>{t('selector.info')}</h3>
      {/* <Description>
        Ежегодно Казань посещает более 2 млн туристов, которые стремятся увидеть
        самые интересные места города. <br></br>
        Если вы ещё не определились, куда пойти, то наш подборщик вам в этом поможет.
      </Description> */}
      <FormWrapper>
      <InputSection>
        <p>
          В поле ниже введите свои предпочтения, интересы или задайте вопрос <br></br> 
          в свободном стиле, а наш подборщик на их основе  <br></br>
          порекомендует Вам, куда всё-таки стоит сходить
        </p>
        <InputField 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ваши предпочтения"
        />
        <SubmitButton onClick={handleSearch}>Подобрать места</SubmitButton>
      </InputSection>
      <MapWithMarkers width="1000px"/>
      </FormWrapper>
      {cards.length > 0 && (
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
      )}
      

      </Wrapper>
      <Footer />
    </PageContainer>
  );
};

export default Selector;
