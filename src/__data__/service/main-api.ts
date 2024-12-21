import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { NewsData, PlaceData, SportData, TripScheduleData, EventsData } from '../model/common'
import { URLs } from '../urls'

const apiUrl = URLs.api.main

export const mainApi = createApi({
  reducerPath: 'main-api',
  baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
  tagTypes: ['InfoAboutKzanData', 'NewsData', 'SportData', 'PlaceData', 'InfoTransportData', 'BusData', 'TralData', 'TripScheduleData', 'EventsData'],
  endpoints: (builder) => ({
    // main page
    infoFirstData: builder.query<string[], void>({
      providesTags: ['InfoAboutKzanData'],
      query: () => '/getInfoAboutKazan',
    }),
    newsList: builder.query<NewsData[], void>({
      providesTags: ['NewsData'],
      query: () => '/getNews',
    }),

    // places page
    placesList: builder.query<PlaceData[], void>({
      providesTags: ['PlaceData'],
      query: () => '/getPlacesData',
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
      providesTags: ['SportData'],
      query: () => '/getSportData',
    }),
  }),
})

