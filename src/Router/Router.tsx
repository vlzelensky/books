import { Route, Routes } from 'react-router-dom';
import { MAINPAGE, BOOKPAGE } from './routes';
import { BookPage, MainPage } from 'pages';

export const Router = () => {
  return (
    <Routes>
      <Route path={MAINPAGE} element={<MainPage />} />
      <Route path={BOOKPAGE} element={<BookPage />} />
    </Routes>
  );
};
