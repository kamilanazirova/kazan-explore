import styled from "@emotion/styled";


export const Login = styled.div`
    margin: 130px auto;
    padding: 20px 0;
    max-width: 500px;
    text-align: center;
    background-color: #D9D9D9;
    border-radius: 30px;
`;

export const EntranceState = styled.h1`
    color: #000000;
    margin: 20px;
`;

export const InputField = styled.input`
    width: 400px;
    height: 50px;
    margin: 10px;
    padding: 0 10px;
    font-size: 16px;
    border: 2px solid;
    border-radius: 15px;
    border-color: #00450f;
    background-color: #D9D9D9;
    color: #000000;
`;

export const InputFieldFocus = styled.input`
    outline: none; /* Убираем стандартный контур при фокусе */
    border-color: #00450f; /* Цвет рамки при фокусе */
    box-shadow: 0 0 2px #00450f; /* Тень при фокусе */
`;
export const EnterField = styled.input`
    height: 40px;
    margin: 20px 0 10px 0;
    padding: 0 10px;
    font-size: 16px;
    border: 2px solid;
    border-radius: 15px;
    border-color: #D9D9D9;
    background-color: #005710;
    color: #ebebeb;
`;

export const CreateAccount  = styled.input`
    color: #848484;
    border: solid #D9D9D9;
    background-color: #D9D9D9;
    font-size: 14px;
    margin: 0 0 10px 0;
`;
