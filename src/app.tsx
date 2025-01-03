import React from 'react';
import { Global } from "@emotion/react";

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'

import { store } from './__data__/store';
import { globalStyles } from './global-styles';
import kazanTheme from './theme'
import { ThemeProvider } from '@mui/material'
import { PageRoutes } from './routes';
import { LanguageProvider } from './context/language-context';

const App = () => {
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
