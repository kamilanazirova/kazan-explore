import { configureStore } from '@reduxjs/toolkit'

import { mainApi } from './service/main-api'
import { usersApi } from './service/users-api'

export const store = configureStore({
  reducer: {
    [mainApi.reducerPath]: mainApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mainApi.middleware,
      usersApi.middleware
    ),
  devTools: {
    name: 'kaz-exp',
  },
})

export type AppState = ReturnType<typeof store.getState>