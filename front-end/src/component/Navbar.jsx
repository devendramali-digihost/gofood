import React, { useState } from 'react'
import {Link, useNavigate} from "react-router-dom"
import Modal from '../Modal'
import Cart from '../Screen/Cart'
import { usecart, usedispatchcart } from "./Contextreducer";

const Navbar = () => {
  const data = usecart();
  const navigate = useNavigate()
  const [cartview, setcartview] = useState(false)

  const handlelogout =(e)=>{
    localStorage.removeItem("authToken");
    navigate("/login")
  } 
  return (
    <div><nav className="navbar navbar-expand-lg navbar-dark bg-success">
  <div className="container-fluid">
    <Link className="navbar-brand fs-1 fst-italic" to="/">GoFood</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto mb-2">
        <li className="nav-item">
          <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
        </li>
        {
          (localStorage.getItem("authToken"))?
            <li className="nav-item">
          <Link className="nav-link  fs-5" aria-current="page" to="/myorders">My Orders</Link>
        </li>:
        ""
        }
      </ul>
         {
          (!localStorage.getItem("authToken"))?
      <div className='d-flex'>
         
          <Link className="btn bg-white text-success mx-1" to="/login">Login</Link>
          <Link className="btn bg-white text-success mx-1" to="/signup">Sign Up</Link>
       
      </div>
      :
      <div className="">
        <div className='btn bg-white text-success mx-2' onClick={()=>{setcartview(true)}}>
          My Cart
          <span className='text-white bg-danger p-1 ms-1 ' style={{borderRadius:"50%", height:"25px", width:"25px", display:'inline-flex', alignItems:"center", justifyContent:"center"}}>{data.length}</span>
        </div> 
        {cartview ? 
        (<Modal onClose={()=>{setcartview(false)}}>
          <Cart/>
          </Modal>) : null}
        <div className='btn bg-white text-danger mx-2' onClick={handlelogout}>
          Logout
        </div>
      </div>
       
        }
    </div>
  </div>
</nav></div>
  )
}

export default Navbar