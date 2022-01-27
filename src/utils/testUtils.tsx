import React, { ReactElement } from 'react';
import { render, RenderOptions, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ProviderProps, UserProvider, UserStore } from '../context/user';
import { BrowserRouter } from 'react-router-dom';

export const USER_DEFAULT_PROPS = {
  color: 'green',
  terms: true,
  name: 'Micaela',
  email: 'micaela.lechmann@gmail.com',
  password: 'Micaela12345',
};

export const customRender = (
  ui: ReactElement,
  { ...renderOptions }: RenderOptions,
  initialValue?: UserStore
) => {
  return {
    ...render(
      <BrowserRouter>
        <UserProvider initialValue={initialValue}>{ui}</UserProvider>
      </BrowserRouter>,
      renderOptions
    ),
  };
};
