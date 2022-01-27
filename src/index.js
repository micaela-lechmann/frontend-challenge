import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';
import './static/fonts/Montserrat/Montserrat-SemiBold.ttf';
import './static/fonts/Roboto/Roboto-Light.ttf';
import './static/fonts/Roboto/Roboto-Bold.ttf';

import ErrorBoundary from './components/ErrorBoundary';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </BrowserRouter>,
  document.getElementById('root')
);
