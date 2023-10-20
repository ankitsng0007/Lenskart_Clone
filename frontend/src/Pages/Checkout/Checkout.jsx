import React from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {addToOrder} from "../../Redux/Order/order.action";
import {cartReset} from "../../Redux/CartPage/action";
import { Box, Grid, HStack, Image, Spacer, Switch } from "@chakra-ui/react";
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
        <Box w="90%" m="auto">
            <HStack spacing={"100px"} mt="15px" mb="20px" w="100%" gap="2">
                <HStack>
                    <Image  
                      src="https://static.lenskart.com/media/desktop/img/25-July-19/whatsapp.png"
                      boxSize="30px"
                    />
                    <Box fontSize={{lg:"16px", base: "sm"}} fontWeight="400">
                        Get Orders Updates on Whatsapp
                    </Box>
                    <Switch size="md" />
                    <Spacer />
                </HStack>
            </HStack>
            <Box>
                <Box>
                    <Grid>
                        <Grid>
                            
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    </Box>
  );
}

export default Orders;