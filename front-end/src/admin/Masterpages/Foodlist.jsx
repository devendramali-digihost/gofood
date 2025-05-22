import React from 'react'
import Sidebar from '../../component/Sidebar'
import { Link } from 'react-router-dom'

const Foodlist = () => {
  return (
    <>
     <div>
      <div className="container-fluid">
        <div className="row">
               <Sidebar/>

            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <div className="chartjs-size-monitor">
                <div className="chartjs-size-monitor-expand">
                  <div className=""></div>
                </div>
                <div className="chartjs-size-monitor-shrink">
                  <div className=""></div>
                </div>
              </div>
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2 text-success">Food List</h1>
                
              </div>

          

              <div className="d-flex" style={{justifyContent:"space-between"}}>
                            <h3>Food</h3>
                        <Link to="/addfood" className='btn bg-success text-white'>+</Link>
                    </div>
              <div className="table-responsive">
                <table className="table table-striped table-sm">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Catogary</th>
                      <th scope="col">Amount</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1,001</td>
                      <td>random</td>
                      <td>data</td>
                      <td>placeholder</td>
                      <td>
                        <button type="button" className='bg-success btn me-2 p-1'>📝</button>
                        <button type="button" className='bg-danger btn p-1'>❌</button>
                      </td>
                    </tr>
                   
                    
                   
                  </tbody>
                </table>
              </div>
            </main>
        </div>
      </div>
    </div>
    </>
  )
}

export default Foodlist