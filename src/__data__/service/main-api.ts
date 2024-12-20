import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { NewsData, PlaceData, SportData } from '../model/common'
import { InfoData, BusData, TrulData, TripScheduleData, EventsData } from '../model/transport'
import { URLs } from '../urls'

const apiUrl = URLs.api.main

export const mainApi = createApi({
    reducerPath: 'main-api',
    baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
    tagTypes: ['NewsData', 'SportData', 'PlaceData'],
    endpoints: (builder) => ({
      newsList: builder.query<NewsData[], void>({
        providesTags: ['NewsData'],
        query: () => '/getNews',
      }),
      sportsList: builder.query<SportData[], void>({
        providesTags: ['SportData'],
        query: () => '/getSportData',
      }),
      placesList: builder.query<PlaceData[], void>({
        providesTags: ['PlaceData'],
        query: () => '/getPlacesData',
      }),
    }),
  })

