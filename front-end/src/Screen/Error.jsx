import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'

const Error = () => {
  return (
    <>  
    <Navbar/>
    <div>
      <div className="bradcromb">
          <h2>404 Not Found</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li>|</li>
            <li>404</li>
          </ul>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-7">
          <div className="contenerr">
        <img src="http://gomoto.like-themes.com/wp-content/uploads/2019/06/404-4.jpg" alt="" />
        <h2 className='mt-3'>Oops! Page Not Found</h2>
        <p className='mt-3'>The page you are looking for was moved, removed, renamed or might never existed.</p>
         <a href="/" className="btn1 mt-4">Back to Home</a>
      </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>

  )
}

export default Error
