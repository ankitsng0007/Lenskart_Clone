import { useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch } from "react-redux";


const CouponBox = () => {
    const [couponCode, setCouponCode ] = useState("");
    const dispatch = useDispatch();
    const toast = useToast();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(couponCode !== ""){
            dispatch(coupon(couponCode));
            toast({
                description: "Coupon code applied Successfully",
                status: "success",
                duration: 5000,
                isClosable: true,
                position: "top"
            });
        }else {
            toast({
                description: "Please enter valid coupon code",
                status: "info",
                duration: 5000,
                isClosable: true,
                position: "top"
            });
        }
    };

  return (
    <div>
      
    </div>
  );
}

export default CouponBox;
