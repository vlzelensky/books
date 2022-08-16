import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { library } from 'store';
import { useModal } from 'hooks';

import './styles.css';
import { Modal } from '../../Components/Modal';

export const BookPage = observer(() => {
  const { id: paramsId } = useParams();
  const navigate = useNavigate();
  const { isVisible, handleIsVisible } = useModal();

  const onReturn = () => navigate(-1);

  const book = library.books.find((book) => book.id === Number(paramsId));

  return (
    <div className='book_page_container'>
      {book ? (
        <div className='book_wrapper'>
          <div className='book_page_info'>
            <img className='book_page_image' src={book.image} alt={book.name} />
            <span className='book_page_author'>{book.author}</span>
            <span className='book_page_name'>{book.name}</span>
            <span>{book.description}</span>
          </div>
          <div className='book_page_controls'>
            <button className='button' onClick={onReturn}>
              Назад
            </button>
            <button className='button secondary' onClick={handleIsVisible}>
              Читать
            </button>
          </div>
          <Modal visible={isVisible} onConfirm={() => {}} onClose={handleIsVisible}>
            <img className='modal_image' src={book.image} alt={book.name} />
            <span className='modal_text'>Установите время на чтение</span>
          </Modal>
        </div>
      ) : (
        <span>404</span>
      )}
    </div>
  );
});
