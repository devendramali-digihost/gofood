import React, { useEffect, useState } from 'react';
import Sidebar from '../../component/Sidebar';
import { useNavigate, useParams } from 'react-router-dom';

const Updatefood = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [addfood, setaddfood] = useState({
    name: "",
    CategoryName: "",
    img: "",
    description: ""
  });

  const [catogary, setCatogary] = useState([]);

  const [optionrow, setoptionrow] = useState([
    { key: "", value: "" }
  ]);

  // Get single food item by ID
  useEffect(() => {
    const getFoodData = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/getfood/${id}`);
        const json = await res.json();
        if (json.success) {
          setaddfood({
            name: json.data.name,
            CategoryName: json.data.CategoryName,
            img: json.data.img,
            description: json.data.description
          });

          if (json.data.options && json.data.options.length > 0) {
            const optionsObj = json.data.options[0];
            const optionsArray = Object.entries(optionsObj).map(([key, value]) => ({ key, value }));
            setoptionrow(optionsArray);
          }
        }
      } catch (err) {
        console.log("Failed to load food data", err);
      }
    };

    getFoodData();
  }, [id]);

  // Get category list
  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/foodmenu");
        const json = await res.json();
        if (json.success) {
          const uniqueCategories = [...new Set(json.data.map(item => item.CategoryName))];
          setCatogary(uniqueCategories.map(c => ({ CategoryName: c })));
        }
      } catch (err) {
        console.log("Error fetching categories", err);
      }
    };

    getCategories();
  }, []);

  const onchange = (e) => {
    setaddfood({ ...addfood, [e.target.name]: e.target.value });
  };

  const handleoptionrowchange = (index, e) => {
    const { name, value } = e.target;
    const rows = [...optionrow];
    rows[index][name] = value;
    setoptionrow(rows);
  };

  const handelsubmit = async (e) => {
    e.preventDefault();

    // Merge options to object format
    const mergedoptions = {};
    optionrow.forEach(item => {
      if (item.key && item.value) {
        mergedoptions[item.key] = item.value;
      }
    });

    const fooddata = {
      ...addfood,
      options: [mergedoptions]
    };

    try {
      const resp = await fetch(`http://localhost:5000/api/updatefood/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(fooddata)
      });

      const json = await resp.json();
      if (json.success) {
        alert("Food updated successfully");
        navigate("/foodlist");
      } else {
        alert("Failed to update food");
      }

    } catch (error) {
      console.log("Error in updating food", error);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />

        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2 text-dark">Update Food</h1>
          </div>

          <div className="container mt-5">
            <div className="adform">
              <h3 className='mb-3'>Update Food</h3>
              <form className="row g-3" onSubmit={handelsubmit}>
                <div className="col-md-6">
                  <label className="form-label">Name</label>
                  <input type="text" className="form-control" name="name" value={addfood.name} onChange={onchange} required />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Category</label>
                  <select className="form-select" name="CategoryName" value={addfood.CategoryName} onChange={onchange} required>
                    <option disabled value="">Choose...</option>
                    {
                      catogary.map((data, index) => (
                        <option key={index} value={data.CategoryName}>{data.CategoryName}</option>
                      ))
                    }
                  </select>
                </div>

                <div className="col-md-6">
                  <label className="form-label">Image URL</label>
                  <input type="text" className="form-control" name="img" value={addfood.img} onChange={onchange} required />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Description</label>
                  <input type="text" className="form-control" name="description" value={addfood.description} onChange={onchange} required />
                </div>

                <div className="col-md-12">
                  <label className="form-label">Options</label>
                  <div className="row">
                    {
                      optionrow.map((row, index) => (
                        <div className="col-lg-6" key={index}>
                          <div className="d-flex gap-1" style={{ margin: '10px 0' }}>
                            <input
                              type="text"
                              className="form-control"
                              name="key"
                              value={row.key}
                              onChange={(e) => handleoptionrowchange(index, e)}
                              placeholder="Option (e.g. half, full)"
                            />
                            <input
                              type="number"
                              className="form-control"
                              name="value"
                              value={row.value}
                              onChange={(e) => handleoptionrowchange(index, e)}
                              placeholder="Price (e.g. 250)"
                            />
                          </div>
                        </div>
                      ))
                    }

                    <div>
                      <button className='btn btn-success' type="button"
                        onClick={() => setoptionrow([...optionrow, { key: "", value: "" }])}
                        style={{ width: 'auto', height: 'fit-content' }}>
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <button className="btn btn-success" type="submit">Update Food</button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Updatefood;
