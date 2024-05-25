import React from "react";

import { Title } from "../title";
import { InformationImage } from "../info-plus-image/info-image";

import info from '../../__stubs__/education/info-about-kfu.json'
import kfu from '../../assets/education/kfu.png'
import kfu_icon from '../../assets/icons/kfu_icon.svg'

export function Kfu() {
  return (
    <>
    <Title image={kfu_icon} title="Kазанский федеральный университет" alt="Логотоп КФУ" />
    <InformationImage text={info} image={kfu} alt="Фотография главного здания КФУ"/>
    </>
  );
}

