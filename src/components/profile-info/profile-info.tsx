import React from "react";
import { useTranslation } from 'react-i18next';

import { UserAvatar } from "../user-avatar";
import { useUser } from "../../hooks/useUser";
import { InfoTextBox, StyledEmail, InfoLabel, InfoTitle, UserInfoBox } from "./styled";

const ProfileInfo = () => {
    const { t } = useTranslation()

    const { user } = useUser();

    return (
        <UserInfoBox>
            <UserAvatar name={user?.name} variant="medium" />
            <InfoTextBox>
                <InfoLabel>{t('profile.title')}</InfoLabel>
                <InfoTitle variant="h6">
                    {user?.name}
                    <StyledEmail variant="body2">{`(${user?.email})`}</StyledEmail>
                </InfoTitle>
            </InfoTextBox>
        </UserInfoBox>
    );
}

export default ProfileInfo;