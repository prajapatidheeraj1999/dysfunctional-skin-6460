import { Box, Button, Card, CardBody, CardFooter, Heading, HStack, Image, Stack, Text } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'
import { useState,useEffect,useContext } from 'react'
import { AuthContext } from '../ContextAPI/AuthContext'
import Totalprice from './Totalprice'
const Cart = () => {
let [data,setdata]=useState([])
let {isAuth,UserLogin,UserLogout,setcount,count}=useContext(AuthContext)
let [totalprice,settotalprice]=useState(0)
let getdata=()=>{
    axios.get("http://localhost:8080/card")
    .then((res)=>
    {
        setdata(res.data)
        //data.map((el)=>settotalprice((pre)=>pre+newstr(el.price)))
    })
    .catch((error)=>console.log(error))
}
useEffect(()=>{
    getdata()
    getcount()
},[])
let counts=0
let newstr=(str)=>{
let ans=""
for(let i=1;i<str.length;i++)
{
    ans+=str[i]
}
return Number(ans)
}
console.log(data)
let getcount=()=>{
    axios({
      method:"get",
      url:"http://localhost:8080/card"
    }).then((res)=> {
        
         //console.log("total price"+ count)  
         setcount((res.data).length)
         
        }
     )
   
   
  }

let deletedata=(el)=>{
    axios({
        method:"delete",
        url:`http://localhost:8080/card/${el}`
        
    }).then((res)=>{
        getdata()
        getcount()
    })

}
console.log(totalprice)





  return (
    <Box>
        {
            data.map((el)=> <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
          >
            <Image
              objectFit='cover'
              maxW={{ base: '100%', sm: '200px' }}
              src={el.image}
              alt={el.name}
            />
           
          
            <Stack>
              <CardBody>
                <Heading size='md'>{el.name}</Heading>
          
                <Text py='2'>
                 {el.discription}
                </Text>
                <HStack spacing='24px'>
                <Text py='2' color="red">
                 {el.wait}
                </Text>
                <Text py='2' color="red">
                 {el.price}
                </Text>
                </HStack>
                
              </CardBody>
          
              <CardFooter>
                <Button variant='solid' colorScheme='red' onClick={()=>deletedata(el.id)}>
                  Remove
                </Button>
              </CardFooter>
            </Stack>
          </Card>
          )
        }
        {/* <HStack><Text>Total Price :{totalprice}</Text> <Button>Checkout</Button></HStack> */}
        <Totalprice data={data}/>

       
    </Box>
  )
}

export default Cart
