import { styled } from '@mui/system';
import { Typography, Button } from '@mui/material';

// Стиль для кнопки категории
export const CategoryButtonWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column', // Текст под картинкой
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor:'rgba(3, 68, 3, 0.8)', // Зеленый фон
  borderRadius: '10px', // Округляем углы
  padding: '10px',
  width: '150px',
  height: '200px',
  cursor: 'pointer',
});

// Стиль для изображения кнопки категории
export const CategoryButtonImage = styled('img')({
  width: '150px',
  height: '150px',
  borderRadius: '10px',
  marginBottom: '10px',

  '&:hover': {
    transform: 'scale(1.01) translateY(-5px)', // Увеличиваем картинку на 5% при наведении
  },  
});

// Текст на кнопке категории
export const CategoryButtonText = styled(Typography)({
  color: 'white',
  textAlign: 'center',
  fontWeight: 'bold',
});
