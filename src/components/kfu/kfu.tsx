import React from "react";
import { useTranslation } from 'react-i18next';

import { Title } from "../title";
import { InformationImage } from "../info-plus-image/info-image";

import kfu from '../../assets/education/kfu.png'
import kfu_icon from '../../assets/icons/kfu_icon.svg'
import { mainApi } from "../../__data__/service/main-api";

export function Kfu() {
  const { t } = useTranslation()

  const { data: kfuList } = mainApi.useKfuListQuery();

  return (
    <>
      <Title image={kfu_icon} title={t(kfuList?.title)} alt="Логотоп КФУ" />
      <InformationImage text={kfuList?.description} image={kfu} alt="Фотография главного здания КФУ" />
    </>
  );
}

