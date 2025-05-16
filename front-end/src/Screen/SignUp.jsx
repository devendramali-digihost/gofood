import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
    const [creadentials, setcreadentials] = useState({name:"", email:"", password:"", geolocation:"" })
    const handlesubmit = async(e) =>{
        e.preventDefault();

        const response = fetch("http://localhost:5000/api/createuser",{
            method:"POST",
            header:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify()
        })
    }
    // const onChange 

  return (
    <>
       <div className="container">
         <form onSubmit={handlesubmit}>
            <div className="form-group">
                <label for="exampleInputname">Name</label>
                <input type="text" className="form-control" placeholder="Enter Name"  name='name' value={creadentials.name} onChange={onChange}/>
            </div>
            <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" name='email' value={creadentials.email} placeholder="Enter email"/>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" className="form-control"  name='password' value={creadentials.password} placeholder="Password"/>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Address</label>
                <input type="text" className="form-control"  name='address' value={creadentials.geolocation} placeholder="Location"/>
            </div>
            
            <button type="submit" className="m-3 btn btn-success">Submit</button>
            <Link to="/login" className='m-3 btn btn-danger'>Already a User</Link>
        </form>
       </div>
    </>
  )
}

export default SignUp