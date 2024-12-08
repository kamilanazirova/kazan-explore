import React, { useContext } from "react";

import { Header } from "../../components/header";
import { Wrapper } from "../../global-styles";
import { LoginContext } from "../../context/login-context";
import {
    Box,
    Container,
    Typography,
    Avatar,
    Paper,
    List,
    ListItem,
    ListItemText,
    Divider,
    Button,
} from "@mui/material";

const testResults = [
    { testName: "История города", score: 85 },
    { testName: "Знание районов", score: 92 },
];

const Profile = () => {
    const { currentUser } = useContext(LoginContext);

    return (
        <>
            <Header />
            <Wrapper>
                <Container maxWidth="sm" sx={{ mt: 8 }}>
                    <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
                        <Box display="flex" alignItems="center" mb={4}>
                            <Avatar sx={{ bgcolor: "primary.main", mr: 2, width: 56, height: 56 }}>
                                {currentUser?.email.charAt(0).toUpperCase()}
                            </Avatar>
                            <Box>
                                <Typography variant="body1"
                                    color="text.secondary">
                                    Личный кабинет
                                </Typography>
                                <Typography
                                    variant="h6" fontWeight="bold"
                                    display="flex"
                                    alignItems="center"
                                >
                                    {currentUser?.email}
                                </Typography>
                            </Box>
                        </Box>
                        <Divider />
                        <Typography variant="h6" mt={3} mb={2}>
                            Результаты тестов
                        </Typography>
                        {testResults.length > 0 ? (
                            <List>
                                {testResults.map((result, index) => (
                                    <React.Fragment key={index}>
                                        <ListItem>
                                            <ListItemText
                                                primary={result.testName}
                                                secondary={`Результат: ${result.score}%`}
                                            />
                                        </ListItem>
                                        {index < testResults.length - 1 && <Divider />}
                                    </React.Fragment>
                                ))}
                            </List>
                        ) : (
                            <Typography variant="body2" color="text.secondary">
                                Вы еще не проходили тесты.
                            </Typography>
                        )}

                        <Box mt={4} textAlign="center">
                            <Button variant="contained" color="primary">
                                Пройти новый тест
                            </Button>
                        </Box>
                    </Paper>
                </Container>
            </Wrapper>
        </>
    );
};

export default Profile