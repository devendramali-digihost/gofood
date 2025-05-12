import { useState } from 'react'

import './App.css'
import Home from './Screen/Home'
import { Routes, BrowserRouter as Router, Route } from "react-router-dom"
import Login from './Screen/Login'

function App() {

  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
          </Routes>
        </div>
      </Router>
      
      
    </>
  )
}

export default App
