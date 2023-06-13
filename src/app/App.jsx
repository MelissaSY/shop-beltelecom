import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Fragment } from 'react';
import Home from './home/home';
import Cart from './cart/cart';
import Contacts from './contacts/contacts';
import Product from './product/product';
import Category from './category/category';
import Header from '../components/header';
import ShopInfo from './shop-info/shop-info';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop-info' element={<ShopInfo/>}/>
          <Route path='/catalog/:category_id' element={<Category/>}/>
          <Route path='/products/:product_id' element={<Product/>}/>
          <Route path='/contacts' element={<Contacts/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
