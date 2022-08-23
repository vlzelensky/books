import { BookI } from '../types';

export const mergeBooksWithLocalStorage = (data: BookI[]) => {
  return data.map((book) => {
    const localStorageItem = localStorage.getItem('takenBooks');
    if (localStorageItem) {
      const takenBooks = JSON.parse(localStorageItem);
      const similarBook = takenBooks.find(
        (takenBook: { id: number; endDate: Date }) => takenBook.id === book.id
      );
      if (similarBook) {
        return { ...book, isTaken: true, endDate: new Date(similarBook.endDate) };
      }
      return book;
    }
    return book;
  });
};
