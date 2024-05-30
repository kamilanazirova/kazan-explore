import React from 'react';
import { Global } from "@emotion/react";

import { BrowserRouter } from 'react-router-dom';

import { globalStyles } from './global-styles';
import { PageRoutes } from './routes';

const App = () => {
  return (
    <BrowserRouter>
      <Global styles={globalStyles} />
      <PageRoutes />
    </BrowserRouter>
  );
};

App.displayName = "App-22";

export default App;
