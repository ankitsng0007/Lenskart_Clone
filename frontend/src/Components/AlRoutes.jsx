import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from '../Pages/Home/Home';
import Product from '../Pages/Product/Product';
const AlRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/products' element={<Product />}></Route>
      </Routes>
    </div>
  );
}

export default AlRoutes;
