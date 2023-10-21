import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Box, Grid, GridItem, Input, Select, useToast } from "@chakra-ui/react";


const Productlist = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("");
  const [gender, setGender] = useState("");
  const [page, setPage] = useState(0);
  const [shape, setShape] = useState("");
  const [style, setStyle] = useState("");
  const [productref, setProductref] = useState("");
  const toast = useToast();

  const fetchData = async () => {
    setIsLoading(true)
    try{
        const response = await fetch(
            `https://harlequin-fawn-tutu.cyclic.app/product?sort=${sort}&productRefLink=${productref}&gender=${gender}&productType=${filter}&shape=${shape}&style=${style}&page=${page}`
        );

        const postData = await response.json();
        setData(postData);
        setIsLoading(false);
    }catch(error){
        setIsLoading(false);
        console.log(error);
        setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [sort, filter, page, gender, shape, style, productref]);
   
  const handleDelete = async (id) => {
    try{
        const response = await fetch(
            `https://harlequin-fawn-tutu.cyclic.app/product/${id}`,
            {
                method: "DELETE"
            }
        );
        if(response.status === 200){
            fetchData();

            toast({
                title: "Product Deleted",
                description: "Product Deleted Successfully.",
                status: "success",
                duration: 2000,
                isClosable: true
            });
        }
    }catch(error){
        console.log(error);
    }
  };

  return (
    <Box bg="gray.200" minH="710px">
        
        <br/>
        <Grid
          templateColumns={{
            lg: "30% 10% 10% 10% 15% 15%",
            md: "30% 10% 10% 10% 15% 15%",
            sm: "repeat(1, 1fr)",
            base: "repeat(1, 1fr)"
          }}
          justifyContent="space-between"
          w="95%"
          m="auto"
          gap="2"
        >
            <GridItem>
                <Input 
                   size="lg"
                   type="search"
                   fontSize="16px"
                   h="40px"
                   bg="whiteAlpha.900"
                   borderRadius="3xl"
                   placeholder="Search by name"
                   value={productref}
                   onChange={(e) => setProductref(e.target.value)}
                 />
            </GridItem>
            <GridItem>
                <Select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  size="lg"
                  fontSize="16px"
                  h="40px"
                  bg="whiteAlpha.900"
                >
                <option value="">All Glasses</option>
            <option value="sunglasses">Sun Glasses</option>
            <option value="eyeglasses">Eye Glasses</option>
                </Select>
            </GridItem>
            <GridItem>
                <Select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  size="lg"
                  fontSize="16px"
                  h="40px"
                  bg="whiteAlpha.900"
                >
                <option value="">For all Gender</option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kid">Kid</option>
                </Select>
            </GridItem>
            <GridItem>
          <Select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            size="lg"
            fontSize="16px"
            h="40px"
            bg="whiteAlpha.900"
          >
            <option value="">Sort By Price</option>
            <option value="lowtohigh">Low to High</option>
            <option value="hightolow">High to Low</option>
          </Select>
        </GridItem>
        </Grid>
    </Box>
  );
}

export default Productlist;
