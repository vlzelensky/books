import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MAINPAGE } from 'Router/routes';

import './styles.css';

export const NotFoundPage = () => {
  const navigate = useNavigate();
  const onClick = () => navigate(MAINPAGE);

  return (
    <div className='container'>
      <h1>404</h1>
      <h2>Упс, такой книги у нас нет</h2>
      <button className='button' onClick={onClick}>
        Вернуться на главную страницу
      </button>
    </div>
  );
};
