import { Box, Center, Heading, VStack, useToast } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from './Navbar';

const EditProduct = () => {
    const toast = useToast();
    const {id} = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [imageTsrc, setImageTsrc] = useState("");
  const [price, setPrice] = useState("");
  const [mPrice, setMPrice] = useState("");
  const [shape, setShape] = useState("");
  const [gender, setGender] = useState("");
  const [style, setStyle] = useState("");
  const [dimension, setDimension] = useState("");
  const [productType, setProductType] = useState("");
  const [colors, setColors] = useState("");
  const [rating, setRating] = useState("");
  const [userRated, setUserRated] = useState("");
  const [productId, setProductId] = useState("");
  const [quantity, setQuantity] = useState("");
  const [productRefLink, setProductRefLink] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(`https://harlequin-fawn-tutu.cyclic.app/product/${id}`, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    })
    .then((res) => res.json())
    .then((res) => {
        setImageTsrc(res.imageTsrc);
        setPrice(res.position);
        setMPrice(res.price);
        setName(res.name);
        setShape(res.shape);
        setGender(res.gender);
        setStyle(res.style);
        setDimension(res.dimension);
        setProductType(res.productType);
        setColors(res.colors);
        setRating(res.rating);
        setUserRated(res.userRated);
        setProductId(res.productId);
        setQuantity(res.quantity);
        setProductRefLink(res.productRefLink);
    })
    .catch((err) => console.log(err));
  }, []);

  const handleEdit = async (e) => {
    e.preventDefault();
    try{
        setLoading(true);
        const payload = {
            imageTsrc: imageTsrc,
        productRefLink: productRefLink,
        rating: rating,
        userRated: userRated,
        price: price,
        mPrice: mPrice,
        name: name,
        shape: shape,
        gender: gender,
        style: style,
        dimension: dimension,
        productType: productType,
        colors: colors,
        productId: productId,
        quantity: quantity,
        id: Math.round(Math.random() * Date.now() * 10000000)
        };

        const response = await fetch(
            `https://harlequin-fawn-tutu.cyclic.app/product/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(payload)
        }
        );

        if(response.status === 204){
            setLoading(false);
            toast({
                title: "Product Updated Successfully",
                status: "success",
                duration: 2000,
                isClosable: true,
                position: "bottom"
              });
              setTimeout(() => {
                navigate("/productlist");
              }, 1000);
        } else {
            setLoading(false);
        toast({
          title: "Product Updated Successfully",
          status: "success",
          duration: 1000,
          isClosable: true,
          position: "bottom"
        });
        setTimeout(() => {
          navigate(`/productlist`);
        }, 1000);
        }
    }catch(error){
        setLoading(false);
      console.log("An error occurred. Please try again later.");
      toast({
        title: "An error occurred. Please try again",
        status: "error",
        duration: 1000,
        isClosable: true,
        position: "bottom"
      });
    }
  };
  return (
    <Box bg="gray.200" minH="710px">
        <Navbar />
        <br />
        <br />
        <Center>
            <VStack
              w={{ lg: "650px", md: "650px", sm: "90%", base: "95%" }}
              mb={{ lg: "0", md: "0", sm: "4", base: "4" }}
              borderRadius="xl"
              boxShadow="dark-lg"
              p="10"
              bg="whiteAlpha.900"
            >
                <Heading>Edit Product</Heading>
            </VStack>
        </Center>
    </Box>
  );
  }

export default EditProduct;
