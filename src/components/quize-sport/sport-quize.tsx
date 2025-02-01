import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import { Button, Modal, Box, Typography } from "@mui/material";
import QuizContent from "../quize-content/quize-content";
import { buttonStyles, finishButtonStyle, introContainer, modalStyle, resultImageStyle, resultText } from "./styled";
import { mainApi } from "../../__data__/service/main-api";
import { SportQuizImages } from "../../assets/sport";
import { ErrorBoundary } from "../error-boundary";


const SportQuiz = ({ sport }) => {
  const { t } = useTranslation();

  const { data: sportQuiz } = mainApi.useSportQuizQuery()

  const [open, setOpen] = useState(false);
  const [finished, setFinished] = useState(false);
  const [result, setResult] = useState({ score: 0, total: 0 });

  const questions = sportQuiz?.[sport]?.questions || [];
  const intro_text = sportQuiz?.[sport]?.intro_text || [];
  const intro_image = sportQuiz?.[sport]?.intro_image || [];


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
        text: t("kazan-explore.sport.quiz.super_fan"),
        image: SportQuizImages["super_fan"],
      };
    } else if (percentage >= 70) {
      return {
        text: t("kazan-explore.sport.quiz.good_fan"),
        image: SportQuizImages["good_fan"],
      };
    } else if (percentage >= 50) {
      return {
        text: t("kazan-explore.sport.quiz.average_fan"),
        image: SportQuizImages["average_fan"],
      };
    } else {
      return {
        text: t("kazan-explore.sport.quiz.try_again"),
        image: SportQuizImages["try_again"],
      };
    }
  };

  const feedback = getResultFeedback(result.score, result.total);

  return (
    <ErrorBoundary>
      <div>
        <Button variant="contained" sx={buttonStyles} color="primary" onClick={handleOpen}>
          {t("kazan-explore.sport.quiz.take_test")}
        </Button>

        <Modal open={open} onClose={handleClose}>
          <Box sx={modalStyle}>
            {!finished ? (
              <QuizContent questions={questions} introText={intro_text} introImage={intro_image} onFinish={handleFinish} />
            ) : (
              <div style={introContainer}>
                <Typography variant="h6">{t("kazan-explore.sport.quiz.your_result")}</Typography>
                <Typography sx={resultText}>
                {t("kazan-explore.sport.quiz.correct_answers", { score: result.score, total: result.total })}  
                </Typography>
                <Typography sx={resultText}>
                  {feedback.text}
                </Typography>
                <img
                  src={feedback.image}
                  alt={t("kazan-explore.sport.quiz.result_image_alt")} 
                  style={resultImageStyle}
                />
                <Button variant="contained" color="secondary" onClick={handleClose} sx={finishButtonStyle}>
                {t("kazan-explore.sport.quiz.close_button")}
                </Button>
              </div>
            )}
          </Box>
        </Modal>
      </div>
    </ErrorBoundary>
  );
};

export default SportQuiz;
