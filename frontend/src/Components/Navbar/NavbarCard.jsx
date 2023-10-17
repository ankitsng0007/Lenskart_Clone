import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { NavbarDetail1 } from "./NavbarDetail";
import NavbarCard5 from "./NavbarCard5";
import {AuthContext} from "../../ContextApi/AuthContext";
import {Link, useNavigate} from "react-router-dom"
import {} from "";


export const NavbarCard1 = () =>{
    return(
        <Box cursor="pointer">
            <Flex gap={2} pl={5} pt={2} >
                {NavbarDetail1.map((i,index) => (
                    <Box key={index}>
                        <Text fontSize="12px" _hover={{textDecoration: "underline" }}>
                            {i.labels}
                        </Text>
                    </Box>
                ))}
            </Flex>
        </Box>
    )
}

export const NavbarCard2 = () => {
    const { isAuth, setIsAuth, AuthData } = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <Box cursor="pointer">
            <HStack m="auto" >
                <Box w="20%">
                    <Link to="/" >
                    <Image src="https://i.imgur.com/OHxtfjd.png" alt="logo" w="75%" />
                    </Link>
                </Box>
                <HStack>
                    <Box>
                        <HStack>
                            
                        </HStack>
                    </Box>
                </HStack>
            </HStack>
        </Box>
    )
}



export const NavbarCard4 = () => {
    return (
        <Box cursor="pointer" bg="#fbf9f7" p={2.5} >
            <Flex gap={4} pl={5} justifyContent="space-between">
              <NavbarCard5 />  
                <HStack w="20%" ml="5%" justifyContent="right">
                <Image
            src="https://static1.lenskart.com/media/desktop/img/May22/3dtryon1.png"
            alt="img1"
            w="70px"
            borderRadius="base"
          />
          <Image
            src="https://static1.lenskart.com/media/desktop/img/Mar22/13-Mar/blulogo.png"
            alt="img1"
            w="70px"
            borderRadius="base"
          />
          <Image
            src="https://static.lenskart.com/media/desktop/img/Feb22/18-Feb/goldlogo.jpg"
            alt="img1"
            w="70px"
            borderRadius="base"
          />
                </HStack>
            </Flex>
        </Box>
    )
}
