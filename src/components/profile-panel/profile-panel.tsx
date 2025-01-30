import React from "react";
import { useTranslation } from 'react-i18next';
import Lottie from "lottie-react";

import {
    Box,
    Container,
    Typography,
    Paper,
    Divider,
    Button,
    CircularProgress
} from "@mui/material";
import { TestResultsList } from "../../components/test-results-list";
import { ResultsLabel } from "./styled";
import { ProfileInfo } from "../profile-info";
import { URLs } from "../../__data__/urls";
import { Link } from "react-router-dom";
import { mainApi } from "../../__data__/service/main-api";
import { useUser } from "../../hooks/useUser";

const ProfilePanel = () => {
    const { t } = useTranslation()
    const { user } = useUser();
    const { isLoading, data: quizResults, isError } = mainApi.useQuizResultsQuery(user?._id)

    const renderQuizData = () => {
        console.log(URLs.features.quizzes.results);
        if (isLoading) {
            return <CircularProgress size={'30px'} sx={{ ml:3.5, mt:1, mb:1, justifySelf: 'center' }} />;
        }

        if (isError || !URLs.features.quizzes.results) {
            return <Lottie animationData={require('src/assets/profile/ghost_error.json')} />;
        }

        if (quizResults?.length > 0) {
            return <TestResultsList testResults={quizResults} />;
        }

        return (
            <Typography variant="body2" color="text.secondary">
                {t('profile.no_tests_yet')}
            </Typography>
        );
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 8, minWidth: "320px" }}>
            <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
                <ProfileInfo />
                <Divider />
                <ResultsLabel>
                    {t('profile.results_title')}
                </ResultsLabel>
                {renderQuizData()}
                {URLs.ui.sport &&
                    <>
                        <Divider sx={{ mt: 2 }} />
                        <Box mt={1} textAlign="center">
                            <Link to={URLs.ui.sport}>
                                <Button variant="contained" color="primary">
                                    {t('profile.new_test')}
                                </Button>
                            </Link>
                        </Box>
                    </>
                }
            </Paper>
        </Container>
    );
}

export default ProfilePanel;