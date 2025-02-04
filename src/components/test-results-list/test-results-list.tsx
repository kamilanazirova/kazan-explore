import React, { useState } from "react";
import { useTranslation } from 'react-i18next';

import { Divider, List, ListItem, ListItemText } from "@mui/material";
import { ClickTypography } from "./styled";


const TestResultsList = ({ testResults }) => {
    const { t } = useTranslation();
    const [visibleCount, setVisibleCount] = useState(3);

    const handleShowMore = () => {
        setVisibleCount((prevCount) => prevCount + 5);
    };

    const hasMoreResults = visibleCount < testResults.length;

    return (
        <>
            <List sx={{ pt: 0, pb: 0 }}>
                {testResults.slice(0, visibleCount).map((item, index) => (
                    <React.Fragment key={index}>
                        <ListItem>
                            <ListItemText
                                primary={t(`profile.quizIds.${item.quizId}`, { defaultValue: item.quizId })}
                                secondary={`${t('kazan-explore.profile.result')} ${item.result}%`}
                            />
                        </ListItem>
                        {(index < Math.min(visibleCount, testResults.length) - 1) &&
                            <Divider sx={{ width: '90%' }} />}
                    </React.Fragment>
                ))}
            </List>
            {hasMoreResults && (
                <ClickTypography onClick={handleShowMore}>
                    {t('kazan-explore.profile.show_more')}
                </ClickTypography>
            )}
        </>
    );
};

export default TestResultsList;
