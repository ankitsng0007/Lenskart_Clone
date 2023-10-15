import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";



export const HomeCard4 = ({text, src}) => {
    return(
        <Box mt="-20">
            <Text fontSize="30px" pb="7" fontWeight="500" textAlign="center">
                {text}
            </Text>
            <Image src={src} alt="img" />
        </Box>
    );
};

export const HomeCard4a = ({ text, src }) =>{
    return(
        <Box mt="-20" >
            <Text fontSize="30px" pb="7" fontWeight="500" textAlign="center" >
                {text}
            </Text>
            <Image src={src} alt="img" w="100%" m="auto" />
        </Box>
    );
};

export const HomeCard4b = ({ text, src }) =>{
    return(
        <Box mt="-20" >
            <Text fontSize="30px" pb="7" fontWeight="500" textAlign="center" >
                {text}
            </Text>
            <Image src={src} alt="img" w="100%" m="auto" />
        </Box>
    );
};
