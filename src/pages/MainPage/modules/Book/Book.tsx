import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookProps } from './types';
import '../../styles.css';

export const Book: FC<BookProps> = ({ id, author, name, image, isTaken }) => {
  const navigate = useNavigate();
  const onClick = () => navigate(`/books/${id}`);

  return (
    <div className={`book ${isTaken && 'book_isTaken'}`} key={id} onClick={onClick}>
      <img className={`book_image ${isTaken && 'isTaken'}`} src={image} alt={name} />
      <span className={`book_author ${isTaken && 'isTaken'}`}>{author}</span>
      <span className={`book_name ${isTaken && 'isTaken'}`}>{name}</span>
    </div>
  );
};
