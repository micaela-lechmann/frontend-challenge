import clsx from 'clsx';
import React, { KeyboardEvent } from 'react';

import { ReactComponent as CheckedIcon } from '../../static/icons/checked.svg';

import './styles.scss';

type Props = {
  value: boolean;
  text: string;
  onClick: (value: boolean) => void;
};

const Checkbox = ({ value, text, onClick }: Props) => {
  const onKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Enter') {
      onClick(!value);
    }
  };

  return (
    <div className='checkbox'>
      <div
        className={clsx('checkbox__input', {
          'checkbox__input--checked': value,
        })}
        tabIndex={0}
        role='checkbox'
        aria-label='checkbox'
        aria-checked={value}
        onClick={() => onClick(!value)}
        onKeyDown={onKeyDown}
      >
        {value && <CheckedIcon />}
      </div>
      <p className='checkbox__text'>{text}</p>
    </div>
  );
};

export default Checkbox;
