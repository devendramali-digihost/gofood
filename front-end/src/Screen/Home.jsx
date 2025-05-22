import React, { useState, useEffect } from "react";
import Navbar from "./../component/Navbar"
import Footer from "./../component/Footer"
import Card from "../component/Card";

const Home = () => {
  const [foodcat, setFoodCat] = useState([]);
  const [fooditem, setFoodItem] = useState([]);
  const [search, setSearch] = useState("");

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/fooddata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    setFoodItem(response[0]);
    setFoodCat(response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
       <Navbar/>
   
      <div>
        <div id="carouselExample" className="carousel slide carousel-fade">
          <div className="carousel-inner" id="carousel">
            <div className="carousel-caption" style={{ zIndex: "10" }}>
              <form className="d-flex justify-content-center" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </form>
            </div>
            <div className="carousel-item active">
              <img
                src="https://images.unsplash.com/photo-1547584370-2cc98b8b8dc8?q=80&w=1471&auto=format&fit=crop"
                className="d-block w-100"
                style={{ filter: "brightness(30%)", objectFit: "cover" }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?q=80&w=1472&auto=format&fit=crop"
                className="d-block w-100"
                style={{ filter: "brightness(30%)", objectFit: "cover" }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=1471&auto=format&fit=crop"
                className="d-block w-100"
                style={{ filter: "brightness(30%)", objectFit: "cover" }}
                alt="..."
              />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="container">
        {foodcat.length > 0 ? (
          foodcat.map((data) => {
            const filteredItems = fooditem.filter(
              (item) =>
                item.CategoryName === data.CategoryName &&
                item.name.toLowerCase().includes(search.toLowerCase())
            );

            if (filteredItems.length === 0) return null;

            return (
              <div key={data._id} className="row mb-3">
                <div className="fs-3 m-3">{data.CategoryName}</div>
                <hr />
                {filteredItems.map((filteritems) => (
                  <div key={filteritems._id} className="col-12 col-md-6 col-lg-3">
                    <Card
                      fooditem={filteritems}
                      options={filteritems.options[0]}
                    />
                  </div>
                ))}
              </div>
            );
          })
        ) : (
          <div>Loading categories...</div>
        )}
      </div>
         <Footer/>

 
    </div>
  );
};

export default Home;
