import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import axios from 'axios';
  import { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
  import {AuthContext} from "../ContextAPI/AuthContext"
  let initial={
    email:"",
    password:""
  }
  export default function Login() {
    let [logindata,selogindata]=useState(initial)
    let {isAuth,UserLogin,UserLogout}=useContext(AuthContext)

    let loginuser=(el)=>{
        el.preventDefault()
        axios({
            method:"post",
            url:"http://localhost:8080/uerathentication",
            data:logindata
        }).then((res)=>UserLogin())
        .catch((error)=>console.log(error))
    }
    if(isAuth)
    {
        return <Navigate to="/"/>
    }
    console.log(logindata)
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
    //    bg={useColorModeValue('gray.50', 'gray.800')}
    >
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            // bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" onChange={(el)=>selogindata({...logindata,email:el.target.value})} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" onChange={(el)=>selogindata({...logindata,password:el.target.value})} />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  onClick={loginuser}
                  >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }