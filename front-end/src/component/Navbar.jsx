import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import Modal from '../Modal'
import Cart from '../Screen/Cart'
import { usecart, usedispatchcart } from "./Contextreducer";

const Navbar = () => {
  const data = usecart();
  const navigate = useNavigate()
  const [cartview, setcartview] = useState(false)

  const handlelogout = (e) => {
    localStorage.removeItem("authToken");
    navigate("/login")
  }
  const isActive = (path) => location.pathname === path;
  return (
    <nav className="navbar header navbar-expand-lg navbar-dark ">
      <div className="container">
        <Link className="navbar-brand fs-1 fst-italic" to="/">
          <img src="http://gomoto.like-themes.com/wp-content/uploads/2019/06/logo_1x.png" alt="" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav m-auto mb-2">
            <li className="nav-item">
              <Link className={`nav-link ${isActive('/') ? 'active' : ''}`} aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive('/about') ? 'active' : ''}`} aria-current="page" to="/about">About</Link>
            </li>
            {
              (localStorage.getItem("authToken")) ?
                <li className="nav-item">
                  <Link className={`nav-link ${isActive('/myorders') ? 'active' : ''}`} aria-current="page" to="/myorders">My Orders</Link>
                </li> :
                ""
            }
            <li className="nav-item">
              <Link className={`nav-link ${isActive('/contact') ? 'active' : ''}`} aria-current="page" to="/contact">Contact</Link>
            </li>
          </ul>
          {
            (!localStorage.getItem("authToken")) ?
              <div className='d-flex'>

                <Link className="btn bg-white text-black mx-1" to="/login">Login</Link>
                <Link className="btn bg-white text-black mx-1" to="/signup">Sign Up</Link>

              </div>
              :
              <div className="">
                <div className='btn bg-white text-black mx-2' onClick={() => { setcartview(true) }}>
                  My Cart
                  <span className='text-white bg-danger p-1 ms-1 ' style={{ borderRadius: "50%", height: "25px", width: "25px", display: 'inline-flex', alignItems: "center", justifyContent: "center" }}>{data.length}</span>
                </div>
                {cartview ?
                  (<Modal onClose={() => { setcartview(false) }}>
                    <Cart />
                  </Modal>) : null}
                <div className='btn bg-white text-danger mx-2' onClick={handlelogout}>
                  Logout
                </div>
              </div>

          }
        </div>
      </div>
    </nav>
  )
}

export default Navbar