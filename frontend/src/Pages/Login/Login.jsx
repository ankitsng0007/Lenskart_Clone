import { Box, Button, Center, Checkbox, Flex, HStack, Heading, Image, Input, InputGroup, InputRightElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../ContextApi/AuthContext';
import { useNavigate } from 'react-router-dom';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

const Login = (props) => {
    const [loading, setLoading] = useState(false);
    const [btn, setBtn] = useState();
    const [loginData, setLoginData ] = useState({email:"", password:"" });
    const [pass, setPass] = useState(false);
    const [show, setShow ] = useState(false)
    const {isOpen, onOpen, onClose } = useDisclosure();
    const {setIsAuth, setAuthData } = useContext(AuthContext);
    const [incorrect, setIncorrect] = useState(false);
    const navigate = useNavigate();
    let res1 = [];

    const handleChange = (e) =>{
        setIncorrect(false);
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });

        const buton = (
            <Box
              fontSize={"14px"}
              mt="5px"
              color={"#ff1f1f"}
              fontWeight="500"
              letterSpacing={"-0.4px"}
            >
                Please Enter a valid Email or Mobile Number.
            </Box>
        );
        setBtn(buton);
    };

    const getData = async () => {
        try{
            setLoading(true);
            setIncorrect(false);
            if(loginData.email !== "" && loginData.password !== ""){
                const res = await fetch(`http://localhost:8080/users/login`, {
                    method: "POST",
                    body: JSON.stringify(loginData),
                    headers: {
                        "Content-type": "application/json"
                    }
                });
                let data = await res.json();
                if(res){
                    const credential = await fetch(`http://localhost:8080/users`);
                    let cred = await credential.json();
                    localStorage.setItem("token", data.token);
                    res1 = cred.filter((el) => el.email === loginData.email);
                    setIsAuth(true);
                    setAuthData(res1);
                    if(loginData.email.includes(process.env.admin)){
                        setLoading(false);
                        setIncorrect(false);
                        onClose();
                        navigate("/productlist");
                    }else{
                        setLoading(false);
                        setIncorrect(false);
                        onClose();
                    }
                }else{
                    setLoading(false);
                    setIncorrect(true);
                }
            }
        }catch(error){
            setLoading(false);
            setIncorrect(true);
            console.log("An error occurred. Please try again later.");
        }
    };

    const handleClick = () => {
        loginData.password = "";
        setPass(false);
    };

    const handleSign = () => {
        setPass(true);
        if(loginData.password.length > 6){
            getData(loginData);
        }
    };

  return (
    <div>
      <Center onClick={onOpen} fontWeight={"400"} fontSize={"15px"} w="80px" >
        Sign In
      </Center>

      <Modal 
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        size={{xl: "md",lg: "md", md: "md", sm: "md", base:"sm"}}
      >
        <ModalOverlay />
        <ModalContent rounded="3xl">
            <ModalCloseButton 
              borderRadius={"50%"}
              bg="white"
              m={"10px 10px 0px 0px"}
            />

            <ModalBody p={"0px 0px"} borderRadius={"15px 15px 15px 15px"}>
            <Image
              src="https://static1.lenskart.com/media/desktop/img/DesignStudioIcons/DesktopLoginImage.svg"
              alt="pic"
              borderRadius={"10px 10px 0px 0px "}
            />
            <Box m={"34px 45px 50px 45px"}>
                <Heading 
                  fontFamily={"Times,serif"}
                  fontWeight="100"
                  fontSize={"28px"}
                  mb="24px"
                  color={"#333368"}
                >
                    Sign In
                </Heading>

                {pass === false ? (
                    <Input 
                      name='email'
                      placeholder='Email'
                      h={"50px"}
                      fontSize="16px"
                      focusBorderColor="rgb(206, 206, 223)"
                      borderColor={"rgb(206, 206, 223)"}
                      onChange={handleChange}
                      rounded="2xl"
                    />
                ) : (
                    <Box>
                    <Box fontSize={"17px"} color="#66668e">
                        Enter password for
                    </Box>

                    <Flex 
                      justifyContent={"space-between"}
                      fontFamily={"sans-serif"}
                      mb="22px"
                      color={"#000042"}
                    >
                        <Box fontSize="18px" >{loginData.email}</Box>
                        <Box 
                          fontSize={"14px"}
                          textDecoration="underline"
                          onClick={handleClick}
                          cursor="pointer"
                        >
                            Edit
                        </Box>
                    </Flex>

                    <InputGroup>
                      <Input 
                        type={show ? "text" : "password"}
                        name='password'
                        placeholder='Enter password'
                        h={"50px"}
                        fontSize="16px"
                        focusBorderColor='rgb(206, 206, 223)'
                        borderColor={"rgb(206, 206, 223)"}
                        onChange={handleChange}
                        rounded="2xl"
                      />

                      <InputRightElement width="6.5rem" size="lg">
                        <Button
                          size="md"
                          borderRadius="3xl"
                          mt="10%"
                          onClick={()=> setShow(!show)}
                          bg="white"
                        >
                            {show ? <ViewOffIcon /> : <ViewIcon />}
                        </Button>
                      </InputRightElement>
                    </InputGroup>

                    {incorrect === true ? (
                        <Box
                          fontSize={"14px"}
                          m="3px 0px 3px 0px"
                          color={"#ff1f1f"}
                          fontWeight="500"
                          ml="2"
                          letterSpacing={"-0.4px"}
                        >
                            Wrong Email or Password
                        </Box>
                    ) : (
                        ""
                    )}
                    </Box>
                   )
                }
                <Box 
                  textDecoration={"underline"}
                  m={"15px 0px 0px 0px"}
                  color="#000042"
                  fontSize="15px"
                >
                    Forgot Password
                </Box>
                {loginData.email.includes("@") && loginData.email.includes(".com") ? "" : btn}

                <HStack fontSize="16px">
                    <Checkbox mb={"20px"} mt={"20px"} size="sm">
                        Get Update on Whatsapp
                    </Checkbox>
                    <Image
                      src="https://static.lenskart.com/media/desktop/img/25-July-19/whatsapp.png"
                      w={"22px"}
                      h="22px"
                />
                </HStack>
                {loginData.email.includes("@") && 
                loginData.email.includes(".com") ? (
                    <Button
                      isLoading={loading}
                      onClick={handleSign}
                      bgColor={"#11daac"}
                      width="100%"
                      borderRadius={"35px/35px"}
                      h="50px"
                      fontSize="18px"
                      _hover={{ backgroundColor: "#11daac"}}
                    >
                        Sign In
                    </Button>
                ) : (
                    <Button 
                      bgColor={"#cccccc"}
                      width="100%"
                      borderRadius={"35px/35px"}
                      fontSize="18px"
                      h="50px"
                      _hover={{backgroundColor: "#cccccc"}}
                    >
                        Sign In
                    </Button>
                ) }

                <HStack></HStack>
            </Box>
            </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default Login;
