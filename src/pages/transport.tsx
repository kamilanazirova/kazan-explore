import React from "react";

import './style/transport.css';

import logo from '../assets/logo.png'
import transport_icon from '../assets/transport_icon.png'
import Rectangle33 from '../assets/Rectangle 33.png'
import Rectangle34 from '../assets/Rectangle 34.png'
import Group75 from '../assets/Group 75.png'

const transport = () => {
    return (
    <>
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
              <li className="menu-item_here">
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
      
      <body> 
        <img src={transport_icon} alt="иконка транспорта" className="img-transp" />
        <h1>Транспорт и инфраструктура</h1>
      
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
      
        <div className="img_transport">
          <img src={Rectangle33} alt="Фотография автобуса изнутри" className="img1"/>
          <img src={Rectangle34} className="img2"/>
        </div>
      
        <h2>Нажмите на интересующий маршрут, чтобы увидеть его схему движения</h2>
        <p>Автобусы</p>
        <div className="btn_bus">
          <button>№1</button>
          <button>№2</button>
          <button>№4</button>
          {/* Ошибка была здесь */}
          <button>№5</button>
          {/* Ошибка была здесь */}
          <button>№6</button>
          <button>№9</button>
          <button>№10</button>
          <button>№10а</button>
          <button>№11</button>
          <button>№15</button>
          <button>№22</button>
          <br/>
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
          <br/>
      
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
          <br/>
      
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
          <br/>
      
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
          <br/>
        </div>
      
        <p>Троллейбусы</p>
        <div className="btn_tral">
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
        <br />
        <br />
        <div className="map"><img src={Group75} alt="карта маршрутов" /></div>
      </body>
    </>
    );
};

export default transport;