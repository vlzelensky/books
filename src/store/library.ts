import { makeAutoObservable } from 'mobx';
import { booksData } from 'consts';
import { BookI } from 'types';

class Library {
  constructor() {
    makeAutoObservable(this);
  }

  books: BookI[] = booksData;

  booksTaken: number = this.books.filter((el) => el.isTaken).length;

  filterBooks(value: string) {
    if (value.length < 2) {
      this.books = booksData;
      return;
    }
    this.books = booksData.filter(({ description, name }) => {
      const searchValue = value.toLowerCase();
      return (
        description.toLowerCase().includes(searchValue) ||
        name.toLowerCase().includes(searchValue)
      );
    });
  }
  takeBook(id: number, endDate: Date) {
    this.books = this.books.map((book) =>
      book.id === id ? { ...book, isTaken: true, endDate } : book
    );
    this.booksTaken += 1;
  }
  returnBook(id: number) {
    this.books = this.books.map((book) =>
      book.id === id ? { ...book, isTaken: false, endDate: null } : book
    );
    this.booksTaken -= 1;
  }
}

export const library = new Library();
