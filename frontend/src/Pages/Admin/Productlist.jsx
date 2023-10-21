import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";


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
    
  })


  return (
    <div>
      
    </div>
  );
}

export default Productlist;
