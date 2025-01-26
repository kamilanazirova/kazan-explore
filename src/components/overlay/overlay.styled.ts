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
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
  background-color: rgb(255, 255, 255);
  padding: 10px 20px;
  border-radius: 15px;
  text-align: center;
  color: #000000;
  white-space: nowrap;
  margin-top: 50px;
  margin-right: 20px;
`;

export const Button2 = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
  background-color: transparent;
  padding: 10px 20px;
  border-radius: 15px;
  text-align: center;
  color: #ffffff;
  white-space: nowrap;
  margin-top: 50px;
  margin-right: 20px;
`;

export const Body = styled.p`
    font-size: 25px;
    line-height: 1.5;
    margin: 0;
    padding: 0;
`;