import React, { useState, useEffect } from "react";

import { Background, BackgroundDiv, Bar, BurgerDiv } from './header.styled';

export function Burger ({ onHeaderLinksToggle }) {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const handleBurgerClick = () => {
    setIsBurgerOpen(!isBurgerOpen);
    onHeaderLinksToggle();
  };  

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isBurgerOpen && !e.target.closest('.burger') && !e.target.closest('.header-links') && !e.target.closest('.burger-el')) {
        setIsBurgerOpen(false);
        onHeaderLinksToggle();
      }
    };

    document.body.addEventListener('click', handleOutsideClick);

    return () => {
      document.body.removeEventListener('click', handleOutsideClick);
    };
  }, [isBurgerOpen]);

  return (
    <>
      <BurgerDiv className={`burger ${isBurgerOpen ? 'change' : ''}`} onClick={handleBurgerClick}>
        <Bar></Bar>
        <Bar></Bar>
        <Bar></Bar>
      </BurgerDiv>
      <BackgroundDiv className={`burger-el ${isBurgerOpen ? 'change' : ''}`}>
        <Background className={isBurgerOpen ? 'change-bg' : ''}></Background>
      </BackgroundDiv>
    </>
  );
};
