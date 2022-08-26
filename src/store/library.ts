import { makeAutoObservable } from 'mobx';
import { booksData } from 'consts';
import { BookI } from 'types';
import { mergeBooksWithLocalStorage, mapBooks } from 'utils';

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
    this.books = mapBooks(
      id,
      'take',
      (takenBooks) => {
        const books = [...takenBooks, { id, endDate }];
        localStorage.setItem('takenBooks', JSON.stringify(books));
      },
      endDate
    );
    this.booksTaken += 1;
  }
  returnBook(id: number) {
    this.books = mapBooks(id, 'return', (takenBooks) => {
      const filteredBooks = takenBooks.filter(
        (takenBook: { id: number; endDate: Date }) => takenBook.id !== id
      );
      localStorage.setItem('takenBooks', JSON.stringify(filteredBooks));
    });
    this.booksTaken -= 1;
  }
}

export const library = new Library();
