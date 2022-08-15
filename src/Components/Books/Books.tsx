import React from 'react';
import { observer } from 'mobx-react-lite';
import { library } from 'store';
import { useLazyLoad } from 'hooks';
import { Book } from './modules';
import './styles.css';

export const Books = observer(() => {
  const { data, onScroll } = useLazyLoad(library.books, 9);
  return (
    <div className='container' onScroll={onScroll}>
      <div className='wrapper'>
        {data.map((book) => (
          <Book {...book} key={book.id} />
        ))}
      </div>
    </div>
  );
});
