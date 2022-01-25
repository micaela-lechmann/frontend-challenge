import React from 'react';

import Feedback from 'src/components/Feedback';

const Error = () => {
  return (
    <Feedback
      type='error'
      description='Uh oh, something went wrong. Please try again later.'
      onClick={() => {}}
    />
  );
};

export default Error;
