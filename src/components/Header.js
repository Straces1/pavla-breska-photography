import React, { useState, useEffect, useRef } from 'react';
import { Box, HStack, VStack, Text, Button, extendTheme } from '@chakra-ui/react';
import { BsInstagram, BsEnvelope } from 'react-icons/bs'
import { IconContext } from 'react-icons/lib';
import Logo from '../images/logo_w.svg'
//import './header.css';
import '../App.css'

extendTheme({
    components: {
        Button: {
            variants: {
                'myVariant': {

                }
            }
        }
    }
})

const handleClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            inline: 'nearest',
            block: 'start',
        })
    }
}

function Header() {

    const headerRef = useRef(null)
    useEffect(() => {
        let prevScrollPos = window.scrollY;

        const handleScroll = () => {
            const currentScrollPos = window.scrollY
            const headerElement = headerRef.current;
            

            if (!headerElement) {return}
            if (currentScrollPos > 400) {
                if (prevScrollPos > currentScrollPos) {headerElement.style.transform = "translateY(0)"}
                else {headerElement.style.transform = "translateY(-200px)"}
                prevScrollPos = currentScrollPos;
            }
            

        }
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const [firstIsHovered, setFirstIsHovered] = useState(false)
    const [secondIsHovered, setSecondIsHovered] = useState(false)
    const [thirdIsHovered, setThirdIsHovered] = useState(false)
    const [fourthIsHovered, setFourthIsHovered] = useState(false)
    
const socials = [
    {
        icon: <BsEnvelope/>,
        
        url: "mailto: pavluschka@gmail.com",
    },
    {
        icon: <BsInstagram/>,
        url: "https://www.instagram.com/pavlabphoto/",
    }
];

  return (
    <Box
        position='fixed'
        top={0}
        left={0}
        right={0}
        transitionProperty="transform"
        transitionDuration=".4s"
        transitionTimingFunction="ease-in-out"
        backgroundColor="rgba(0,0,0,0.6)"
        zIndex='1'
        ref={headerRef}
    >
        <Box>
            <HStack
                px={6}
                py={1}
                justifyContent='space-between'
                
            >
                <nav>
                   <Box mb={12}>
                    <IconContext.Provider value={{color: 'white', size: '25px'}}>
                            <HStack>
                                {socials.map((social, key) => {
                                    return (
                                        <a href={social.url} key={key}>{social.icon}</a>
                                    )
                                })}
                            </HStack>
                        </IconContext.Provider>
                   </Box>
                </nav>  
                <nav>
                    <Box ml='17vw'>
                        <VStack>
                            <Box mb={-3} ml={20}>
                                <HStack>
                                    <div className='head-font'><p>Pavla</p></div>
                                    <img src={Logo} width='100px' alt='logo'></img>
                                    <div className='head-font'><p>Breska</p></div>
                                </HStack>
                            </Box>
                            <Text className="subHead-font" pl={12}>PHOTOGRAPHY</Text>
                        </VStack>
                    </Box>
                </nav>
                <nav>
                   <Box mt={14}>
                        <HStack className='links-right' spacing='0'>
                            <Button p={3} variant='myVariant' style={{backgroundColor: firstIsHovered ? 'rgba(255, 255, 255, 0.2)' : ''}} onMouseEnter={() => setFirstIsHovered(true)} onMouseLeave={() => setFirstIsHovered(false)} onClick={() => handleClick('gallery')}>GALLERY</Button>
                            <Button p={3} variant='myVariant' style={{backgroundColor: secondIsHovered ? 'rgba(255, 255, 255, 0.2)' : ''}} onMouseEnter={() => setSecondIsHovered(true)} onMouseLeave={() => setSecondIsHovered(false)} onClick={() => handleClick('collaboration')}>COLLABORATION</Button>
                            <Button p={3} variant='myVariant' style={{backgroundColor: thirdIsHovered ? 'rgba(255, 255, 255, 0.2)' : ''}} onMouseEnter={() => setThirdIsHovered(true)} onMouseLeave={() => setThirdIsHovered(false)} onClick={() => handleClick('about-me')}>ABOUT ME</Button>
                            <Button p={3} variant='myVariant' style={{backgroundColor: fourthIsHovered ? 'rgba(255, 255, 255, 0.2)' : ''}} onMouseEnter={() => setFourthIsHovered(true)} onMouseLeave={() => setFourthIsHovered(false)} onClick={() => handleClick('contact-me')}>CONTACT ME</Button>
                            
                        </HStack>
                   </Box>
                    
                </nav>
            </HStack>
        </Box>
      
    </Box>
  )
}

export default Header
