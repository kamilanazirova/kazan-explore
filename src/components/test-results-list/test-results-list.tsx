import React from "react";

import { Divider, List, ListItem, ListItemText } from "@mui/material";

const TestResultsList = ({testResults}) => {
    return (
        <List sx={{pt:0}}>
            {testResults.map((test, index) => (
                <React.Fragment key={index}>
                    <ListItem>
                        <ListItemText
                            primary={test.name}
                            secondary={`Результат: ${test.score}%`}
                        />
                    </ListItem>
                    {index < testResults.length - 1 && <Divider />}
                </React.Fragment>
            ))}
        </List>
    );
};

export default TestResultsList;