import React from "react";
import { useTranslation } from 'react-i18next';

import science_icon from '../assets/icons/science_icon.svg'

import { Header } from "../components/header";
import { Title } from "../components/title";
import { Footer } from "../components/footer";
import { Kfu } from "../components/kfu";
import { EducationCard } from "../components/card-education";
import { EducationCardWrapper, Wrapper } from "../global-styles";
import { ErrorBoundary } from "../components/error-boundary";
import { mainApi } from "../__data__/service/main-api";

const Education = () => {
  const { t } = useTranslation()

  const { data: educationText } = mainApi.useEducationTextQuery()
  const { data: educationList } = mainApi.useEducationListQuery()

  return (
    <>
      <Header />
      <Wrapper>
        <Title image={science_icon} title={t('education.title')} alt="Иконка" />
        <ErrorBoundary>
          <p>{t(educationText?.text)}</p>
          <EducationCardWrapper>
            <ErrorBoundary>
              {educationList?.map((item, index) => (
                <EducationCard key={index}
                  image={item.image}
                  title={item.title}
                  text={item.text} />
              ))
              }
            </ErrorBoundary>
          </EducationCardWrapper>
          <ErrorBoundary><Kfu /></ErrorBoundary>
        </ErrorBoundary>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Education;
