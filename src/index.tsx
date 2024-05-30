// @es-lint-ignore-file
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './app';

const DefaultComponent = () => <App />;
DefaultComponent.displayName = "DefaultComponent";

export default DefaultComponent;

let rootElement: ReactDOM.Root;

export const mount = (Component, element = document.getElementById('app')) => {
  rootElement = ReactDOM.createRoot(element);
  rootElement.render(<Component />);

  if (module.hot) {
    module.hot.accept('./app', () => {
      rootElement.render(<Component />);
    });
  }
};

export const unmount = () => {
  if (rootElement) {
    rootElement.unmount();
  }
};
