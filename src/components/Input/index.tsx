import React, {
  ChangeEvent,
  InputHTMLAttributes,
  ReactNode,
  useState,
} from 'react';
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
  handleChange,
  label,
  errorMessage,
  type,
  ...props
}: InputProps) => {
  const [inputValue, setInputValue] = useState(value);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    handleChange(e);
  };

  return (
    <div className={clsx('input', props.className)}>
      <input
        type={type}
        className='input__field'
        value={inputValue}
        placeholder={label}
        onChange={onChange}
      />
      {errorMessage && (
        <span className='input__error-message'>{errorMessage}</span>
      )}
    </div>
  );
};

export default Input;
