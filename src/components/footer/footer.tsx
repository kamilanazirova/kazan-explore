import React from "react";

import './style.css';

export const Footer = (props) => {
    return <footer className="footer">
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
}