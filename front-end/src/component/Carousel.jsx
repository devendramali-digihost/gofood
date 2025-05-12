import React from 'react'

const Carousel = () => {
  return (
    <div>
        <div id="carouselExample" className="carousel slide carousel-fade" style={{objectFit:"contain !important"}}>
            <div className="carousel-inner" id='carousel'>
                <div className="carousel-caption" style={{zIndex:"10"}}>
                     <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
                    </form>
                </div>
                <div className="carousel-item active">
                <img src="https://images.unsplash.com/photo-1547584370-2cc98b8b8dc8?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" style={{ filter:"brightness(30%)"}}  alt="..."/>
                </div>
                <div className="carousel-item">
                <img src="https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" style={{ filter:"brightness(30%)"}}  alt="..."/>
                </div>
                <div className="carousel-item">
                <img src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" style={{ filter:"brightness(30%)"}} alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
  )
}

export default Carousel