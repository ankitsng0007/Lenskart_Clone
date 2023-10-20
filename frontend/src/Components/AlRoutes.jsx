import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from '../Pages/Home/Home';
import Product from '../Pages/Product/Product';
import SingleProduct from '../Pages/SingleProduct/SingleProduct';
import CartPage from '../Pages/Cart';
import Orders from '../Pages/Checkout/Checkout';
import Confirm from '../Pages/Checkout/Confirm';
import OrderHistory from '../Pages/OrderHistory/OrderHistory';
const AlRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/products' element={<Product />}></Route>
        <Route path="/product" element={<SingleProduct />} />

        <Route path='/cart' element={<CartPage />}></Route>

        <Route path='/checkout' element={<Orders />}></Route>
      
        <Route path='/confirm' element={<Confirm />}></Route>

        <Route path='/orderhistory' element={<OrderHistory />}></Route>
      </Routes>
    </div>
  );
}

export default AlRoutes;
