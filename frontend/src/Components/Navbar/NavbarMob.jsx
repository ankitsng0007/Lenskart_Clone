import React, { useContext } from 'react';
import {Box, HStack, Image, useDisclosure} from "@chakra-ui/react";
import {AuthContext} from "../../ContextApi/AuthContext";
import {Link, useNavigate} from "react-router-dom";


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
        </HStack>
    </Box>
  );
}

export default NavbarMob;
