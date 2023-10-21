import { Box, Flex, Grid, GridItem, Input, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';

const Shipping = () => {
    const navigate = useNavigate();

    const init = {
        first_name: "",
        last_name: "",
        phone: "",
        email: "",
        address: "",
        pincode: "",
        city: "",
        country: "India",
        state: ""
    };
    const [userData, setUserData] = useState(init);
    const [first, setFirst] = useState();
    const [last, setLast] = useState();
  const [ph, setPh] = useState();
  const [gender, setGender] = useState("Male");
  const [mail, setMail] = useState();
  const [add, setAdd] = useState();
  const [pin, setPin] = useState();
  const [cities, setCities] = useState();
  const [countries, setCountries] = useState();
  const [statess, setStatess] = useState();

  const Required = (props) => {
    return(
        <Box
        fontSize={"14px"}
        m="3px 0px 3px 0px"
        color={"#ff1f1f"}
        fontWeight="500"
        letterSpacing={"-0.4px"}
        >
            {props.info}
        </Box>
    );
  };

  const handleChange = (e) => {
    const {name,value} = e.target;
    setUserData({...userData, [name]: value});

    switch (name) {
        case "first_name":
          setFirst(
            value === "" ? <Required info="This is a required feild" /> : ""
          );
          break;
  
        case "last_name":
          setLast(
            value === "" ? <Required info="This is a required feild" /> : ""
          );
          break;
  
        case "phone":
          setPh(
            value === "" ? (
              <Required info="This is a required feild" />
            ) : (
              <Required info="Please enter a valid mobile number (eg. 9987XXXXXX)" />
            )
          );
          break;
  
        case "email":
          setMail(
            value === "" ? (
              <Required info="This is a required feild" />
            ) : (
              <Required info="Please enter a valid email address e.g. johndoe@domain.com." />
            )
          );
          break;
  
        case "address":
          setAdd(
            value === "" ? <Required info="This is a required feild" /> : ""
          );
          break;
  
        case "pincode":
          setPin(
            value === "" ? (
              <Required info="This is a required feild" />
            ) : (
              <Required info="Pincode should be 6 digit (eg. 110001)" />
            )
          );
          break;
  
        case "city":
          setCities(
            value === "" ? <Required info="This is a required feild" /> : ""
          );
          break;
  
        case "country":
          setCountries(
            value === "" ? <Required info="This is a required feild" /> : ""
          );
          break;
  
        case "state":
          setStatess(
            value === "" ? <Required info="This is a required feild" /> : ""
          );
          break;
  
        default:
          break;
      }
    };
  

  return (
    <>
      <Navbar />
      <br />
      <br />
      <Grid
         m="auto"
         templateColumns={{
           base: "repeat(1,1fr)",
           lg: "repeat(1,1fr)",
           xl: "65% 30%"
         }}
         justifyContent="space-around"
         w="100%"
      >
        <GridItem w={{ xl: "90%", lg: "80%", md: "80%", base: "80%" }} m="auto">
            <Box id='addres'>
            <Text
              id="ships"
              bg="teal.400"
              p="2"
              fontWeight="bold"
              color="whiteAlpha.900"
              fontSize="22px"
            >
              Shipping Address
            </Text>

            <Box border="1px solid black" p="4" borderRadius="xl" mt="7">
                <Grid
                  templateColumns={{
                    base: "repeat(1,1fr)",
                    sm: "repeat(1,1fr)",
                    md: "repeat(2,1fr)",
                    lg: "repeat(2,1fr)"
                  }}
                  w="100%"
                  gap={{ sm: "4", base: "4" }}
                >
                    <Box>
                        <Input 
                          type="text"
                          name="first_name"
                          fontSize="16px"
                          onChange={handleChange}
                          placeholder="First Name*"
                          className="input"
                        />
                        <Box pl="6" mt="-4">                            
                        {first}
                        </Box>
                    </Box>
                    <Box>
                        <Input 
                            type="text"
                            name="last_name"
                            placeholder="Last Name*"
                            className="input"
                            fontSize="16px"
                            onChange={handleChange}
                        />
                        <Box pl="6" mt="-4">
                    {last}
                  </Box>
                    </Box>
                </Grid>

                <Flex
                  fontSize="15px"
                  p="10px"
                  m="10px 0px 0px 22px"
                  gap={{ lg: "4", sm: "1", base: "1" }}
                >
                    <Text>Gender</Text>
                    <RadioGroup onChange={setGender} value={gender} name={gender}>
                  <Stack direction="row" gap={{ lg: "2", sm: "1", base: "1" }}>
                    <Radio value="Male">Male</Radio>
                    <Radio value="Female">Female</Radio>
                  </Stack>
                </RadioGroup>
                </Flex>
            </Box>
            </Box>
        </GridItem>
      </Grid>
    </>
  );
  };

export default Shipping;
