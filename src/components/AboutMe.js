import { Image, Heading, HStack, Text, Box } from '@chakra-ui/react'
import React from 'react'
import FullScreenSection from './FullScreenSection';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

//import { useState } from 'react'

function AboutMe() {
  

  return (
    <FullScreenSection
      backgroundColor='rgb(87, 87, 87)'
    >
      <Box p={8} >
        <Heading alignSelf='flex-start' mt={8} mb={8} style={{color: 'white'}} id='about-me' >About Me</Heading>
        <HStack>
          <Image src={require('../images/portrait.JPG')} alt='portrait' borderRadius='50%' ></Image>
          
          
          <AnimationOnScroll animateIn="animate__fadeInRight">
            <Box 
              borderRadius='lg' 
              p={4} 
              backgroundColor='rgb(37, 37, 37)' 
              style={{transform: 'translateX(-80px)' }}
            >
              <Text fontSize='lg' color='white' mb={4} textAlign='justify'>
                Born and raised in the Czech Republic, my adventurous soul brought me to 
                Canada in spring of 2011. Soon after that, I bought my first mirror-lens camera and since then I keep capturing 
                the beautiful places around me. One day I arrived in Squamish, BC where the ocean meets the mountains and instantly 
                fell in love with the place which now I call my home.
              </Text>
              <Text fontSize='lg' color='white' mb={4} textAlign='justify'>
                With a passion for outdoor adventures, especially rock climbing, 
                I mostly enjoy photographing climbers on their projects, newly developed climbing routes, seldom photographed crags or 
                just photogenic routes. Beside rock climbing, I like to travel, spend time in the mountains skiing, or in the ocean on 
                my paddleboard, and I rarely leave my camera behind.
              </Text>
              <Text fontSize='lg' color='white' textAlign='justify'>
                If you enjoy my photos, feel free to contact me for collaboration. Looking forward to it!
              </Text>
              
            </Box>
          </AnimationOnScroll>
        </HStack>
        
      </Box>
    </FullScreenSection>
  )
}

export default AboutMe
