import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CountDown } from 'Components';
import { BookProps } from './types';
import '../../styles.css';

export const Book: FC<BookProps> = ({ id, author, name, image, isTaken, endDate }) => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const navigate = useNavigate();

  const onClick = () => !isTaken && navigate(`/books/${id}`);

  return (
    <div
      className={`book ${isTaken && 'book_isTaken'}`}
      key={id}
      onClick={onClick}
      onMouseOver={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
    >
      <img className={`book_image ${isTaken && 'isTaken'}`} src={image} alt={name} />
      <span className={`book_author ${isTaken && 'isTaken'}`}>{author}</span>
      <span className={`book_name ${isTaken && 'isTaken'}`}>{name}</span>
      {endDate && <CountDown endDate={endDate} isMouseOver={isMouseOver} id={id} />}
    </div>
  );
};
