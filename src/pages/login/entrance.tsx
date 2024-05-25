import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { Header } from "../../components/header";
import { Wrapper } from "../../global-styles";
import { URLs } from "../../__data__/urls";
import { CreateAccount, EnterField, EntranceState, InputField, Login, } from "../../components/login/login.styled";

const Entrance = () => {


    const [searchValue] = useState("");
    const [searchValueError, setSearchValueError] = useState(false);

    const searchInputRef = useRef<any>();

    useEffect(() => {
        searchInputRef.current.focus();
    }, []);

    useEffect(() => {
        if (/\d/.test(searchValue)) {
            setSearchValueError(true)
        } else {
            setSearchValueError(false)
        }
    }, [searchValue])

    return (
        <>
            <Header />
            <Wrapper>
                <Login>
                    <EntranceState>Вход</EntranceState>
                    <form action="login.php" method="post">
                        <InputField ref={searchInputRef} className="input-field" type="text" name="username_or_email" 
                        placeholder="Имя пользователя" />
                        {searchValueError && <span style={{ color: 'red', display: 'flex'}}>Ай яй</span>}
                        <br />
                        <InputField 
                        // onKeyUp={this.value = this.value.replace(/\d/g, '')}
                        className="input-field" type="password" name="password" placeholder="Пароль" />
                        <br />
                        <Link to={URLs.baseUrl}>
                            <EnterField className="enter-field" type="submit" value="Войти" />
                        </Link>
                        <br />
                        <Link to={URLs.ui.registration}>
                            <CreateAccount className="create-account" type="submit" value="Зарегистрироваться" />
                        </Link>
                        <br />
                    </form>
                </Login>
            </Wrapper>
        </>
    );
};

export default Entrance;
