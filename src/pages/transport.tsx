import React from "react";

import logo from '../assets/logo.svg'
import transport_icon from '../assets/transport_icon.png'
import group373 from '../assets/Group_373.png'
import group75 from '../assets/Group_75.png'
import { Header } from "../components/header";

const Transport = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <nav className="nav">
            <a className="logo">
              <img src={logo} alt="логотип сайта" />
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

      <main className="container">
        <div className="part1">
          <div className="text">
            <div className="h1">
              <div className="logo-transport">
                <img src={transport_icon} alt="иконка транспорта" className="img-transport" />
              </div>
              <h1>Транспорт и инфраструктура</h1>
            </div>
            <p>Наиболее развитая сеть в городе – <b>автобусная</b>. Она обеспечивает беспересадочные перевозки пассажиров
              между
              всеми
              районами города. </p>
            <p><b>Трамвайная</b> и <b>троллейбусная</b> маршрутная сеть образует радиально-кольцевую систему. Трамвайным
              и троллейбусным
              транспортом обслуживаются все районы города.</p>
            <p><b>Метрополитен</b> г. Казани – современный, высококомфортабельный и скоростной вид транспорта. Поезда,
              оснащенные
              новейшими системами автоматики, позволяют на высоком уровне обслуживать пассажиров.</p>
          </div>
          <div className="img-transport">
            <img src={group373} alt="фотография автобуса изнутри" className="img1" />
          </div>
        </div>

        <h2>Нажмите на интересующий маршрут, чтобы увидеть его схему движения</h2>
        <p className="transport-name">Автобусы</p>
        <div className="btn-bus">
          <button>№1</button>
          <button>№2</button>
          <button>№4</button>
          <button>№5</button>
          <button>№6</button>
          <button>№9</button>
          <button>№10</button>
          <button>№10а</button>
          <button>№11</button>
          <button>№15</button>
          <button>№22</button>
          <button>№23</button>
          <button>№25</button>
          <button>№28</button>
          <button>№28а</button>
          <button>№29</button>
          <button>№30</button>
          <button>№31</button>
          <button>№33</button>
          <button>№34</button>
          <button>№35</button>
          <button>№35а</button>
          <button>№36</button>
          <button>№36а</button>
          <button>№37</button>
          <button>№40</button>
          <button>№42</button>
          <button>№43</button>
          <button>№45</button>
          <button>№46</button>
          <button>№47</button>
          <button>№49</button>
          <button>№53</button>
          <button>№54</button>
          <button>№55</button>
          <button>№56</button>
          <button>№60</button>
          <button>№62</button>
          <button>№63</button>
          <button>№68</button>
          <button>№70</button>
          <button>№71</button>
          <button>№72</button>
          <button>№74</button>
          <button>№75</button>
          <button>№77</button>
          <button>№78</button>
          <button>№84</button>
          <button>№84а</button>
          <button>№88</button>
          <button>№89</button>
          <button>№89а</button>
          <button>№90</button>
          <button>№91</button>
          <button>№93</button>
          <br />
        </div>
        <p className="transport-name">Троллейбусы</p>
        <div className="btn-tral">
          <button>№1</button>
          <button>№2</button>
          <button>№3</button>
          <button>№5</button>
          <button>№6</button>
          <button>№7</button>
          <button>№8</button>
          <button>№9</button>
          <button>№12</button>
          <button>№13</button>
        </div>
        <div className="map"><img src={group75} className="img-map" alt="карта маршрутов" /></div>
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
    </>
  );
};

export default Transport;