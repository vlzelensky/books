import React from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { library } from 'store';
import { Book } from '../MainPage/modules';

export const BookPage = observer(() => {
  const { id: paramsId } = useParams();
  const book = library.books.find((book) => book.id === Number(paramsId));
  if (!book) {
    return <div>404</div>;
  } else {
    const { id, author, name, image, isTaken, description } = book;
    return (
      <div className='container'>
        <Book id={id} author={author} name={name} image={image} isTaken={false} />
      </div>
    );
  }
});
