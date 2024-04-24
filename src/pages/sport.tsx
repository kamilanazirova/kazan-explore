import React from "react";

import logo from '../assets/logo.svg'
import sportt_icon from '../assets/sport_icon.png'
import { Header } from "../components/header";

const Sport = () => {
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
                <div className="h1">
                    <div className="logo-sport">
                        <img src={sportt_icon} alt="иконка спорта" className="img-sport" />
                    </div>
                    <h1>Спорт и развлечения</h1>
                </div>
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

export default Sport;