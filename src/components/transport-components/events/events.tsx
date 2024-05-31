import React, { useState, useEffect } from "react";

import './events.styled';
import { Wrapper } from "../../../global-styles";
import { TableEvents } from "./events.styled";

export const Events = ({
    month,
    name,
    body,
    place
}) => (
    <>
        {month && (<h2>{month}</h2>)}
        <Wrapper>
            <TableEvents>
                <tr>
                    <td width="300">{name}</td>
                    <td width="500">{body}</td>
                    <td width="400">{place}</td>
                </tr>
            </TableEvents>
        </Wrapper>
    </>
);
