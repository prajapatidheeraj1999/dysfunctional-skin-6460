import { ReactNode } from 'react';
import React from 'react';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  Text,
  Center,
} from '@chakra-ui/react';
import {Link} from "react-router-dom"
// import {NavLink} from "react-router-dom"
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import logo from "./image/finallogo.png"
import {AiOutlineUser} from 'react-icons/ai'
import { GrCart } from "react-icons/gr"
import { BiCategory } from "react-icons/bi"
import { useContext } from 'react';
import { AuthContext } from '../ContextAPI/AuthContext';

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let {isAuth,UserLogin,UserLogout}=useContext(AuthContext)

  return (
    < >
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box><Image src={logo} width="120px" /></Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              
                <Text>DashBoards</Text>
                <BiCategory/> <span>Categories</span>
                < GrCart/> <span>Cart</span>
              
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            {
            isAuth?<Link><AiOutlineUser onClick={UserLogout}/>Logout </Link>:<Link to="/signin"><AiOutlineUser />Login </Link>
          
            }
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
            <Text>DashBoard</Text>
            <Center>
            <BiCategory/> <span style={{marginLeft:"5px"}}> Categories </span> 
            </Center>
            <Center>
            < GrCart/><span style={{marginLeft:"5px"}}> Cart </span> 
            </Center>
                
            </Stack>
          </Box>
        ) : null}
      </Box>

      
    </>
  );
}
