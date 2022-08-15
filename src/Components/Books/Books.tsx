import React from 'react';
import { observer } from 'mobx-react-lite';
import { books } from 'store';
import { Book } from './modules';
import { useLazyLoad } from 'hooks';

import './styles.css';

export const Books = observer(() => {
  const { data, onScroll } = useLazyLoad(books.books, 9);
  return (
    <div className='container' onScroll={onScroll}>
      {!!data.length ? (
        data.map((book) => <Book {...book} key={book.id} />)
      ) : (
        <span>Ничего не найдено</span>
      )}
    </div>
  );
});
