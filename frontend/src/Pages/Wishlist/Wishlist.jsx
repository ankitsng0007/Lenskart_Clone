import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeFromWishlist } from '../../Redux/Wishlist/wishlist.action';
import { addToCart } from '../../Redux/CartPage/action';
import { Box, Grid, Heading, Text } from '@chakra-ui/react';
import Navbar from '../../Components/Navbar/Navbar';

const Wishlist = () => {
    const wishlistItems = useSelector((store) => store.wishlistManager.wishlist);
    const { cart } = useSelector((state) => state.CartReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDelete = (item) =>{
        dispatch(removeFromWishlist(item));
    };

    const handleAddToCart = (data) => {
        const existingItem = cart.findIndex((item) => item._id === data._id);
        if(existingItem === -1){
            data.quantity = 1;
            dispatch(addToCart(data));
            dispatch(removeFromWishlist(data._id));
            setTimeout(() => {
                navigate("/cart");
            }, 1000);
        } else {
            alert("Product Already Add in Cart");
        };
    };

  return (
    <Box>
        <Navbar />
        <br />
        <br />
        <Box
          minHeight="635"
          w={{ lg: "80%", md: "90%", sm: "90%", base: "95%" }}
          m="auto"
        >
            <Heading
              fontSize="25px"
              textAlign="left"
              p="2"
              bg="teal.400"
              color="whiteAlpha.900"
              w={{ lg: "80%", md: "90%", sm: "90%", base: "95%" }}
              m="auto"
            >
                Wishlist
            </Heading>
            {wishlistItems.length === 0 ? (
                <Text
                textAlign="center"
                fontSize="28px"
                color="gray"
                mt="1%"
                fontWeight="bolder"
                >
                    Your Wishlist is Empty.
                </Text>
            ) : (
                <Box>
                    <Grid>
                        
                    </Grid>
                </Box>
            )}
        </Box>
    </Box>
  );
}

export default Wishlist;
