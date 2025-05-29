import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Card from '../component/Card'
const Food = () => {
  return (
    <div>
        <Navbar/>
        <div className="food">
            <div className="bradcromb">
                <h2>Food Cat</h2>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li>|</li>
                    <li>Food cat</li>
                </ul>
            </div>
            <div className="foodcatogary">
                <div className="container-fluid">
                   <div className="row">
                       <div className="col-lg-4">
                        <div className="sidebox ser">
                            <form className="d-flex justify-content-center" role="search">
                                <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                // value={search}
                                // onChange={(e) => setSearch(e.target.value)}
                                />
                            </form>
                        </div>
                        <div className="sidebox">

                        </div>
                       </div>
                        <div className="col-lg-8">
                            <div className="productlist">
                                <div className="row">
                                    <div className="col-lg-4">
                                        {/* <Card/> */}
                                        sdad
                                    </div>
                                </div>
                            </div>
                        </div>
                   </div>
                </div>
            </div>
        </div>
        <Footer/>
        
    </div>
  )
}

export default Food