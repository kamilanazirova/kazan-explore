import React from "react";

import './overlay.styled';

import like from '../../assets/first/like.png'
import { StyledOverlay, Icon, Head, Body, Button1, Button2 } from "./overlay.styled";
import { Link } from "../link";

export function Overlay() {
    return(
        <StyledOverlay>
            <Icon className='like' src={like} alt="Поставить лайк городу Казань"/>
            <Head className="title">Explore Kazan</Head>
            <Body className="text-about-kazan">Казань — древний город с богатой историей, где слились воедино культуры Востока и Запада. Подобно драгоценному камню, сияющему в ожерелье городов России, Казань покоряет своей красотой и многообразием. Её красивая архитектура и гостеприимные жители создают уютную атмосферу, привлекающую туристов со всего мира.</Body>
            <Button1>
                <Link href="https://2chak.ru/">Купить чак-чак </Link>
            </Button1>
            <Button2>
                <Link href="https://tubatay.com/">Попробовать өчпочмак </Link>
            </Button2>
        </StyledOverlay>
    )
}


