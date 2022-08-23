import { makeAutoObservable } from 'mobx';
import { booksData } from 'consts';
import { BookI } from 'types';
import { mergeBooksWithLocalStorage } from '../utlis/mergeBooksWithLocalStorage';

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
  takeOrReturnBook(id: number, endDate?: Date) {
    this.books = this.books.map((book) => {
      if (book.id === id) {
        const localStorageItem = localStorage.getItem('takenBooks');
        if (localStorageItem) {
          let takenBooks = JSON.parse(localStorageItem);
          if (endDate) {
            takenBooks.push({ id, endDate });
          } else {
            takenBooks = takenBooks.filter(
                (takenBook: { id: number; endDate: Date }) => takenBook.id !== id
            );
          }
          localStorage.setItem('takenBooks', JSON.stringify(takenBooks));
        } else {
          if (endDate) {
            localStorage.setItem('takenBooks', JSON.stringify([{ id, endDate }]));
          }
        }
        return { ...book, isTaken: !!endDate, endDate: endDate || null };
      }
      return book
    })
    this.booksTaken = endDate ? this.booksTaken + 1 : this.booksTaken - 1
  }
}

export const library = new Library();
