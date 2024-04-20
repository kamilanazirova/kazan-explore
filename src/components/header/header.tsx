import React from "react";

import './style.css';
import logo from '../../assets/logo.svg'

export const Header = (props) => {
    return
    <header className="header">
          <div className="container">
            <nav className="nav">
              <a className="logo">
                <img src={logo} alt="логотип сайта"/>
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
}