
import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Cart from '../Pages/Cart'
import Checkout from '../Pages/Checkout'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import SignupCard from '../Pages/Signin'

const AllRoutes = () => {
  return <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signin' element={<SignupCard/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/checkout' element={<Checkout/>}/>
  </Routes>
}

export default AllRoutes
