import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { NewsData, PlaceData, SportData, TripScheduleData, EventsData, UserData, LoginData, RegisterData, RecoverUserData } from '../model/common'
import { URLs } from '../urls'

const apiUrl = URLs.api.main

export const mainApi = createApi({
  reducerPath: 'main-api',
  baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
  tagTypes: ['InfoAboutKzanData', 'NewsData', 'SportData', 'PlaceData', 'InfoTransportData', 
    'BusData', 'TralData', 'TripScheduleData', 'EventsData', 'UserData'],
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

    // login
    getUserFromLogin: builder.mutation<UserData, LoginData>({
      invalidatesTags: ['UserData'],
      query: (loginData) => ({
        url: '/entrance',
        method: 'POST',
        body: {entranceData: {email: loginData.email, password: loginData.password}}
      })
    }),
    // register
    getUserFromRegister: builder.mutation<UserData, RegisterData>({
      invalidatesTags: ['UserData'],
      query: (registerData) => ({
        url: '/registration',
        method: 'POST',
        body: {registerData: {email: registerData.email, password: registerData.password, 
          confirmPassword: registerData.confirmPassword}}
      })
    }),
    // recover
    getUserFromRecover: builder.mutation<UserData, RecoverUserData>({
      invalidatesTags: ['UserData'],
      query: (recoverData) => ({
        url: '/recover',
        method: 'POST',
        body: {recoverData: {email: recoverData.email, password: recoverData.password, 
          confirmPassword: recoverData.confirmPassword}}
      })
    })
  }),
})

