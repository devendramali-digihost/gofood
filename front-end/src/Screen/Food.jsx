import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Card from '../component/Card'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom';
const Food = () => {
    const { catogaries } = useParams();

    const [catogary, setcatogary] = useState([]);
    const [catogary1, setcatogary1] = useState([]);
    const [fooditem, setfooditem] = useState([]);
    const [search, setsearch] = useState(catogaries);
    const decodedCategory = decodeURIComponent(catogaries || "");

    

    const loadData = async () => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_BACK_DOMAIN}/api/foodmenu`);
            if (res.data.success) {
                setfooditem(res.data.data);
                // const categories = [...new Set(res.data.data.map(item => item.CategoryName))].map(cat => ({ CategoryName: cat, _id: cat }));
                // setcatogary(categories);
            }

        }
        catch (error) {
            console.log("error in food page loadData", error);
        }
    }
        const fetchCat = async () => {
          try {
            const res = await axios.get(`${import.meta.env.VITE_BACK_DOMAIN}/api/catagory`);
            if (res.data.success) {
              setcatogary(res.data.data);
            }
          } catch (error) {
            console.log("error fetch Catogary", error);
          }
        };
    useEffect(() => {
        loadData();
        fetchCat();
       setsearch(decodedCategory);

    }, [catogaries]);


    return (
        <div>
            <Navbar />
            <div className="food">
                <div className="bradcromb">
                    <h2>{catogaries}</h2>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li>|</li>
                        <li>Food</li>
                        <li>|</li>
                        <li>{catogaries}</li>
                    </ul>
                </div>
                <div className="catogaryogary">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 mt-3">
                                <div className='sticy'>
                                    <div className="sidebox ser">
                                    <form className="d-flex justify-content-center" role="search">
                                        <input
                                            className="form-control me-2"
                                            type="search"
                                            placeholder="Search"
                                            aria-label="Search"
                                            value={search}
                                            onChange={(e) => setsearch(e.target.value)}
                                        />
                                    </form>
                                </div>
                                <div className="sidebox">
                                    <div className="fs-4 mt-0 mb-3">Food Categories</div>
                                    <ul>
                                        {
                                            catogary.filter(item => item.status === true).map((item, index) => {
                                                return (
                                                    <li key={index}><Link to={`/food/${encodeURIComponent(item.CategoryName)}`}>{item.CategoryName}</Link></li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="productlist">


                                <div  className="row mb-3">
                                     {catogary.length > 0 ? (() => {
                                            const filteredItems = fooditem.filter(item =>
                                                item.name.toLowerCase().includes(search.toLowerCase()) ||
                                                item.CategoryName.toLowerCase().includes(search.toLowerCase())
                                            );

                                            return filteredItems.length > 0 ? (
                                                filteredItems.filter(data=> data.status === true).map((data) => (
                                                    <div key={data._id} className="col-12 col-md-6 col-lg-4 mb-3">
                                                        <Card fooditem={data} options={data.options[0]} />
                                                    </div>
                                                ))
                                            ) : (
                                                <div className="col-12">
                                                    <p>No food items found matching your search.</p>
                                                </div>
                                            );
                                        })() : (
                                            <div>Loading food items...</div>
                                        )}



                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </div>
    )
}

export default Food