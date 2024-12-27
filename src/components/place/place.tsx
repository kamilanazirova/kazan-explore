import React, { useState } from "react";
import { places } from "../../assets/places";
import { Container, Photo, Head, Text } from "./place.styled";
import { ReviewModal } from "../review";
import { useTranslation } from 'react-i18next';

export const Place = ({ type, image, head, text, componentKey }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [reviews, setReviews] = useState([]);

    const handleReviewSubmit = (review) => {
        setReviews([...reviews, review]);
        localStorage.setItem(`reviews_${componentKey}`, JSON.stringify([...reviews, review]));
    };

    const { t } = useTranslation()

    return (
        <>
            {type && <h2>{type}</h2>}
            <Container>
                <Photo src={places[image]} />
                <Head>{head}</Head>
                <Text>{text}</Text>
                <button
                onClick={() => setIsModalOpen(true)}
                style={{
                    borderRadius: '20px', // Округление углов в пикселях
                    backgroundColor: '#CCCCCC', // Серый фон
                    border: '1px solid black', // Черные границы
                    color: 'black', // Черный текст
                    fontWeight: 'bold', // Жирный текст
                    padding: '10px 20px', // Отступы внутри кнопки
                    cursor: 'pointer', // Изменение курсора при наведении
                    marginLeft: '80px', // Отступ слева
                }}
                >
                {t('places.review')}
                </button>
                <ReviewModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleReviewSubmit} reviews={reviews} componentKey={componentKey} />
            </Container>
        </>
    );
};
