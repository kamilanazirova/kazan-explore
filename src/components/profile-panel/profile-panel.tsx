import React from "react";
import { useTranslation } from 'react-i18next';

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

const ProfilePanel = () => {
    const { t } = useTranslation()

    const kazanTests = [
        { name: t('profile.test_names.city_history'), score: 85 },
        { name: t('profile.test_names.districts'), score: 92 },
        { name: t('profile.test_names.tatar_language'), score: 200 },
        { name: t('profile.test_names.key_rate'), score: 5 }
    ];

    return (
        <Container maxWidth="sm" sx={{ mt: 8, minWidth: "320px" }}>
            <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
                <ProfileInfo />
                <Divider />
                <ResultsLabel>
                    {t('profile.results_title')}
                </ResultsLabel>

                {kazanTests?.length > 0 && (
                    <TestResultsList testResults={kazanTests} />
                )}
                {(!kazanTests || kazanTests.length === 0) && (
                    <Typography variant="body2" color="text.secondary">
                        {t('profile.no_tests_yet')}
                    </Typography>
                )}
                <Divider sx={{mt: 2}}/>
                <Box mt={1} textAlign="center">
                    <Button variant="contained" color="primary">
                        {t('profile.new_test')}
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
}

export default ProfilePanel;