import React, { ChangeEvent, InputHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

import './styles.scss';

type InputProps = {
  label: string;
  value: string;
  type: 'input' | 'textarea';
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: ReactNode;
} & React.HTMLAttributes<HTMLInputElement>;

const Input = ({
  value,
  label,
  handleChange,
  errorMessage,
  type,
  ...props
}: InputProps) => {
  return (
    <div className={clsx('input', props.className)}>
      <input
        type={type}
        className='input__field'
        value={value}
        placeholder={label}
        onChange={handleChange}
      />
      {errorMessage && (
        <span className='input__error-message'>{errorMessage}</span>
      )}
    </div>
  );
};

export default Input;
