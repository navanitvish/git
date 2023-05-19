import { Box, HStack, Heading, Stack, VStack, Button, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineSend } from "react-icons/ai"

const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.900"} minH={"40"} p={'16'} color={'white'}>
      <Stack direction={['column','row']}>
        <VStack alignItems={"stretch"} w={'full'} px={'4'}>
            <Heading size={'md'} textTransform={'uppercase'}>
                Subscribe to get updates
            </Heading>
        
            <HStack
            borderBottom={"2px solid white"}
            >
                <Input placeholder='Enter Email Here....' border={"none"} borderRadius={'n'} outline={'none'} focusBorderColor='none'/>
                <Button
                p={'0'}
                variant={'ghost'}
            borderRadius={'0 20px 20px 0'}
                >
                    <AiOutlineSend size={20} />
                </Button>
            </HStack>
        </VStack>
            <VStack 
            w={'full'} 
            borderLeft={["none", "1px solid white"]}
            borderRight={["none", "1px solid white"]}
            >
             <Heading textTransform={"uppercase"} textAlign={'center'}>
                Video Hub
             </Heading>
             <Text>All rights received</Text>
            </VStack>
            <VStack 
            w={'full'} 
            >
              <Heading textTransform={"uppercase"} textAlign={'center'} size={'m'}>
                Social Media
             </Heading> 
             <Button variant={'link'} colorScheme='purple'>
                <a href="https://youtube.com/shorts/koIWjC6FTGg?feature=share" target='blank'>Youtube</a>
                </Button> 
                <Button variant={'link'} colorScheme='purple'>
                <a href="https://www.instagram.com/" target='blank'>Instagram</a>
                </Button> 
                <Button variant={'link'} colorScheme='purple'>
                <a href="https://github.com/navanitvish/DSA-tutorial/blob/main/README.md" target='blank'>GitHub</a>
                </Button>    
            </VStack>
      </Stack>
    </Box>
  )
}

export default Footer
