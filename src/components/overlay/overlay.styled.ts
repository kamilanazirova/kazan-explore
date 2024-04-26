import styled from "@emotion/styled";

export const StyledOverlay = styled.div` 
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1000px;
    height: 450px;
    top: 600px;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 40px;
    padding: 60px;
    backdrop-filter: blur(2px);
`;

export const Head = styled.h1`
    padding: 0;
    font-size: 70px;
    margin: 30px 0;
`;

export const Button1 = styled.div`
    position: absolute;
    top: 400px;
    width: max-content;
    left: 45px;
    border: 2px solid white;
    background-color: rgb(255, 255, 255);
    padding: 10px 10px;
    border-radius: 15px;
    text-align: center;
    margin: 20px 0;
    color: #000000;
`;

export const Button2 = styled.div` 
    position: absolute;
    top: 400px;
    width: max-content;
    left: 250px;
    border: 2px solid white;
    background-color: transparent;
    padding: 10px 10px;
    border-radius: 15px;
    text-align: center;
    margin: 20px 0;
    color: #ffffff;
`;

export const Icon = styled.img`
    position: absolute;
    top: 396px;
    left: 530px;
    padding: 10px 10px;
    text-align: center;
    margin: 20px 0;
`;

export const Body = styled.p`
    font-size: 25px;
    line-height: 1.5;
    margin: 0;
    padding: 0;
`;