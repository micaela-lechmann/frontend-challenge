import clsx from 'clsx';
import React from 'react';
import './styles.scss';

const Spinner = ({ show }: { show: boolean }) => {
  return (
    <div className={clsx('spinner', { 'spinner--hidden': !show })}>
      <div className='spinner__dot spinner__dot--first'></div>
      <div className='spinner__dot spinner__dot--second'></div>
      <div className='spinner__dot spinner__dot--third'></div>
    </div>
  );
};

export default Spinner;
