import React from "react";

import { Header } from "../../components/header";
import { Wrapper } from "../../global-styles";
import { Link } from "react-router-dom";
import { URLs } from "../../__data__/urls";
import { CreateAccount, EnterField, EntranceState, InputField, Login } from "../../components/login/login.styled";

const Registration = () => {
    return (
        <>
            <Header />
            <Wrapper>
                <Login>
                    <EntranceState>Регистрация</EntranceState>
                    <form action="login.php" method="post">
                        <InputField className="input-field" type="text" name="username_or_email" placeholder="Имя пользователя" />
                        <br />
                        <InputField className="input-field" type="password" name="password" placeholder="Пароль" />
                        <br />
                        <InputField className="input-field" type="password" name="password" placeholder="Подтвердите пароль" />
                        <br />
                        <Link to={URLs.baseUrl}>
                            <EnterField className="enter-field" type="submit" value="Зарегистрироваться" />
                        </Link>
                        <br />
                        <Link to={URLs.ui.entrance}>
                            <CreateAccount className="create-account" type="submit" value="Уже есть аккаунт" />
                        </Link>
                        <br />
                    </form>
                </Login>
            </Wrapper>
        </>
    );
};

export default Registration;
