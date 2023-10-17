import { Box, Center, Grid, Image, Text } from "@chakra-ui/react"




export const FooterCard1 = ({ type, heading }) =>{
    return (
        <Box cursor="pointer">
            <Text fontSize="25px">{heading}</Text>
            <Box lineHeight="8">
                {type.map((i,index) => (
                    <Box key={index}>
                        <Text 
                          fontSize="15px"
                          _hover={{ colour: "whiteAlpha.600"}}
                          lineHeight="2"
                        >
                            {i.labels}
                        </Text>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export const FooterCard2 = () => {
    return (
        <Box cursor="pointer" textAlign="center" m="auto">
            <Center>
                <Grid 
                  gap="2"
                  templateColumns={{
                    base: "repeat(1,1fr)",
                    md: "repeat(2,1fr)",
                    lg: "repeat(2,1fr)",
                    xl: "repeat(2,1fr)",
                    "2xl": "repeat(2,1fr)"
                  }}
                >
                <Image
            src="https://static.lenskart.com/media/desktop/img/play-store.svg"
            alt="img"
          />
          <Image
            src="https://static.lenskart.com/media/desktop/img/app-store.svg"
            alt="img"
          />
                </Grid>
            </Center>
            <br />
            <Center>
                <Text>
                    Download Lenskart App to buy EyeGlasses, Sunglasses and Contact Lenses
                </Text>
            </Center>
        </Box>
    );
};