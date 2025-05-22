import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Sidebar = () => {
  const navigate = useNavigate()
  const handlelogout = () =>{
    localStorage.removeItem("Master")
    navigate("/master")
  }
  return (
    <>
           <nav
            id="sidebarMenu"
            className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
          >
            <div className="position-sticky ">
              <Link style={{textDecoration:"none"}} to="/"><h1 className="text-success">Gofood</h1></Link>
              <hr />
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/dashboard">
                   📈
                    Dashboard
                  </Link>
                </li>
                
                <li className="nav-item">
                  <Link className="nav-link" to="/foodlist">
                    🥗
                    Food List
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/foodcatagory">
                    🍽️
                    Food Catagary
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-bar-chart-2"
                      aria-hidden="true"
                    >
                      <line x1="18" y1="20" x2="18" y2="10"></line>
                      <line x1="12" y1="20" x2="12" y2="4"></line>
                      <line x1="6" y1="20" x2="6" y2="14"></line>
                    </svg>
                    Reports
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-layers"
                      aria-hidden="true"
                    >
                      <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                      <polyline points="2 17 12 22 22 17"></polyline>
                      <polyline points="2 12 12 17 22 12"></polyline>
                    </svg>
                    Integrations
                  </a>
                </li> */}
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