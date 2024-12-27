import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URLs } from "../urls";
import { LoginData, RecoverUserData, RegisterData, UserData } from "../model/common";

const apiUrl = URLs.api.users;
const PROJECT_KEY = "kazan-explore_6uhitz8fc6sNOhA78xGx";

export const usersApi = createApi({
    reducerPath: 'users-api',
    baseQuery: fetchBaseQuery({
        baseUrl: apiUrl, prepareHeaders: (headers) => {
            const user = JSON.parse(localStorage.getItem('user'));

            if (user && user.token) {
                headers.set('authorization', `Bearer ${user.token}`)
            }

            return headers
        }
    }),
    tagTypes: ['UserData'],
    endpoints: (builder) => ({
        //   /auth/login header projectkey
        //   /auth/register header projectkey

        // /users
        getUserFromLogin: builder.mutation<UserData, LoginData>({
            invalidatesTags: ['UserData'],
            query: (loginData) => ({
                url: '/auth/login',
                method: 'POST',
                body: loginData,
                headers: { projectkey: PROJECT_KEY }
            })
        }),
        // register
        getUserFromRegister: builder.mutation<UserData, RegisterData>({
            invalidatesTags: ['UserData'],
            query: (registerData) => ({
                url: '/auth/register',
                method: 'POST',
                body: registerData,
                headers: { projectkey: PROJECT_KEY }
            })
        }),
        // recover
        getUserFromRecover: builder.mutation<UserData, RecoverUserData>({
            invalidatesTags: ['UserData'],
            query: (recoverData) => ({
                url: '/recover',
                method: 'POST',
                body: { recoverData: { email: recoverData.email, password: recoverData.password } }
            })
        })
    })
})