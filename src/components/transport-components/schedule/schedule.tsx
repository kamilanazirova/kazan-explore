import React from "react";

import { Wrapper, Text, H3 } from "./schedule.styled";

export const Schedule = ({
    id,
    from,
    to,
    route_length,
    operating_mode_weekdays,
    operating_mode_weekend
}) => (

    <Wrapper>
        <Text>
            <H3>Маршрут №{id} ({from} — {to})</H3>
            <p>Протяженность маршрута — {route_length}</p>
            <p>Режим работы:</p>
            <p>{operating_mode_weekdays}</p>
            <p>{operating_mode_weekend}</p>
        </Text>
    </Wrapper>
);
