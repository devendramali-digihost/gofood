import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { usecart, usedispatchcart } from './../component/Contextreducer';
import Navbar from "./../component/Navbar"
import Footer from "./../component/Footer"

const Login = () => {
  const [creadentials, setcreadentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();
    const dispatch = usedispatchcart();
  const handlesubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`${import.meta.env.VITE_BACK_DOMAIN}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: creadentials.email,
        password: creadentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("Enter valid cradentials");
    }
    if (json.success) {
      localStorage.setItem("Useremail", creadentials.email);
      localStorage.setItem("authToken", json.authToken);
      localStorage.setItem("Username", json.name);
      console.log(localStorage.getItem("authToken"));
      navigate("/");
      dispatch({ type: "DROP" });
    }
  };
  const onChange = (e) => {
    setcreadentials({ ...creadentials, [e.target.name]: e.target.value });
  };

  return (
    <div>
         <Navbar/>
          <div className="container">
            <div className="formpage">
              <div className="row justify-content-center">
                <div className="col-lg-7">
                  <div className="form1">
                    <h1 className="text-yellow mb-3 fs-1">Log In</h1>
                    <form onSubmit={handlesubmit}>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={creadentials.email}
                    placeholder="Enter email"
                    onChange={onChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={creadentials.password}
                    placeholder="Password"
                    onChange={onChange}
                  />
                </div>

                <button type="submit" className="my-3 mb-2 d-block btn btn addtocart">
                  Login
                </button>
                <Link to="/signup" className="mx-3 text-decoration-none text-dark" >
                  I dont have a account
                </Link>
              </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
         <Footer/>
    </div>
  );
};

export default Login;
