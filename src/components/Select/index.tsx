import React, {
  Fragment,
  ReactNode,
  RefObject,
  useEffect,
  useRef,
  useState,
} from 'react';
import './styles.scss';
import { ReactComponent as ArrowDownIcon } from '../../static/icons/arrow-down.svg';
import { ReactComponent as ArrowUpIcon } from '../../static/icons/arrow-up.svg';
import Input from '../Input';

export type Option = {
  key: string;
  value: string;
};

type Props = {
  options: Option[];
  label: string;
  name: string;
  selected: Option;
  errorMessage?: ReactNode;
  handleSelection: (selected: Option) => void;
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

const Select = ({
  name,
  label,
  options,
  selected,
  handleSelection,
  errorMessage,
}: Props) => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const outsideCallback = () => setOpen(false);

  useOutsideCallback(wrapperRef, outsideCallback);

  const onSelection = (value: Option) => {
    setOpen(false);
    handleSelection(value);
  };

  return (
    <div className='select' ref={wrapperRef}>
      <div onClick={() => setOpen(!open)}>
        <Input
          type='select'
          value={selected?.value}
          label={label}
          handleChange={() => {}}
          name={name}
          tabIndex={0}
          aria-haspopup='listbox'
          errorMessage={errorMessage}
        />
      </div>
      <div className='select__icon'>
        {open ? <ArrowUpIcon /> : <ArrowDownIcon />}
      </div>
      {open ? (
        <ul role='listbox' className='select__options' tabIndex={-1}>
          {options.map((option) => (
            <li
              className='select__option'
              onClick={() => onSelection(option)}
              role='option'
              aria-selected={selected.key === option.key}
            >
              {option.value}
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
