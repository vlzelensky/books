import React from 'react';
import { observer } from 'mobx-react-lite';
import { Search } from 'Components';
import { books } from 'store';
import { convertTakenBooksAmount } from 'utlis/convertTakenBooksAmount';
import './styles.css';

export const Header = observer(() => {
  const booksTaken = convertTakenBooksAmount(books.booksTaken);
  return (
    <div className='header'>
      <span className='header_counter'>У вас на руках: {booksTaken}</span>
      <Search />
    </div>
  );
});
