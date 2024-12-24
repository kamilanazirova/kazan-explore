import React, { useState } from "react";

import { Header } from "../../components/header";
import { CircularProgress } from "@mui/material"
import { Wrapper } from "../../global-styles";
import { Enter, EnterField, EntranceState, Form, FormLabel, FormLink, InputField } from "./login.styled";

import { usersApi } from "../../__data__/service/users-api";
import { LoginData } from "../../__data__/model/common";
import { URLs } from "../../__data__/urls";
import { useUser } from "../../hooks/useUser";

const Login = () => {
    const currentLocation = location.pathname.split('/').pop();
    const { saveUser } = useUser();
    const [entranceData, setEntranceData] = useState<LoginData>({
        email: '',
        password: ''
    });
    const [registerData, setRegisterData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [getUserFromLogin, { isLoading: isLoginLoading }] = usersApi.useGetUserFromLoginMutation();
    const [getUserFromRegister, { isLoading: isRegisterLoading }] = usersApi.useGetUserFromRegisterMutation();
    const [getUserFromRecover, { isLoading: isRecoverLoading }] = usersApi.useGetUserFromRecoverMutation();

    const handleEntranceSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = await getUserFromLogin(entranceData).unwrap();
            saveUser(data);
            location.replace(`${URLs.baseUrl}`);
        } catch (error) {
            alert(error.message || 'Ошибка при входе');
            console.error('Ошибка при входе:', error);
        }
    };

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();

        if (registerData.password !== registerData.confirmPassword) {
            alert('Пароли не совпадают');
            return;
        }

        try {
            const data = await getUserFromRegister({
                name: registerData.name,
                email: registerData.email,
                password: registerData.password
            }).unwrap();
            saveUser(data);
            location.replace(`${URLs.baseUrl}`);
        } catch (error) {
            console.error('Ошибка при регистрации:', error);
            alert(error.message || 'Ошибка при регистрации');
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
            await getUserFromRecover({
                email: registerData.email,
                password: registerData.password
            }).unwrap()
                .then((data) => {
                    saveUser(data);
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
                        {URLs.ui.recover && <Enter>
                            Забыли пароль? <FormLink href={URLs.ui.recover}>Восстановить</FormLink>
                        </Enter>}
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