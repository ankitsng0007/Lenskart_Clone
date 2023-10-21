import { Box, Flex, Grid, Image } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToOrder } from '../../Redux/Order/order.action';
import { cartReset } from '../../Redux/CartPage/action';
import Navbar from '../../Components/Navbar/Navbar';

const Payment = () => {
    const init = {
        card : "",
        date : "",
        cvv : "",
        cardname : ""
    };

    const navigate = useNavigate();
    const { cart } = useSelector((state) => state.CartReducer);
    const dispatch = useDispatch();
    const [userData, setUserData] = useState(init);
    const [cards, setCards] = useState();
    const [dates, setDates] = useState();
    const [cv, setCv] = useState();
    const [names, setNames] = useState();

    const Required = (props) => {
        return (
            <Box
            fontSize={"14px"}
            m="3px 0px 3px 0px"
            color={"#ff1f1f"}
            fontWeight="500"
            letterSpacing={"-0.4px"}
            >
                {props.info}
            </Box>
        );
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });

        switch(name){
            case "card":
                setCards(
                    value === "" ? (
                        <Required info="This is a required field" />
                    ) : (
                        <Required info="Card Number should be 16 digit (eg. xxxxxxxxxxxxxxxx" />
                    )
                );
                break;

                case "date" :
                    setDates(
                        value === "" ? (
                            <Required info="This is a required field" />
                        ) : (
                            <Required info="Please Enter a valid month & Year formate ( eg. MM/YY)" />
                        )
                    );
                    break;

                    case "cvv":
        setCv(
          value === "" ? (
            <Required info="This is a required feild" />
          ) : (
            <Required info="CVV should be 3 digit (eg. XXX)" />
          )
        );
        break;

      case "cardname":
        setNames(
          value === "" ? <Required info="This is a required feild" /> : ""
        );
        break;

      default:
        break;
    }
  };

        const handleClick = () => {
            dispatch(addToOrder(cart));
            navigate("/confirm");
            dispatch(cartReset());
        };

  return (
    <>
    <Navbar />
    <Box>
        <br />
        <br/>
        <Box>
            <Box
              w={{ xl: "75%", lg: "80%", md: "90%", sm: "90%", base: "95%" }}
              m="auto"
            >
                <Box
                  m="auto"
                  boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
                  borderRadius="lg"
                >
                    <Box
                      bg="#00bac6"
                      color={"white"}
                      fontWeight="700"
                      p="4px 0px 6px 6px "
                      fontSize="xl"
                      textAlign="left"
                    >
                        PAYMENT OPTION
                    </Box>
                    <br/>
                    <Box>
                        <Flex
                          w="200px"
                          flexDirection="column"
                          borderRight="2px solid gray"
                          borderBottom="2px solid gray"
                          borderRadius="2xl"
                          display={{ md: "inherit", base: "none" }}
                        >
                            <Box
                              p="16px 0px 16px 16px"
                              fontWeight={"500"}
                              _hover={{ bg: "blackAlpha.200" }}
                              bg="blackAlpha.200"
                            >
                                Credit/Debit Card
                            </Box>
                            <Box
                              p="16px 0px 16px 16px"
                              fontWeight={"500"}
                              _hover={{ bg: "blackAlpha.200" }}
                            >
                                BHIM/UPI PhonePe
                            </Box>
                            <Box
                              p="16px 0px 16px 16px"
                              fontWeight={"500"}
                              _hover={{ bg: "blackAlpha.200" }}
                            >
                                Net Banking
                            </Box>
                            <Box
                              p="16px 0px 16px 16px"
                              fontWeight={"500"}
                              _hover={{ bg: "blackAlpha.200" }}
                            >
                                UPI QR Code
                            </Box>
                            <Box
                              p="16px 0px 16px 16px"
                              fontWeight={"500"}
                              _hover={{ bg: "blackAlpha.200" }}
                            >
                                Paytm
                            </Box>
                        </Flex>
                        <Box m="10px 10px 10px 10px">
                            <Grid
                              templateColumns={{
                                base: "repeat(1,1fr)",
                                sm: "repeat(1,1fr)",
                                md: "20% 75%",
                                lg: "20% 75%",
                                xl: "20% 80%"
                              }}
                              fontSize="lg"
                              justifyContent={{
                                md: "left",
                                sm: "center",
                                base: "center"
                              }}
                            >
                                <Box
                                  fontWeight="bold"
                                  color="gray.600"
                                  display={{ md: "inherit", base: "none" }}
                                >
                                    100% Secure
                                </Box>
                                <Image 
                                    ml={{ md: "80px", sm: "0px", base: "0px" }}
                                    h={{ xl: "40px", lg: "40px", base: "40px" }}
                                    src="https://static5.lenskart.com/images/cust_mailer/Mar-03/CheckoutStrip.png"
                                    w={{
                                      xl: "100%",
                                      lg: "80%",
                                      md: "80%",
                                      sm: "100%",
                                      base: "100%"
                                    }}
                                />
                            </Grid>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>
    </>
  );
}

export default Payment;
