import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../components/HomePage'
import SinglePage from '../components/SinglePage'
import Login from '../components/Login'
import Register from '../components/Register'


const AllRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/:id' element={<SinglePage/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
    </Routes>
  )
}

export default AllRoute
