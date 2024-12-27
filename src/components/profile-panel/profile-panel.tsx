import React from "react";

import {
    Box,
    Container,
    Typography,
    Paper,
    Divider,
    Button,
} from "@mui/material";
import { TestResultsList } from "../../components/test-results-list";
import { ResultsLabel } from "./styled";
import { ProfileInfo } from "../profile-info";

const kazanTests = [
    { name: "История города", score: 85 },
    { name: "Знание районов", score: 92 },
    { name: "Татарский", score: 200 },
    { name: "Ключевая ставка", score: 5 }
];

const ProfilePanel = () => {
    return (
        <Container maxWidth="sm" sx={{ mt: 8, minWidth: "320px" }}>
            <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
                <ProfileInfo />
                <Divider />
                <ResultsLabel>
                    Результаты тестов
                </ResultsLabel>

                {kazanTests?.length > 0 && (
                    <TestResultsList testResults={kazanTests} />
                )}
                {(!kazanTests || kazanTests.length === 0) && (
                    <Typography variant="body2" color="text.secondary">
                        Вы еще не проходили тесты.
                    </Typography>
                )}

                <Box mt={1} textAlign="center">
                    <Button variant="contained" color="primary">
                        Пройти новый тест
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
}

export default ProfilePanel;