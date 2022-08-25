import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { library } from 'store';
import { useLazyLoad } from 'hooks';
import { Book } from './modules';
import './styles.css';

export const MainPage = observer(() => {
  const { data, onScroll } = useLazyLoad(library.books, 9);

  return (
    <div className='container' onScroll={onScroll}>
      <div className='wrapper'>
        {!!data.length ? (
          data.map((book) => <Book {...book} key={book.id} />)
        ) : (
          <span>Ничего не найдено</span>
        )}
      </div>
    </div>
  );
});
