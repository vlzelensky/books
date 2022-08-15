import React from 'react';
import { observer } from 'mobx-react-lite';
import { Search } from 'Components';
import { library } from 'store';
import './styles.css';

export const Header = observer(() => {
  return (
    <div className='header'>
      <span className='header_counter'>У вас на руках: {library.booksTaken} книг</span>
      <Search />
    </div>
  );
});
