import React from "react";
import { useTranslation } from 'react-i18next';

import { Divider, List, ListItem, ListItemText } from "@mui/material";

const TestResultsList = ({testResults}) => {
    const { t } = useTranslation()

    return (
        <List sx={{pt:0}}>
            {testResults.map((test, index) => (
                <React.Fragment key={index}>
                    <ListItem>
                        <ListItemText
                            primary={test.name}
                            secondary={`${t('profile.result')} ${test.score}%`}
                        />
                    </ListItem>
                    {index < testResults.length - 1 && <Divider />}
                </React.Fragment>
            ))}
        </List>
    );
};

export default TestResultsList;