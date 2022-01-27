import React from 'react';
import userEvent from '@testing-library/user-event';

import { customRender } from '../../utils/testUtils';

import Error from '.';

describe('Success page', () => {
  it('should go back to main page', async () => {
    const { getByText } = customRender(<Error />, {});

    userEvent.click(getByText('Restart'));

    expect(location.pathname).toBe('/');
  });
});
