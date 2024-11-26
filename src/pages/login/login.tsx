import React, { useState, useContext } from "react";

import { Header } from "../../components/header";
import { Wrapper } from "../../global-styles";
import { URLs } from "../../__data__/urls";
import { Enter, EnterField, EntranceState, Form, FormLabel, FormLink, InputField } from "./login.styled";
import { LoginContext } from "../../context/login-context";

interface contextUser {
    currentUser: {
        email: string;
    };
    setCurrentUser: React.Dispatch<React.SetStateAction<{ email: string}>>;
}

const Login = () => {
    const currentLocation = location.pathname.split('/').pop();
    const { setCurrentUser } = useContext<contextUser>(LoginContext)

    const [entranceData, setEntranceData] = useState({
        email: '',
        password: ''
    });

    const [registerData, setRegisterData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleEntranceSubmit = async (e) => {
        e.preventDefault();

        try {
            fetch(`${URLs.api.main}/entrance`, {
                method: 'POST',
                body: JSON.stringify({
                    entranceData: entranceData
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then((response)=>{
                if (!response.ok) {
                return response.text().then((errorMessage)=>{
                    alert(errorMessage);
                    throw new Error(errorMessage);})
            }
                return response.json();
            })
            .then((data) => {
                setCurrentUser({ email: data.email});
                location.replace(`${URLs.baseUrl}`);
            })

        } catch (error) {
            console.error('Ошибка при входе:', error);
            alert('Ошибка при входе');
        }
    };

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        if (registerData.password !== registerData.confirmPassword) {
            alert('Пароли не совпадают');
            return;
        }

        try {
            const response = await fetch(`${URLs.api.main}/registration`, {
                method: 'POST',
                body: JSON.stringify({
                    registerData: registerData
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                const errorMessage = await response.text();
                alert(errorMessage);
                throw new Error(errorMessage);
            }

            const data = await response.json();
            setCurrentUser({ email: data.email});
            location.replace(`${URLs.baseUrl}`);
        } catch (error) {
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
            // Предположим, что восстановление пароля также требует запроса на сервер
            const response = await fetch(`${URLs.api.main}/recover`, {
                method: 'POST',
                body: JSON.stringify({
                    registerData: registerData
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                const errorMessage = await response.text();
                alert(errorMessage);
                throw new Error(errorMessage);
            }

            alert('Пароль восстановлен');
            setCurrentUser({ email: registerData.email});
            location.replace(`${URLs.baseUrl}`);
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
                            <EnterField type="submit">Войти</EnterField>
                        </Enter>
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
                            <EnterField type="submit" onSubmit={handleRegisterSubmit}>Зарегистрироваться</EnterField>
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


                        <EnterField type="submit" onSubmit={handleRecoverSubmit}>Установить новый пароль</EnterField>
                        <Enter>
                            Уже есть аккаунт? <FormLink href={URLs.ui.entrance}>Войти</FormLink>
                        </Enter>
                    </Form>}
            </Wrapper>
        </>
    );
};

export default Login;