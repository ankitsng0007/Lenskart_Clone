import React, { useState } from 'react';
import { Box, useDisclosure} from "@chakra-ui/react";

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

    
  return (
    <div>
      
    </div>
  );
}

export default Signup;
