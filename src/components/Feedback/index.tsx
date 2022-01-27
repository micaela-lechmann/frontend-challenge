import React from 'react';

import { ReactComponent as SuccessIcon } from '../../static/icons/success.svg';
import { ReactComponent as ErrorIcon } from '../../static/icons/error.svg';
import Button from '../Button';

import './styles.scss';

type Props = {
  type: 'success' | 'error';
  description: string;
  onClick: () => void;
};

const Feedback = ({ type, description, onClick }: Props) => {
  return (
    <div className='feedback'>
      <h1 className='feedback__title'>
        {type === 'success' ? 'Success' : 'Error'}
      </h1>
      {type === 'success' ? <SuccessIcon /> : <ErrorIcon />}
      <p className='feedback__description'>{description}</p>
      <Button type='primary' onClick={onClick}>
        Restart
      </Button>
    </div>
  );
};

export default Feedback;
