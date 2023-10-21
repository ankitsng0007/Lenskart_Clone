import { useToast } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

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
  return (
    <div>
      
    </div>
  );
}

export default EditProduct;
