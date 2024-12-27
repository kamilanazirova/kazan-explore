import React, { useState } from "react";

import { Header } from "../../components/header";
import { CircularProgress } from "@mui/material"
import { Wrapper } from "../../global-styles";
import { Enter, EnterField, EntranceState, Form, FormLabel, FormLink, InputField } from "./login.styled";
import { useTranslation } from 'react-i18next';
import { usersApi } from "../../__data__/service/users-api";
import { LoginData } from "../../__data__/model/common";
import { URLs } from "../../__data__/urls";
import { useUser } from "../../hooks/useUser";

const Login = () => {
    const { t } = useTranslation()

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
            alert(error.message || t('error.login_error'));
            console.error(t('error.login_error'), error);
        }
    };

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();

        if (registerData.password !== registerData.confirmPassword) {
            alert(t('error.passwords_do_not_match'));
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
            console.error(t('error.registration_error'), error);
            alert(error.message || t('error.registration_error'));
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
                            {!isLoginLoading && <EnterField type="submit">{t('login.entrance_botton')}</EnterField>}
                            {isLoginLoading && <CircularProgress />}</Enter>
                        <Enter>
                            {t('login.no_account')} <FormLink href={URLs.ui.registration}> {t('login.go_to_registration')}</FormLink>
                        </Enter>
                        {URLs.ui.recover && <Enter>
                            {t('login.forgete_password')} <FormLink href={URLs.ui.recover}>{t('login.go_to_recovery')}</FormLink>
                        </Enter>}
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
                            {!isRegisterLoading && <EnterField type="submit">{t('login.go_to_registration')}</EnterField>}
                            {isRegisterLoading && <CircularProgress />}
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
                        <Enter>
                            {!isRecoverLoading && <EnterField type="submit">{t('login.set_a_new_password')}</EnterField>}
                            {isRecoverLoading && <CircularProgress />}
                        </Enter>
                        <Enter>
                        {t('login.already_have_account')} <FormLink href={URLs.ui.entrance}>{t('login.entrance_botton')}</FormLink>
                        </Enter>
                    </Form>}
            </Wrapper>
        </>
    );
};

export default Login;