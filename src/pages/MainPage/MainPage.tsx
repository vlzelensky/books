import React from 'react';
import { observer } from 'mobx-react-lite';
import { library } from 'store';
import { Book } from './modules';
import { useLazyLoad } from 'hooks';

import './styles.css';

export const MainPage = observer(() => {
  const { data, onScroll } = useLazyLoad(library.books, 9);
  return (
    <div className='container' onScroll={onScroll}>
      {data.map((book) => (
        <Book {...book} key={book.id} />
      ))}
    </div>
  );
});
