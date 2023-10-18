import React from 'react';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";

const ProdFilter = ({
    type,
  heading,
  handlechange,
  val,
  type1,
  heading1,
  handlechange1,
  val1,
  type2,
  heading2,
  handlechange2,
  val2
}) => {
  return (
    <Box>
        <br />
        <Accordion defaultIndex={[0]} allowMultiple w="100%" m="auto" mt="-1%">
            <AccordionItem>
                <h2>
                    <AccordionButton>
                        <Box
                          as='span'
                          flex="1"
                          textAlign="left"
                          fontWeight="500"
                          color="gray.500"
                        >
                            <Text
                              fontWeight="bold"
                              mb="3px"
                              color="gray.600"
                              fontSize="15px"
                            >
                                {heading}
                            </Text>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4} color="gray.500" p="2" >
                    <RadioGroup onChange={handlechange} value={val} >
                        <Stack direction="column" gap="2">
                            {type.map((ele, i) => (
                                <Radio>
                                    {ele.title}
                                </Radio>
                            ))}
                        </Stack>
                    </RadioGroup>
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
                <h2>
                    <AccordionButton>
                        <Box
                          as='span'
                          flex="1"
                          textAlign="left"
                          fontWeight="500"
                          color="gray.500"
                        >
                            <Text
                              fontWeight="bold"
                              mb="3px"
                              color="gray.600"
                              fontSize="15px"
                            >
                                {heading1}
                            </Text>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
            </AccordionItem>
        </Accordion>
    </Box>
  );
}

export default ProdFilter;
