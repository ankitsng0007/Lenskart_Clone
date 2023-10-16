import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Grid } from '@chakra-ui/react';
import React from 'react';
import { AddIcon, MinusIcon } from "@chakra-ui/icons"

const HomeCard8 = ({type}) => {
  return (
    <Box>
        <Grid>
            {type.map((i) => (
                <Box>
                    <Accordion>
                        <AccordionItem>
                            {({isExpanded}) => (
                                <>
                                <h2>
                                  <AccordionButton>
                                    <Box>
                                        {i.head}
                                    </Box>
                                    {isExpanded ? (
                                        <Box>
                                            <MinusIcon fontSize="12px" fontWeight="700" />
                                        </Box>
                                    ) : (
                                        <Box>
                                            <AddIcon fontSize="12px" fontWeight="700" />
                                        </Box>
                                    )}
                                  </AccordionButton>  
                                </h2>
                                <AccordionPanel>
                                    {i.info}
                                </AccordionPanel>
                                </>
                            )}
                        </AccordionItem>
                    </Accordion>
                </Box>
            ))}
        </Grid>
    </Box>
  );
}

export default HomeCard8;
