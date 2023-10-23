import React, { useContext } from 'react';
import {Avatar, Box, Button, Drawer, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, HStack, Image, Input, useDisclosure} from "@chakra-ui/react";
import {AuthContext} from "../../ContextApi/AuthContext";
import {Link, useNavigate} from "react-router-dom";
import {HamburgerIcon} from "@chakra-ui/icons";



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
                            </Flex>
                        </Flex>
                    )}
                </DrawerHeader>
            </DrawerContent>
          </Drawer>
        </Box>
        </HStack>
    </Box>
  );
}

export default NavbarMob;
