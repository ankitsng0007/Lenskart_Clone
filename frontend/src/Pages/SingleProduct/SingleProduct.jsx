import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";


const SingleProduct = () => {
    const {id } = useParams();
    const [data, setData] = useState({});
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {cart} = useSelector((state) => state.cartReducer)
    
    const handleAddToCart = () => {
        const existingItem = cart.findIndex((item) => item._id === data._id);
        if(existingItem === -1){
            data.quantity = 1;
            dispatch(addToCart(data));
            setTimeout(() => {
                navigate("/cart");
            }, 1000);
        }else{
            alert("Product Already in Cart")
        }
    };
    
  return (
    <div>
      
    </div>
  );
}

export default SingleProduct;
