import { Box } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
    const init = {
        card : "",
        date : "",
        cvv : "",
        cardname : ""
    };

    const navigate = useNavigate();
    const { cart } = useSelector((state) => state.CartReducer);
    const dispatch = useDispatch();
    const [userData, setUserData] = useState(init);
    const [cards, setCards] = useState();
    const [dates, setDates] = useState();
    const [cv, setCv] = useState();
    const [names, SetNames] = useState();

    const Required = (props) => {
        return (
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
  return (
    <div>
      
    </div>
  );
}

export default Payment;
