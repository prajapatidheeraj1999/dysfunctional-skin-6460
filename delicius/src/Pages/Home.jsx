
import React from 'react'
import CaptionCarousel from './Corasel'
import {Box, Center, Container, Heading, Image, SimpleGrid, Text} from "@chakra-ui/react"
import {useState,useEffect} from "react"
import axios from "axios"
import Slider from './ReactSlick'
import LargeWithAppLinksAndSocial from './Footer'
import frist from "../Component/image/image1.png"
import second from "../Component/image/image2.png"
import { AuthContext } from '../ContextAPI/AuthContext'
import { useContext } from 'react'
const Home = () => {

let [categori,setCategori]=useState([])
let [best,setbest]=useState([])
let [bone,setBone]=useState([])
let [breaks,setbreak]=useState([])
let {isAuth,UserLogin,UserLogout,setcount,count}=useContext(AuthContext)

let getcategoriesdata=()=>{
axios.get("http://localhost:8080/categories")
.then((res)=>setCategori(res.data)).catch((error)=>console.log(error))
}

let boneless=()=>{
  axios.get("http://localhost:8080/boneless")
.then((res)=>setBone(res.data)).catch((error)=>console.log(error))
}

let bestSeler=()=>{
  axios.get("http://localhost:8080/bestseler")
.then((res)=>setbest(res.data)).catch((error)=>console.log(error))
}

let breakfast=()=>{
  axios.get("http://localhost:8080/breakfast")
  .then((res)=>setbreak(res.data)).catch((error)=>console.log(error))
}
    useEffect(()=>{
        getcategoriesdata()
        boneless()
        bestSeler()
        breakfast()
        getcount()
    },[])

    let getcount=()=>{
      axios({
        method:"get",
        url:"http://localhost:8080/card"
      }).then((res)=>setcount((res.data).length))
    }
  
    console.log(categori)
    console.log("best"+best)
    console.log("bone"+bone)
  return (
    <Box>
        <CaptionCarousel/>
        <Container maxW='80%' mt={10}>
        <Heading as='h3' size='lg' mb={20} >
        Shop by categories     
        </Heading>      
       <SimpleGrid columns={{ base: 2, sm: 3, md: 4 }} spacing={10}>
        {
            categori.map((el)=><Box key={el.id} boxShadow= {`rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px`} p={10} borderRadius={10}>
                <Center>
                <Image src={el.image} alt={el.name} />
                </Center>
                <Text  fontSize={{base:"xs",sm:"sm", lg:"lg"}}>{el.name}</Text>
            </Box>)
        }
       </SimpleGrid>
         </Container>
         <Heading as="h1" mt={20} mb={10}>Best Sellers</Heading>
        
         <Slider data={best} getcount={getcount}/>
         <Heading as="h1" mt={10} mb={10}>Bone Less</Heading>
         <Slider data={bone} getcount={getcount}/>
         <Container maxW='80%' mt={10}>
        <Heading as='h3' size='lg' mb={20} >
        Shop by categories     
        </Heading>      
       <SimpleGrid columns={{ base: 2, sm: 3, md: 4 }} spacing={10}>
        {
            categori.map((el)=><Box key={el.id} boxShadow= {`rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px`} p={10} borderRadius={10}>
                <Center>
                <Image src={el.image} alt={el.name} />
                </Center>
                <Text  fontSize={{base:"xs",sm:"sm", lg:"lg"}}>{el.name}</Text>
            </Box>)
        }
       </SimpleGrid>
         </Container>
         <Heading as="h1" mt={10} mb={10}>Breakfast & Snacking Specials</Heading>
         <Slider data={breaks} getcount={getcount}/>
         <Image src={frist  }/>
         <Image src={second  }/>
         <LargeWithAppLinksAndSocial/>
         

    </Box>
  )
}

export default Home
