import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';
import './static/fonts/Montserrat/Montserrat-SemiBold.ttf';
import './static/fonts/Roboto/Roboto-Light.ttf';
import './static/fonts/Roboto/Roboto-Bold.ttf';

import ErrorBoundary from './components/ErrorBoundary';

ReactDOM.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
  document.getElementById('root')
);
