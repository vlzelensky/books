import { FC, ChangeEvent } from 'react';
import { observer } from 'mobx-react-lite';
import { library } from '../../store';

import './styles.css';

export const Search: FC = observer(() => {
  const onChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    library.filterBooks(value);
  };

  return (
    <div className='search'>
      <input
        type='text'
        className='search_input'
        placeholder='Поиск книг'
        onChange={onChange}
      />
    </div>
  );
});
