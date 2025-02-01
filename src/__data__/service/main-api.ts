import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { PlaceData, SportData, TripScheduleData, EventsData, EducationData, QuizResultData, UserData } from '../model/common'
import { URLs } from '../urls'

const apiUrl = URLs.api.main

export const mainApi = createApi({
  reducerPath: 'main-api',
  baseQuery: fetchBaseQuery({
    baseUrl: apiUrl, prepareHeaders: (headers) => {
      const user = JSON.parse(localStorage.getItem('user'));

      if (user && user.token) {
        headers.set('authorization', `Bearer ${user.token}`)
      }

      return headers
    }
  }),
  tagTypes: [
    'InfoAboutKazanData',
    'ServicesData',
    'NewsData',
    'SportsList',
    'SportFirstTextData',
    'SportSecondTextData',
    'SportQuizData',
    'PlaceData',
    'InfoTransportData',
    'BusData',
    'TralData',
    'TripScheduleData',
    'EventsData',
    'HistoryText',
    'HistoryList',
    'EducationText',
    'EducationList',
    'SelectorData',
    'KfuData',
    'UserData',
    'QuizResultData'
  ],
  endpoints: (builder) => ({
    infoFirstData: builder.query<any, void>({
      providesTags: ['InfoAboutKazanData'],
      query: () => {
        const language = localStorage.getItem('i18nextLng') || 'ru';
        return `/getInfoAboutKazan?lang=${language}`;
      },
    }),
    servicesList: builder.query<any, void>({
      providesTags: ['ServicesData'],
      query: () => {
        const language = localStorage.getItem('i18nextLng') || 'ru';
        return `/getServices?lang=${language}`;
      },
    }),
    newsList: builder.query<any, void>({
      providesTags: ['NewsData'],
      query: () => {
        const language = localStorage.getItem('i18nextLng') || 'ru';
        return `/getNews?lang=${language}`;
      },
    }),

    // places page
    placesList: builder.query<PlaceData[], void>({
      providesTags: ['PlaceData'],
      query: () => {
        const language = localStorage.getItem('i18nextLng') || 'ru';
        return `/getPlacesData?lang=${language}`;
      },
    }),

    // transport page
    infoTransportData: builder.query<any, void>({
      providesTags: ['InfoTransportData'],
      query: () => {
        const language = localStorage.getItem('i18nextLng') || 'ru';
        return `/getInfoAboutTransportPage?lang=${language}`;
      },
    }),
    busData: builder.query<string[], void>({
      providesTags: ['BusData'],
      query: () => '/getBus',
    }),
    tripScheduleData: builder.query<TripScheduleData[], void>({
      providesTags: ['TripScheduleData'],
      query: () => {
        const language = localStorage.getItem('i18nextLng') || 'ru';
        return `/getTripSchedule?lang=${language}`;
      },
    }),
    eventsData: builder.query<EventsData[], void>({
      providesTags: ['EventsData'],
      query: () => '/getEvents',
    }),

    // sport page
    sportsList: builder.query<SportData[], void>({
      providesTags: ['SportsList'],
      query: () => {
        const language = localStorage.getItem('i18nextLng') || 'ru';
        return `/getSportData?lang=${language}`;
      },
    }),
    sportFirstTextData: builder.query<any, void>({
      providesTags: ['SportFirstTextData'],
      query: () => {
        const language = localStorage.getItem('i18nextLng') || 'ru';
        return `/getFirstText?lang=${language}`;
      },
    }),
    sportSecondTextData: builder.query<any, void>({
      providesTags: ['SportSecondTextData'],
      query: () => {
        const language = localStorage.getItem('i18nextLng') || 'ru';
        return `/getSecondText?lang=${language}`;
      },
    }),
    sportQuiz: builder.query<any, void>({
      providesTags: ['SportQuizData'],
      query: () => {
        const language = localStorage.getItem('i18nextLng') || 'ru';
        return `/getSportQuiz?lang=${language}`;
      },
    }),

    // history page
    historyText: builder.query<any, void>({
      providesTags: ['HistoryText'],
      query: () => {
        const language = localStorage.getItem('i18nextLng') || 'ru';
        return `/getHistoryText?lang=${language}`;
      },
    }),
    historyList: builder.query<any, void>({
      providesTags: ['HistoryList'],
      query: () => {
        const language = localStorage.getItem('i18nextLng') || 'ru';
        return `/getHistoryList?lang=${language}`;
      },
    }),

    // education page
    educationText: builder.query<any, void>({
      providesTags: ['EducationText'],
      query: () => {
        const language = localStorage.getItem('i18nextLng') || 'ru';
        return `/getInfoAboutEducation?lang=${language}`;
      },
    }),
    educationList: builder.query<EducationData[], void>({
      providesTags: ['EducationList'],
      query: () => {
        const language = localStorage.getItem('i18nextLng') || 'ru';
        return `/getEducationList?lang=${language}`;
      },
    }),
    kfuList: builder.query<any, void>({
      providesTags: ['KfuData'],
      query: () => {
        const language = localStorage.getItem('i18nextLng') || 'ru';
        return `/getInfoAboutKFU?lang=${language}`;
      },
    }),
    setUser: builder.mutation<UserData, UserData>({
      invalidatesTags: ['UserData'],
      query: (loginData) => ({
        url: '/signin',
        method: 'POST',
        body: { user: loginData }
      })
    }),
    quizResults: builder.query<QuizResultData[], string>({
      providesTags: ['QuizResultData'],
      query: (userId) => ({
        url: `/getQuizResults/${userId}`,
      }),
    }),
    saveQuizResult: builder.mutation<void, { userId: string; quizId: string; result: number }>({
      invalidatesTags: ['QuizResultData'],
      query: (data) => ({
        url: '/addQuizResult',
        method: 'POST',
        body: data,
      }),
    }),
  }),
})