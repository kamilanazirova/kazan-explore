import React, { useEffect, useState } from "react";

import './overlay.styled';

import like from '../../assets/first/like.png'
import { StyledOverlay, Icon, Head, Body, Button1, Button2 } from "./overlay.styled";
import { Link } from "../link";
import { URLs } from "../../__data__/urls";

export function Overlay() {
    
    const [infoAboutKazan, setInfoAboutKazan] = useState([])
    useEffect(() => {
        fetch(`${URLs.api.main}/getInfoAboutKazan`).then((response) => response.json()).then((data) => setInfoAboutKazan(data))
    }, [])

    return(
        <StyledOverlay>
            <Icon className='like' src={like} alt="Поставить лайк городу Казань"/>
            <Head className="title">Explore Kazan</Head>
            <Body className="text-about-kazan">{infoAboutKazan}</Body>
            <Button1>
                <Link href="https://2chak.ru/">Купить чак-чак </Link>
            </Button1>
            <Button2>
                <Link href="https://tubatay.com/">Попробовать өчпочмак </Link>
            </Button2>
        </StyledOverlay>
    )
}


