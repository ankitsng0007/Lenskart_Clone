import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from '../Pages/Home/Home';
import Product from '../Pages/Product/Product';
import SingleProduct from '../Pages/SingleProduct/SingleProduct';
import CartPage from '../Pages/Cart';
import Orders from '../Pages/Checkout/Checkout';
const AlRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/products' element={<Product />}></Route>
        <Route path="/product" element={<SingleProduct />} />

        <Route path='/cart' element={<CartPage />}></Route>

        <Route path='/checkout' element={<Orders />}></Route>
      </Routes>
    </div>
  );
}

export default AlRoutes;
