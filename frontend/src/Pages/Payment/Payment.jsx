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
    const [names, setNames] = useState();

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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });

        switch(name){
            case "card":
                setCards(
                    value === "" ? (
                        <Required info="This is a required field" />
                    ) : (
                        <Required info="Card Number should be 16 digit (eg. xxxxxxxxxxxxxxxx" />
                    )
                );
                break;

                case "date" :
                    setDates(
                        value === "" ? (
                            <Required info="This is a required field" />
                        ) : (
                            <Required info="Please Enter a valid month & Year formate ( eg. MM/YY)" />
                        )
                    );
                    break;

                    case "cvv":
        setCv(
          value === "" ? (
            <Required info="This is a required feild" />
          ) : (
            <Required info="CVV should be 3 digit (eg. XXX)" />
          )
        );
        break;

      case "cardname":
        setNames(
          value === "" ? <Required info="This is a required feild" /> : ""
        );
        break;

      default:
        break;
    }
  };

        }
    }
  return (
    <div>
      
    </div>
  );
}

export default Payment;
