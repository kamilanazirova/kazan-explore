import React, { useState, useContext } from "react";
import { useTranslation } from 'react-i18next';

import { Header } from "../../components/header";
import { Wrapper } from "../../global-styles";
import { URLs } from "../../__data__/urls";
import { Enter, EnterField, EntranceState, Form, FormLabel, FormLink, InputField } from "./login.styled";
import { LoginContext } from "../../context/login-context";

interface contextUser {
    currentUser: {
        email: string;
    };
    setCurrentUser: React.Dispatch<React.SetStateAction<{ email: string }>>;
}

const Login = () => {
    const { t } = useTranslation()

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
                .then((response) => {
                    if (!response.ok) {
                        return response.text().then((errorMessage) => {
                            alert(errorMessage);
                            throw new Error(errorMessage);
                        })
                    }
                    return response.json();
                })
                .then((data) => {
                    setCurrentUser({ email: data.email });
                    location.replace(`${URLs.baseUrl}`);
                })

        } catch (error) {
            console.error(t('error.login_error'), error);
            alert(t('error.login_error'));
        }
    };

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        if (registerData.password !== registerData.confirmPassword) {
            alert(t('error.passwords_do_not_match'));
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
            setCurrentUser({ email: data.email });
            location.replace(`${URLs.baseUrl}`);
        } catch (error) {
            console.error(t('error.registration_error'), error);
            alert(t('error.registration_error'));
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
            alert(t('error.passwords_do_not_match'));
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

            alert(t('error.password_restored'));
            setCurrentUser({ email: registerData.email });
            location.replace(`${URLs.baseUrl}`);
        } catch (error) {
            console.error(t('error.recovery_error'), error);
            alert(t('error.recovery_error'));
        }
    };


    return (
        <>
            <Header />
            <Wrapper>
                {currentLocation === 'entrance' &&
                    <Form onSubmit={handleEntranceSubmit}>
                        <EntranceState>{t('login.entrance')}</EntranceState>

                        <FormLabel>{t('login.login')}</FormLabel>
                        <InputField type="email"
                            name="email"
                            placeholder={t('login.enter_email')}
                            value={entranceData.email} onChange={handleInputChange}
                        />

                        <FormLabel>{t('login.password')}</FormLabel>
                        <InputField type="password"
                            name="password"
                            placeholder={t('login.enter_password')}
                            value={entranceData.password} onChange={handleInputChange} />

                        <Enter>
                            <EnterField type="submit">{t('login.entrance_botton')}</EnterField>
                        </Enter>
                        <Enter>
                            {t('login.no_account')} <FormLink href={URLs.ui.registration}> {t('login.go_to_registration')}</FormLink>
                        </Enter>
                        <Enter>
                            {t('login.forgete_password')} <FormLink href={URLs.ui.recover}>{t('login.go_to_recovery')}</FormLink>
                        </Enter>
                    </Form>}

                {currentLocation === 'registration' &&
                    <Form onSubmit={handleRegisterSubmit}>

                        <EntranceState>{t('login.registration')}</EntranceState>
                        <FormLabel>{t('login.name')}</FormLabel>
                        <InputField type="text"
                            name="name"
                            placeholder={t('login.enter_name')}
                            value={registerData.name} onChange={handleInputChange}
                        />

                        <FormLabel>Email</FormLabel>
                        <InputField type="email"
                            name="email"
                            placeholder={t('login.enter_email')}
                            value={registerData.email} onChange={handleInputChange}
                        />

                        <FormLabel>{t('login.password')}</FormLabel>
                        <InputField type="password"
                            name="password"
                            placeholder={t('login.enter_password')}
                            value={registerData.password} onChange={handleInputChange} />

                        <FormLabel>{t('login.repeat_password')}</FormLabel>
                        <InputField type="password"
                            name="confirmPassword"
                            placeholder={t('login.enter_password')}
                            value={registerData.confirmPassword} onChange={handleInputChange} />

                        <Enter>
                            <EnterField type="submit" onSubmit={handleRegisterSubmit}>{t('login.go_to_registration')}</EnterField>
                        </Enter>
                        <Enter>
                            {t('login.already_have_account')} <FormLink href={URLs.ui.entrance}>{t('login.entrance_botton')}</FormLink>
                        </Enter>
                    </Form>}

                {currentLocation === 'recover' &&
                    <Form onSubmit={handleRecoverSubmit}>
                        <EntranceState>{t('login.recovery')}</EntranceState>

                        <FormLabel>Email</FormLabel>
                        <InputField type="email"
                            name="email"
                            placeholder={t('login.enter_email')}
                            value={registerData.email} onChange={handleInputChange}
                        />

                        <FormLabel>{t('login.create_a_new_password')}</FormLabel>
                        <InputField type="password"
                            name="password"
                            placeholder={t('login.enter_password')}
                            value={registerData.password} onChange={handleInputChange} />

                        <FormLabel>{t('login.repeat_password')}</FormLabel>
                        <InputField type="password"
                            name="confirmPassword"
                            placeholder={t('login.enter_password')}
                            value={registerData.confirmPassword} onChange={handleInputChange} />


                        <EnterField type="submit" onSubmit={handleRecoverSubmit}>{t('login.set_a_new_password')}</EnterField>
                        <Enter>
                        {t('login.already_have_account')} <FormLink href={URLs.ui.entrance}>{t('login.entrance_botton')}</FormLink>
                        </Enter>
                    </Form>}
            </Wrapper>
        </>
    );
};

export default Login;