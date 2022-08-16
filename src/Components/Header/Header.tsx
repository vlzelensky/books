import React from 'react';
import { observer } from 'mobx-react-lite';
import { useLocation } from 'react-router-dom';
import { Search } from 'Components';
import { library } from 'store';
import { MAINPAGE } from 'Router/routes';

import './styles.css';

export const Header = observer(() => {
  const { pathname } = useLocation();
  const isMainPage = pathname === MAINPAGE;

  return (
    <>
      {isMainPage && (
        <div className='header'>
          <span className='header_counter'>
            У вас на руках: {library.booksTaken} книг
          </span>
          <Search />
        </div>
      )}
    </>
  );
});
