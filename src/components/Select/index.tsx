import React, { Fragment, RefObject, useEffect, useRef, useState } from 'react';
import './styles.scss';
import { ReactComponent as ArrowDownIcon } from '../../static/icons/arrow-down.svg';
import { ReactComponent as ArrowUpIcon } from '../../static/icons/arrow-up.svg';

type Option = {
  value: string;
  description: string;
};

type Props = {
  value: Option;
  options: Option[];
  handleSelection: (value: Option) => void;
};

const useOutsideCallback = (
  ref: RefObject<HTMLDivElement>,
  callback: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]);
};

const Select = ({ value, handleSelection, options }: Props) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(value);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const outsideCallback = () => setOpen(false);

  useOutsideCallback(wrapperRef, outsideCallback);

  const onSelection = (value: Option) => {
    setSelected(value);
    setOpen(false);
    handleSelection(value);
  };

  return (
    <div className='select' ref={wrapperRef}>
      <div
        className='select__value'
        id='displayValue'
        onClick={() => setOpen(!open)}
      >
        <span>{selected.description}</span>

        {open ? <ArrowUpIcon /> : <ArrowDownIcon />}
      </div>
      {open ? (
        <ul className='select__options' id='selectContainer'>
          {options.map((option) => (
            <li className='select__option' onClick={() => onSelection(option)}>
              {option.description}
            </li>
          ))}
        </ul>
      ) : (
        <Fragment />
      )}
    </div>
  );
};

export default Select;
