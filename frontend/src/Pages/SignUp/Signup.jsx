import React, { useState } from 'react';
import { Box, Button, Center, Heading, Input, InputGroup, InputLeftAddon, InputRightElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Text, useDisclosure} from "@chakra-ui/react";
import {ViewIcon, ViewOffIcon} from "@chakra-ui/icons";


const Signup = () => {

    const init = {
        first_name: "",
        last_name: "",
        ph_no: "",
        email: "",
        password: ""
    };

    const [userData, setUserData] = useState(init);
    const [first, setFirst] = useState();
    const [last, setLast] = useState();
    const [ph, setPh] = useState();
    const [mail, setMail] = useState();
    const [pass, setPass] = useState();
    const [loading, setLoading] = useState();
    const [show, setShow] = useState();
    const [Auth, setAuth] = useState();
    const [exit, setExit] = useState();
    const { isOpen, onOpen, onClose } = useDisclosure();
    var flag = false;


    const   Required = (props) => {
        return (
            <Box 
              fontSize="14px"
              m="3px 0px 3px 0px"
              color= "#ff1f1f"
              fontWeight="500"
              letterSpacing="-0.4px"
            >
                {props.info}
            </Box>
        );
    };

    const handleChange = (e) => {
        setExit(false);
        const {name, value} = e.target;
        setUserData({ ...userData, [name]: value });

        switch (name){
            case "first_name":
                setFirst(
                    value === "" ? <Required info="This is a required field" /> : ""
                );
                break;

            case "last_name":
                setLast(
                    value === "" ? <Required info="This is a required field" /> : ""                
                    );
                break;
            
            case "ph_no":
                setPh(
                    value === "" ? <Required info="This is a required field" /> : <Required info="Please enter a valid mobile number (eg. 998xxxxxxx)" />
                );
                break;

            case "email":
                setMail(
                    value === "" ? <Required info="This is a required field" /> : <Required info="Please Enter a valid email address e.g.john@domain.com" />
                );
                break;

            case "password":
                setPass(
                    value === "" ? <Required info="This is a required field" /> : <Required info = "Password should be more than 6 characters." />
                );
                break;

                default:
                    break;
        }
    };

    const getData = (body) => {
        setLoading(true);

        fetch(`http://localhost:8080/users`)
        .then((res)=> res.json())
        .then((res) => {
            res.map((el) => {
                if(el.email === body.email){
                    flag = true;
                    setExit(true);
                    return el;
                }
                setLoading(false);
            });
        })
        .then(() => {
            if (flag === false){
                fetch(`http://localhost:8080/users/register`,{
                    method: "POST",
                    body: JSON.stringify(body),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                .then((res) => res.json())
                .then((res) => {
                    setAuth(true);
                    setLoading(false);
                    setExit(false);
                })
                .catch((err) => setAuth(false))
                .finally(() => setLoading(false))
                .finally(() => setExit(false))
                .finally(() => onClose());
            }else{
                setLoading(false);
            }
        });
    };

    const handleRegister = () => {
        getData(userData);
    };

  return (
    <div>
      <Center onClick={onOpen} fontWeight={"400"} fontSize="15px" w="60px" >
        Sign Up
      </Center>

      <Modal isOpen={isOpen} onClose={onClose} isCentered size="md">
        <ModalOverlay />
        <ModalContent w="lg" pt="5" rounded="3xl" >
            <ModalCloseButton />

            <ModalBody p={"0px 0px"}>
                <Box m={"5px 45px 20px 45px"}>
                    <Heading 
                      fontFamily={"Times, serif"}
                      fontWeight="100"
                      fontSize="26px"
                      mb="20px"
                      color={"#333368"}
                    >
                        Create an Account
                    </Heading>

                    <Input 
                      type='text'
                      fontSize="16px"
                      onChange={handleChange}
                      focusBorderColor='rgb(206, 206, 223)'
                      m={"8px 0px 15px 0px"}
                      rounded="2xl"
                    />

                    <Text mt="-2%" ml="2%" >
                        {first}
                    </Text>

                    <Input
                      fontSize="16px"
                      onChange={handleChange}
                      name="last_name"
                      type="text"
                      placeholder="Last Name"
                      h={"45px"}
                      focusBorderColor="rgb(206, 206, 223)"
                      borderColor={"rgb(206, 206, 223)"}
                      m={"8px 0px 25px 0px"}
                      rounded="2xl"
                    />
                  <Text mt="-2%" ml="2%">
                      {last}
                  </Text>

                  <InputGroup
                   w="100%"
                   h="50px"
                   fontSize="18px"
                   borderRadius="xl"
                   mb="14px"
                   >
                  <InputLeftAddon 
                    children="+91"
                    h="45px"
                    fontSize="18px"
                    rounded="2xl"
                    bg="whiteAlpha.900"
                  />
                    
                    <Input 
                      onChange={handleChange}
                      type='number'
                      name='ph_no'
                      placeholder='Mobile'
                      w="100%"
                      h="45px"
                      fontSize="16px"
                      focusBorderColor='rgb(206, 206, 223)'
                      borderColor={"rgb(206, 206, 223)"}
                      rounded="2xl"
                    />
                  </InputGroup>
                  <Text mt="-2%" ml="2%">
                    {userData.ph_no.length === 10 ? "" : ph}
                  </Text>

                  <Input 
                    onChange={handleChange}
                    fontSize="16px"
                    name='email'
                    placeholder='Email'
                    h={"45px"}
                    focusBorderColor='rgb(206, 206, 223'
                    borderColor={"rgb(206, 206, 223)"}
                    m={"8px 0px 18px 0px"}
                    rounded="2xl"
                  />
                  <Text>
                    {userData.email.includes("@") && userData.email.includes(".com") ? "" : mail}
                  </Text>

                  <InputGroup mb="15px" >
                   <Input 
                     onChange={handleChange}
                     fontSize="16px"
                     type={show ? "text" : "password"}
                     name='password'
                     placeholder='Password'
                     h={"45px"}
                     focusBorderColor='rgb(206, 206, 223)'
                     borderColor={"rgb(206, 206, 223)"}
                     m={"8px 0px 8px 0px"}
                     rounded="2xl"
                   />

                   <InputRightElement width="6.5rem" size="lg" >
                     <Button 
                       size="md"
                       borderRadius="3xl"
                       mt="20%"
                       onClick={() => setShow(!show)}
                       bg="white"
                     >
                        {show ? <ViewOffIcon /> : <ViewIcon />}
                     </Button>
                   </InputRightElement>
                  </InputGroup>
                  {userData.password.length >= 6 ? "" : pass}
                  
                </Box>
            </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default Signup;
