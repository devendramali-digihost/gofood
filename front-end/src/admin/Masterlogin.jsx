import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Masterlogin = () => {
  const [email, setemail] = useState()
  const [password, setpassword] = useState()
  const navigate = useNavigate()

  const handlesubmit =()=>{
    if (email==="devendra@gmail.com" && password==="123456") {
      navigate("/dashboard")
      localStorage.setItem("Master")
    }
    else{
      alert("Wronge Detials")
    }
  }
  return (
    <div className='sign'>
    <main className="form-signin">
      <form onSubmit={handlesubmit}>

        <h1 className="h3 mb-3 fw-normal text-success">Gofood</h1>
        <h1 className="h3 mb-3 fw-normal">Please Log in</h1>

        <div className="form-floating">
          <input type="email" className="form-control" value={email} onChange={(e)=>setemail(e.target.value)} placeholder="name@example.com"/>
          <label >Email address</label>
        </div>
        <div className="form-floating mt-3">
          <input type="password" className="form-control"   value={password} onChange={(e)=>setpassword(e.target.value)}  placeholder="Password"/>
          <label>Password</label>
        </div>

      
        <button className="w-100 btn btn-lg btn-success" type="submit">Log in</button>
  
      </form>
    </main>

    </div>
  )
}

export default Masterlogin