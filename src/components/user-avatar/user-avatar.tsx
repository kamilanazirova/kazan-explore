import React from "react"
import { StyledAvatar } from "./styled";

const UserAvatar = ({ name, variant='small' } : { name: string; variant: 'small' | 'medium' | 'large' }) => {
    return (
        <StyledAvatar variant={variant}>
            {name?.charAt(0).toUpperCase()}
        </StyledAvatar>
    );
};

export default UserAvatar;