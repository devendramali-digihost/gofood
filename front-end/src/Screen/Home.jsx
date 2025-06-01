import React, { useState, useEffect } from "react";
import Navbar from "./../component/Navbar"
import Footer from "./../component/Footer"
import Card from "../component/Card";
import axios from "axios";
import img from "../../public/assets/pizza.png";
import img1 from "../../public/assets/clock.png";
import img2 from "../../public/assets/location.png";
import img3 from "../../public/assets/man.png";
import img4 from "../../public/assets/mob.png";
import Rellax from 'rellax';
import Contacthome from "../component/Contacthome";
import Testimonial from "../component/Testimonial";
import { Link } from "react-router-dom";


const Home = () => {
  const [foodcat, setFoodCat] = useState([]);
  const [fooditem, setFoodItem] = useState([]);
  const [search, setSearch] = useState("");
  // var rellax = new Rellax('.rellax');
    const [Catogary, setCatogary] = useState([]);


  const loadData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/foodmenu");
      if (res.data.success) {
        setFoodItem(res.data.data);
        const categories = [...new Set(res.data.data.map(item => item.CategoryName))].map(cat => ({ CategoryName: cat, _id: cat, status: cat }));
        setFoodCat(categories);
      }
    } catch (error) {
      console.log("Error in fetching foodlist:", error);
    }
  };


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


  useEffect(() => {
    loadData();
  }, []);

useEffect(() => {
  const rellax = new Rellax('.rellax', { speed: 2.5 });

  return () => {
    rellax.destroy();
  };
}, []);

  // http://gomoto.like-themes.com/
  // https://dixonandmoe.com/rellax/

  return (
    <div>
      <Navbar />

      <div>
        <div id="carouselExample1" className="carousel slide home-slider carousel-fade">
          <div className="carousel-inner" id="carousel">
            {/* <div className="carousel-caption" style={{ zIndex: "10" }}>
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
            </div> */}
            <div className="carousel-item active">
              <div className="slider-content">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="const">
                      <h1>Express  <br /><span>Home Delivery</span></h1>
                      <p>Curabitur imperdiet varius lacus, id placerat purus vulputate non. Fusce in felis vel arcu maximus placerat eu ut arcu. Ut nunc ex, gravida vel porttitor et, pretium ac sapien.</p>
                      <a href="#!" className="btn1">Read More</a>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <figure className="sliderimg">
                      < img src="http://gomoto.like-themes.com/wp-content/uploads/2020/04/slider-courier-mask.png" alt="" />

                    </figure>
                  </div>
                </div>
              </div>
            </div>


          </div>
          {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button> */}
        </div>
      </div>
      <div className="catogary1" id="order">
        <div className="container">
          <div className="row">
            {
              Catogary.filter(data => data.status === true).map((data) => {
                console.log(data.CategoryName);
                
               return(
                  <div className="col-lg-3 col-md-6 col-sm-12">
                  <Link to={`/food/${encodeURIComponent(data.CategoryName)}`} className="catogarylink">
                    <div className="catogary">
                      <figure><img src={`http://localhost:5000/${data.image}`} alt="" /></figure>
                      <h3>{data.CategoryName}</h3>
                    </div>
                  </Link>
                </div>
               )
               
              })
            }
           
            
          </div>
        </div>


      </div>

      <div className="container mt-5">
        <div className="title">
            <span>Quick pick</span>
          <h3>
            Popular Goods
          </h3>
        </div>
        {foodcat.length > 0 ? (
          foodcat.map((data) => {
            const filteredItems = fooditem.filter(
              (item) =>
                item.CategoryName === data.CategoryName &&
                item.name.toLowerCase().includes(search.toLowerCase()) &&
                item.status === true
            );

            if (filteredItems.length === 0) return null;

            return (
              <div key={data._id} className="row mb-3">
                <div className="fs-3 m-3">{data.CategoryName}</div>
                <hr />
                {filteredItems.map((filteritems) => (
                  <div key={filteritems._id} className="col-12 col-md-6 col-lg-3 mb-3">
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

      <div className="cta">
        <div className="row g-0">
          <div className="col-lg-6">
            <figure className="ctaimg">
              <img src="http://gomoto.like-themes.com/wp-content/uploads/2019/06/sit-photo.jpg" alt="" />
            </figure>
          </div>
          <div className="col-lg-6">
            <div className="ctacontent">
              <h3>Sit at Home <br /> <span> We Will Take Care</span></h3>
              <p>Proin ornare posuere quam ut euismod. Nam eu nunc vitae orci ultrices imperdiet ut id ligula. Sed interdum eros eget sagittis rutrum. Vestibulum in elementum mauris. In iaculis odio urna.</p>
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="supp">
                    <figure>
                      <img src={img1} alt="" />
                    </figure>
                    <h4>Fast Delivery in 1 Hour</h4>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="supp">
                    <figure>
                      <img src={img2} alt="" />
                    </figure>
                    <h4>Wide Coverage Map</h4>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="supp">
                    <figure>
                      <img src={img3} alt="" />
                    </figure>
                    <h4>More Than 150 Couriers</h4>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="supp">
                    <figure>
                      <img src={img4} alt="" />
                    </figure>
                    <h4>Amazing Mobile App</h4>
                  </div>
                </div>
              </div>
              <a href="/about" className="btn1">Read More</a>
            </div>
          </div>
        </div>
      </div>
      <div className="pizzabanner">
          <div className="pizzasec">
            <div className="row">
              <div className="col-lg-5">
                <div className="content">
                  <h3>Always <br />
                    <span>the Hottest <br />
                    Pizza</span></h3>
                    <p>Curabitur imperdiet varius lacus, id placerat purus vulputate non. Fusce in felis vel arcu maximus placerat eu ut arcu. Ut nunc ex, gravida vel porttitor et, pretium ac sapien.</p>
                      <a href="#order" className="btn1 btn2 mt-5">Get Food</a>
                </div>
              </div>
            </div>
           <div className="relaxcont">
             
                 <div className="img1 piz1 rellax" ><figure><img src="http://gomoto.like-themes.com/wp-content/uploads/2020/04/pizza-parallax-4.png" alt="" /></figure></div>
                <div className="img2 piz1 rellax" ><figure><img src="http://gomoto.like-themes.com/wp-content/uploads/2020/04/pizza-parallax-2.png" alt="" /></figure></div>
                <div className="img3 piz1 rellax" ><figure><img src="	http://gomoto.like-themes.com/wp-content/uploads/2020/04/pizza-parallax-3.png" alt="" /></figure></div>
                <div className="img4 piz1 rellax" ><figure><img src="http://gomoto.like-themes.com/wp-content/uploads/2020/04/pizza-parallax-5.png" alt="" /></figure></div>
                <div className="img5 piz1 rellax" ><figure><img src="	http://gomoto.like-themes.com/wp-content/uploads/2020/04/pizza-parallax-1.png" alt="" /></figure></div>
   
           </div>

          </div>
      </div>
      <Testimonial/>
      <Contacthome/>
      <Footer />


    </div>
  );
};

export default Home;
