import React from 'react'

const Card = () => {
  return (
    <div>
         <div className="card mt-3" style={{"width": "18rem","maxHeight":"360px"}}>
            <img src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to</p>
              <div className="container">
                <select className='m-2 h-100 bg-success rounded' name="" id="">
                  {
                    Array.from(Array(6),(e,i)=>{
                      return(
                        <option value={i+1} key={i+1}>{i+1}</option>
                      )
                    })
                  }
                </select>
                  <select className='m-2 h-100  bg-success rounded' name="" id="">
                    <option value="half" key={1}>Half</option>
                    <option value="full" key={2}>Full</option>
                  </select>
                  <div className="d-inline h-100 fs-5">
                    Total Price
                  </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Card