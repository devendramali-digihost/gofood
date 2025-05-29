import React from 'react'
import { Link, useNavigate,useLocation  } from 'react-router-dom'  
import logo from "../../public/assets/logo.png"

const Sidebar = () => {
  const navigate = useNavigate()
  const handlelogout = () =>{
    localStorage.removeItem("Master")
    navigate("/master")
  }

    const isActive = (path) => location.pathname === path;
  return (
    <>
           <nav
            id="sidebarMenu"
            className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
          >
            <div className="position-sticky ">
              <Link className="mx-3" style={{textDecoration:"none"}} to="/"> <img src={logo} alt="" /></Link>
              <hr />
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link className={`nav-link ${isActive('/dashboard') ? 'active' : ''}`}  aria-current="page" to="/dashboard">
                   📈
                    Dashboard
                  </Link>
                </li>
                
                <li className="nav-item">
                  <Link className={`nav-link ${isActive('/foodlist') ? 'active' : ''}`} to="/foodlist">
                    🥗
                    Food List
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${isActive('/foodcatagory') ? 'active' : ''}`} to="/foodcatagory">
                    🍽️
                    Food Catagary
                  </Link>
                </li>
               
              </ul>
              {
                !localStorage.getItem("Master")?
                <button className='btn bg-danger text-white mx-3 mt-3' onClick={handlelogout}>Log Out</button>
                :<Link className='btn bg-success text-white mx-3 mt-3' to="/master">Login</Link>
              }
              

            
            </div>
          </nav>
    </>
  )
}

export default Sidebar