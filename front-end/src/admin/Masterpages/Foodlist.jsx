import React from 'react'
import Sidebar from '../../component/Sidebar'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios";

const Foodlist = () => {
  const [foodlist, setfoodlist] = useState([]);
  // const deletefood


  const fetchfoodlist = async() =>{
    try {
      const res =await axios.get("http://localhost:5000/api/foodmenu")

      if(res.data.success){
        setfoodlist(res.data.data),
        console.log(res.data.data);
        
      }
    } catch (error) {
      console.log("Error in fetching foodlist:", error);
      
    }
  }

  //   const loadData = async () => {
  //   let response = await fetch("http://localhost:5000/api/fooddata", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   response = await response.json();
  //   setfoodlist(response[0]);
  // };
  useEffect(()=>{
    fetchfoodlist();
  },[])

  const handeldeletefood = async(id)=>{
    try {
      if(!window.confirm("Delete This Food?")) return;
      await fetch(`http://localhost:5000/api/deletefood/${id}`,{
        method:"DELETE"
      });
       fetchfoodlist();

    } catch (error) {
      console.log("error in delete food");
      
    }

  }

  
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

                  
                    {
                      foodlist.map((data,index)=>{
                     
                       
                        
                        return(
                         <tr>
                          <td>{index+1}</td>
                          <td>{data.name}</td>
                          <td>{data.CategoryName}</td>
                          <td>
                            <ul>
                              {data.options && data.options[0] &&
                                Object.entries(data.options[0]).map(([size, amount]) => (
                                  <li key={size}>{size}:- ₹{amount}</li>
                                ))
                              }
                            </ul>
                          </td>
                          <td>
                            <Link type="button" to={`/updatefood/${data._id}`} className='bg-success btn me-2 p-1'>📝</Link>
                            <button type="button" onClick={()=> handeldeletefood(data._id)} className='bg-danger btn p-1'>❌</button>
                          </td>
                        </tr>
                        )
                      })
                    }
                   
                    
                   
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