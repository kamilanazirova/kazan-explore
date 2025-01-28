import React from "react";
import { useTranslation } from 'react-i18next';

import { Wrapper, Text, H3 } from "./schedule.styled";


export const Schedule = ({
    id,
    from,
    to,
    route_length,
    operating_mode_weekdays,
    operating_mode_weekend
}) => {
    const { t } = useTranslation()

    return (
        <Wrapper>
            <Text>
                <H3>{t('kazan-explore.transport.schedule')} №{id} ({from} — {to})</H3>
                <p>{t('kazan-explore.transport.route_length')} — {route_length}</p>
                <p>{t('kazan-explore.transport.operating_mode')}:</p>
                <p>{operating_mode_weekdays}</p>
                <p>{operating_mode_weekend}</p>
            </Text>
        </Wrapper>
    );
};
