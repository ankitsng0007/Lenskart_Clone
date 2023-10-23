import React, { useContext } from 'react';
import {Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Avatar, Box, Button, Drawer, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, HStack, Heading, Image, Input, Text, useDisclosure} from "@chakra-ui/react";
import {AuthContext} from "../../ContextApi/AuthContext";
import {Link, useNavigate} from "react-router-dom";
import {HamburgerIcon} from "@chakra-ui/icons";
import Login from "../../Pages/Login/Login";
import Signup from '../../Pages/SignUp/Signup';



const NavbarMob = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const firstField = React.useRef();
    const { isAuth, setisAuth, Authdata } = useContext(AuthContext);
    const navigate = useNavigate();
  return (
    <Box
      display={{ lg: "inherit", xl: "none" }}
      cursor="pointer"
      bg="#fbf9f7"
      p={2.5}
    >
        <HStack m="auto" justifyContent="space-between">
            <Box w={{ lg: "20%", md: "20%", sm: "22%", base: "30%" }}>
          <Link to="/">
              <Image
              src="https://i.imgur.com/OHxtfjd.png"
              alt="logo"
              w={{ lg: "75%", md: "100%", sm: "100%", base: "100%" }}
            />
          </Link>

            </Box>
             <Box w="70%" display={{ sm: "inherit", base: "none" }}>
          <Input
            placeholder="What are you looking for"
            border="1px solid black"
            w="90%"
            fontSize="16px"
            h="35px"
          />
        </Box>

        <Box>
            <Button colorScheme="blue" p="0" onClick={onOpen}>
            <HamburgerIcon fontSize="20px" />
          </Button>
          <Drawer
            size="xs"
            isOpen={isOpen}
            placement="right"
            initialFocusRef={firstField}
            onClose={onClose}
          >
            <DrawerOverlay />
            <DrawerContent color="whiteAlpha.900">
                <DrawerCloseButton />
                <DrawerHeader bg="whiteAlpha.900">
                    {isAuth ? (
                        <Flex
                          borderBottom="2px solid #18CFA8"
                          p="5%"
                          direction="column"
                          justifyContent="center"
                          alignItems="center"
                          w="100%"
                        >
                            <Flex w="100%">
                                <Avatar 
                                   src="https://bit.ly/broken-link"
                                   size="lg"
                                   mr="2"
                                />
                                <Flex
                                  direction="column"
                                  justifyContent="center"
                                  alignItems="flex-start"
                                >
                        <Text mt="10px" fontSize="20px" color="blackAlpha.900">
                          {Authdata[0].first_name}
                        </Text>
                        <Text color="gray.500" mt="5%" fontSize="sm">
                          Enjoy Buy 1 Get 1 offer for 365 days
                        </Text>
                      </Flex>
                            </Flex>
                    <Button
                      w="100%"
                      h="35px"
                      mt="5%"
                      colorScheme="blue"
                      fontSize="15px"
                      _hover={{ bg: "blue.400" }}
                    >
                      GET GOLD MEMBERSHIP
                    </Button>
                        </Flex>
                    ) : (
                        <Box
                          style={{
                      padding: "5%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%"
                    }}
                        >
                            <Box
                              style={{
                              width: "100%",
                              display: "flex",
                              justifyContent: "space-evenly",
                              marginBottom: "-6%"
                            }}
                            >
                            <Box
                              bg="blue.500"
                              p="10px 15px"
                              rounded="lg"
                              _hover={{ bg: "blue.200" }}
                            >
                                <Login />
                            </Box>
                            <Box
                        bg="blue.500"
                        p="10px 15px"
                        rounded="lg"
                        _hover={{ bg: "blue.200" }}
                      >
                        <Signup />
                      </Box>
                            </Box>
                        </Box>
                    )}
                </DrawerHeader>
                <DrawerBody borderBottomWidth="1px" bg="whiteAlpha.900">
                    <Box display="flex" flexDirection="column" fontSize="16px" >
                        <Link to="/orderhistory">
                        <Box
                      borderBottom="0.1px solid gray"
                      fontSize="15px"
                      p="4% 0%"
                      color="black"
                      _hover={{ fontWeight: "bold" }}
                      onClick={() => navigate("/orderhistory")}
                    >
                      My Orders
                    </Box>
                        </Link>
                        <Link to="/cart">
                    <Box
                      borderBottom="0.1px solid gray"
                      fontSize="15px"
                      p="4% 0%"
                      color="black"
                      _hover={{ fontWeight: "bold" }}
                    >
                      Cart
                    </Box>
                  </Link>
                  <Link to="/wishlist">
                    <Box
                      borderBottom="0.1px solid gray"
                      fontSize="15px"
                      p="4% 0%"
                      color="black"
                      _hover={{ fontWeight: "bold" }}
                    >
                      Wishlist
                    </Box>
                  </Link>
                  <Link>
                    <Box
                      borderBottom="0.1px solid gray"
                      fontSize="15px"
                      p="4% 0%"
                      color="black"
                      _hover={{ fontWeight: "bold" }}
                    >
                      Manage Notification
                    </Box>
                  </Link>
                  <Link>
                    <Box
                      borderBottom="1px solid white"
                      fontSize="15px"
                      p="4% 0%"
                      color="black"
                      _hover={{ fontWeight: "bold" }}
                    >
                      Contact Us
                    </Box>
                  </Link>                     
                </Box>

                <Heading mt="15%" color="black" fontSize="15px" mb="5%">
                  SHOP NOW
                </Heading>
                <Box display="flex" flexDirection="column" fontSize="16px">
                    <Accordion defaultIndex={[0]} allowMultiple w="100%" m="auto">
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                            <Box
                            as="span"
                            flex="1"
                            textAlign="left"
                            fontWeight="500"
                          >
                            Men
                          </Box>
                          <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        <Link to="/products">
                          <Box>
                            <Text pb="2">EYEGLASSES</Text>
                            <Text pb="2">COMPUTER GLASSES</Text>
                            <Text pb="2">CONTACT LENSES</Text>
                            <Text pb="2">SUN GLASSES</Text>
                          </Box>
                        </Link>
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <h2>
                        <AccordionButton>
                          <Box
                            as="span"
                            flex="1"
                            textAlign="left"
                            fontWeight="500"
                          >
                            Women
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={5}>
                        <Link to="/products">
                          <Box>
                            <Text pb="2">EYEGLASSES</Text>
                            <Text pb="2">COMPUTER GLASSES</Text>
                            <Text pb="2">CONTACT LENSES</Text>
                            <Text pb="2">SUN GLASSES</Text>
                          </Box>
                        </Link>
                      </AccordionPanel>
                    </AccordionItem>
                    </Accordion>
                </Box>
                </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
        </HStack>
    </Box>
  );
}

export default NavbarMob;
