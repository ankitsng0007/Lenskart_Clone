import React, { useState } from 'react';
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Productpost = () => {
    const toast = useToast();
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
  const [loading, setLoading] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        setLoading(true);
        if(
            imageTsrc !== "" &&
        price !== "" &&
        mPrice !== "" &&
        name !== "" &&
        shape !== "" &&
        gender !== "" &&
        style !== "" &&
        dimension !== "" &&
        productType !== "" &&
        colors !== ""
        ){
            const payload = {
                imageTsrc,
          productRefLink: name,
          rating: 0,
          userRated: 0,
          price,
          mPrice,
          name,
          shape,
          gender,
          style,
          dimension,
          productType,
          productId: Math.round(Math.random() * Date.now() * 10000),
          colors,
          quantity: 0,
          id: Math.round(Math.random() * Date.now() * 10000000)
            };

            const response = await fetch(
                "",{
                    method: "POST",
                    body: JSON.stringify(payload),
                    headers: { "Content-Type": "application/json"}
                }
            );

           if(response.status === 201){
            setLoading(false);
            toast({
                title: "Product Register Successfully",
            status: "success",
            duration: 1000,
            isClosable: true,
            position: "bottom"
            });
            setTimeout(() => {
                navigate("/productlist");
            }, 1000);
           } else {
            setLoading(false);
          const { message } = await response.json();
          console.log(message);
           }
        }else {
            setLoading(false);
        toast({
          title: "Please fill all the field",
          status: "warning",
          duration: 1000,
          isClosable: true,
          position: "bottom"
        });
        }
    } catch(error){
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
    <div>
      
    </div>
  );
}

export default Productpost;
