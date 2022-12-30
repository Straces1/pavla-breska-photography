import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import FullScreenSection from './FullScreenSection'
import pOne from '../images/bird.jpg'
import pTwo from "../images/canola.jpg"
import pThree from "../images/papoose.jpg"
import pFour from "../images/neve.jpg"
import pFive from "../images/skitouring.jpg"
import pSix from "../images/alana.jpg"
import '../App.css'
 
function LandingGalery() {

  return (
    <FullScreenSection 
      minWidth='100vw'
      isDarkBackground
      backgroundColor="rgb(87, 87, 87)"
    >
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        stopOnHover={false}
        interval='4000'
        showThumbs={window.innerWidth < 376 ? false : true}
        showArrows={window.innerWidth < 992 ? false : true}
        thumbWidth={window.innerWidth < 668 ? 50 : 80}
      
      >
        <div className='img'>
            <img src={pOne} alt='first'></img>
        </div>
        <div className='img'>
            <img src={pFour} alt='second'></img>
        </div>
        <div className='img'>
            <img src={pThree} alt='third'></img>
        </div>
        <div className='img'>
            <img src={pTwo} alt='fourth'></img>
        </div>
        <div className='img'>
            <img src={pFive} alt='fifth'></img>
        </div>
        <div className='img'>
            <img src={pSix} alt='sixth'></img>
        </div>
      </Carousel>
    </FullScreenSection>
  )
}

export default LandingGalery
