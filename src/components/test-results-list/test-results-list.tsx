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
                {testResults.slice(0, visibleCount).map((test, index) => (
                    <React.Fragment key={index}>
                        <ListItem>
                            <ListItemText
                                primary={test.name}
                                secondary={`${t('profile.result')} ${test.score}%`}
                            />
                        </ListItem>
                        {(index < Math.min(visibleCount, testResults.length) - 1) &&
                            <Divider sx={{ width: '90%' }} />}
                    </React.Fragment>
                ))}
            </List>
            {hasMoreResults && (
                <ClickTypography onClick={handleShowMore}>
                    {t('profile.show_more')}
                </ClickTypography>
            )}
        </>
    );
};

export default TestResultsList;
