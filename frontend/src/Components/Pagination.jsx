import { Flex } from '@chakra-ui/react';
import React from 'react';

const Pagination = ({current, onChange}) => {
   const style = {
    background: "gray",
    color: "white",
    fontweight: "bold",
    borderRadius: "8px",
    padding: "10px 18px",
    margin: "auto"
   };
   const prev = (
    <button 
      disabled={current === 0}
      onClick={() => onChange(current -1)}
      style={style}
    >
      PREV
    </button>
   );
   const currentPage = <button style={style}>{current+1}</button>
 
   const next = (
    <button
      onClick={() => onChange(current +1)}
      style={style}
    >
      NEXT
    </button>
   )
  return (
    <Flex>
      {prev}
      {currentPage}
      {next}
    </Flex>
  );
}

export default Pagination;
