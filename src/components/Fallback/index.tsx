import React from 'react';
import { useNavigate } from 'react-router-dom';

import Feedback from '../../components/Feedback';

const Fallback = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/');
  };

  return (
    <Feedback
      type='error'
      description='Something went wrong. Try again!'
      onClick={onClick}
    />
  );
};

export default Fallback;
