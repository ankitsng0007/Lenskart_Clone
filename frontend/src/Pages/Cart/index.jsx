import { Button, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CartLength from './CartLength';
import Navbar from '../../Components/Navbar/Navbar';
import  CartItem from "./CartItem";
import PriceDetail from './PriceDetail';
import SaleBox from './SaleBox';
import CouponBox from './CouponBox';
import CartEmpty from "./CartEmpty";
import Footer from '../../Components/Footer/Footer';


const CartPage = () => {
    const { cart } = useSelector((state) => state.CartReducer);
    const navigate = useNavigate();

    const getTotalPrice = () => {
        const totalPrice = cart.reduce(
            (acc,item) => acc + item.mPrice * item.quantity,
            0
       );
       return totalPrice;
    };

    const getdiscountPrice = () => {
        const totalPrice = cart.reduce(
            (acc,item) => acc + item.price * item.quantity,
            0
        );
        return totalPrice;
    };

  return (
    <>
    <Navbar />
    {cart.length > 0 ? (
        <Flex
        width={"90%"}
        margin="auto"
        border={"0px solid red"}
        marginTop={"20px"}
        marginBottom="20px"
        gap={16}
        flexDirection={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row",
          "2xl": "row"
        }}
        >
            <Flex
              flexDirection={"column"}
              gap="5"
              border={"0px solid black"}
              width={{
                base: "95%",
                sm: "95%",
                md: "95%",
                lg: "60%",
                xl: "65%",
                "2xl": "65%"
              }}
            >
                <CartLength cartLength={cart.length} />
                <CartItem />
            </Flex>
            <Flex
              flexDirection={"column"}
              border={"0px solid blue"}
              width={{
                base: "95%",
                sm: "95%",
                md: "95%",
                lg: "35%",
                xl: "27%",
                "2xl": "27%"
              }}
              gap={"5"}
            >
                <Text
                  fontSize="20px"
                  fontFamily="sans-serif"
                  border={"0px solid red"}
                  fontWeight={500}
                >
                    Bill Details
                </Text>
                <PriceDetail 
                  totalPrice={getTotalPrice()}
                  discountPrice={getdiscountPrice()}
                />
                <SaleBox />

                <CouponBox />

                <Button
                   backgroundColor={"#12daac"}
                   color="#091e52"
                   borderRadius={"20px"}
                   padding="16px 24px 16px 24px"
                   fontSize={"16px"}
                   height="56px"
                   fontWeight={"700"}
                   onClick={() => navigate("/shipping")}
                >
                    Proceed To Checkout
                </Button>
            </Flex>
        </Flex>
    ) : (
        <CartEmpty />
    )}
    
    <Footer />
    </>
  );
}

export default CartPage;
