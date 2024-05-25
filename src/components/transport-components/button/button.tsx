import React from "react";

import './button.styled';
import { BottonWrapper, StyledButton, TransportType } from "./button.styled";
import { Link } from "react-router-dom";


export function Button({ numbers, type }) {
    return (
        <BottonWrapper>
            <TransportType>{ type }</TransportType>
            {numbers.map((number) => (
                <StyledButton>
                    <Link to="" >
                        {`№${number}`}
                    </Link>
                </StyledButton>
            ))
            }
        </BottonWrapper >
    );
}
