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
    <VStack p={4} textAlign='center' display='flex'> 
        <Text >
          Built by 
          <Link href='mailto: ondrej.straka93@gmail.com'> Ondrej Straka - Junior Web Developer</Link>
        </Text>
        <div>
        <Text as='i' fontSize='sm'  textAlign='center'>This web page has been created as my portfolio project using React JS</Text>

        </div>
        <Text >© 2022</Text>
    </VStack>
        
  
      
    </Box>
  )
}

export default Footer
