import React from "react";

import { Title } from "../title";
import { InformationImage } from "../info-plus-image/info-image";

import kfu from '../../assets/education/kfu.png'
import kfu_icon from '../../assets/icons/kfu_icon.svg'
import { URLs } from "../../__data__/urls";
import { mainApi } from "../../__data__/service/main-api";

export function Kfu() {
  const { isSuccess, data: infoFirstData} = mainApi.useInfoFirstDataQuery()

  return (
    <>
    <Title image={kfu_icon} title="Kазанский федеральный университет" alt="Логотоп КФУ" />
    {isSuccess} && <InformationImage text={infoFirstData} image={kfu} alt="Фотография главного здания КФУ"/>
    </>
  );
}

