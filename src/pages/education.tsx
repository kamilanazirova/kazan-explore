import React from "react";

import science_icon from '../assets/icons/science_icon.svg'

import { Header } from "../components/header";
import { Title } from "../components/title";
import { Button } from "../components/button";
import { Footer } from "../components/footer";
import { Kfu } from "../components/kfu";
import { Education } from "../components/card-education";

const education = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Title image={science_icon} title="Наука и образование" alt="Иконка" />
        <p>Казань – один из крупнейших университетских городов России – исторически сформировался как центр знаний и науки. Ежегодно в нашем городе выпускается более 4 тыс. специалистов технического профиля и, что особенно важно, многие из них – талантливые разработчики и носители новых идей.</p>
        <section className="education">
          <Education
            image="img1"
            head="Дошкольное и школьное образование"
            text="В Казани насчитывается более 300 дошкольных учреждений, обеспечивающих всестороннее развитие детей с раннего возраста. Школьное образование в городе отличается высоким уровнем, о чем свидетельствуют результаты выпускных экзаменов и олимпиад. В Казани реализуется множество программ по поддержке талантливых школьников, включая специализированные школы и углубленное изучение предметов."
          />
          <Education
            image="img2"
            head="Среднее и высшее образование"
            text="В Казани расположены престижные средние специальные учебные заведения, готовящие специалистов среднего звена для различных отраслей. Город является крупным образовательным центром с более чем 20 высшими учебными заведениями, в том числе ведущими университетами России. Казанские вузы предлагают широкий спектр образовательных программ, отвечающих современным требованиям рынка труда."
          />
          <Education
            image="img3"
            head="Наука"
            text="Казань является одним из ведущих научных центров России, где сосредоточены многочисленные научно-исследовательские институты и академические учреждения. В городе проводятся крупные научные конференции и форумы, привлекающие ученых со всего мира. Казанские ученые добились значительных успехов в различных областях, включая химию, физику, медицину и информационные технологии."
          />
          <Education
            image="img4"
            head="Инновации"
            text="Казань является одним из лидеров в сфере инноваций в России. В городе работают крупные технологические компании и стартапы, разрабатывающие и внедряющие инновационные решения. В настоящее время в Татарстане действуют: крупнейшая в России особая экономическая зона промышленно-производственного типа «Алабуга», 4 индустриальных парка, технополис «Химград», 14 технопарков, IT-парк."
          />
        </section>
        <Kfu />
      </main>
      <Footer />
    </>
  );
};

export default education;
