import React, { useEffect } from "react";
import Sidebar from "../../component/Sidebar";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Foodcatagory = () => {
  const [Catogary, setCatogary] = useState([]);
  const [addcat, setaddcat] = useState("");
  const [updatecat, setupdatecat] = useState("");
  const [editCatId, setEditCatId] = useState(null);


  const fetchCat = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/catagory");
        if (res.data.success) {
          setCatogary(res.data.data);
        }
      } catch (error) {
        console.log("error fetch Catogary", error);
      }
    };
   
  useEffect(() => {
     fetchCat();
  }, []);

 const handleaddcat = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/addCategory", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ CategoryName: addcat }),
      });

      const json = await response.json();
      console.log("Category added:", json);
      setaddcat("");       
      fetchCat();          
      document.getElementById("modal-close-btn").click(); // close modal
    } catch (error) {
      console.log("Error adding category:", error);
    }
  };


  const handleDelete = async (id) => {
    if (!window.confirm("Delete this category?")) return;
    await fetch(`http://localhost:5000/api/delete/${id}`, { method: "DELETE" });
    fetchCat();
  };

const handleupdatecat = async (e) => {
  e.preventDefault();
  try {
    const res = await fetch(`http://localhost:5000/api/updatecatagory/${editCatId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ CategoryName: updatecat }),
    });

    const json = await res.json();
    if (json.success) {
      alert("Category updated successfully");
      setupdatecat("");
      setEditCatId(null);
      fetchCat();
      document.getElementById("modal-close-btn1").click(); // close modal
    } else {
      alert("Update failed");
    }
  } catch (error) {
    console.error("Update error:", error);
    alert("Error updating category");
  }
};


  return (
    <>
      <div>
        <div className="container-fluid">
          <div className="row">
            <Sidebar />

            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2 text-success">Food Catagory</h1>
              </div>

              <div
                className="d-flex"
                style={{ justifyContent: "space-between" }}
              >
                <h3>Catagory</h3>
                <button
                  type="button"
                  className="btn bg-success text-white"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  +
                </button>
                {/* <Link to="/addfood" className='btn bg-success text-white'>+</Link> */}
              </div>
              <div className="table-responsive">
                <table className="table table-striped table-sm">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Catogary</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Catogary.map((cat, index) => {
                      return (
                        <tr>
                          <td>{index + 1}</td>
                          <td>{cat.CategoryName}</td>  
                          <td>
                            <button
                               type="button"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal1"
                              className="bg-success btn me-2 p-1"
                              onClick={ ()=>{
                                setEditCatId(cat._id);
                                setupdatecat(cat.CategoryName)
                                }
                              }
                            >
                              📝
                            </button>
                            <button type="button" onClick={()=>handleDelete(cat._id)} className="bg-danger btn p-1">
                              ❌
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </main>
          </div>
        </div>
        {/* <!-- add Modal --> */}
        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <form onSubmit={handleaddcat}>
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Add Catagory
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <label className="form-label">Catagory</label>
                  <input
                    type="text"
                    className="form-control"
                    value={addcat}
                    required
                    onChange={(e)=>setaddcat(e.target.value)}
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-danger"
                    id="modal-close-btn"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="Submit" className="btn btn-success">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* <!-- Modal --> */}
        <div
          className="modal fade"
          id="exampleModal1"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <form onSubmit={handleupdatecat}>
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Update Catagory
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <label className="form-label">Catagory</label>
                  <input
                    type="text"
                    className="form-control"
                    value={updatecat}
                    required
                    onChange={(e)=>setupdatecat(e.target.value)}
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-danger"
                    id="modal-close-btn1"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="Submit" className="btn btn-success">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Foodcatagory;
