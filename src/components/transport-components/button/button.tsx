import React from "react";

import './button.styled';
import { BottonWrapper, StyledButton, TransportType } from "./button.styled";


export function Button({ numbers, type, onBusClick }) {
    return (
        <BottonWrapper>
            <TransportType>{type}</TransportType>
            {numbers?.map((number, index) => (
                <StyledButton  onClick={() => onBusClick(number)} key={index}>
                        {`№${number}`}
                </StyledButton>
            ))
            }
        </BottonWrapper >
    );
}
