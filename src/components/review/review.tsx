import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  componentKey: string;
}

export const ReviewModal: React.FC<ReviewModalProps> = ({ isOpen, onClose, componentKey }) => {
  const [newReview, setNewReview] = useState<string>('');
  const [componentReviews, setComponentReviews] = useState<string[]>([]);

  useEffect(() => {
    const storedReviews = localStorage.getItem(`reviews_${componentKey}`);
    if (storedReviews) {
      setComponentReviews(JSON.parse(storedReviews));
    }
  }, [componentKey]);

  const handleReviewSubmit = () => {
    const updatedReviews = [...componentReviews, newReview];
    setComponentReviews(updatedReviews);
    localStorage.setItem(`reviews_${componentKey}`, JSON.stringify(updatedReviews));
    setNewReview('');
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={{ content: { width: '50%', height: '50%', backgroundColor: '#011208', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', borderRadius: '20px' }}}>
    <h2>Оставить отзыв</h2>
    <textarea
    value={newReview}
    onChange={(e) => setNewReview(e.target.value)}
    placeholder="Напишите отзыв"
    style={{
        width: '80%', 
        height: '50px', 
        borderRadius: '10px',
        padding: '10px', 
        resize: 'none', 
        marginLeft: '10px', 
    }}
/>
      <button
    style={{
        borderRadius: '10px', 
        backgroundColor: '#CCCCCC', 
        border: '1px solid black',
        color: 'black', 
        fontWeight: 'bold', 
        padding: '10px 20px', 
        cursor: 'pointer', 
        marginLeft: '10px', 
    }}
    onClick={handleReviewSubmit}
>
    Отправить
</button>
<button
    style={{
        borderRadius: '10px', 
        backgroundColor: '#CCCCCC', 
        border: '1px solid black',
        color: 'black', 
        fontWeight: 'bold', 
        padding: '10px 20px',
        cursor: 'pointer', 
        margin: '10px', 
    }}
    onClick={onClose}
>
    Закрыть
</button>
      <h2>Отзывы</h2>
      <div>
        {componentReviews.map((review, index) => (
          <div key={index}>
            <p>{review}</p>
          </div>
        ))}
      </div>
    </Modal>
  );
};
