import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from './components/Loader';

const PersonalInfoComponent = lazy(() => import('./containers/PersonalInfo'));
const AdditionalInfoComponent = lazy(
  () => import('./containers/AdditionalInfo')
);
const ConfirmationComponent = lazy(() => import('./containers/Confirmation'));
const SuccessComponent = lazy(() => import('./containers/Success'));
const ErrorComponent = lazy(() => import('./containers/Error'));

const DefinedRoutes = () => (
  <Routes>
    <Route
      element={
        <Suspense fallback={<Loader show />}>
          <PersonalInfoComponent />
        </Suspense>
      }
      path='/'
    />
    <Route
      element={
        <Suspense fallback={<Loader show />}>
          <AdditionalInfoComponent />
        </Suspense>
      }
      path='/more-info'
    />
    <Route
      element={
        <Suspense fallback={<Loader show />}>
          <ConfirmationComponent />
        </Suspense>
      }
      path='/confirmation'
    />
    <Route
      element={
        <Suspense fallback={<Loader show />}>
          <SuccessComponent />
        </Suspense>
      }
      path='/success'
    />
    <Route
      element={
        <Suspense fallback={<Loader show />}>
          <ErrorComponent />
        </Suspense>
      }
      path='/error'
    />
  </Routes>
);

export default DefinedRoutes;
