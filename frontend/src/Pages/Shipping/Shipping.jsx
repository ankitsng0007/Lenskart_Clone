import { Box, Grid, GridItem } from '@chakra-ui/react';
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
            </Box>
        </GridItem>
      </Grid>
    </>
  );
  };

export default Shipping;
