import React from 'react';
import axios from 'axios';
import { waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { customRender, USER_DEFAULT_PROPS } from '../../utils/testUtils';

import capitalize from '../../utils/capitalize';

import AdditionalInfo from '.';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Additional info page', () => {
  it('should fill color select', async () => {
    mockedAxios.get.mockImplementation(() =>
      Promise.resolve({ data: ['green', 'blue'] })
    );

    const { getByTestId, getByText, getByLabelText } = customRender(
      <AdditionalInfo />,
      {}
    );

    await waitFor(
      () => {
        expect(getByTestId('loader')).toHaveAttribute('aria-hidden', 'true');
      },
      { timeout: 2000 }
    );

    userEvent.click(getByTestId('select'));

    userEvent.click(getByText('Green'));
    expect(getByLabelText('Favorite color')).toHaveAttribute('value', 'Green');
  });

  it('should select checkbox', async () => {
    mockedAxios.get.mockImplementation(() =>
      Promise.resolve({ data: ['green', 'blue'] })
    );

    const { getByTestId, getByLabelText } = customRender(
      <AdditionalInfo />,
      {}
    );

    await waitFor(
      () => {
        expect(getByTestId('loader')).toHaveAttribute('aria-hidden', 'true');
      },
      { timeout: 2000 }
    );

    userEvent.click(getByLabelText('checkbox'));

    expect(getByLabelText('checkbox')).toHaveAttribute('aria-checked', 'true');
  });

  it('should fill inputs according to context', async () => {
    mockedAxios.get.mockImplementation(() =>
      Promise.resolve({ data: ['green', 'blue'] })
    );

    const { getByTestId, getByLabelText } = customRender(
      <AdditionalInfo />,
      {},
      USER_DEFAULT_PROPS
    );

    await waitFor(
      () => {
        expect(getByTestId('loader')).toHaveAttribute('aria-hidden', 'true');
      },
      { timeout: 2000 }
    );

    expect(getByLabelText('Favorite color')).toHaveAttribute(
      'value',
      capitalize(USER_DEFAULT_PROPS.color)
    );
    expect(getByLabelText('checkbox')).toHaveAttribute(
      'aria-checked',
      `${USER_DEFAULT_PROPS.terms}`
    );
  });

  it('should show required error', async () => {
    mockedAxios.get.mockImplementation(() =>
      Promise.resolve({ data: ['green', 'blue'] })
    );

    const { getByTestId, getByText } = customRender(<AdditionalInfo />, {});

    await waitFor(
      () => {
        expect(getByTestId('loader')).toHaveAttribute('aria-hidden', 'true');
      },
      { timeout: 2000 }
    );

    userEvent.click(getByText('Next'));
    expect(getByText('Color is required')).toBeInTheDocument();
  });

  it('should go back to main page', async () => {
    mockedAxios.get.mockImplementation(() =>
      Promise.resolve({ data: ['green', 'blue'] })
    );

    const { getByTestId, getByText } = customRender(<AdditionalInfo />, {});

    await waitFor(
      () => {
        expect(getByTestId('loader')).toHaveAttribute('aria-hidden', 'true');
      },
      { timeout: 2000 }
    );

    userEvent.click(getByText('Back'));

    expect(location.pathname).toBe('/');
  });

  it('should go to confirmation page', async () => {
    mockedAxios.get.mockImplementation(() =>
      Promise.resolve({ data: ['green', 'blue'] })
    );

    const { getByTestId, getByText, getByLabelText } = customRender(
      <AdditionalInfo />,
      {}
    );

    await waitFor(
      () => {
        expect(getByTestId('loader')).toHaveAttribute('aria-hidden', 'true');
      },
      { timeout: 2000 }
    );

    userEvent.click(getByTestId('select'));
    userEvent.click(getByText('Green'));
    userEvent.click(getByLabelText('checkbox'));
    userEvent.click(getByText('Next'));

    expect(location.pathname).toBe('/confirmation');
  });
});
