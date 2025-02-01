import React, { useEffect } from 'react';
import { Global } from "@emotion/react";

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'

import { store } from './__data__/store';
import { globalStyles } from './global-styles';
import kazanTheme from './theme'
import { ThemeProvider } from '@mui/material'
import { PageRoutes } from './routes';
import { LanguageProvider } from './context/language-context';
import { jwtDecode } from 'jwt-decode';
import { useUser } from './hooks/useUser';

const App = () => {
  const { user, removeUser } = useUser();

  useEffect(() => {
    if (user?.token) {
      const { exp } = jwtDecode(user.token);
      const expirationTime = exp * 1000 - 60000;
      if (Date.now() > expirationTime) {
        removeUser();
        console.log('expiration time');
      }
    }
  }, [user]);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <LanguageProvider>
          <Global styles={globalStyles} />
          <ThemeProvider theme={kazanTheme}>
            <PageRoutes />
          </ThemeProvider>
        </LanguageProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
