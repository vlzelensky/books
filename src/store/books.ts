import { makeAutoObservable } from 'mobx';
import { booksData } from 'consts';
import { BookI } from 'types';

class Library {
  constructor() {
    makeAutoObservable(this);
  }
  books: BookI[] = booksData;
  booksTaken: number = this.books.filter((el) => el.isTaken).length;
}

export const library = new Library();
