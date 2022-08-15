import { FC, ChangeEvent } from 'react';
import './styles.css';
import { observer } from 'mobx-react-lite';
import { books } from '../../store';

export const Search: FC = observer(() => {
  const onChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    books.filterBooks(value);
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
