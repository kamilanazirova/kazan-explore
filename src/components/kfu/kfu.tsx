import React from "react";

import './kfu.styled';
import { Title } from "../title";

import kfu from '../../assets/kfu.png'
import kfu_icon from '../../assets/icons/kfu_icon.svg'
import { Info1, Info2, Info, Text, Photo } from "./kfu.styled";

export function Kfu() {
  return (
    <Info>
      <Info1>
        <Title image={kfu_icon} title="Kазанский федеральный университет" alt="Иконка" />
        <Text>Казанский (Приволжский) федеральный университет (полное наименование — федеральное государственное автономное образовательное учреждение высшего образования «Казанский (Приволжский) федеральный университет», тат. Казан (Идел буе) федераль университеты) — высшее учебное заведение в Казани, один из старейших российских университетов (основан в 1804 году) и один из десяти федеральных университетов (с 2010 года). </Text>
        <Text>В состав университетского учебно-научного комплекса входят научная библиотека, научно-исследовательские институты химии, математики и механики, 7 музеев, ботанический сад, астрономические обсерватории, центр информационных технологий, издательство, центр и лаборатория оперативной полиграфии, культурно-спортивный комплекс, спортивно-оздоровительный лагерь и другие подразделения. В 2012 году в университете обучалось 36 676 студентов (22 535 на дневном отделении, 337 студентов из ближнего и дальнего зарубежья), 1197 аспирантов (из них 34 иностранцы). В университете работало 6615 сотрудников, в том числе более 3000 научно-педагогических работников (из них 1880 с учёной степенью, 409 — докторов наук).</Text>
      </Info1>
      <Info2>
      <Photo src={kfu} alt="Казанский федеральный университет" />
      </Info2>
    </Info>
  );
}
