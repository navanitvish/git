import { Box, Container, Heading, Image, Stack,Text, } from '@chakra-ui/react'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/blog (2).jpg'
import img2 from '../assets/blog (3).jpg'
import img3 from '../assets/blog (4).jpg'
import img4 from '../assets/blog (5).jpg'
import img5 from '../assets/blog (7).jpg'
import img6 from '../assets/undraw_Drink_coffee_xycb-removebg-preview.png'

const HeadingOptions ={
    pos:"absolute", 
    left:"50%",
    top:"50%",
    transform:"translate(-50%,-50%) ",
    textTransform:"uppercsae",
    p:'4',
    size:'4xl'
}



const Home = () => {
  return (
    <Box> 
        <Carousel
            autoPlay 
            infiniteLoop 
            interval={1000} 
            showStatus={false} 
            showThumbs={false} 
            showArrows={false}
            >
                <Box w="full" h={'100vh'}>
                    <Image src={img1} alt='Dan Abramov' />
                    <Heading bgColor={'blackAlpha.600'} color={'white'} {...HeadingOptions}> 
                        Watch the Future
                    </Heading>
                </Box>
                <Box w="full" h={'100vh'}>
                    <Image src={img2} alt='Dan Abramov' />
                    <Heading bgColor={'blackAlpha.600'} color={'white'} {...HeadingOptions}> 
                        Watch the Nuture
                    </Heading>
                </Box>
                <Box w="full" h={'100vh'}>
                    <Image src={img3} alt='Dan Abramov' />
                    <Heading bgColor={'blackAlpha.600'} color={'white'} {...HeadingOptions}> 
                        Watch the quture
                    </Heading>
                </Box>
                <Box w="full" h={'100vh'}>
                    <Image src={img4} alt='Dan Abramov' />
                    <Heading bgColor={'blackAlpha.600'} color={'white'} {...HeadingOptions}> 
                        Watch the suture
                    </Heading>
                </Box>
                <Box w="full" h={'100vh'}>
                    <Image src={img5} alt='Dan Abramov' />
                    <Heading bgColor={'blackAlpha.600'} color={'white'} {...HeadingOptions}> 
                        Watch the puture
                    </Heading>
                </Box>
        </Carousel>
        <Container maxW={'container.xl'} minH={'100vh'} p="16">
            <Heading textTransform={"uppercase"} py="2" w={'fit-content'} borderBottom={'2px solid'} m={'auto'}
            >Services</Heading>
            <Stack
            h="full"
            p={'4'}
            alignItems={'center'}
            direction={['column', 'row']}
            >
                <Image src={img6} h={["40",'400']} filter={'hue-rotate(130deg'}/>
                <Text letterSpacing={'widest'} lineHeight={'190%'} p={["4","16"]} textAlign={'center'}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Soluta sapiente nihil voluptatibus natus nisi, atque velit maxime minus,
                    unde numquam necessitatibus voluptas sit! Magni iusto voluptate a magnam? Eligendi, veniam.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore minus doloremque reprehenderit praesentium velit,
                    pariatur nisi itaque ipsa, fugiat quaerat sunt quo doloribus accusamus consectetur molestiae maxime labore iure quia possimus iusto, ex quasi magni nostrum?
                    Magnam perferendis nesciunt impedit.
                    Corrupti ex consequuntur consequatur. Rerum numquam ad dignissimos aliquid unde consequatur tenetur quo,
                    placeat quas, ipsa sit voluptatem ea quod. Rem sapiente porro fuga dolorum consequuntur explicabo distinctio quasi facilis ab, iusto ad expedita dignissimos, magni, repudiandae minima harum fugit aspernatur magnam optio. Praesentium dolores qui reiciendis est.
                    Id animi reiciendis facilis illo quidem blanditiis earum provident sapiente et? Cupiditate.
                </Text>
            </Stack>
        </Container>
    </Box>
  
  )
}

export default Home

