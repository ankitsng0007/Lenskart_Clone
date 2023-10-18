import React from 'react';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex } from "@chakra-ui/react";

const ProductDetails = ({ type }) => {
  return (
    <Accordion defaultIndex={[0]} allowMultiple w="100%" m="auto">
        <AccordionItem>
            <h2>
                <AccordionButton>
                    <Box as='span' flex="1" textAlign="left" fontWeight="500">
                        Technical Information
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
                <Box>
                    <Flex gap="4">
                        <Box color="gray.400" fontWeight="500">
                            Product Id
                        </Box>
                        <Box>{type.productId}</Box>
                    </Flex>
                    <Flex gap="4">
                        <Box color="gray.400" fontWeight="500">
                            Model No.
                        </Box>
                        <Box>LA E15301</Box>
                    </Flex>
                    <Flex gap="4">
                        <Box color="gray.400" fontWeight="500">
                            Frame Size
                        </Box>
                        <Box>Narrow</Box>
                    </Flex>
                    <Flex gap="4">
                    <Box color="gray.400" fontWeight="500">
                        Frame Width
                    </Box>
                    <Box>138 mm</Box>
                    </Flex>
                <Flex gap="4">
                    <Box color="gray.400" fontWeight="500">
                        Frame Dimensions
                    </Box>
                   <Box>{type.dimension}</Box>
                </Flex>
                <Flex gap="4">
              <Box color="gray.400" fontWeight="500">
                Frame colour
              </Box>
              <Box>{type.colors}</Box>
              </Flex>
                </Box>
            </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
            <h2>
            <AccordionButton>
            <Box as="span" flex="1" textAlign="left" fontWeight="500">
              Visit Nearby Store
            </Box>
            <AccordionIcon />
          </AccordionButton>
            </h2>
        </AccordionItem>
    </Accordion>
  );
}

export default ProductDetails;
