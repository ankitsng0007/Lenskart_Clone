import React from 'react';
import { Box, Grid, Skeleton } from "@chakra-ui/react";
const Loading = () => {
    const loader = [1, 2, 3, 4, 5, 6, 7, 8,9,10,11,12 ];

  return (
    <Grid
      m="20px 10px"
      templateColumns={{
        base: "repeat(1,1fr)",
        sm: "repeat(1,1fr)",
        md: "repeat(2,1fr)",
        lg: "repeat(3,1fr)"
      }}
      height="50px"
      gap={6}
    >
        {loader.map((ele) => (
            <Skeleton width="100%" height="400px" key={ele} isLoaded={false} >
                <Box>Hello Wrold!</Box>
            </Skeleton>
        ))}
    </Grid>
  );
}

export default Loading;
