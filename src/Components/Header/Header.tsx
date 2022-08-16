import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useLocation } from 'react-router-dom';
import { Input } from 'Components';
import { convertTakenBooksAmount } from 'utlis/convertTakenBooksAmount';
import { library } from 'store';
import { MAINPAGE } from 'Router/routes';

import './styles.css';

export const Header = observer(() => {
  const [searchValue, setSearchValue] = useState<string>('');

  const onChange = (value: string) => setSearchValue(value);

  const booksTaken = convertTakenBooksAmount(library.booksTaken);

  const { pathname } = useLocation();
  const isMainPage = pathname === MAINPAGE;

  return (
    <>
      {isMainPage && (
        <div className='header'>
          <span className='header_counter'>У вас на руках: {booksTaken}</span>
          <Input
            type='text'
            placeholder='Поиск книги'
            value={searchValue}
            onChange={onChange}
          />
        </div>
      )}
    </>
  );
});
