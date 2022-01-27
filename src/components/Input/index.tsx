import React, { ChangeEvent, HTMLInputTypeAttribute, ReactNode } from 'react';
import clsx from 'clsx';

import './styles.scss';

type Props = {
  label: string;
  type: HTMLInputTypeAttribute;
  name: string;
  value: string;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: ReactNode;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({
  value,
  handleChange,
  label,
  name,
  errorMessage,
  type,
  ...props
}: Props) => {
  return (
    <div className={'input'}>
      <input
        type={type}
        className={clsx('input__field', {
          'input__field--error': !!errorMessage,
          'input__field--filled': !!value,
        })}
        value={value}
        onChange={handleChange}
        id={name}
        {...props}
      />
      <label className='input__label' htmlFor={name}>
        {label}
      </label>
      {errorMessage && (
        <span className='input__error-message'>{errorMessage}</span>
      )}
    </div>
  );
};

export default Input;
