import { Container, Heading, VStack, Input, Button, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <form action="">
        <VStack alignItems={'stretch'} spacing={'8'} w={["full","96"]} m={'auto'} my={"16"}>
          <Heading>Wellcome Back</Heading>
          <Input placeholder ={'Email'} type ={'Email'} required focusBorderColor={"purple.500"} />
          <Input placeholder ={'Password'} type ={'Password'} required focusBorderColor={"purple.500"} />
          <Button variant={'link'} alignSelf={'flex-end'}>
            <Link to={"/forgetpassword"}>Forget Password?</Link>
          </Button>
          <Button colorScheme='purple' type={'submit'}>Log In</Button>
        <Text textAlign={'right'}>
          New User?{" "}
          <Button variant={'link'} colorScheme='purple'>
            <Link to={"/Signup"}>Signup</Link>
          </Button>
        </Text>
        
        </VStack>
      </form>

    </Container>
  )
}

export default Login
