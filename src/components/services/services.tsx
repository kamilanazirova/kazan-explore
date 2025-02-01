import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Dialog, DialogActions, DialogContent, DialogTitle, Typography, Button } from '@mui/material';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import InfoButton from '../services-button/services-button'; // Импортируем новый компонент
import { mainApi } from "../../__data__/service/main-api";
import { ServiceImageWrapper, ServiceImage, ServiceText, BackButton, ButtonWrapper } from './services.styled'; // Импортируем стилизованные компоненты
import services from "../../assets/services/aeroport.png";
import hospital from "../../assets/services/hospital.png";
import pharmacy from "../../assets/services/pharmacy.png";
import sber from "../../assets/services/sber.png";

const InfoDialog = () => {
  const { t } = useTranslation()
  
  const { data: servicesList, error, isLoading } = mainApi.useServicesListQuery();
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState('');
  const [showInfo, setShowInfo] = useState(false);

  const handleOpenDialog = () => setOpenDialog(true);
  const handleCloseDialog = () => setOpenDialog(false);

  const handleButtonClick = (infoType) => {
    setSelectedInfo(infoType);
    setShowInfo(true);
  };

  const handleBackClick = () => {
    setShowInfo(false);
    setSelectedInfo('');
  };

  // Функция для рендера информации по выбранной категории
  const renderInfoContent = () => {
    const categoryData = servicesList[selectedInfo];

    return categoryData ? (
      categoryData.map((item, index) => (
        <div key={index}>
          <Typography variant="h6" style={{ fontWeight: 'bold' }}>
            {item.name}
          </Typography>
          <Typography variant="body1" style={{ marginBottom: '20px' }}>
            {item.description}
          </Typography>
        </div>
      ))
    ) : (
      <Typography variant="body1">{t('kazan-explore.main.services.no_info')}</Typography>
    );
  };

  // Данные для кнопок, которые можно отобразить в цикле
  const categories = [
    { label: (t('kazan-explore.main.services.banks')), iconSrc: sber, value: 'banks' },
    { label: (t('kazan-explore.main.services.hospitals')), iconSrc: hospital, value: 'hospitals' },
    { label: (t('kazan-explore.main.services.pharmacies')), iconSrc: pharmacy, value: 'pharmacies' },
    { label: (t('kazan-explore.main.services.airports')), iconSrc: services, value: 'airports' }
  ];

  return (
    <div>
      <ServiceImageWrapper onClick={handleOpenDialog}>
        <ServiceImage src={services} alt="service" />
        <ServiceText variant="h6">{t('kazan-explore.main.services.title')}</ServiceText>
      </ServiceImageWrapper>

      {/* Диалоговое окно */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="md" sx={{
        display: 'flex',
        justifyContent: 'center', // Горизонтальное выравнивание
        alignItems: 'center', // Вертикальное выравнивание
      }} >
        <DialogTitle>{showInfo ? (t('kazan-explore.main.services.info')) : (t('kazan-explore.main.services.choose_info'))}</DialogTitle>
        <DialogContent>
          {showInfo ? (
            <>
              {/* Отображаем контент в зависимости от выбранной категории */}
              {renderInfoContent()}
              <BackButton
                fullWidth
                variant="contained"
                color="secondary"
                startIcon={<ArrowBackIcon />}
                onClick={handleBackClick}
              >
                {t('kazan-explore.main.services.back_bptton')}
              </BackButton>
            </>
          ) : (
            <>
              {/* Генерируем кнопки с помощью map */}
              <ButtonWrapper>
                {categories.map((category) => (
                  <InfoButton
                    key={category.value}
                    onClick={() => handleButtonClick(category.value)}
                    iconSrc={category.iconSrc}
                    label={category.label}
                  />
                ))}
              </ButtonWrapper>
            </>
          )}
        </DialogContent>
        <DialogActions>
          {!showInfo && (
            <Button onClick={handleCloseDialog} color="secondary">
              {t('kazan-explore.main.services.close_botton')}
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default InfoDialog;
