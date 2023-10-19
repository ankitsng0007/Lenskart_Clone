import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from '../Pages/Home/Home';
import Product from '../Pages/Product/Product';
import SingleProduct from '../Pages/SingleProduct/SingleProduct';
const AlRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/products' element={<Product />}></Route>
        <Route path="/product" element={<SingleProduct />} />
      </Routes>
    </div>
  );
}

export default AlRoutes;
