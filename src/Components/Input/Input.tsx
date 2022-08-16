import { ChangeEvent, FC } from 'react';
import { observer } from 'mobx-react-lite';
import { library } from 'store';
import { InputProps } from './types';

import './styles.css';

export const Input: FC<InputProps> = observer(
  ({ value, onChange, type, placeholder = '' }) => {
    const handleInput = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
      onChange(value);
      if (type === 'text') {
        library.filterBooks(value);
      }
    };

    return (
      <div className={`input_wrapper ${type === 'date' && 'date'}`}>
        <input
          type={type}
          className='input'
          placeholder={placeholder}
          value={value}
          onChange={handleInput}
        />
      </div>
    );
  }
);
