import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./../component/Navbar"
import Footer from "./../component/Footer"

const SignUp = () => {
  const navigate = useNavigate();
  const [creadentials, setcreadentials] = useState({
    name: "",
    email: "",
    password: "",
    geolocation: "",
  });
  const handlesubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: creadentials.name,
        email: creadentials.email,
        password: creadentials.password,
        location: creadentials.geolocation,
      }),
    });
    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("Enter valid cradentials");
    }
    if (json.success) {
      navigate("/login");
    }
  };
  const onChange = (e) => {
    setcreadentials({ ...creadentials, [e.target.name]: e.target.value });
  };

  // https://youtu.be/Sonj_Mtmueo?si=ExQpx7pu2c_vffPT

  return (
    <>
    <Navbar/>
      <div className="container">
        <div className="formpage">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="form1">
                <h1 className="text-success mb-3 fs-1">Registration</h1>
              <form onSubmit={handlesubmit}>
                <div className="form-group">
                  <label htmlFor="exampleInputname">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Name"
                    name="name"
                    value={creadentials.name}
                    onChange={onChange}
                  />
                </div>
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
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    name="geolocation"
                    value={creadentials.geolocation}
                    placeholder="Location"
                    onChange={onChange}
                  />
                </div>

                <button type="submit" className="my-3 btn btn-success">
                  Submit
                </button>
                <Link to="/login" className="m-3 btn btn-danger">
                  Already a User
                </Link>
              </form>
            </div>
          </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default SignUp;
