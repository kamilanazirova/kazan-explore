import React, { useState } from "react";
import { Button, Modal, Box, Typography } from "@mui/material";
import QuizContent from "../quize-content/quize-content";
import { buttonStyles, finishButtonStyle, introContainer, modalStyle, resultImageStyle, resultText } from "./styled";
import { mainApi } from "../../__data__/service/main-api";
import { CultureQuizImages } from "../../assets/history";

const CultureQuiz = () => {
    const { data: cultureQuiz } = mainApi.useCultureQuizQuery();

    const [open, setOpen] = useState(false);
    const [finished, setFinished] = useState(false);
    const [result, setResult] = useState({ score: 0, total: 0 });

    const questions = cultureQuiz?.questions || [];
    const intro_text = cultureQuiz?.intro_text || [];
    const intro_image = cultureQuiz?.intro_image || [];

    const handleOpen = () => {
        setOpen(true);
        setFinished(false);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleFinish = (score, total) => {
        setResult({ score, total });
        setFinished(true);
    };

    const getResultFeedback = (score, total) => {
        const percentage = (score / total) * 100;
        if (percentage >= 90) {
            return {
                text: "Поздравляем! Вы продемонстрировали отличные знания о культуре. Великолепный результат!",
                image: CultureQuizImages["super_fan"],
            };
        } else if (percentage >= 70) {
            return {
                text: "Отличная работа! Вы хорошо ориентируетесь в теме культуры, но всегда есть место для совершенствования.",
                image: CultureQuizImages["good_fan"],
            };
        } else if (percentage >= 50) {
            return {
                text: "Хороший результат! Вы обладаете базовыми знаниями о культуре, но есть еще несколько моментов, которые стоит изучить.",
                image: CultureQuizImages["average_fan"],
            };
        } else {
            return {
                text: "Вы не до конца овладели знаниями о культуре, но не переживайте! У вас есть отличная возможность улучшить свои знания и вернуться к тесту еще раз.",
                image: CultureQuizImages["try_again"],
            };
        }
    };

    const feedback = getResultFeedback(result.score, result.total);

    return (
        <div>
            <Button variant="contained" sx={buttonStyles} color="primary" onClick={handleOpen}>
                Пройти тест
            </Button>
            <Modal open={open} onClose={handleClose}>
                <Box sx={modalStyle}>
                    {!finished ? (
                        <QuizContent questions={questions} introText={intro_text} introImage={intro_image} onFinish={handleFinish} />
                    ) : (
                        <div style={introContainer}>
                            <Typography variant="h6">Ваш результат:</Typography>
                            <Typography sx={resultText}>
                                Вы ответили правильно на {result.score} из {result.total} вопросов.
                            </Typography>
                            <Typography sx={resultText}>
                                {feedback.text}
                            </Typography>
                            <img
                                src={feedback.image}
                                alt="Результат"
                                style={resultImageStyle}
                            />
                            <Button variant="contained" color="secondary" onClick={handleClose} sx={finishButtonStyle}>
                                Закрыть
                            </Button>
                        </div>
                    )}
                </Box>
            </Modal>
        </div>
    );
};

export default CultureQuiz;
