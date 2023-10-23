import { Box, HStack, Image, Img, Input, Link, MenuButton, MenuList, Text, useDisclosure } from '@chakra-ui/react';
import React from 'react';

const Menu = () => {
    const {isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
        <HStack>
            <Box>
                <Image src='https://i.imgur.com/OHxtfjd.png' alt='logo' w="75%"/>
            </Box>
            <Box w="70%">
                <Input 
                  placeholder="What are you looking for"
                  border="1px solid black"
                  w="90%"
                  fontSize="16px"
                  h="35px"
                />
            </Box>
            <Menu isOpen={isOpen} >
                <MenuButton
                  display={{ lg: "inherit", xl: "none" }}
                  variant="ghost"
                  borderRadius={5}
                  aria-label="Courses"
                  fontWeight="normal"
                  onMouseEnter={onOpen}
                  onMouseLeave={onClose}
                  bg="#2739a3"
                  p={2}
                  mr={6}
                >
                    <Img
                      w={10}
                      src="https://www.clipartmax.com/png/full/36-365828_navbar-toggle-icon-menu-hamburger-png-white.png"
                    />
                </MenuButton>
                <MenuList
                  p={4}
                  border="none"
                  onMouseEnter={onOpen}
                  onMouseLeave={onClose}
                  bg="#fbf9f7"
                >
                    <Box textAlign={"left"} lineHeight="2">
                        <Login />
                        <Signup />
                        <Link>
                            <Text
                              fontSize="16px"
                              fontWeight="500"
                              _hover={{ textDecoration: "underline" }}
                            >
                                Track Order
                            </Text>
                        </Link>
                        <Link>
                          <Text
                            fontSize="16px"
                            fontWeight="500"
                            _hover={{ textDecoration: "underline" }}
                          >
                            Wishlist
                          </Text>
                        </Link>
                        <Link to="./cart">
                            <Text
                              fontSize="16px"
                              fontWeight="500"
                              _hover={{ textDecoration: "underline" }}
                            >
                                Cart
                            </Text>
                        </Link>
                        
                    </Box>
                </MenuList>
            </Menu>
        </HStack>
    </Box>
  );
}

export default Menu;
