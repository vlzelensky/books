import { Route, Routes } from 'react-router-dom';
import { MAINPAGE, BOOKPAGE } from './routes';
import { Books } from 'Components';

export const Router = () => {
  return (
    <Routes>
      <Route path={MAINPAGE} element={<Books />} />
      <Route path={BOOKPAGE} element={<></>} />
    </Routes>
  );
};
