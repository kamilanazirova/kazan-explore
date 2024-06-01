import React, { useState } from "react";
import { places } from "../../assets/places";
import { Container, Photo, Head, Text } from "./place.styled";
import { ReviewModal } from "../review";

export const Place = ({ type, image, head, text, componentKey }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [reviews, setReviews] = useState([]);

    const handleReviewSubmit = (review) => {
        setReviews([...reviews, review]);
        localStorage.setItem(`reviews_${componentKey}`, JSON.stringify([...reviews, review]));
    };

    return (
        <>
            {type && <h2>{type}</h2>}
            <Container>
                <Photo src={places[image]} />
                <Head>{head}</Head>
                <Text>{text}</Text>
                <button onClick={() => setIsModalOpen(true)}>Оставить отзыв</button>
                <ReviewModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleReviewSubmit} reviews={reviews} componentKey={componentKey} />
            </Container>
        </>
    );
};
