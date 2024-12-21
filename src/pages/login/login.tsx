import React, { useState, useContext } from "react";

import { Header } from "../../components/header";
import { Wrapper } from "../../global-styles";
import { URLs } from "../../__data__/urls";
import { Enter, EnterField, EntranceState, Form, FormLabel, FormLink, InputField } from "./login.styled";
import { LoginContext } from "../../context/login-context";
import { mainApi } from "../../__data__/service/main-api";
import { LoginData, RegisterData } from "../../__data__/model/common";
import { CircularProgress } from "@mui/material"

interface contextUser {
    currentUser: {
        email: string;
    };
    setCurrentUser: React.Dispatch<React.SetStateAction<{ email: string }>>;
}

const Login = () => {
    const currentLocation = location.pathname.split('/').pop();
    const { setCurrentUser } = useContext<contextUser>(LoginContext);
    const [entranceData, setEntranceData] = useState<LoginData>({
        email: '',
        password: ''
    });
    const [registerData, setRegisterData] = useState<RegisterData>({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [getUserFromLogin, { isLoading: isLoginLoading }] = mainApi.useGetUserFromLoginMutation();
    const [getUserFromRegister, { isLoading: isRegisterLoading }] = mainApi.useGetUserFromRegisterMutation();
    const [getUserFromRecover, { isLoading: isRecoverLoading }] = mainApi.useGetUserFromRecoverMutation();

    const handleEntranceSubmit = async (e) => {
        e.preventDefault();

        try {
            await getUserFromLogin(entranceData).unwrap()
                .then((userData) => {
                    setCurrentUser({ email: userData.email });
                    location.replace(`${URLs.baseUrl}`);
                })
                .catch((error) => {
                    alert(error.text);
                    console.log(error.text)
                })
        }
        catch (error) {
            console.error('Ошибка при входе:', error);
            alert(`Ошибка при входе: ${error}`);
        }
    };

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();

        if (registerData.password !== registerData.confirmPassword) {
            alert('Пароли не совпадают');
            return;
        }

        try {
            await getUserFromRegister(registerData).unwrap()
                .then((userData) => {
                    setCurrentUser({ email: userData.email });
                    location.replace(`${URLs.baseUrl}`);
                })
                .catch((error) => {
                    alert(error.text);
                    console.log(error.text)
                })
        }
        catch (error) {
            console.error('Ошибка при регистрации:', error);
            alert('Ошибка при регистрации');
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (currentLocation === 'entrance') {
            setEntranceData({ ...entranceData, [name]: value });
        } else if (currentLocation === 'registration') {
            setRegisterData({ ...registerData, [name]: value });
        } else if (currentLocation === 'recover') {
            setRegisterData({ ...registerData, [name]: value });
        }
    };

    const handleRecoverSubmit = async (e) => {
        e.preventDefault();
        if (registerData.password !== registerData.confirmPassword) {
            alert('Пароли не совпадают');
            return;
        }

        try {
            await getUserFromRecover(registerData).unwrap()
                .then((userData) => {
                    setCurrentUser({ email: userData.email });
                    location.replace(`${URLs.baseUrl}`);
                })
                .catch((error) => {
                    alert(error.text);
                    console.log(error.text)
                })
        } catch (error) {
            console.error('Ошибка при восстановлении пароля:', error);
            alert('Ошибка при восстановлении пароля');
        }
    };

    return (
        <>
            <Header />
            <Wrapper>
                {currentLocation === 'entrance' &&
                    <Form onSubmit={handleEntranceSubmit}>
                        <EntranceState>Вход</EntranceState>

                        <FormLabel>Логин</FormLabel>
                        <InputField type="email"
                            name="email"
                            placeholder="Введите email"
                            value={entranceData.email} onChange={handleInputChange}
                        />

                        <FormLabel>Пароль</FormLabel>
                        <InputField type="password"
                            name="password"
                            placeholder="Введите пароль"
                            value={entranceData.password} onChange={handleInputChange} />
                        <Enter>
                            {!isLoginLoading && <EnterField type="submit">Войти</EnterField>}
                            {isLoginLoading && <CircularProgress />}</Enter>
                        <Enter>
                            Нет аккаунта? <FormLink href={URLs.ui.registration}> Зарегистрироваться</FormLink>
                        </Enter>
                        <Enter>
                            Забыли пароль? <FormLink href={URLs.ui.recover}>Восстановить</FormLink>
                        </Enter>
                    </Form>}

                {currentLocation === 'registration' &&
                    <Form onSubmit={handleRegisterSubmit}>

                        <EntranceState>Регистрация</EntranceState>
                        <FormLabel>Имя</FormLabel>
                        <InputField type="text"
                            name="name"
                            placeholder="Введите имя"
                            value={registerData.name} onChange={handleInputChange}
                        />

                        <FormLabel>Email</FormLabel>
                        <InputField type="email"
                            name="email"
                            placeholder="Введите email"
                            value={registerData.email} onChange={handleInputChange}
                        />

                        <FormLabel>Пароль</FormLabel>
                        <InputField type="password"
                            name="password"
                            placeholder="Введите пароль"
                            value={registerData.password} onChange={handleInputChange} />

                        <FormLabel>Повторите пароль</FormLabel>
                        <InputField type="password"
                            name="confirmPassword"
                            placeholder="Введите пароль"
                            value={registerData.confirmPassword} onChange={handleInputChange} />
                        <Enter>
                            {!isRegisterLoading && <EnterField type="submit">Зарегистрироваться</EnterField>}
                            {isRegisterLoading && <CircularProgress />}
                        </Enter>
                        <Enter>
                            Уже есть аккаунт? <FormLink href={URLs.ui.entrance}>Войти</FormLink>
                        </Enter>
                    </Form>}

                {currentLocation === 'recover' &&
                    <Form onSubmit={handleRecoverSubmit}>
                        <EntranceState>Восстановление пароля</EntranceState>

                        <FormLabel>Email</FormLabel>
                        <InputField type="email"
                            name="email"
                            placeholder="Введите email"
                            value={registerData.email} onChange={handleInputChange}
                        />

                        <FormLabel>Придумайте новый пароль</FormLabel>
                        <InputField type="password"
                            name="password"
                            placeholder="Введите пароль"
                            value={registerData.password} onChange={handleInputChange} />

                        <FormLabel>Повторите пароль</FormLabel>
                        <InputField type="password"
                            name="confirmPassword"
                            placeholder="Введите пароль"
                            value={registerData.confirmPassword} onChange={handleInputChange} />
                        <Enter>
                            {!isRecoverLoading && <EnterField type="submit">Установить новый пароль</EnterField>}
                            {isRecoverLoading && <CircularProgress />}
                        </Enter>
                        <Enter>
                            Уже есть аккаунт? <FormLink href={URLs.ui.entrance}>Войти</FormLink>
                        </Enter>
                    </Form>}
            </Wrapper>
        </>
    );
};

export default Login;