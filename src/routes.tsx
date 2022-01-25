import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Spinner from './components/Spinner';

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
        <Suspense fallback={<Spinner show />}>
          <PersonalInfoComponent />
        </Suspense>
      }
      path='/'
    />
    <Route
      element={
        <Suspense fallback={<Spinner show />}>
          <AdditionalInfoComponent />
        </Suspense>
      }
      path='/more-info'
    />
    <Route
      element={
        <Suspense fallback={<Spinner show />}>
          <ConfirmationComponent />
        </Suspense>
      }
      path='/confirmation'
    />
    <Route
      element={
        <Suspense fallback={<Spinner show />}>
          <SuccessComponent />
        </Suspense>
      }
      path='/success'
    />
    <Route
      element={
        <Suspense fallback={<Spinner show />}>
          <ErrorComponent />
        </Suspense>
      }
      path='/error'
    />
    {/* <Route component={() => <AComponent />} exact path='/a' />
      <Route component={() => <BComponent />} exact path='/b' />
      <Route component={() => <CComponent />} exact path='/c' /> */}
  </Routes>
);

export default DefinedRoutes;
