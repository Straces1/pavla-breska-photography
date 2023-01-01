import React, { useState, useEffect, useRef } from 'react';
import { 
    Box, 
    HStack, 
    Button, 
    extendTheme, 
    Image, 
    Hide, 
    Show,
    Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from '@chakra-ui/react';
import { BsInstagram, BsEnvelope } from 'react-icons/bs'
import { IconContext } from 'react-icons/lib';
import { HamburgerIcon } from '@chakra-ui/icons'
import Logo from '../images/logo2.svg'
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
const handleMenuClick = (id) => {
   
    const element = document.getElementById(id);
    
    if (element) {
        element.scrollIntoView({
            //behavior: 'smooth',
            // inline: 'nearest',
            // block: 'start',
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
        
        url: "mailto: pavlabphoto@gmail.com",
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
        
            <HStack
                px={{base: 1, sm: 3, md: 6, lg: 6, xl: 6, xxl: 6}}
                py={1}
                justifyContent='space-between'
                
            >
                <Hide below='lg'>
                    <nav>
                    <Box mb={12} p={4}>
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
                </Hide> 
                 {/* This picture below has been compressed by SWGOMG - thats the way how I made it work */}
                <nav>
                    <Box 
                    // style={{transform: 'translateX(5vw)'}}
                    ml={{
                       lg: '16vw',
                       md: '25vw', 
                       sm: '18vw',
                       base: '5vw'
                    }}
                    >
                        <Image src={Logo} width='360px' />
                    </Box>  
                </nav> 

                <Hide below='lg'>
                    <nav>
                    <Box px={4} mt={14}>
                            <HStack fontSize={{lg: 'md', xl: 'lg'}} className='links-right' spacing='0'>
                                <Button p={{md: 1, lg: 2, xl: 3}} variant='myVariant' style={{backgroundColor: firstIsHovered ? 'rgba(255, 255, 255, 0.2)' : ''}} onMouseEnter={() => setFirstIsHovered(true)} onMouseLeave={() => setFirstIsHovered(false)} onClick={() => handleClick('gallery')}>GALLERY</Button>
                                <Button p={{md: 1, lg: 2, xl: 3}}variant='myVariant' style={{backgroundColor: secondIsHovered ? 'rgba(255, 255, 255, 0.2)' : ''}} onMouseEnter={() => setSecondIsHovered(true)} onMouseLeave={() => setSecondIsHovered(false)} onClick={() => handleClick('collaboration')}>COLLABORATION</Button>
                                <Button p={{md: 1, lg: 2, xl: 3}} variant='myVariant' style={{backgroundColor: thirdIsHovered ? 'rgba(255, 255, 255, 0.2)' : ''}} onMouseEnter={() => setThirdIsHovered(true)} onMouseLeave={() => setThirdIsHovered(false)} onClick={() => handleClick('about-me')}>ABOUT</Button>
                                <Button p={{md: 1, lg: 2, xl: 3}} variant='myVariant' style={{backgroundColor: fourthIsHovered ? 'rgba(255, 255, 255, 0.2)' : ''}} onMouseEnter={() => setFourthIsHovered(true)} onMouseLeave={() => setFourthIsHovered(false)} onClick={() => handleClick('contact-me')}>CONTACT ME</Button>
                                
                            </HStack>
                    </Box>
                        
                    </nav>
                </Hide>
                <Show breakpoint='(max-width: 992px)' 
                >
                    <Box>
                        <Menu >
                            {({ isOpen }) => (
                                <>
                                <MenuButton
                                    isActive={isOpen}
                                    color='white'
                                    mr={5}
                                    as={IconButton}
                                    icon={<HamburgerIcon boxSize={7}/>}
                                    variant='outline'
                                    transition='all 0.2s'
                                    _hover={{bg: 'gray.400'}}
                                />
                                <MenuList>
                                    <MenuItem onClick={() => handleMenuClick('gallery')}>GALLERY</MenuItem>
                                    <MenuItem onClick={() => handleMenuClick('collaboration')}>COLLABORATION</MenuItem>
                                    <MenuItem onClick={() => handleMenuClick('about-me')}>ABOUT</MenuItem>
                                    <MenuItem onClick={() => handleMenuClick('contact-me')}>CONTACT ME</MenuItem>
                                    <MenuItem><Box mr='5px'><BsInstagram /></Box><a href='https://www.instagram.com/pavlabphoto/'><span>INSTAGRAM</span></a></MenuItem>
                                </MenuList>
                                </>
                            )}
                        </Menu>
                    </Box>
                </Show>
            </HStack>
        
      
    </Box>
  )
}

export default Header
