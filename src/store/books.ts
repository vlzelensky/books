import { makeAutoObservable } from 'mobx';
import { booksData } from 'consts';
import { BookI } from 'types';

class Books {
  constructor() {
    makeAutoObservable(this);
  }
  books: BookI[] = booksData;
  booksTaken = this.books.filter((el) => el.isTaken).length;
}

export const books = new Books();
