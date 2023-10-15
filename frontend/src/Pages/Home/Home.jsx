import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import {HomeDetails,
  HomeDetails1,
  HomeDetails2,
  HomeDetails4,
  HomeDetails5,
  HomeDetails6,
  HomeDetails7,
  HomeDetails8,
  HomeDetails9,
  HomeDetails10,
  HomeDetails11,
  HomeDetails12,
  HomeDetails14,
  HomeDetails15} from "./HomeDetails"
import HomeCard from './HomeCard';
import HomeCard1 from './HomeCard1';
import HomeCard2 from './HomeCard2';
import { HomeCard4, HomeCard4a, HomeCard4b } from './HomeCard4';



const Home = () => {
  return (
   <Box>
    <HomeCard type={HomeDetails} />
    <HomeCard1 type={HomeDetails1} />
    <Image src='https://static1.lenskart.com/media/desktop/img/Apr22/Bannerforexport.jpg' alt='img' mt="10"/>
    <HomeCard2 type={HomeDetails2} src={"https://i.imgur.com/Gry0Q5D.png"}/>
    <br />
    <br />
    <HomeCard4 
    text="As Seen on Shark Tank"
    src="https://static1.lenskart.com/media/desktop/img/Dec22/1-Dec/Homepage-Banner-web.gif"
    />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <HomeCard4
    text="Trending Sunglasses"
    src="https://static1.lenskart.com/media/desktop/img/Jan23/sunglasses/Sun-Banner-web.gif"
     />
     <br />
    <br />
    <br />
    <br />
    <br />
     <HomeCard4
    text="As Seen On Kiara"
    src="https://static1.lenskart.com/media/desktop/img/Nov22/23-Nov/Hompage-banner4.jpg"
     />
     <br />
    <br />
    <br />
    <br />
    <br />
     <HomeCard4
    text="Aquacolor - Galm Up With Color Lenses"
    src="https://static1.lenskart.com/media/desktop/img/Oct22/kiara/Refresh-Banner-Web.gif"
     />
     <br />
    <br />
    <br />
    <br />
    <br />
     <HomeCard4a
    text="Introducing OJOS Wear - Subscribe & Save"
    src="https://static1.lenskart.com/media/desktop/img/May22/ojos-web.jpg"
     />
     <br />
    <br />
    <br />
    <br />
    <br />
     <HomeCard4b
    text="Our Brands"
    src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/VC-Banner.jpg"
     />
   </Box>
  );
}

export default Home;
