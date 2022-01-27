import React from 'react';
import axios from 'axios';
import { waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { customRender, USER_DEFAULT_PROPS } from '../../utils/testUtils';
import capitalize from '../../utils/capitalize';

import PersonalInfo from '.';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Confirmation page', () => {
  it('should render user context', async () => {
    const { getByText } = customRender(
      <PersonalInfo />,
      {},
      USER_DEFAULT_PROPS
    );

    expect(getByText(USER_DEFAULT_PROPS.name)).toBeInTheDocument();
    expect(getByText(USER_DEFAULT_PROPS.email)).toBeInTheDocument();
    expect(
      getByText(USER_DEFAULT_PROPS.password.replace(/./g, '*'))
    ).toBeInTheDocument();
    expect(getByText(capitalize(USER_DEFAULT_PROPS.color))).toBeInTheDocument();
    expect(
      getByText(USER_DEFAULT_PROPS.terms ? 'Agreed' : 'Not agreed')
    ).toBeInTheDocument();
  });

  it('should go to success page', async () => {
    mockedAxios.post.mockImplementation(() => Promise.resolve());

    const { getByText, queryByTestId } = customRender(
      <PersonalInfo />,
      {},
      USER_DEFAULT_PROPS
    );

    userEvent.click(getByText('Next'));

    await waitFor(
      () => {
        expect(queryByTestId('loader')).toHaveAttribute('aria-hidden', 'false');
      },
      { timeout: 2000 }
    );

    expect(location.pathname).toBe('/success');
  });

  it('should go to error page', async () => {
    mockedAxios.post.mockImplementation(() => Promise.reject());

    const { getByText, getByTestId } = customRender(
      <PersonalInfo />,
      {},
      USER_DEFAULT_PROPS
    );

    userEvent.click(getByText('Next'));

    await waitFor(
      () => {
        expect(getByTestId('loader')).toHaveAttribute('aria-hidden', 'false');
      },
      { timeout: 2000 }
    );

    expect(location.pathname).toBe('/error');
  });
});
