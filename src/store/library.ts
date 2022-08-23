import { makeAutoObservable } from 'mobx';
import { booksData } from 'consts';
import { BookI } from 'types';
import { mergeBooksWithLocalStorage } from '../utils/mergeBooksWithLocalStorage';

class Library {
  constructor() {
    makeAutoObservable(this);
  }

  books: BookI[] = mergeBooksWithLocalStorage(booksData);

  booksTaken: number = this.books.filter((el) => el.isTaken).length;

  filterBooks(value: string) {
    if (value.length < 2) {
      this.books = mergeBooksWithLocalStorage(booksData);
      return;
    }
    const filteredBooks = booksData.filter(({ description, name }) => {
      const searchValue = value.toLowerCase();
      return (
        description.toLowerCase().includes(searchValue) ||
        name.toLowerCase().includes(searchValue)
      );
    });
    this.books = mergeBooksWithLocalStorage(filteredBooks);
  }
  takeBook(id: number, endDate: Date) {
    this.books = this.books.map((book) => {
      if (book.id === id) {
        const localStorageItem = localStorage.getItem('takenBooks');
        if (localStorageItem) {
          const takenBooks = JSON.parse(localStorageItem);
          takenBooks.push({ id, endDate });
          localStorage.setItem('takenBooks', JSON.stringify(takenBooks));
        } else {
          localStorage.setItem('takenBooks', JSON.stringify([{ id, endDate }]));
        }
        return { ...book, isTaken: true, endDate };
      }
      return book;
    });
    this.booksTaken += 1;
  }
  returnBook(id: number) {
    this.books = this.books.map((book) => {
      if (book.id === id) {
        const localStorageItem = localStorage.getItem('takenBooks');
        if (localStorageItem) {
          let takenBooks = JSON.parse(localStorageItem);
          takenBooks = takenBooks.filter(
            (takenBook: { id: number; endDate: Date }) => takenBook.id !== id
          );
          localStorage.setItem('takenBooks', JSON.stringify(takenBooks));
        }
        return { ...book, isTaken: false, endDate: null };
      }
      return book;
    });
    this.booksTaken -= 1;
  }
}

export const library = new Library();
