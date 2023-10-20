import React from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {addToOrder} from "../../Redux/Order/order.action";
import {cartReset} from "../../Redux/CartPage/action";
import { Box, Flex, Grid, HStack, Image, Spacer, Switch } from "@chakra-ui/react";
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
            <Box border={"1px"} borderColor="gray.300">
                <Box p={"10px 10px 10px 10px"} m="15px 0px 0px 15px" w="97%">
                    <Grid
                      templateColumns={{
                        base: "repeat(1,1fr)",
                        sm: "repeat(1,1fr)",
                        md: "repeat(2,1fr)",
                        lg: "repeat(2,1fr)",
                        xl: "repeat(2,1fr)"
                      }}
                      w="100%"
                    >
                        <Grid
                          templateColumns={{
                            base: "repeat(1,1fr)",
                            sm: "repeat(1,1fr)",
                            md: "repeat(1,1fr)",
                            lg: "repeat(2,1fr)",
                            xl: "repeat(2,1fr)"
                          }}
                          gap={{ lg: "5", sm: "0", base: "0" }}
                        >
                            <Flex>
                                <Box fontSize={"15px"} fontWeight="400">
                                    Order ID :
                                </Box>

                                <Box
                                  fontSize={"14px"}
                                  ml="3px"
                                  letterSpacing="1.5px"
                                  fontWeight={"500"}
                                >
                                    {Math.round(Math.random() * 1125452 + Math.random())}
                                </Box>
                            </Flex>
                            <Flex>
                                <Box fontSize={"15px"} fontWeight="400">
                                    Order Date : 
                                </Box>
                                <Box
                                  fontSize={"14px"}
                                  ml="3px"
                                  letterSpacing="1.5px"
                                  fontWeight={"500"}
                                >
                                    {currentDate}
                                </Box>
                            </Flex>
                        </Grid>
                        {coupon > 0 ? (
                            <Grid
                            templateColumns={{
                                base: "repeat(1,1fr)",
                                sm: "repeat(1,1fr)",
                                md: "60% 40%",
                                lg: "60% 40%",
                                xl: "70% 30%"
                              }}
                              gap="2"
                              justifyContent={{
                                lg: "right",
                                md: "right",
                                sm: "left",
                                base: "left"
                              }}
                            >
                                <Box
                                  fontSize={"15px"}
                                  fontWeight="400"
                                  textAlign={{
                                    xl: "right",
                                    lg: "right",
                                    md: "right",
                                    base: "left"
                                  }}
                                >
                                    Total Price :{" "}
                                    <strong>
                                    ₹
                                     {Math.round(getTotalPrice() + getTotalPrice() * 0.18) -
                                       (coupon || 0)}
                                     .00
                                    </strong>
                                </Box>
                                <Flex 
                                  justifyContent={{
                                    lg: "left",
                                    md: "left",
                                    sm: "left",
                                    base: "left"
                                  }}
                                  flexWrap="wrap"
                                >
                                    <Box
                                      fontSize="14px"
                                      p="1"
                                      bg="red.500"
                                      color="whiteAlpha.900"
                                      ml="3px"
                                      letterSpacing="1.5px"
                                      fontWeight="bold"
                                    >
                                        Coupon Applied
                                    </Box>
                                </Flex>
                            </Grid>
                        ) : (
                            <Flex
                                justifyContent={{
                                lg: "right",
                                md: "right",
                                sm: "left",
                                base: "left"
                              }}
                            >
                                <Box fontSize={"16px"} fontWeight="400" textAlign="right">
                                  Total Price :
                                </Box>

                                <Box
                                   fontSize={"17px"}
                                   ml="3px"
                                   letterSpacing="1.5px"
                                   fontWeight={"500"}
                                >
                              ₹{Math.round(getTotalPrice() + getTotalPrice() * 0.18)}.00
                             
                              </Box>
                            </Flex>
                        )}
                    </Grid>
                </Box>
            </Box>
        </Box>
    </Box>
  );
}

export default Orders;