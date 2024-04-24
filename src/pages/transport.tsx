import React from "react";

import transport_icon from '../assets/icons/transport_icon.svg'
import bus from '../assets/transport/bus.png'
import map from '../assets/transport/map.png'

import { Header } from "../components/header";
import { Title } from "../components/title";
import { Button } from "../components/button";
import { Footer } from "../components/footer";

const bus_numbers = [1, 2, 4, 5, 6, 9, 10, '10a', 11, 15, 18, 22, 23, 25, 28, '28a', 29, 30, 31, 33, 34, 35, '35a', 36, '36a', 37, 40, 42, 43, 45, 46, 47, 49, 53, 54, 55, 56, 60, 62, 63, 68, 70, 71, 72, 74, 75, 77, 78, 84, '84a', 88, 89, '89a', 90, 91, 93, 94];
const tral_numbers = [1, 2, 3, 5, 6, 7, 8, 9, 12, 13];

const Transport = () => {
  return (
    <>
      <Header />
      <main className="main">
        <div className="part1">
          <div className="text">
            <Title image={transport_icon} title="Транспорт и инфраструктура" alt="иконка транспорт" />

            <p>Наиболее развитая сеть в городе – <b>автобусная</b>. Она обеспечивает беспересадочные перевозки пассажиров между всеми районами города.</p>
            <p><b>Трамвайная</b> и <b>троллейбусная</b> маршрутная сеть образует радиально-кольцевую систему. Трамвайным
              и троллейбусным
              транспортом обслуживаются все районы города.</p>
            <p><b>Метрополитен</b> г. Казани – современный, высококомфортабельный и скоростной вид транспорта. Поезда,
              оснащенные
              новейшими системами автоматики, позволяют на высоком уровне обслуживать пассажиров.</p>
          </div>
          <div className="img-transport">
            <img src={bus} alt="фотография автобуса изнутри" className="img1" />
          </div>
        </div>

        <h2>Нажмите на интересующий маршрут, чтобы увидеть его схему движения</h2>
        <p className="transport-name">Автобусы</p>
        <Button numbers={bus_numbers} />

        <p className="transport-name">Троллейбусы</p>
        <Button numbers={tral_numbers} />

        <div className="map"><img src={map} className="img-map" alt="карта маршрутов" /></div>
      </main>
      <Footer />
    </>
  );
};

export default Transport;
