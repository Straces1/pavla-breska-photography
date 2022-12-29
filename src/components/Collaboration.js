import React from 'react'
import FullScreenSection from './FullScreenSection'
import { Heading, VStack, Box, Grid, Image, Text, HStack } from '@chakra-ui/react'
import { BsHandIndexThumb } from 'react-icons/bs'
import '../App.css'
const projects = [
  {
    title: "Vertical shop",
    description: "Product/climbing photographer for local Canadian distributor of European outdoor brand Singing Rock.",
    getImgSrc: () => require('../images/collaboration/vertical.jpg'),
    url: "https://verticalshop.ca/"
    

  },
  {
    title: "Vencouver International Mountain Film Festival",
    description: "Supporter, volunteer coordinator and member of the community. ",
    getImgSrc: () => require('../images/collaboration/vimff.jpg'),
    url: "https://vimff.org/"
  },
  {
    title: "Mountain Mornings",
    description: "Brand ambasador. Use discount code PAVLA10 for 10% off on beautiful stickers, camping mugs, apparel and others.",
    getImgSrc: () => require('../images/collaboration/mornings.jpg'),
    url: 'https://mountainmornings.ca/'
  },
  {
    title: "Mountain Mentors",
    description: "Occasional photographer of climbing teams in summer program.",
    getImgSrc: () => require('../images/collaboration/mentors.jpg'),
    url: 'http://www.mountainmentors.org/'
  }
]
function Collaboration() {
  return (
    <FullScreenSection
      backgroundColor="rgb(87, 87, 87)"
      color='white'
    >
      <Heading alignSelf='flex-start' mt={8} id='collaboration'>Collaboration</Heading>
      <Grid
      p={8}
      gridTemplateColumns='repeat(2,minmax(0,1fr))'
      gap={8}
      >
        {projects.map((project, key) => {
          return (
            <Box key={key}>
              <VStack bg='rgb(37, 37, 37)' width='33vw' minHeight='32vw' borderRadius='lg' mb={4}>
                <Image src={project.getImgSrc()} alt='placeholder'  borderRadius='lg'></Image>
                <Box p={4} color='white'>
                  <Heading alignSelf='' size='md'  mb={2} >{project.title}</Heading>
                  <Text mb={4} >{project.description}</Text>
                  <a href={project.url} rel={project.title}>
                    <HStack>
                      <span className='rotate'><BsHandIndexThumb/></span>
                      <Text as='b' >See more</Text>
                    </HStack>
                  </a>
                </Box>
              </VStack>
            </Box>
          )
        })}
      
      </Grid>
      
    </FullScreenSection>
  )
}

export default Collaboration
