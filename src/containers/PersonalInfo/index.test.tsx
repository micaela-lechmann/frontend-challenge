import React from 'react';
import userEvent from '@testing-library/user-event';

import { customRender, USER_DEFAULT_PROPS } from '../../utils/testUtils';

import PersonalInfo from '.';

describe('Personal info page', () => {
  it('should fill inputs', async () => {
    const { getByLabelText } = customRender(<PersonalInfo />, {});

    userEvent.type(getByLabelText('First name'), 'Micaela');
    userEvent.type(getByLabelText('E-mail'), 'micaela.lechmann@gmail.com');
    userEvent.type(getByLabelText('Password'), 'micaela12345');

    expect(getByLabelText('First name')).toHaveAttribute('value', 'Micaela');
    expect(getByLabelText('E-mail')).toHaveAttribute(
      'value',
      'micaela.lechmann@gmail.com'
    );
    expect(getByLabelText('Password')).toHaveAttribute('value', 'micaela12345');
  });

  it('should fill inputs according to context', async () => {
    const { getByLabelText } = customRender(
      <PersonalInfo />,
      {},
      USER_DEFAULT_PROPS
    );

    expect(getByLabelText('First name')).toHaveAttribute(
      'value',
      USER_DEFAULT_PROPS.name
    );
    expect(getByLabelText('E-mail')).toHaveAttribute(
      'value',
      USER_DEFAULT_PROPS.email
    );
    expect(getByLabelText('Password')).toHaveAttribute(
      'value',
      USER_DEFAULT_PROPS.password
    );
  });

  it('should show required error', async () => {
    const { getByText } = customRender(<PersonalInfo />, {});

    userEvent.click(getByText('Next'));
    expect(getByText('Name is required')).toBeInTheDocument();
    expect(getByText('E-mail is required')).toBeInTheDocument();
    expect(getByText('Password is required')).toBeInTheDocument();
  });

  it('should go to more info page', async () => {
    const { getByText, getByLabelText } = customRender(<PersonalInfo />, {});

    userEvent.type(getByLabelText('First name'), 'Micaela');
    userEvent.type(getByLabelText('E-mail'), 'micaela.lechmann@gmail.com');
    userEvent.type(getByLabelText('Password'), 'micaela12345');
    userEvent.click(getByText('Next'));

    expect(location.pathname).toBe('/more-info');
  });
});
