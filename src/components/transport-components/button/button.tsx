import React from "react";

import './button.styled';
import { BottonWrapper, StyledButton, TransportType } from "./button.styled";
import { Link } from "react-router-dom";
import { URLs } from "../../../__data__/urls";
import { Map } from "../../transport-components/map";
import map from '../../../assets/transport/trips/1.png'


export function Button({ numbers, type }) {
    return (
        <BottonWrapper>
            <TransportType>{type}</TransportType>
            {numbers.map((number, index) => (
                <StyledButton key={index}>
                    <Link to={URLs.tripNumber.getUrl(number)} >
                        {`№${number}`}
                    </Link>
                </StyledButton>
            ))
            }
            <Map index="" image={map} />
        </BottonWrapper >
    );
}
