import React from 'react';
import Home from './js/pages/home/Home';
import { BrowserRouter } from 'react-router-dom';
import './scss/main.scss'

function App() {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
}

export default App;
