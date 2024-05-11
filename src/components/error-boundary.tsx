import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    // Можно добавить логирование ошибки в сервис мониторинга ошибок (например, Sentry, Rollbar и др.)
    console.error(error, errorInfo);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      // Здесь можно отобразить запасной UI для случаев, когда произошла ошибка
      return <h1>Something went wrong...</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
