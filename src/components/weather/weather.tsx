import React from "react";

import './weather.styled';

import sun from '../../assets/sun.png'
import moon from '../../assets/moon.png'

import { StyledWeather, IconSun, Head, BodyTime, BodyTemp, IconMoon, BodyState, BodyFeel } from "./weather.styled";

export function Weather() {
    return(
        <StyledWeather>
              <IconSun className="sun" src={sun} alt="солнце" />
              <Head className="tweather">Погода сейчас</Head>
              <BodyTime className="time">17:30</BodyTime>
              <BodyTemp className="temp">-4°</BodyTemp>
              <IconMoon className="moon" src={moon} alt="время суток"  />
              <BodyState className="state">Ясно</BodyState>
              <BodyFeel className="feel">Ощущается как -8°</BodyFeel>
        </StyledWeather>
    )
}
