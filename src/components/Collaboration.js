import React from 'react'
import FullScreenSection from './FullScreenSection'
import { Heading, VStack, Box, Grid, Image, Text, HStack } from '@chakra-ui/react'
import { BsHandIndexThumb } from 'react-icons/bs'
import '../App.css'
const projects = [
  {
    title: "Vertical shop",
    description: "Local Canadian distributor of European outdoor brand Singing Rock that offers quality climbing equipment for rope access workers, rock and ice climbers and arborists. Time to time I hang out with guys from the Vertical Shop to shoot climbing photo content.",
    getImgSrc: () => require('../images/collaboration/vertical.jpg'),
    url: "https://verticalshop.ca/"
    

  },
  {
    title: "Vencouver International Mountain Film Festival",
    description: "Twice a year, at the main event in February and the Fall Series in November, you can find me at the VIMFF where I've been a long time supporter and a staff member. For me, the VIMFF is a source of inspiration for mountain adventures and I love being a part of the festival. ",
    getImgSrc: () => require('../images/collaboration/vimff.jpg'),
    url: "https://vimff.org/"
  },
  {
    title: "Mountain Mornings",
    description: "A small local business of my fellow Czech living in Canada. Petra creates beautiful Pacific Northwest inspired illustrations. I'm honored to be Mountain Mornings brand ambassador. Use discount code PAVLA10 for 10% off on stickers, camping mugs, apparel and other spectacular items.",
    getImgSrc: () => require('../images/collaboration/mornings.jpg'),
    url: 'https://mountainmornings.ca/'
  },
  {
    title: "Mountain Mentors",
    description: "Mountain Mentors is a community committed to self-development and support, in the backcountry and beyond, offering mentorship programs for women in the outdoors. I occasionally photograph the teams during the summer climbing program.",
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
      gridTemplateColumns={{base: 'repeat(1,minmax(0,1fr))', sm: 'repeat(1,minmax(0,1fr))', md: 'repeat(2,minmax(0,1fr))'}}
      gap={8}
      >
        {projects.map((project, key) => {
          return (
            <Box key={key}>
              <VStack 
                bg='rgb(37, 37, 37)' 
                width={{base: '60vw', sm: '60vw', md: '33vw', lg: '33vw', xl: '30vw'}} 
                minHeight='84vh' 
                borderRadius='lg' 
                mb={4}
              >
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
