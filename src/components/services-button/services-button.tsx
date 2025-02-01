import React from 'react';
import { CategoryButtonWrapper, CategoryButtonImage, CategoryButtonText } from './styled';

const InfoButton = ({ iconSrc, label, onClick }) => {
  return (
    <CategoryButtonWrapper onClick={onClick}>
      <CategoryButtonImage src={iconSrc} alt={label} />
      <CategoryButtonText variant="body1">{label}</CategoryButtonText>
    </CategoryButtonWrapper>
  );
};

export default InfoButton;
