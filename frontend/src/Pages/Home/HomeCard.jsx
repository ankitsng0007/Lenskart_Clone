import { Box, Center, Grid, Image, Text } from '@chakra-ui/react';
import React from 'react';
import {Link} from "react-router-dom";

const HomeCard = ( {type} ) => {
  return (
    <Box mb="2" cursor="pointer" bgColor="#f5f5f5" p="4" w="100%">
        <Grid
        templateColumns={{
            base: "repeat(2,1fr)",
            md: "repeat(3,1fr)",
            lg: "repeat(4,1fr)",
            xl: "repeat(6,1fr)",
            "2xl":"repeat(6,1fr)"
        }}
        gap={6}
        w="99%"
        m="auto"
    >
            {type.map((i)=>(
                <Box
                key={i}
                border="1px"
                borderColor="white"
                flexDirection="column"
                borderRadius="md"
                bgColor="white"
                p="1"
                pb="2.5"
                >
            <Link to="/products">
            <Center>
                <Image src={`${i.img}`} alt={i.name} w="100%"/>
            </Center>
            <Center>
                <Text color="gray" fontSize="16px" fontWeight="500" p="1">
                    {i.title}
                </Text>
            </Center>
            </Link>
            </Box>
            ))
}
        </Grid>
    </Box>
  );
}

export default HomeCard;
