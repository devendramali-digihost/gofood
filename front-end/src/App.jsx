import { useState } from 'react'

import './App.css'
import Home from './Screen/Home'
import { Routes, BrowserRouter as Router, Route } from "react-router-dom"
import Login from './Screen/Login'
import SignUp from './Screen/SignUp'
import { CartProvider } from './component/Contextreducer'

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
              </Routes>
            </div>
          </Router> 
      </CartProvider>
      
      
    </>
  )
}

export default App
