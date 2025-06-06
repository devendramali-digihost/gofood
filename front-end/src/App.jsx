import { useState } from 'react'

import './App.css'
import Home from './Screen/Home'
import { Routes, BrowserRouter as Router, Route } from "react-router-dom"
import Login from './Screen/Login'
import SignUp from './Screen/SignUp'
import { CartProvider } from './component/Contextreducer'
import Myorder from './Screen/Myorder'

import Dashboard from './admin/Dashboard'
import Masterlogin from './admin/Masterlogin'
import Foodlist from './admin/Masterpages/Foodlist'
import Foodcatagory from './admin/Masterpages/Foodcatagory'
import Addfood from './admin/Masterpages/Addfood'
import Updatefood from './admin/Masterpages/Updatefood'
import Error from './Screen/Error'
import Food from './Screen/Food'
import About from './Screen/About'
import Contact from './Screen/Contact'

function App() {

  return (
    <>
      <CartProvider>
            <Router>
            <div>
           
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/signup' element={<SignUp/>}/>
                <Route path='/myorders' element={<Myorder/>}/>
                <Route path='/master' element={<Masterlogin/>}/>
                <Route path='/dashboard' element={<Dashboard/>}/>
                <Route path='/foodlist' element={<Foodlist/>}/>
                <Route path='/foodcatagory' element={<Foodcatagory/>}/>
                <Route path='/addfood' element={<Addfood/>}/>
                <Route path='/updatefood/:id' element={<Updatefood/>}/>
                <Route path='/*' element={<Error/>}/>
                <Route path='/food/:catogaries' element={<Food/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
              </Routes>
      
               
            </div>
          </Router> 
      </CartProvider>
      
      
    </>
  )
}

export default App
