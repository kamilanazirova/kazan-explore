import React, { useContext } from "react";

import { Box, Typography } from "@mui/material";
import { UserAvatar } from "../user-avatar";

import { LoginContext } from "../../context/login-context";

const ProfileInfo = () => {
    const { currentUser } = useContext(LoginContext);

    return (
        <Box display="flex" alignItems="center" mb={2}>
        <UserAvatar email={currentUser?.email} variant={'medium'} />
        <Box>
            <Typography variant="body1"
                color="text.secondary">
                Личный кабинет
            </Typography>
            <Typography
                variant="h6" fontWeight="bold"
                display="flex"
                alignItems="center"
            >
                {currentUser?.email}
            </Typography>
        </Box>
    </Box>
    );
}

export default ProfileInfo;