import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { library } from 'store';
import { NotFoundPage } from 'pages/NotFoundPage';
import { Modal } from 'Components/Modal';
import { useModal } from 'hooks';

import './styles.css';

export const BookPage = observer(() => {
  const { id: paramsId } = useParams();
  const navigate = useNavigate();
  const { isVisible, handleIsVisible } = useModal();

  const onReturn = () => navigate(-1);

  const book = library.books.find((book) => book.id === Number(paramsId));

  if (book) {
    const { author, name, image, description } = book;

    return (
      <div className='book_page_container'>
        <div className='book_wrapper'>
          <div className='book_page_info'>
            <img className='book_page_image' src={image} alt={name} />
            <span className='book_page_author'>{author}</span>
            <span className='book_page_name'>{name}</span>
            <span>{description}</span>
          </div>
          <div className='book_page_controls'>
            <button className='button' onClick={onReturn}>
              Назад
            </button>
            <button className='button secondary' onClick={handleIsVisible}>
              Читать
            </button>
          </div>
          {isVisible && (
            <Modal onClose={handleIsVisible}             id={book.id}
            >
              <img className='modal_image' src={image} alt={name} />
              <span className='modal_text'>Установите время на чтение</span>
            </Modal>
          )}
        </div>
      </div>
    );
  }

  return <NotFoundPage />;
});
