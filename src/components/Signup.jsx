import { Container, Heading, VStack, Input, Button, Text, Avatar } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <form action="">
        <VStack alignItems={'stretch'} spacing={'8'} w={["full","96"]} m={'auto'} my={"16"}>
          <Heading textAlign={'center'}>Video  Hub</Heading>
          <Avatar alignSelf={"center"} boxSize={"32"}/>
          <Input placeholder ={'Name'} type ={'text'} required focusBorderColor={"purple.500"} />
          <Input placeholder ={'Email'} type ={'Email'} required focusBorderColor={"purple.500"} />
          <Input placeholder ={'Password'} type ={'Password'} required focusBorderColor={"purple.500"} />
          <Button colorScheme='purple' type={'submit'}>Sign Up</Button>
        <Text textAlign={'right'}>
          Already Signed Up?{" "}
          <Button variant={'link'} colorScheme='purple'>
            <Link to={"/Login "}>Login In</Link>
          </Button>
        </Text>
        
        </VStack>
      </form>

    </Container>
  )
}

export default Signup
