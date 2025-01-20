import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import { Divider, List, ListItem, ListItemText, Typography } from "@mui/material";

const TestResultsList = ({ testResults }) => {
    const { t } = useTranslation();
    const [visibleCount, setVisibleCount] = useState(5); // Количество тестов, которые показываются изначально

    const handleShowMore = () => {
        setVisibleCount((prevCount) => prevCount + 5); // Увеличиваем число отображаемых тестов
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
                        {index < Math.min(visibleCount, testResults.length) - 1 && <Divider
                                sx={{
                                    width: '90%',
                                }}
                            />}
                    </React.Fragment>
                ))}
            </List>
            {hasMoreResults && (
                <Typography
                onClick={handleShowMore}
                sx={{
                    textAlign: 'center',
                    cursor: 'pointer',
                    color: 'primary.main',
                    fontWeight: 500,
                    position: 'relative',
                    display: 'inline-block',
                    '&:hover::after': {
                        transform: 'scaleX(1)',
                        opacity: 1,
                    },
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: -1,
                        left: 0,
                        right: 0,
                        margin: 'auto',
                        width: '100%',
                        height: 2, // Толщина линии
                        backgroundColor: 'primary.main',
                        transform: 'scaleX(0)', // Начальная ширина 0%
                        transformOrigin: 'center', // Начало трансформации из центра
                        transition: 'transform 0.3s ease, opacity 0.3s ease',
                        opacity: 0, // Линия скрыта до наведения
                    },
                }}
            >
                {t('profile.showMore')}
            </Typography>
            
            )}
        </>
    );
};

export default TestResultsList;
