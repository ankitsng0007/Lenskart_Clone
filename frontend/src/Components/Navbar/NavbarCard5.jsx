import { Avatar, Box, Flex, Grid, Link, Menu, MenuButton, MenuList } from '@chakra-ui/react';
import React from 'react';

const NavbarCard5 = () => {
  return (
    <Flex bg="#fbf9f7" cursor="pointer" gap="6">
        <Menu>
            <MenuButton 
              bg="#fbf9f7"
              fontSize="15px"
              fontWeight="600"
              _hover={{
                borderBottom: "4px solid teal"
              }}
            >
                EYEGLASSES
            </MenuButton>
            <MenuList 
              color="blackAlpha.900"
              h="400px"
              bg="whiteAlpha.800"
              w="100%"
              p="5"
            >
                <Link to="/">
                    <Box>
                        <Grid gridTemplateColumns="repeat(5,1fr)" w="100%">
                            <Flex direction="column" justifyContent="space-evenly" mt="20">
                                <Flex gap="5" fontSize="15px">
                                    <Avatar 
                                     name="Dan Abrahmov"
                                     src="https://static.lenskart.com/media/desktop/img/men_pic.png"
                                     alt="men"
                                     size="md"
                                    />
                                    <Box 
                                     fontSize="lg"
                                     fontWeight="bold"
                                     _hover={{ textDecoration: "underline" }}
                                     >
                                        Men
                                    </Box>
                                    </Flex>

                                    <Flex gap="5">
                                        <Avatar 
                                         name="Kola Tioluwani"
                                         src="https://static.lenskart.com/media/desktop/img/women_pic.png"
                                         alt="women"
                                         size="md"
                                        />
                                        <Box
                                          fontSize="lg"
                                          fontWeight="bold"
                                          _hover={{ textDecoration: "underline" }}
                                        >
                                         Women
                                       </Box>
                                    </Flex>

                                    <Flex gap="5">
                                      <Avatar
                                        name="Kent Dodds"
                                        src="https://static.lenskart.com/media/desktop/img/kid_pic.png"
                                        alt="kid"
                                        size="md"
                                      />
                                      <Box
                                       fontSize="lg"
                                       fontWeight="bold"
                                       _hover={{ textDecoration: "underline" }}
                                      >
                                        Kids
                                      </Box>
                                    </Flex>
                                  </Flex>

                <Flex direction="column" gap="6">
                  <Box
                    fontSize="md"
                    fontWeight="bold"
                    borderBottom="1px solid black"
                    p="1"
                  >
                    SELECT CATEGORY
                  </Box>
                  <Box fontSize="md" _hover={{ bg: "blackAlpha.200" }}>
                    CLASSIC EYE-GLASSES
                    <p>
                      Starting From ₹ <span>1199</span>
                    </p>
                  </Box>
                  <Box fontSize="md" _hover={{ bg: "blackAlpha.200" }}>
                    PREMIUM EYE-GLASSES
                    <p>
                      Starting From ₹ <span>3000</span>
                    </p>
                  </Box>
                  <Box fontSize="md" _hover={{ bg: "blackAlpha.200" }} p="2">
                    COMPUTER EYE-GLASSES
                    <p>
                      Starting From ₹ <span>1299</span>
                    </p>
                  </Box>
                </Flex>

                <Flex direction="column" gap="6">
                  <Box
                    fontSize="md"
                    fontWeight="bold"
                    borderBottom="1px solid black"
                    p="1"
                  >
                    Our Top Picks
                  </Box>
                  <Flex direction="column" fontSize="md" gap="2">
                    <Box _hover={{ fontWeight: "bold" }}>New Arrivals</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Best Seller</Box>
                    <Box _hover={{ fontWeight: "bold" }}>
                      Lenskart BLU lenses
                    </Box>
                    <Box _hover={{ fontWeight: "bold" }}>Trending</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Tinted Eyeglasses</Box>
                    <Box _hover={{ fontWeight: "bold" }}>
                      Computer Eyeglasses
                    </Box>
                    <Box _hover={{ fontWeight: "bold" }}>
                      Progressive Eyeglasses
                    </Box>
                  </Flex>
                </Flex>

                <Flex direction="column" gap="6">
                  <Box
                    fontSize="md"
                    fontWeight="bold"
                    borderBottom="1px solid black"
                    p="1"
                  >
                    Frame Type
                  </Box>
                  <Flex direction="column" fontSize="md" gap="2">
                    <Box _hover={{ fontWeight: "bold" }}>Rectangle Frames</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Wayfarer Frames</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Round Frames</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Aviator Frames</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Cat-Eye Frames</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Rimless Frames</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Half Rim Frames</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Geometric Frames </Box>
                  </Flex>
                </Flex>

                <Flex direction="column" gap="6">
                  <Box
                    fontSize="md"
                    fontWeight="bold"
                    borderBottom="1px solid black"
                    p="1"
                  >
                    Brands
                  </Box>
                  <Flex direction="column" fontSize="md" gap="2">
                    <Box _hover={{ fontWeight: "bold" }}>Vincent Chase</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Lenskart Air</Box>
                    <Box _hover={{ fontWeight: "bold" }}>John Jacobs</Box>
                    <Box _hover={{ fontWeight: "bold" }}>OJOS</Box>
                    <Box _hover={{ fontWeight: "bold" }}>New Balance</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Carrera</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Fossil</Box>
                  </Flex>
                </Flex>
                        </Grid>
                    </Box>
                </Link>
            </MenuList>
        </Menu>
    </Flex>
  );
}

export default NavbarCard5;
