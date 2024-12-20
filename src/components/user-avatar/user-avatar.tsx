import React from "react"
import { StyledAvatar } from "./styled";

const UserAvatar = ({ email, variant='small' }: { email: string; variant: 'small' | 'medium' | 'large' }) => {
    return (
        <StyledAvatar variant={variant}>
            {email?.charAt(0).toUpperCase()}
        </StyledAvatar>
    );
};

export default UserAvatar;