import React from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


const Orders = () => {
    const navigate = useNavigate();
    const { cart, coupon } = useSelector((state) => state.cartReducer );
    const dispatch = useDispatch();

    const getTotalPrice = () => {
        const totalPrice = cart.reduce(
            (acc, item) => acc + item.price * item.quantity,
            0
        );
        return totalPrice;
    };

    

  return (
    <div>
      
    </div>
  );
}

export default Orders;