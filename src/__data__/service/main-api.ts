import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { NewsData, PlaceData, SportData, TripScheduleData, EventsData } from '../model/common'
import i18n from 'i18next';

import { URLs } from '../urls'

const apiUrl = URLs.api.main

export const mainApi = createApi({
  reducerPath: 'main-api',
  baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
  tagTypes: [
    'InfoAboutKzanData',
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
  ],
  endpoints: (builder) => ({
    // main page
    infoFirstData: builder.query<any, void>({
      providesTags: ['InfoAboutKzanData'],
      queryFn: async () => {
        const response = await fetch(`${apiUrl}/getInfoAboutKazan`);
        const data = await response.json();
        // Получаем текущий язык
        const language = i18n.language;
        // Проверяем, есть ли переводы для текущего языка
        const translatedData = data[language] || data['ru'];
        return { data: translatedData };
      },
    }),
    newsList: builder.query<NewsData[], void>({
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
    infoTransportData: builder.query<string[], void>({
      providesTags: ['InfoTransportData'],
      query: () => '/getInfoAboutTransportPage',
    }),
    busData: builder.query<string[], void>({
      providesTags: ['BusData'],
      query: () => '/getBus',
    }),
    tripScheduleData: builder.query<TripScheduleData[], void>({
      providesTags: ['TripScheduleData'],
      query: () => '/getTripSchedule',
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
      queryFn: async () => {
        const response = await fetch(`${apiUrl}/getFirstText`);
        const data = await response.json();
        const language = i18n.language;
        const translatedData = data[language] || data['ru'];
        return { data: translatedData };
      },
    }),
    sportSecondTextData: builder.query<any, void>({
      providesTags: ['SportSecondTextData'],
      queryFn: async () => {
        const response = await fetch(`${apiUrl}/getSecondText`);
        const data = await response.json();
        const language = i18n.language;
        const translatedData = data[language] || data['ru'];
        return { data: translatedData };
      },
    }),
  }),
})

