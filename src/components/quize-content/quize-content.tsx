import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import {
  Button,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from "@mui/material";
import { SportQuizImages } from "../../assets/sport";
import {
  introContainer,
  introImageStyle,
  introTypography,
  nextButtonStyle,
  progress,
  quizImageStyle,
  radioGroup,
  startButtonStyle,
} from "./styled";

const QuizContent = ({ questions, onFinish, introText, introImage }) => {
  const { t } = useTranslation()

  const [isIntroVisible, setIsIntroVisible] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleOptionChange = (event) => {
    const selected = event.target.value;
    setSelectedOption(selected);
    setIsAnswered(true);

    if (selected === questions[currentQuestion].correct_answer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    setIsAnswered(false);
    setSelectedOption(null);
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      onFinish(score, questions.length);
    }
  };

  const handleStartQuiz = () => {
    setIsIntroVisible(false);
  };

  return (
    <div>
      {isIntroVisible ? (
        <div style={introContainer}>
          <Typography variant="h4" gutterBottom sx={introTypography}>
            {introText || t('sport.quiz.welcome_to_quiz_text')}
          </Typography>
          {introImage && (
            <img
              src={SportQuizImages[introImage]}
              alt={t('kazan-explore.sport.quiz.intro_img_alt')}
              style={introImageStyle}
            />
          )}
          <Button variant="contained" sx={startButtonStyle} onClick={handleStartQuiz}>
            {t('kazan-explore.sport.quiz.start_quiz_button')}
          </Button>
        </div>
      ) : (
        <div>
          <Typography variant="h4" gutterBottom style={introContainer} sx={introTypography}>{questions[currentQuestion].question}</Typography>
          <div style={{ display: "flex" }}>
            {questions[currentQuestion].image_url && (
              <img
                src={SportQuizImages[questions[currentQuestion].image_url]}
                alt={`${t('kazan-explore.sport.quiz.question')} ${currentQuestion + 1}`}
                style={quizImageStyle}
              />
            )}
            <FormControl component="fieldset">
              <RadioGroup
                value={selectedOption}
                sx={radioGroup}
                onChange={handleOptionChange}
              >
                <Typography variant="h6" sx={progress} gutterBottom>
                  {t('kazan-explore.sport.quiz.question')} {currentQuestion + 1} / {questions.length}
                </Typography>
                {questions[currentQuestion].options.map((option, index) => (
                  <FormControlLabel
                    key={index}
                    value={option}
                    control={<Radio />}
                    label={option}
                    style={{
                      backgroundColor:
                        isAnswered && option === questions[currentQuestion].correct_answer
                          ? "lightgreen"
                          : isAnswered && option === selectedOption
                            ? "lightcoral"
                            : "inherit",
                      borderRadius: "8px",
                      padding: "10px 50px 10px 10px ",
                    }}
                    disabled={isAnswered}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </div>
          {isAnswered && (
            <Button
              variant="contained"
              sx={nextButtonStyle}
              onClick={handleNext}
            >
              {currentQuestion + 1 < questions.length ? t('sport.quiz.next_button') : t('sport.quiz.finish_button')}
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default QuizContent;
