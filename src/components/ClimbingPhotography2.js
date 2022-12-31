import { 
  Heading, 
  Image, 
  Grid, 
  VStack, 
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
} from '@chakra-ui/react'
import React from 'react'
import FullScreenSection from './FullScreenSection'

const climbingGalery = [
  {
    title: 'Mirka Blstak on The Zip 5.10a',
    getImgSrc: () => require('../images/climbing/c1.jpg')
  },
  {
    title: 'Ondrej Petros on Squamish Buttress 5.10c',
    getImgSrc: () => require('../images/climbing/c2.jpg')
  },
  {
    title: 'Ondrej Straka on Heatwave 5.12a',
    getImgSrc: () => require('../images/climbing/c3.jpg')
  },
  {
    title: 'Tyler Kirkland on Rest in Agony 5.10+',
    getImgSrc: () => require('../images/climbing/c4.jpg')
  },
  {
    title: 'David Brayden on Laser Pointer 5.12c',
    getImgSrc: () => require('../images/climbing/c5.jpg')
  },
  {
    title: 'Mitch Parker on Cussed Crack 5.10c',
    getImgSrc: () => require('../images/climbing/c6.jpg')
  },
  {
    title: 'Mauricio Anaya on Vorpal Sword 5.12c',
    getImgSrc: () => require('../images/climbing/c7.jpg')
  },
  {
    title: "Bronwyn Hodgins on Dr. Bronner's 2 in 1 5.13b/c",
    getImgSrc: () => require('../images/climbing/c8.jpg')
  },
  {
    title: 'Lee Anne Belcourt on Wonderlost 5.11+',
    getImgSrc: () => require('../images/climbing/c9.jpg')
  },

]

function ClimbingPhotography2() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [imgSrc, setImgSrc] = React.useState()

  return (
    <FullScreenSection
      isDarkBackground={true}
      backgroundColor='rgb(87, 87, 87)'
      alignItems='flex-start'
      spacing={8}
    >
      <Heading mt={4} >Climbing Photography</Heading>
      <Grid
        gridTemplateColumns={{ sm: 'repeat(1,minmax(0,1fr))', md: 'repeat(2,minmax(0,1fr))', lg: 'repeat(3,minmax(0,1fr))', xl: 'repeat(3,minmax(0,1fr))'}}
        gap={8}
      >
        {climbingGalery.map((item, key) => {
            const handleClick = () => {
              setImgSrc(item.getImgSrc())
              onOpen()
            }
          return(
            <VStack width={{base: '80vw', sm: '50vw', md: '31vw', lg: '26vw', xl: '23vw'}} key={key}>
              <Image onClick={() => handleClick()} src={item.getImgSrc()} borderRadius='md' alt={item.title}></Image>
              <Text pl={1} alignSelf='flex-start' >{item.title}</Text>

              <Modal  size='xl' height='100wh' blockScrollOnMount={true} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalCloseButton color='white' />
              
                  <ModalBody bg='black'>
                    <Image src={imgSrc} width='100%' borderRadius='md' />
                  </ModalBody>
                </ModalContent>

               

              </Modal>

            </VStack>
            

          )
        })}
 
      </Grid>
    </FullScreenSection>
  )
}

export default ClimbingPhotography2
