import React from 'react'
import FullScreenSection from './FullScreenSection'
import { Carousel } from 'react-responsive-carousel'
import { Heading, Box } from '@chakra-ui/react'
import '../Others.css'

function Others() {
    const others = [
        {id: 'picture_1', getImgSrc: () => require('../images/others/p1.jpg')},
        {id: 'picture_2', getImgSrc: () => require('../images/others/p2.jpg')},
        {id: 'picture_3', getImgSrc: () => require('../images/others/p3.jpg')},
        {id: 'picture_4', getImgSrc: () => require('../images/others/p4.jpg')},
        {id: 'picture_5', getImgSrc: () => require('../images/others/p5.jpg')},
        {id: 'picture_6', getImgSrc: () => require('../images/others/p6.jpg')},
        {id: 'picture_7', getImgSrc: () => require('../images/others/p7.jpg')},
        {id: 'picture_8', getImgSrc: () => require('../images/others/p8.jpg')},
        {id: 'picture_9', getImgSrc: () => require('../images/others/p9.jpg')},
        {id: 'picture_10', getImgSrc: () => require('../images/others/p10.jpg')},
        {id: 'picture_11', getImgSrc: () => require('../images/others/p11.jpg')}
    ]
  return (
    <FullScreenSection backgroundColor="rgb(87, 87, 87)" color='white' width='100%'>
        
        <Box 
            w={window.innerWidth < 480 ? '90vw' : '65vw'}
            h='auto'
        >
            <Heading alignSelf='flex-start' mt={8} id='gallery'>Gallery</Heading>
            <Carousel
                
                thumbWidth='5vw'
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                autoPlay
                stopOnHover={false}
                showThumbs={window.innerWidth < 768 ? false : true}
                interval='6000'
            >
                {others.map((item, key) => {
                    return(
                        <div key={key} className='gallery-image'>
                            <img src={item.getImgSrc()} alt={item.id}></img>
                        </div>
                    )
                })}
            </Carousel>
        </Box>
      
    </FullScreenSection>
  )
}

export default Others
