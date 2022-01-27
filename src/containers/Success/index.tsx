import React from 'react';
import { useNavigate } from 'react-router-dom';

import Feedback from '../../components/Feedback';
import { UserStore, useUser } from '../../context/user';

const Success = () => {
  const navigate = useNavigate();
  const { setUser } = useUser();

  const onClick = () => {
    setUser({} as UserStore);
    navigate('/');
  };

  return (
    <Feedback
      type='success'
      description='You should receive a confirmation email soon.'
      onClick={onClick}
    />
  );
};

export default Success;
