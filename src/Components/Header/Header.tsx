import React from 'react';
import { observer } from 'mobx-react-lite';
import { Search } from 'Components';
import { books } from 'store';

export const Header = observer(() => {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <span style={{ fontSize: '64px' }}>У вас на руках: {books.booksTaken} книг</span>
      <Search />
    </div>
  );
});
