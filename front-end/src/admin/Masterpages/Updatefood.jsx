import React from 'react'
import Sidebar from '../../component/Sidebar'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Updatefood = () => {

  const navigate = useNavigate()
  const [addfood, setaddfood] = useState({
    name:"",
    CategoryName:"",
    img:"",
    options:"",
    description:""
  });
  const [catogary, setCatogary] =useState([])

  const [optionrow, setoptionrow] = useState([
    {
      key:"",
      value:''

    }
  ])
  const onchange = (e)=>{
    setaddfood({...addfood,[e.target.name]: e.target.value});
  }

  const handleoptionrowchange = (index, e)=>{
    const {name, value} = e.target;
    const rows = [...optionrow]
    rows[index][name]= value;
    setoptionrow(rows)
  }

  const fetchcat = async()=>{
    try {
      const res = await axios.get("http://localhost:5000/api/catagory")
      if(res.data.success){
        setCatogary(res.data.data)
      }
      
    } catch (error) {
       console.log("error fetch Catogary", error);
    }
  }
  useEffect(() => {
     fetchcat();
  }, []);

  const mergedoptions = optionrow.reduce((acc,curr)=>{
    if(curr.key && curr.value){
        acc[curr.key]= curr.value
    }
    return acc;
  },{})

  const handelsubmit =async(e)=>{
    e.preventDefault();
    const fooddata = {
      ...addfood,
      options:[mergedoptions]
    };
    // console.log(fooddata);
    try {
      const resp = await fetch("http://localhost:5000/api/createfood",{
         method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fooddata)
      })
      const json = await resp.json();
      console.log("Food Added");
      alert("Food added ");
      navigate("/foodlist")
    } catch (error) {
      console.log("error in adding food ", error);
      
    }

    
    
  }
  // console.log(catogary);
  

  return (
    <>
    <div className="container-fluid">
        <div className="row">
               <Sidebar/>

            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
             
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2 text-success">Add Food</h1>
                
              </div>
              <div className="container mt-5">
                <div className="adform">
                <h3 className='mb-3'>Add Food</h3>
                     <form class="row g-3" onSubmit={handelsubmit}>
                    <div class="col-md-6">
                        <label  class="form-label">Name</label>
                        <input type="text" class="form-control" name="name"  value={addfood.name} onChange={onchange} required/>
                    </div>
                      <div class="col-md-6">
                        <label for="validationCustom04" class="form-label">Catogary</label>
                        <select class="form-select" name="CategoryName"  value={addfood.CategoryName} onChange={onchange} required>
                            <option selected disabled value="">Choose...</option>
                            {
                              catogary.map((data,index)=>{
                               return(
                                  <option value={data.CategoryName}>{data.CategoryName}</option>
                               )
                              })
                            }
                            
                        </select>
                        <div class="invalid-feedback">
                        Please select a valid state.
                        </div>
                    </div>
                    <div class="col-md-6">
                        <label  class="form-label">Img URL</label>
                        <input type="text" class="form-control"  name="img"  value={addfood.img} onChange={onchange} required/>
                    </div>
                    <div class="col-md-6">
                        <label  class="form-label">Description</label>
                        <input type="text" class="form-control"   name="description"  value={addfood.description} onChange={onchange} required/>
                    </div>
                    
                    <div class="col-md-12">
                        <label  class="form-label">Type</label>
                        <div className="row">
                          {
                            optionrow.map((row, index)=>{
                              return(
                                  <div className="col-lg-6" key={index}>
                                  <div className="d-flex gap-1" style={{ margin: '10px 0' }}>
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="key"
                                      value={row.key}
                                      onChange={(e) => handleoptionrowchange(index, e)}
                                      placeholder="Option (e.g. half, full, large)"
                                    />
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="value"
                                      value={row.value}
                                      onChange={(e) => handleoptionrowchange(index, e)}
                                      placeholder="Price (e.g. 200)"
                                    />
                                  </div>
                                </div>
                              )
                            })
                          }
                           
                            <div>
                                <button className='d-flex btn btn-success' style={{ width: 'auto',height:"fit-content" }} onClick={()=> setoptionrow([...optionrow,{key:"",value:""}])} type="button" >+</button>
                            </div>
                        </div>
                    </div>
                
                   
                
                
                    <div class="col-12">
                        <button class="btn btn-success" type="submit">Submit form</button>
                    </div>
                </form>
                </div>
              </div>
            </main>
        </div>
      </div>
    </>
  )
}

export default Updatefood