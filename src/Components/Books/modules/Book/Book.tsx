import React, { FC } from 'react';
import { BookProps } from './types';
import { observer } from 'mobx-react-lite';
import { library } from '../../../../store';
import '../../styles.css';

export const Book: FC<BookProps> = observer(({ id, author, name, image, isTaken }) => (
  <div
    className={`book ${isTaken && 'book_isTaken'}`}
    key={id}
    onClick={() => library.takeBook(id)}
  >
    <img className={`book_image ${isTaken && 'isTaken'}`} src={image} alt={name} />
    <span className={`book_author ${isTaken && 'isTaken'}`}>{author}</span>
    <span className={`book_name ${isTaken && 'isTaken'}`}>{name}</span>
  </div>
));
