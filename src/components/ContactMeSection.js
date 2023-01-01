import React from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";


const ContactMe = () => {
  

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      comment: "",
    },
    onSubmit: (data) => {
      console.log(data)
      formik.handleReset()
      
    },
    validationSchema: Yup.object({
     firstName: Yup.string().required("Required").max(25, "Please enter valid name"),
     email: Yup.string().email("Invalid email address").required("Required"),
     comment: Yup.string().required("Required").min(25, "Must be at least 25 characters")

    }),
  });
  
  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor='rgb(87, 87, 87)'
      py={16}
      spacing={8}
    >
      <VStack w="80vw" p={4} alignItems="flex-start">
        <Heading as="h1" id="contact-me">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">

          {/*  FORM START  */}
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>

              {/*  FIRST NAME SETION  */}
              <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  type='text'
                  {...formik.getFieldProps('firstName')}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>

              {/*  EMAIL SECTION  */}
              <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  type="email"
                  {...formik.getFieldProps('email')}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>

              {/*  MESSAGE SECTION  */}
              <FormControl isInvalid={formik.touched.comment && formik.errors.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  {...formik.getFieldProps('comment')}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <Button type="submit" variant='outline' width="50%">
                Submit
              </Button>    
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default ContactMe;
