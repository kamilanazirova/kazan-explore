import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { useTranslation } from 'react-i18next';

import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Wrapper } from "../global-styles";
import { Title } from "../components/title";
import { ErrorBoundary } from "../components/error-boundary";
import { MapWithMarkers } from "../components/map-with-markers";
import { mainApi } from "../__data__/service/main-api";

// Styled components
const PageContainer = styled.div`
  background-color: #0f0f0f;
  color: white;
  font-family: Arial, sans-serif;
  padding: 20px;
  min-height: 100vh;
`;

/*   const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #121212;
  `; */

/* const Title = styled.h1`
  font-size: 1.5rem;
  margin: 20px 0;
`; */

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 20px;
`;

const InputSection = styled.div`
  background-color: #e8e8e8;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  text-align: center;
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

// Component
const Selector_old = () => {
  const [query, setQuery] = useState("");
  const [cards, setCards] = useState([]);

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
      <Header>
        <div>Kazan Explore</div>
        <nav>
          <a href="#">Интересные места</a>
          <a href="#">Подборщик</a>
          <a href="#">Войти</a>
        </nav>
      </Header>

      <Title>Подборщик интересных мест</Title>
      <Description>
        Ежегодно Казань посещает более 2 млн туристов, которые стремятся увидеть
        самые интересные места города. Если вы ещё не определились, куда пойти,
        то наш подборщик вам в этом поможет.
      </Description>

      <InputSection>
        <p>
          В поле ниже введите свои предпочтения, интересы в свободном стиле, а
          наш подборщик на их основе порекомендует Вам, куда всё-таки стоит
          сходить
        </p>
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ваши предпочтения"
        />
        <Button onClick={handleSearch}>Подобрать места</Button>
      </InputSection>

      <MapSection>
        <h2>Карта города</h2>
        <div style={{ height: "300px", backgroundColor: "#ccc" }}>Карта</div>
      </MapSection>

      {cards.length > 0 && (
        <CardContainer>
          {cards.map((card) => (
            <Card key={card.id}>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </Card>
          ))}
        </CardContainer>
      )}
    </PageContainer>
  );
};

export default Selector;
