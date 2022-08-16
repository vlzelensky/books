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
    if (value.length > 1) {
      this.books = booksData.filter(({ description, name }) => {
        const searchValue = value.toLowerCase();
        return (
          description.toLowerCase().includes(searchValue) ||
          name.toLowerCase().includes(searchValue)
        );
      });
      return;
    }
    this.books = booksData;
  }
  takeBook(id: number) {
    this.books = this.books.map((book) =>
      book.id === id ? { ...book, isTaken: true } : book
    );
    this.booksTaken += 1;
  }
}

export const library = new Library();
