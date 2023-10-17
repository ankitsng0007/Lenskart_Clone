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
import { HomeCard5, HomeCard5a, HomeCard5b, HomeCard5c } from './HomeCard5';
import HomeCard6 from './HomeCard6';
import HomeCard7 from './HomeCard7';
import HomeCard8 from './HomeCard8';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';



const Home = () => {
  return (
   <Box>
    <Navbar />
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
    <HomeCard5 />
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
    <HomeCard5a type={HomeDetails4} heading="CONTACT LENSES & MORE" />
    <br />
    <br />
    <HomeCard5b type={HomeDetails5} heading="BUY IT YOUR WAY" />
    <br />
    <br />
    <br />
    <br />
    <br />
     <HomeCard4b
    text="Our Brands"
    src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/VC-Banner.jpg"
     />
     <br />
    <br />
    <HomeCard6 type={HomeDetails6} heading="EyeGlasses" />
    <HomeCard6 type={HomeDetails7} heading="SunGlasses" />
    <br />
    <br />
    <br />
    <br />
    <HomeCard4b
        text=""
        src="https://static1.lenskart.com/media/desktop/img/Nov22/Updated%20brand%20banner%20jj%20.jpg"
      />
      <br />
    <br />
    <HomeCard6 type={HomeDetails6} heading="EyeGlasses" />
    <br />
    <br />
    <HomeCard6 type={HomeDetails7} heading="SunGlasses" />
    <br />
    <br />
    <HomeCard4b
        text=""
        src="https://static1.lenskart.com/media/desktop/img/Aug21/25-Aug/LK-AIR-Banner.jpg"
      />
    <br />
    <br />
    <br />
    <br />
    <HomeCard6 type={HomeDetails6} heading="EyeGlasses" />
    <br />
    <br />
    <br />
    <br />
    <HomeCard4b
        text=""
        src="https://static1.lenskart.com/media/desktop/img/Aug21/25-Aug/LK-Readers-Banner.jpg"
      />
    <br />
    <br />
    <HomeCard6 type={HomeDetails10} heading="EyeGlasses" />
    <br />
    <br />
    <br />
    <HomeCard4b
        text=""
        src="https://static1.lenskart.com/media/desktop/img/Nov20/25-Nov/Banner05_Final2ndDec21.jpg"
      />
      <br />
    <br />
    <HomeCard6 type={HomeDetails8} heading="With Power Computer BLUE Lenses" />
    <br />
    <br />
    <HomeCard6 type={HomeDetails9} heading="With Zero Power Computer Blue Lenses" />
    <br />
    <br />
    <br />
    <br />
    <HomeCard4b
        text=""
        src="https://static1.lenskart.com/media/desktop/img/June22/Our-Brands-Banner.jpg"
      />
    <br />
    <br />
    <HomeCard6 type={HomeDetails11} heading="Contact Lenses" />
    <br />
    <HomeCard6 type={HomeDetails12} heading="Color Contact Lenses" />
    <br />
    <br />
    <HomeCard4b
        text=""
        src="https://static1.lenskart.com/media/desktop/img/Aug21/25-Aug/whatsapp.png"
      />
    <br />
    <br />
    <HomeCard7 />
    <HomeCard8 type={HomeDetails15} />
    <Footer />
   </Box>
  );
}

export default Home;
