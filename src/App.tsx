import React from 'react';
import MainLayOut from './layouts/MainLayOut';
import Cart from './pages/Cart';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';

import './scss/app.scss';
import { Route, Routes } from 'react-router-dom';
import FullPizza from './pages/FullPizza';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainLayOut/>}>
          <Route path='' element={<Home/>} />
          <Route path='cart' element={<Cart/>} />
          <Route path='pizza/:id' element={<FullPizza/>} />

          <Route path="*" element={<ErrorPage/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
