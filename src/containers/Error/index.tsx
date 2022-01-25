import React from 'react';
import { useNavigate } from 'react-router-dom';

import Feedback from '../../components/Feedback';
import { UserStore, useUser } from '../../context/user';

const Error = () => {
  const navigate = useNavigate();
  const { setUser } = useUser();

  const onClick = () => {
    setUser({} as UserStore);
    navigate('/');
  };

  return (
    <Feedback
      type='error'
      description='Uh oh, something went wrong. Please try again later.'
      onClick={onClick}
    />
  );
};

export default Error;
