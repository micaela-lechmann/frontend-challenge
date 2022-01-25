import clsx from 'clsx';
import React from 'react';
import './styles.scss';

const Loader = ({ show }: { show: boolean }) => {
  return (
    <div className={clsx('loader', { 'loader--hidden': !show })}>
      <div className='loader__dot loader__dot--first'></div>
      <div className='loader__dot loader__dot--second'></div>
      <div className='loader__dot loader__dot--third'></div>
    </div>
  );
};

export default Loader;
