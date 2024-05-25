import React, {useState, useEffect} from "react";

import { Title } from "../title";
import { InformationImage } from "../info-plus-image/info-image";

import kfu from '../../assets/education/kfu.png'
import kfu_icon from '../../assets/icons/kfu_icon.svg'

export function Kfu() {

  const [info, setInfo] = useState(null)
  useEffect(() => {
    fetch('/api/getBus').then((response) => response.json()).then((data) => setInfo(data))
  }, [])


  return (
    <>
    <Title image={kfu_icon} title="Kазанский федеральный университет" alt="Логотоп КФУ" />
    <InformationImage text={info} image={kfu} alt="Фотография главного здания КФУ"/>
    </>
  );
}

