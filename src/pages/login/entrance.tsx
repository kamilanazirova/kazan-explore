import React from "react";

import { Header } from "../../components/header";
import { Wrapper } from "../../global-styles";
import { Link } from "react-router-dom";
import { URLs } from "../../__data__/urls";

const Entrance = () => {
    return (
        <>
            <Header />
            <Wrapper>
                <div className="login">
                    <h1 className="entrance">Вход</h1>
                    <form action="login.php" method="post">
                        <input className="input-field" type="text" name="username_or_email" placeholder="Имя пользователя" />
                        <br />
                        <input className="input-field" type="password" name="password" placeholder="Пароль" />
                        <br />
                        <Link to="">
                            <input className="enter-field" type="submit" value="Войти" />
                        </Link>
                        <br />
                        <Link to={URLs.ui.registration}>
                            <input className="create-account" type="submit" value="Зарегистрироваться" />
                        </Link>
                        <br />
                    </form>
                </div>
            </Wrapper>
        </>
    );
};

export default Entrance;
