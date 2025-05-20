import React, { useState, useEffect } from "react";
import { usecart, usedispatchcart } from "./Contextreducer";

const Card = (props) => {
  let dispatch = usedispatchcart();
  let data = usecart();
  let options = props.options;
  let priceOptions = Object.keys(options);
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");

  const handleAddToCart = async () => {
    await dispatch({
      type: "Add",
      id: props.fooditem._id,
      name: props.fooditem.name,
      price: props.finalprice,
      qty: qty,
      size: size,
      img: props.fooditem.img,
    });
    console.log("Adding to cart:", data);
  };
  let finalprice = qty * parseInt(options[size]);

  useEffect(() => {
    setSize(priceOptions[0]);
  }, []);

  return (
    <div>
      <div className="card mt-3">
        <img src={props.fooditem.img} className="card-img-top item" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.fooditem.name}</h5>
          <p className="card-text">Choose quantity and size:</p>
          <div className="container">
            <select
              className="m-2 h-100 bg-success rounded"
              onChange={(e) => setQty(e.target.value)}
            >
              {Array.from(Array(6), (e, i) => (
                <option value={i + 1} key={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
            <select
              className="m-2 h-100 bg-success rounded"
              onChange={(e) => setSize(e.target.value)}
            >
              {priceOptions.map((data) => (
                <option key={data} value={data}>
                  {data}
                </option>
              ))}
            </select>
            <div className="d-inline h-100 fs-5">
              ₹{qty * parseInt(options[size] || 0)}/-
            </div>
          </div>
          <hr />
          <button
            className="btn btn-success justify-center ms-2"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
