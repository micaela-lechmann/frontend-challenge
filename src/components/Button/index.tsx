import React from 'react';
import clsx from 'clsx';

import './styles.scss';

type Props = {
  type: 'primary' | 'secondary';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: React.FC<Props & React.HTMLAttributes<HTMLButtonElement>> = ({
  type,
  onClick,
  children,
  ...props
}) => {
  return (
    <button
      className={clsx('button', [
        {
          'button--primary': type === 'primary',
          'button--secondary': type === 'secondary',
        },
        props.className,
      ])}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
