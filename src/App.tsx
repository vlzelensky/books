import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from 'Components';
import { Router } from './Router';

const App = () => (
  <BrowserRouter>
    <Header />
    <Router />
  </BrowserRouter>
);

export default App;
