import React from "react";

import sport_icon from '../assets/icons/sport_icon.svg'
import akbars_logo from '../assets/sport/akbars_logo.png'
import akbars_img from '../assets/sport/akbars_img.png'
import hockey_dinamo_logo from '../assets/sport/hockey_dinamo_logo.png'
import hockey_dinamo_img from '../assets/sport/hockey_dinamo_img.png'
import rubin_logo from '../assets/sport/rubin_logo.png'
import rubin_img from '../assets/sport/rubin_img.png'
import unics_logo from '../assets/sport/unics_logo.png'
import unics_img from '../assets/sport/unics_img.png'
import kazanochka_logo from '../assets/sport/kazanochka_logo.png'
import kazanochka_img from '../assets/sport/kazanochka_img.png'
import zenit_logo from '../assets/sport/zenit_logo.png'
import zenit_img from '../assets/sport/zenit_img.png'
import vol_dinamo_logo from '../assets/sport/vol_dinamo_logo.png'
import vol_dinamo_img from '../assets/sport/vol_dinamo_img.png'
import waterpolo_logo from '../assets/sport/waterpolo_logo.png'
import waterpolo_img from '../assets/sport/waterpolo_img.png'


import line from '../assets/sport/line.png'

import { Header } from "../components/header";
import { Title } from "../components/title";
import { Footer } from "../components/footer"

const Sport = () => {
    return (
        <>
            <Header />
            <main className="main">
                <Title image={sport_icon} title="Спорт и развлечения" alt="спортивная иконка" />

                <p> Казань является одним из самых развитых в спортивном плане городов России, а также одним из лидеров по числу побед в различных видах спорта.</p>

                <h2> Спортивные команды и клубы Казани </h2>
                <h3>Баскетбол</h3>
                <div className="card">
                    <div className="wrapper">
                        <div className="text">
                            <h3>Баскетбольный клуб УНИКС Казань</h3>
                            <p className="body-text">Баскетбольный клуб УНИКС — российский мужской баскетбольный клуб. Основан в 1991 году. Представляет город Казань, столицу Республики Татарстан. Выступает в Профессиональной баскетбольной лиге.
                                «УНИКС» расшифровывается как «Университет — Культура — Спорт».</p>
                        </div>
                        <div className="imgs">
                            <img src={unics_logo} className="logo-akbars" alt="карта маршрутов" />
                            <img src={line} className="line" />
                            <img src={unics_img} className="img-akbars" alt="карта маршрутов" />
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="wrapper">
                        <div className="text">
                            <h3>Баскетбольный клуб Казаночка</h3>
                            <p className="body-text">Казаночка участвуюет в женской баскетбольной суперлиге и представляет город Казань на национальном уровне. "Казаночка" играет важную роль в развитии женского баскетбола в регионе и активно соревнуется на международной арене.</p>
                        </div>
                        <div className="imgs">
                            <img src={kazanochka_logo} className="logo-akbars" alt="карта маршрутов" />
                            <img src={line} className="line" />
                            <img src={kazanochka_img} className="img-akbars" alt="карта маршрутов" />
                        </div>
                    </div>
                </div>
                
                
                <h3>Хоккей</h3>
                <div className="card">
                    <div className="wrapper">
                        <div className="text">
                            <h3>Хокейный клуб Ак Барс Казань</h3>
                            <p className="body-text"> Хоккейный клуб "Ак Барс" из Казани — это один из наиболее известных и успешных профессиональных хоккейных клубов в России. Он был основан в 1956 году и является членом Континентальной Хоккейной Лиги (КХЛ), самой престижной лиги в России и одной из сильнейших в мире.</p>
                        </div>
                        <div className="imgs">
                            <img src={akbars_logo} className="logo-akbars" alt="карта маршрутов" />
                            <img src={line} className="line" />
                            <img src={akbars_img} className="img-akbars" alt="карта маршрутов" />
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="wrapper">
                        <div className="text">
                            <h3>Хоккейный клуб Динамо-Казань</h3>
                            <p className="body-text"> «Динамо-Казань» — команда по хоккею с мячом из Казани. Играет в суперлиге чемпионата России. Действующий чемпион России.</p>
                        </div>
                        <div className="imgs">
                            <img src={hockey_dinamo_logo} className="logo-akbars" alt="карта маршрутов" />
                            <img src={line} className="line" />
                            <img src={hockey_dinamo_img} className="img-akbars" alt="карта маршрутов" />
                        </div>
                    </div>
                </div>


                <h3>Футбол</h3>
                <div className="card">
                    <div className="wrapper">
                        <div className="text">
                            <h3>Футбольный клуб Рубин Казань</h3>
                            <p className="body-text"> «Рубин» (тат. Рубин Казан футбол төркеме) — российский футбольный клуб из Казани. Один из ведущих российских футбольных клубов второй половины 2000-х годов. Ведёт свою историю с 1936 года, но официальной датой основания считается 1958 год. Двукратный чемпион России 2008 и 2009 годов. Обладатель Кубка Содружества 2010 и Суперкубка России 2010.</p>
                        </div>
                        <div className="imgs">
                            <img src={rubin_logo} className="logo-akbars" alt="карта маршрутов" />
                            <img src={line} className="line" />
                            <img src={rubin_img} className="img-akbars" alt="карта маршрутов" />
                        </div>
                    </div>
                </div>


                



                <h3>Волейбол</h3>
                <div className="card">
                    <div className="wrapper">
                        <div className="text">
                            <h3>Волейбольный клуб Зенит Казань</h3>
                            <p className="body-text">«Зенит» (Казань) — российский мужской волейбольный клуб. Основан в 2000 году, до 2004 года назывался «Динамо», с 2005 по июнь 2008 года — «Динамо-Таттрансгаз». 4-кратный чемпион России, 3-кратный обладатель Кубка России, победитель Лиги чемпионов сезонов 2007/08 и 2011/12 годов. Основные цвета: бело-синие.</p>
                        </div>
                        <div className="imgs">
                            <img src={zenit_logo} className="logo-akbars" alt="карта маршрутов" />
                            <img src={line} className="line" />
                            <img src={zenit_img} className="img-akbars" alt="карта маршрутов" />
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="wrapper">
                        <div className="text">
                            <h3>Волейбольный клуб Динамо-Казань</h3>
                            <p className="body-text">«Динамо-Казань» Казань (до 2008 — «Казаночка») — российский женский волейбольный клуб.</p>
                        </div>
                        <div className="imgs">
                            <img src={vol_dinamo_logo} className="logo-akbars" alt="карта маршрутов" />
                            <img src={line} className="line" />
                            <img src={vol_dinamo_img} className="img-akbars" alt="карта маршрутов" />
                        </div>
                    </div>
                </div>

                <h3>Водное поло</h3>
                <div className="card">
                    <div className="wrapper">
                        <div className="text">
                            <h3>Водное поло</h3>
                            <p className="body-text">Толчком развития водного поло в Казани стало строительство первого в Республике 50-ти метрового плавательного бассейна «Оргсинтез», закончившееся в 1973 году. Именно на базе бассейна «Оргсинтез» и была создана взрослая команда «Синтез», добившаяся права играть в первой группе чемпионата РСФСР. </p>
                        </div>
                        <div className="imgs">
                            <img src={waterpolo_logo} className="logo-akbars" alt="карта маршрутов" />
                            <img src={line} className="line" />
                            <img src={waterpolo_img} className="img-akbars" alt="карта маршрутов" />
                        </div>
                    </div>
                </div>

            </main>


            <Footer />
            
        </>
    );
};

export default Sport;
