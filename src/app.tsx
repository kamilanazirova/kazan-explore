import React from 'react';
import { Global } from "@emotion/react";
import { BrowserRouter } from 'react-router-dom';

import { globalStyles } from './global-styles';
import { PageRoutes } from './routes';

import './style/first.css'
import './style/transport.css'
import './style/sport.css'
import './style/education.css'

const App = () => {
  return (
    <BrowserRouter>
      <Global styles={globalStyles} />
      <PageRoutes />
    </BrowserRouter>
  );
};

export default App;
