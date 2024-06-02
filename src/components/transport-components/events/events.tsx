import React from "react";

import './events.styled';
import { Wrapper } from "../../../global-styles";
import { TableEvents, Td } from "./events.styled";

export const Events = ({
    month,
    name,
    body,
    place
}) => (
    <>
        {month && (<h3>{month}</h3>)}
        <Wrapper>
            <TableEvents>
                <tbody>
                    <tr>
                        <Td width="400">{name}</Td>
                        <Td width="400">{body}</Td>
                        <Td width="400">{place}</Td>
                    </tr>
                </tbody>
            </TableEvents>
        </Wrapper>
    </>
);
