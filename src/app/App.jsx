import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Fragment } from 'react';
import Home from './home/home';
import Cart from './cart/cart-page';
import Contacts from './contacts/contacts';
import Product from './product/product';
import Category from './category/category';
import Header from '../components/header';
import ShopInfo from './shop-info/shop-info';
import { CartContextProvider } from '../contexts/cart-context';

function App() {
  return (
    <Fragment>
      <CartContextProvider>
        <BrowserRouter>
          <Header />
          <div className='page-content'>
            <Routes>
              <Route path='/shop-beltelecom/' element={<Home />} />
              <Route path='/shop-beltelecom/shop-info' element={<ShopInfo />} />
              <Route path='/shop-beltelecom/catalog/:category_id' element={<Category />} />
              <Route path='/shop-beltelecom/products/:product_id' element={<Product />} />
              <Route path='/shop-beltelecom/contacts' element={<Contacts />} />
              <Route path='/shop-beltelecom/cart' element={<Cart />} />
            </Routes>
          </div>
        </BrowserRouter>
      </CartContextProvider>
    </Fragment>
  );
}

export default App;
