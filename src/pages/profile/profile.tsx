import React from "react";

import { Header } from "../../components/header";
import { Wrapper } from "../../global-styles";
import { ProfilePanel } from "../../components/profile-panel";

const Profile = () => {
    return (
        <>
            <Header />
            <Wrapper>
                <ProfilePanel/>
            </Wrapper>
        </>
    );
};

export default Profile