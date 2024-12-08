import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BaseResponse, NewsData, PlaceData, SportData } from '../model/common'
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
        transformResponse: (response: BaseResponse<NewsData[]>) => {
          if (response.success === true) {
            return response?.body || []
          } else {
            return void 0
          }
        },
      }),
      sportsList: builder.query<SportData[], void>({
        providesTags: ['SportData'],
        query: () => '/getSportData',
        transformResponse: (response: BaseResponse<SportData[]>) => {
          if (response.success === true) {
            return response?.body || []
          } else {
            return void 0
          }
        },
      }),
      placesList: builder.query<PlaceData[], void>({
        providesTags: ['PlaceData'],
        query: () => '/getPlacesData',
        transformResponse: (response: BaseResponse<PlaceData[]>) => {
          if (response.success === true) {
            return response?.body || []
          } else {
            return void 0
          }
        },
      }),
    }),
  })

