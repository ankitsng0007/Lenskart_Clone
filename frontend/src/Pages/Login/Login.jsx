import { Box, useDisclosure } from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../ContextApi/AuthContext';
import { useNavigate } from 'react-router-dom';

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
                const res = await fetch(``)
            }
        }
    }

  return (
    <div>
      
    </div>
  );
}

export default Login;
