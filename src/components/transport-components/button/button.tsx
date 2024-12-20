import React from "react";

import './button.styled';
import { BottonWrapper, StyledButton, TransportType } from "./button.styled";
import { Link } from "react-router-dom";
import { URLs } from "../../../__data__/urls";
/* import { Map } from "../../transport-components/map";
import map from '../../../assets/transport/trips/1.png' */


export function Button({ numbers, type, onBusClick }) {
    return (
        <BottonWrapper>
            <TransportType>{type}</TransportType>
            {numbers?.map((number, index) => (
                <StyledButton  onClick={() => onBusClick(number)} key={index}>
                    {/* <Link to={URLs.ui.tripNumber.getUrl(number)} > */}
                        {`№${number}`}
                    {/* </Link> */}
                </StyledButton>
            ))
            }
            {/* <Map index="" image={map} /> */}
        </BottonWrapper >
    );
}
