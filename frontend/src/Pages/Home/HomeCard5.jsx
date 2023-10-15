import { Box, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";
import { ReactPlayer } from "react-player";



export const HomeCard5 = () => {
    return (
        <Box w="85%" m="auto">
            <Text fontSize="30px" pb="7" fontWeight="500" textAlign="center" >
                Find The Perfect Fit
            </Text>
            <Grid
            templateColumns={{
                base: "repeat(1,1fr)",
                md: "repeat(2,1fr)",
                lg: "repeat(2,1fr)",
                xl: "repeat(2,1fr)",
                "2xl":"repeat(2,1fr)"
            }}
            >
                <Box>
                <Image
            src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/eye-square10.jpg"
            alt="img"
            p="2"
          />
          <Image
            src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/power-sun-square.jpg"
            alt="img"
            p="2"
          />
        </Box>
        <Box>
          <Image
            src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/ce-square.jpg"
            alt="img"
            p="2"
          />
          <Image
            src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/sun-square.jpg"
            alt="img"
            p="2"
          />
          <Image
            src="https://static1.lenskart.com/media/desktop/img/Nov20/25-Nov/Banner03_TileDesktop.jpg"
            alt="img"
            p="2"
          />
                </Box>
            </Grid>
        </Box>
    )
}

export const HomeCard5a = ({ type, heading }) => {
    return (
        <Box w="85%" m="auto" >
            <Text fontSize="30px" pb="7" fontWeight="500" textAlign="center" >
                {heading}
            </Text>
            <Grid 
              templateColumns={{
                base: "repeat(1,1fr)",
                md: "repeat(1,1fr)",
                lg: "repeat(2,1fr)",
                xl: "repeat(2,1fr)",
                "2xl": "repeat(2,1fr)"
              }}
              gap={6} 
            >
                {type.map((i) => (
                    <Box key={i} >
                        <Image src={`${i.img}`} alt={i.caption} />
                    </Box>
                ))}
            </Grid>
        </Box>
    );
};

export const HomeCard5b = ({ type, heading }) => {
    return (
      <Box w="95%" m="auto">
        <Text fontSize="30px" pb="7" fontWeight="500" textAlign="center">
          {heading}
        </Text>
        <Grid
          templateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(1,1fr)",
            lg: "repeat(2,1fr)",
            xl: "repeat(2,1fr)",
            "2xl": "repeat(2,1fr)"
          }}
          gap={6}
        >
          {type.map((i) => (
            <Box key={i}>
              <Image src={`${i.img}`} alt={i.caption} />
            </Box>
          ))}
        </Grid>
      </Box>
    );
  };

  export const HomeCard5c = ({type, heading }) => {
    return (
        <Box>
            <Box>
                <Text>
                    {heading}
                </Text>
                <Grid>
                    {type.map((i) => (
                        <Box>
                            <ReactPlayer url={i.img} width="100%" height="300px" />
                        </Box>
                    ))}
                </Grid>
            </Box>
        </Box>
    )
  }