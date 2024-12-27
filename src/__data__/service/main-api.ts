import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { NewsData, PlaceData, SportData, TripScheduleData, EventsData, EducationData, UserData, LoginData, RegisterData, RecoverUserData } from '../model/common'
import i18n from 'i18next';
import { URLs } from '../urls'

const apiUrl = URLs.api.main

export const mainApi = createApi({
  reducerPath: 'main-api',
  baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
  tagTypes: [
    'InfoAboutKazanData',
    'NewsData',
    'SportsList',
    'SportFirstTextData',
    'SportSecondTextData',
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
    'KfuData',
    'UserData'
  ],
  endpoints: (builder) => ({
    infoFirstData: builder.query<any, void>({
      providesTags: ['InfoAboutKazanData'],
      query: () => {
        const language = localStorage.getItem('i18nextLng') || 'ru'; // Берём текущий язык
        return `/getInfoAboutKazan?lang=${language}`; // Передаём язык как параметр
      },
    }),
    newsList: builder.query<any, void>({
      providesTags: ['NewsData'],
      query: () => {
        const language = localStorage.getItem('i18nextLng') || 'ru'; // Берём текущий язык
        return `/getNews?lang=${language}`; // Передаём язык как параметр
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
  }),
})
