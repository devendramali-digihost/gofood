import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Card from '../component/Card'
import Carousel from '../component/Carousel'

const Home = () => {
  return (
    <div>
        <div><Navbar/></div>
        <div>
          <Carousel/>
        </div>
        <div className='m-3'> 
         <Card/>
         <Card/>
         <Card/>
         <Card/>
         <Card/>
        </div>
        <div><Footer/></div>
    </div>
  )
}

export default Home