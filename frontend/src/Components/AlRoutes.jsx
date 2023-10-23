import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from '../Pages/Home/Home';
import Product from '../Pages/Product/Product';
import SingleProduct from '../Pages/SingleProduct/SingleProduct';
import CartPage from '../Pages/Cart';
import Orders from '../Pages/Checkout/Checkout';
import Confirm from '../Pages/Checkout/Confirm';
import OrderHistory from '../Pages/OrderHistory/OrderHistory';
import Wishlist from '../Pages/Wishlist/Wishlist';
import Payment from '../Pages/Payment/Payment';
import CartItem from '../Pages/Shipping/CartItem';
import Shipping from '../Pages/Shipping/Shipping';
import Productpost from '../Pages/Admin/Productpost';
import Productlist from '../Pages/Admin/Productlist';
import EditProduct from '../Pages/Admin/EditProduct';
const AlRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/products' element={<Product />}></Route>
        <Route path="/products/:id" element={<SingleProduct />} />

        <Route path='/cart' element={<CartPage />}></Route>

        <Route path='/checkout' element={<Orders />}></Route>

        <Route path='/payment' element={<Payment />}></Route>
      
        <Route path='/confirm' element={<Confirm />}></Route>

        <Route path='/orderhistory' element={<OrderHistory />}></Route>

        <Route path='/wishlist' element={<Wishlist />}></Route>

        <Route path='/cartitem' element={<CartItem />} ></Route>

        <Route path='/shipping' element={<Shipping />}></Route>

        <Route path='/productpost' element={<Productpost />}></Route>
        <Route path='/productlist' element={<Productlist />}></Route>
        <Route path='/editproduct' element={<EditProduct />} ></Route>
      </Routes>
    </div>
  );
}

export default AlRoutes;
