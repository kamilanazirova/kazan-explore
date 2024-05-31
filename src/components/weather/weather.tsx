import React, { useEffect, useState } from "react";

//import conditions from '../../../condition'
//<script> src="../../../condition" type="module"</script>

import sun from '../../assets/first/sun.png'

import { StyledWeather, IconSun, Head, BodyTemp, BodyState, BodyFeel } from "./weather.styled";

export function Weather() {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const apiKey = 'f048be0516f840588d782312243105';
        const city = 'Kazan';
        const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setWeatherData(data);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }, []); // Пустой массив зависимостей означает, что эффект будет выполнен только один раз после монтирования компонента

    return (
        <StyledWeather>
            <IconSun className="sun" src={sun} alt="солнце" />
            <Head className="tweather">Погода сейчас</Head>
            {weatherData && (
                <>                
                    <BodyTemp className="temp">{weatherData.current.temp_c}°</BodyTemp>
                    <BodyState className="state">{weatherData.current.condition.text}</BodyState>
                    <BodyFeel className="feel">Ощущается как {weatherData.current.feelslike_c}°</BodyFeel>
                </>
            )}
        </StyledWeather>
    );
}