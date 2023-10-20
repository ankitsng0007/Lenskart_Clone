import { Heading } from '@chakra-ui/react';
import React from 'react';

const CartLength = ({ cartLength }) => {
  return (
    <Heading
      as={"h1"}
      fontSize="20px"
      fontFamily="sans-serif"
      border={"0px solid red"}
      fontWeight={500}
    >
      Cart ({cartLength} items)
    </Heading>
  );
}

export default CartLength;
