import { styled } from '@mui/system';
import { Typography, Button } from '@mui/material';

// Обертка для изображения и текста
export const ServiceImageWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  cursor: 'pointer',
});

// Изображение услуги
export const ServiceImage = styled('img')({
  width: '350px',
  height: '240px',
  borderRadius: '20px',  // Округляем углы изображения
  transition: 'transform 0.3s ease',
  transform: 'translateY(-5px)',

  '&:hover': {
    transform: 'scale(1.04) translateY(-5px)', // Увеличиваем картинку на 5% при наведении
  },
});

// Текст под изображением с зеленым фоном
export const ServiceText = styled(Typography)({
  marginTop: '8px',
  padding: '10px',
  borderRadius: '10px', // Округляем углы текста
  color: 'white', // Белый цвет текста
  textAlign: 'center', // Выравнивание текста по центру
});

// Кнопка "Назад"
export const BackButton = styled(Button)({
  marginTop: '10px',
});

// Обертка для кнопок в ряд
export const ButtonWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row', // Ряд, а не столбик
  justifyContent: 'space-between', // Кнопки расположены с равным расстоянием
  flexWrap: 'wrap', // Автоматический переход на следующую строку при необходимости
  gap: '10px', // Отступ между кнопками
});
