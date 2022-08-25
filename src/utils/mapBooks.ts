import { library } from '../store';

export const mapBooks = (
  id: number,
  mode: 'take' | 'return',
  callback: (takenBooks: { id: number; endDate: Date }[]) => void,
  endDate: Date | null = null
) => {
  return library.books.map((book) => {
    if (book.id === id) {
      const localStorageItem = localStorage.getItem('takenBooks');
      if (localStorageItem) {
        let takenBooks = JSON.parse(localStorageItem);
        callback(takenBooks);
      } else {
        localStorage.setItem('takenBooks', JSON.stringify([{ id, endDate }]));
      }
      return { ...book, isTaken: mode === 'take', endDate: endDate };
    }
    return book;
  });
};
