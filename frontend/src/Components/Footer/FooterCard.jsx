import { Box, Center, Grid, Text } from "@chakra-ui/react"




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
        <Box>
            <Center>
                <Grid>
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
        </Box>
    )
}