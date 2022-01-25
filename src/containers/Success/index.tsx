import React, { useContext, useEffect } from 'react';

import Feedback from 'src/components/Feedback';
import { useUser } from 'src/context/user';

const Success = () => {
  const { user } = useUser();
  console.log(user);
  return (
    <Feedback
      type='success'
      description='You should receive a confirmation email soon.'
      onClick={() => {}}
    />
  );
};

export default Success;
