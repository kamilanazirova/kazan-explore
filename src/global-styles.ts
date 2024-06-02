import { css } from "@emotion/react";
import styled from "@emotion/styled";


export const globalStyles = css`
    :root {
        --text-contrast: #e60909;
        --dark-link: #5eff00;
    }

    a {
        text-decoration: none;
        color: inherit;
        line-height: 1em;
    }

    p {
        margin: 20px;
        line-height: 1.5em;
    }

    ul {
        display: block;
        margin: 0;
        list-style: none;
    }

    body {
        margin: 0 0 40px 0;
        padding: 0;
        font-family: "Inter", sans-serif;
        font-size: 20px;
        font-weight: 400;
        color: #FFFFFF;
        background-color: #011208;
    }

    h1 {
        font-size: 38px;
        font-weight: 665;
        line-height: 1em;
        margin: 30px 10px;
        color: #FFFFFF;
    }

    h2 {
        margin: 20px;
        line-height: 1.5em;
    }

    h3 {
        margin: 10px 20px;
        line-height: 1.5em;
    }
  
    .text {
        background-color: rgba(48, 48, 48, 0.332);
        padding: 1px;
        border-radius: 15px;
    }
    
    .collage-full-width {
        width: 100%;
        margin: 50px 0;
    }

    .input-field:focus {  /*при нажатии на input field*/
        outline: none; /* Убираем стандартный контур при фокусе */
        border-color: #00450f; /* Цвет рамки при фокусе */
        box-shadow: 0 0 2px #00450f; /* Тень при фокусе */
    }







    .headline {
        height: 758px;
    }
    
    .headline-img {
        width: 100%;
        margin: 0 auto;
        padding: 0;
        position: absolute;
        top: 0;
        left: 0;
        height: auto;
        display: block;
        object-fit: cover;
        z-index: -1;
        background-size: cover;
        background-position: center;
    }
    
    .headline-image {
        width: 100%;
        height: auto;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }
    
    .menu-link-here {
        color: #FFFBA0;
    }
    
    .information {
        width: 100%;
        height: auto;
        background-color: #011208;
        padding: 150px 0px 15px;
        color: #FFFFFF;
        font-size: 20px;
        line-height: 1.5;
    }
    
    .kazan-video {
        width: 670px;
        border-radius: 40px;
    }
    
    .about-video {
        width: 700px;
        margin: 0;
    }
    
    .sun {
        float: left;
        display: block;
        margin: 5px 10px 10px 90px;
        font-size: 50px;
        font-weight: bolder;
    }
    
    .info {
        display: flex;
        align-items: flex-start;
    }
    
    .weather {
        float: left;
        display: block;
    }
    
    .tweather {
        margin: 0 0 10px 160px;
        font-size: 30px;
        font-weight: bolder;
        padding: 0;
    }
    
    .time {
        margin: 0 0 0 165px;
        font-size: 20px;
        padding: 0;
    }
    
    .temp {
        float: left;
        display: block;
        margin: -5px 0 0 160px;
        font-size: 50px;
    }
    
    .moon {
        float: left;
        display: block;
        margin: 30px 0 0 40px;
        font-size: 20px;
    }
    
    .state {
        margin: 15px 0 0 310px;
        font-size: 20px;
        color: #dddddd;
        padding: 0;
    }
    
    .feel {
        display: block;
        margin: 0 0 0 310px;
        font-size: 15px;
        color: #dddddd;
        padding: 0;
    }
    
    .news {
        width: 100%;
        height: auto;
        background-color: #011208;
        padding: 150px 0px 35px;
        color: #FFFFFF;
        font-size: 20px;
        line-height: 1.5;
    }
    
    .tnews {
        position: absolute;
        top: 1550px;
        font-size: 50px;
        font-weight: bolder;
        margin: 0;
    }
    
    .new {
        display: flex;
        align-items: flex-start;
        margin: 30px 0 0 0;
    }
    
    .new-img {
        margin: 0 15px 0 0;
    }
    
`;

export const Wrapper = styled.main`
    margin: 0 auto;
    max-width: 1200px;
    padding: 0;
`;

export const EducationCardWrapper = styled.section`
    margin: 30px 0;
    display: flex;
    justify-content: center;
`;
