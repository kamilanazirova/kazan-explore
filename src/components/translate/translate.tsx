import React, { useState } from 'react';
import { useLanguage } from '../../context/language-context'; // Используем контекст
import Flag from 'react-world-flags';
import tatarstanFlag from '../../assets/flags/tatarstan.png';
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
} from '@mui/material';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('i18nextLng', lng);
    handleClose();
  };

  return (
    <Box>
      <Tooltip title="Выбрать язык">
        <IconButton onClick={handleOpen} size="large">
          {i18n.language === 'tt' ? (
            <img src={tatarstanFlag} alt="Tatarstan flag" width={25} height={15} />
          ) : (
            <Flag code={i18n.language === 'ru' ? 'RU' : 'GB'} width={25} height={25} />
          )}
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        open={isOpen}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        disableScrollLock
      >
        <MenuItem onClick={() => changeLanguage('ru')}>
          <Flag code="RU" width={25} height={25} style={{ marginRight: 8 }} /> Русский
        </MenuItem>
        <MenuItem onClick={() => changeLanguage('en')}>
          <Flag code="GB" width={25} height={25} style={{ marginRight: 8 }} /> English
        </MenuItem>
        <MenuItem onClick={() => changeLanguage('tt')}>
          <img src={tatarstanFlag} alt="Tatarstan flag" width={25} height={15} style={{ marginRight: 8 }} /> Татарча
        </MenuItem>
      </Menu>
    </Box>
  );
};
