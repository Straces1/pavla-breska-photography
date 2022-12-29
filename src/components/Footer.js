import React from 'react'
import { Box, VStack, Text, Link } from '@chakra-ui/react'

function Footer() {
  return (
    <Box
        display='block'
        backgroundColor="rgba(0,0,0,0.7)"
        alignItems='flex-end'
        color='white'
    >
    <VStack p={4} > 
        <Text alignSelf='center' >
          Built by 
          <Link href='mailto: ondrej.straka93@gmail.com'> Ondrej Straka - Junior Web Developer</Link>
        </Text>
        <Text as='i' fontSize='sm' alignSelf='center'>This web page has been created as my portfolio project using React JS</Text>
        <Text alignSelf='center'>© 2022</Text>
    </VStack>
        
  
      
    </Box>
  )
}

export default Footer
