import React from 'react';
import { Box, Grid} from "@chakra-ui/react";
import { FooterCard1, FooterCard2 } from './FooterCard';
import { services } from './FooterDetails';

const Footer = () => {
  return (
    <Box 
     bgColor="#000042"
     color="whiteAlpha.900"
     p={{ lg:"0", md:"5", base:"5" }}
    >
        <Grid
         templateColumns={{
            base: "repeat(1,1fr)",
          sm: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(2,1fr)"
         }}
         justifyContent="space-between"
         textAlign="left"
         ml="2%"
        >
            <Box w="60%" pl="5">
                <Grid 
                  templateColumns={{
                    base: "repeat(1,1fr)",
                    sm: "repeat(2,1fr)",
                    md: "repeat(2,1fr)",
                    lg: "repeat(3,1fr)"
                  }}
                  gap="5"
                 >
                   <FooterCard1 type={services} heading="Services" />
                   <FooterCard1 />
                </Grid>
            </Box>
        </Grid>
    </Box>
  );
}

export default Footer;
