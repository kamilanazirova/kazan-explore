import React from "react";

import logo from '../assets/logo.svg'
import kazan from '../assets/kazan.png'
import like from '../assets/like.png'
import moon from '../assets/moon.png'
import new1 from '../assets/new1.png'
import new2 from '../assets/new2.png'
import new3 from '../assets/new3.png'
import sun from '../assets/sun.png'
import { kazanvideo } from '../assets/kazanvideo.mp4'


const first = () => {
    return (
    <>
    <body>
  <header className="header">
    <div className="container">
      <nav className="nav">
        <a className="logo">
          <img src={logo} alt="логотип сайта" className="logo-img"/>
        </a>
          <ul className="menu">
            <li className="menu-item">
              <a href="#" className="menu-link">Интересные места</a>
            </li>
            <li className="menu-item">
              <a href="#" className="menu-link">Транспорт и инфраструктура</a>
            </li>
            <li className="menu-item">
              <a href="#" className="menu-link">Спорт и развлечения</a>
            </li>
            <li className="menu-item">
              <a href="#" className="menu-link">История и культура</a>
            </li>
            <li className="menu-item">
              <a href="#" className="menu-link">Наука и образование</a>
            </li>
          </ul>
        <ul className="login">
          <li className="login-item">
            <a href="#" className="login-link">Войти</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <main className="main">
    <section className="headline">
      <div className="headline-img">
        <img src={kazan} alt="Казань" className="headline-image"/>
      </div>  
      <div className="overlay">
        <img src={like} alt="Поставить лайк городу Казань" className="like"/>
        <h1 className="title">KazanExplore</h1>
        <p className="text-about-kazan">Казань — древний город с богатой историей, где слились воедино культуры Востока и Запада. Подобно драгоценному камню, сияющему в ожерелье городов России, Казань покоряет своей красотой и многообразием. Её красивая архитектура и гостеприимные жители создают уютную атмосферу, привлекающую туристов со всего мира.</p>          
        <div className="overlay-btn1">
          <a href="#" className="headline-btn1">Купить чак-чак</a>
        </div>
        <div className="overlay-btn2">
          <a href="#" className="headline-btn2">Попробовать өчпочмак</a>
        </div>
      </div>
    </section>
    <section className="information">
     <div className="info">
      <div className="video">
      <video src={videoElement} controls className="kazan-video">Казань с высоты птичьего полета</video>
        <p className="about-video">Видео, снятое с высоты птичьего полета над Казанью представляет захватывающий панорамный обзор города, раскрывая его красоту и архитектурное многообразие.</p>
      </div>
      <div className="weather">
        <img src={sun} alt="солнце" className="sun"/>
        <p className="tweather">Погода сейчас</p>
        <p className="time">17:30</p>
        <p className="temp">-4°</p>
        <img src={moon} alt="время суток" className="moon"/>
        <p className="state">Ясно</p>
        <p className="feel">Ощущается как -8°</p>
      </div>
     </div>
    </section>
    <section className="news">
      <p className="tnews">Новости в Казани</p>
      <div className="new">
        <img src={new1} alt="новость" className="new-img"/>
        <a href="#" className="new-link">На фабрике Алафузова в Казани построят культурный центр и апартаменты.</a>
      </div>
      <div className="new">
        <img src={new2} alt="новость" className="new-img"/>
        <a href="#" className="new-link">Автомобили разыграют в Татарстане среди проголосовавших на выборах.</a>
      </div>
      <div className="new">
        <img src={new3} alt="новость" className="new-img"/>
        <a href="#" className="new-link">Казань закрыла Игры будущего.</a>
      </div>
      </section>
  </main>
  <footer className="footer">
    <div className="container">
     <div className="info-about-us">
      <div className="contacts"> 
        <p className="tcontacts">Контактная информация</p>
        <p className="phone">+7 999 999 99 99</p>
        <p className="username1">@cityguide.ru</p>
      </div>
      <div className="socialsites">
        <p className="tsocialsites">Мы в социальных сетях</p>
        <p className="username2">@cityguide</p>
      </div>
     </div>
    </div>
  </footer>
</body>
</>
);
};

export default first;