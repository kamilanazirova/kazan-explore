import React from "react";

import './button.styled';
import { StyledButton } from "./button.styled";


export function Button({ numbers }) {
    return (
        <div>
            {numbers.map((number) => (
                <StyledButton>{`№${number}`}</StyledButton>
            ))}
        </div>
    );
}
