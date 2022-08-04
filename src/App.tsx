import React, {Suspense} from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayOut from './layouts/MainLayOut';
//import Cart from './pages/Cart';
// import FullPizza from './pages/FullPizza';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';

import './scss/app.scss';

const Cart = React.lazy(() => import(/* webpackChunkName: "Cart" */ './pages/Cart'))
const FullPizza = React.lazy(() => import(/* webpackChunkName: "FullPizza" */'./pages/FullPizza'))

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainLayOut/>}>
          <Route path='' element={<Home/>} />
          <Route path='cart' element={
            <Suspense fallback={<h2>Загрузка корзины...</h2>}>
              <Cart/>
            </Suspense>
          } />
          <Route path='pizza/:pizzaId' element={
            <Suspense fallback={<h2>Идет загрузка...</h2>}>
              <FullPizza/>
            </Suspense>
          } />

          <Route path="*" element={<ErrorPage/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
