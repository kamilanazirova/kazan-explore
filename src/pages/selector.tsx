import React, { useState } from "react";
import styled from "@emotion/styled";
import { useTranslation } from 'react-i18next';
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Wrapper } from "../global-styles";
import { Title } from "../components/title";
import { ErrorBoundary } from "../components/error-boundary";
import { mainApi } from "../__data__/service/main-api";
import { Place } from "../components/place";
import gpt_logo from '../assets/icons/gpt-tiny-logo.png';
import { MapWithMarkers } from "../components/map-with-markers";

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

const SubmitButton = styled.button`
  margin-top: 16px;
  padding: 12px 24px;
  font-size: 18px;
  background-color: #ffcc00;
  color: black;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: #e6b800;
  }
`;

const LoadingSpinner = styled.div`
  margin-top: 20px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;
  margin-right: 150px;
`;

// Компонент Selector
const Selector = () => {
  const { data: placesList } = mainApi.usePlacesListQuery();
  const [query, setQuery] = useState("");
  const [filteredPlaces, setFilteredPlaces] = useState([]);  // Массив отфильтрованных карточек
  const [loading, setLoading] = useState(false);  
  const { t } = useTranslation();

  const handleSearch = async () => {
    if (!query.trim()) {
      alert("Поле запроса не должно быть пустым!");
      return;
    }
  
    // Включаем индикатор загрузки и сбрасываем карточки
    setLoading(true);
    setFilteredPlaces([]);  
  
    try {
      // Отправка запроса на сервер
      const response = await fetch('http://localhost:8000/run-script', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: query }),
      });
  
      if (!response.ok) {
        alert("Ошибка при получении ответа от сервера");
        return;
      }
  
      const data = await response.json();
      let rawIndexes = data.response.trim(); // Получаем строку с индексами
  
      let selectedIndexes = [];
  
      // Обрабатываем разные форматы данных
      if (rawIndexes.startsWith("[") && rawIndexes.endsWith("]")) {
        // Если это список Python (например, "[1, 3, 5]")
        selectedIndexes = JSON.parse(rawIndexes);
      } else if (rawIndexes.includes(",")) {
        // Если индексы идут через запятую ("1,3,5")
        selectedIndexes = rawIndexes.split(",").map(num => parseInt(num.trim()));
      } else {
        // Если пришло одно число без списка
        selectedIndexes = [parseInt(rawIndexes)];
      }
  
      // Фильтруем placesList по индексам
      const filtered = placesList.filter((_, index) => selectedIndexes.includes(index));
  
      // Обновляем состояние с отфильтрованными карточками
      setFilteredPlaces(filtered);
    } catch (error) {
      alert("Произошла ошибка при запросе.");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <PageContainer>
      <Header />
      <Wrapper>
        <Title image={gpt_logo} title={t('selector.title')} alt="Иконка подборщика" />
        <h3>{t('selector.info')}</h3>
        <FormWrapper>
          <InputSection>
            <p>
              Введите свои предпочтения или вопрос, и наш подборщик порекомендует вам места.
            </p>
            <InputField 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ваши предпочтения"
            />
            <SubmitButton onClick={handleSearch}>Подобрать места</SubmitButton>
            {loading && <LoadingSpinner />} {/* Индикатор загрузки */}
          </InputSection>
          <MapWithMarkers width="1000px"/>
        </FormWrapper>

        {filteredPlaces.length > 0 && (
          <ErrorBoundary>
            {filteredPlaces.map((item, index) => (
              <Place key={item.id} 
                     type={item.type}
                     head={item.head}
                     text={item.text}
                     image={item.image}
                     componentKey={item.id}
              />
            ))}
          </ErrorBoundary>
        )}
      </Wrapper>
      <Footer />
    </PageContainer>
  );
};

export default Selector;  