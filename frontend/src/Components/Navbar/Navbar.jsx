import React from 'react';
import { Box } from "@chakra-ui/react";
import { NavbarCard1, NavbarCard2, NavbarCard4 } from './NavbarCard';
import NavbarMob from './NavbarMob';

const Navbar = () => {
  return (
    <Box overflow="hidden" bg="white">
        <Box display={{ base:"none", xl:"inherit" }}>
            <NavbarCard1 />
            <NavbarCard2 />
            <NavbarCard4 />
        </Box>
        <NavbarMob />
    </Box>
  );
}

export default Navbar;
