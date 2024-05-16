import React from "react";

import sport_icon from '../assets/icons/sport_icon.svg'
import sport_arenas from '../assets/sport/sport_arenas.png'

import data from '../__stubs__/sport-data.json'
import { Header } from "../components/header";
import { Title } from "../components/title";
import { SpoortCard } from "../components/sport-card";
import { Footer } from "../components/footer"

const History = () => {
    return (
        <>
            <Header />
            <main className="main">
                <Title image={sport_icon} title="История и культура" alt="спортивная иконка" />
                <div className="text">
                    <p>Казань является одним из крупнейших культурных центров России, сохраняя классические достижения, а также способствуя развитию современных, авангардных направлений во многих областях культуры. Столицу Татарстана традиционно называют «мультикультурной», подразумевая взаимовыгодное обогащение мирно сосуществующих русской и татарской культур.</p>
                </div>

            </main>
            <Footer />
        </>
    );
};

export default History;
