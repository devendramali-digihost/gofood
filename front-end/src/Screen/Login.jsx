import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Login = () => {
   const [creadentials, setcreadentials] = useState({ email:"", password:"" })
   let navigate = useNavigate()
      const handlesubmit = async(e) =>{
          e.preventDefault();
  
          const response = await fetch("http://localhost:5000/api/login",{
              method:"POST",
              headers:{
                  "Content-Type":"application/json"
              },
              body:JSON.stringify({email:creadentials.email,password:creadentials.password})
          })
          const json = await response.json();
          console.log(json);
  
          if(!json.success){
              alert("Enter valid cradentials")
  
          } 
          if(json.success){
            navigate("/")
            localStorage.setItem("authToken", json.authToken)
            console.log(localStorage.getItem("authToken"));
            
  
          } 
      }
      const onChange =(e)=>{
          setcreadentials({...creadentials,[e.target.name]:e.target.value})
      };
    
  return (
    <div>
       <div className="container">
               <form onSubmit={handlesubmit}>
              
                  <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Email address</label>
                      <input type="email" className="form-control" name='email' value={creadentials.email} placeholder="Enter email"  onChange={onChange}/>
                  </div>
                  <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Password</label>
                      <input type="password" className="form-control"  name='password' value={creadentials.password} placeholder="Password"  onChange={onChange}/>
                  </div>
                
                  
                  <button type="submit" className="m-3 btn btn-success">Login</button>
                  <Link to="/signup" className='m-3 btn btn-danger'>I dont have a account</Link>
              </form>
             </div>
    </div>
  )
}

export default Login