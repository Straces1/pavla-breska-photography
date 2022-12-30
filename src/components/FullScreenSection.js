import { VStack } from '@chakra-ui/react'
import React from 'react'

function FullScreenSection({ children, isDarkBackground, ...boxProps }) {
  return (
    <VStack
        backgroundColor={boxProps.backgroundColor}
        color={isDarkBackground ? 'white' : 'hsl(180, 60%, 40%)'}
    >
      <VStack maxWidth={window.innerWidth}  {...boxProps}>
        {children}
      </VStack>
    </VStack>
  )
}

export default FullScreenSection
