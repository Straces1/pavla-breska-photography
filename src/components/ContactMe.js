import React from 'react'
import FullScreenSection from './FullScreenSection'
import { Heading, Box, Input, VStack, Textarea, Button } from '@chakra-ui/react'

function ContactMe() {
  return (
    <FullScreenSection
        color='white'
        backgroundColor='rgb(87, 87, 87)'
    >
        <Heading mt={8} alignSelf='flex-start' id='contact-me'>Contact Me</Heading>
        <Box>
            <form>
                <VStack spacing={3} width='40vw' color='white' >
                    <Input placeholder='Name...' id='name' type='text'></Input>
                    <Input placeholder='E-mail...' id='email' type='email'></Input>
                    <Textarea placeholder='Type your message...' id='email' type='text'></Textarea>
                    <Button variant='outline' width='200px'>Send</Button>
                </VStack>
            </form>
        </Box>
    </FullScreenSection>
  )
}

export default ContactMe
