import React from "react";

import './events.styled';
import { Wrapper } from "../../global-styles";
import { TableEvents } from "./info-ins.styled";

export const InfjIns = ({
    name,
    first,
    second,
    third,
}) => (
    <>
        {name && (<h2>{name}</h2>)}
        <Wrapper>
            <TableEvents>
                <tr>
                    <td width="300">{first}</td>
                    <td width="300">{second}</td>
                    <td width="300">{third}</td>
                </tr>
            </TableEvents>
        </Wrapper>
    </>
);