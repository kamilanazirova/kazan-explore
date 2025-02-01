import React, { useState } from "react";
import { Button, Modal, Box, Typography } from "@mui/material";
import QuizContent from "../quize-content/quize-content";
import { buttonStyles, finishButtonStyle, introContainer, modalStyle, resultImageStyle, resultText } from "./styled";
import { mainApi } from "../../__data__/service/main-api";
import { CultureQuizImages } from "../../assets/history";

const CultureQuiz = () => {
    const { data: historyQuiz } = mainApi.useHistoryQuizQuery();

    const [open, setOpen] = useState(false);
    const [finished, setFinished] = useState(false);
    const [result, setResult] = useState({ score: 0, total: 0 });

    const questions = historyQuiz?.questions || [];
    const intro_text = historyQuiz?.intro_text || [];
    const intro_image = historyQuiz?.intro_image || [];

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
            text: "Вы настоящий знаток казанского спорта! У вас отличные знания о команде. Так держать!",
            image: CultureQuizImages["super_fan"], 
          };
        } else if (percentage >= 70) {
          return {
            text: "Отлично! Вы почти эксперт. Еще чуть-чуть, и вы будете знать всё!",
            image: CultureQuizImages["good_fan"], 
          };
        } else if (percentage >= 50) {
          return {
            text: "Неплохо! Вы знаете команду, но есть куда расти. Продолжайте узнавать больше!",
            image: CultureQuizImages["average_fan"], 
          };
        } else {
          return {
            text: "Похоже, вам стоит немного больше узнать о команде. Попробуйте еще раз — вы точно справитесь лучше!",
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
