
import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import SignupCard from '../Pages/Signin'

const AllRoutes = () => {
  return <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signin' element={<SignupCard/>}/>
  </Routes>
}

export default AllRoutes
