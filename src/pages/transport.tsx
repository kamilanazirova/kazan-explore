import React from "react";

import transport_icon from '../assets/icons/transport_icon.svg'
import bus from '../assets/transport/bus.png'
import map from '../assets/transport/map.png'

import bus_numbers from '../__stubs__/bus-numbers.json'
import tral_numbers from '../__stubs__/tral-numbers.json'
import { Header } from "../components/header";
import { Title } from "../components/title";
import { Button } from "../components/button";
import { Footer } from "../components/footer";

const Transport = () => {
  return (
    <>
      <Header />
      <main className="main">
        <div className="part1">
          <div>
            <Title image={transport_icon} title="Транспорт и инфраструктура" alt="иконка транспорт" />

            <p>Наиболее развитая сеть в городе – <b>автобусная</b>. Она обеспечивает беспересадочные перевозки пассажиров между всеми районами города.</p>
            <p><b>Трамвайная</b> и <b>троллейбусная</b> маршрутная сеть образует радиально-кольцевую систему. Трамвайным
              и троллейбусным
              транспортом обслуживаются все районы города.</p>
            <p><b>Метрополитен</b> г. Казани – современный, высококомфортабельный и скоростной вид транспорта. Поезда,
              оснащенные
              новейшими системами автоматики, позволяют на высоком уровне обслуживать пассажиров.</p>
            <p>Казань также обладает различными туристическими объектами, такими как пешеходные улицы, парки и набережные, которые часто становятся популярными местами для прогулок и отдыха.</p>
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
