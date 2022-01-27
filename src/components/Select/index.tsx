import React, {
  Fragment,
  KeyboardEvent,
  ReactNode,
  RefObject,
  useEffect,
  useRef,
  useState,
} from 'react';
import clsx from 'clsx';

import './styles.scss';
import { ReactComponent as ArrowDownIcon } from '../../static/icons/arrow-down.svg';
import { ReactComponent as ArrowUpIcon } from '../../static/icons/arrow-up.svg';
import { ReactComponent as CheckedIcon } from '../../static/icons/checked.svg';
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
  const [active, setActive] = useState(-1);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const optionRef = useRef<HTMLLIElement>(null);

  const outsideCallback = () => setOpen(false);

  useOutsideCallback(wrapperRef, outsideCallback);

  const onSelection = (value: Option) => {
    setOpen(false);
    handleSelection(value);
  };

  const navigateOptions = (e: KeyboardEvent<HTMLElement>) => {
    if (e.key === 'ArrowDown') {
      if (active === options.length - 1) {
        return;
      }
      setActive(active + 1);
    } else if (e.key === 'ArrowUp') {
      if (active - 1 < 0) {
        return;
      }
      setActive(active - 1);
    }
  };

  useEffect(() => {
    optionRef.current?.focus();
  }, [active]);

  const onListboxKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Enter') {
      setOpen(!open);
    } else {
      navigateOptions(e);
      e.currentTarget.blur();
    }
  };

  const onOptionKeyDown = (e: KeyboardEvent<HTMLElement>, value: Option) => {
    if (e.key === 'Enter') {
      onSelection(value);
    } else {
      navigateOptions(e);
    }
  };

  return (
    <div className='select' ref={wrapperRef}>
      <div
        tabIndex={0}
        aria-haspopup='listbox'
        onKeyDown={onListboxKeyDown}
        onClick={() => {
          setOpen(!open);
        }}
        className='select__value'
        data-testid='select'
      >
        <Input
          type='text'
          value={selected?.value}
          label={label}
          name={name}
          errorMessage={errorMessage}
          disabled
        />
      </div>
      <div className='select__icon'>
        {open ? <ArrowUpIcon /> : <ArrowDownIcon />}
      </div>
      {open ? (
        <ul role='listbox' className='select__options'>
          {options.map((option, index) => (
            <li
              className={clsx('select__option', {
                'select__option--selected': selected.key === option.key,
              })}
              onClick={() => onSelection(option)}
              role='option'
              aria-selected={selected.key === option.key}
              tabIndex={-1}
              onKeyDown={(e) => onOptionKeyDown(e, option)}
              key={option.key}
              ref={active === index ? optionRef : null}
            >
              {option.value}
              {selected.key === option.key && <CheckedIcon />}
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
