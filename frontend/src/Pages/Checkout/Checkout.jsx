import React from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {addToOrder} from "../../Redux/Order/order.action";
import {cartReset} from "../../Redux/CartPage/action";
import { Box } from "@chakra-ui/react";
import Navbar, {} from "../../Components/Navbar/Navbar"


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

    const handleClick = () =>{
        dispatch(addToOrder(cart));
        navigate("/confirm");
        dispatch(cartReset());
    };

    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    const day = today.getDate().toString().padStart(2, "0");
    const currentDate = `${day}-${month}-${year}`;

  return (
    <Box m="auto">
        <Navbar />
    </Box>
  );
}

export default Orders;