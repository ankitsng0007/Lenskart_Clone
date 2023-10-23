import { Box, HStack, Image, Img, Input, MenuButton, useDisclosure } from '@chakra-ui/react';
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
                    <Img/>
                </MenuButton>
            </Menu>
        </HStack>
    </Box>
  );
}

export default Menu;
