import React, { useState, useEffect } from "react";
import { usecart, usedispatchcart } from "./Contextreducer";

const Card = (props) => {
  let dispatch = usedispatchcart();
  let data = usecart();
  let options = props.options;
  let priceOptions = Object.keys(options);
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");

  useEffect(() => {
    setSize(priceOptions[0]);
  }, [priceOptions]);

  const handleAddToCart = () => {
    if (!size) {
      alert("Please select a size");
      return;
    }

    const unitPrice = parseInt(options[size]);
    const finalPrice = qty * unitPrice;

    // Check if item with same id and size already exists
    let existingItem = data.find(
      (item) => item.id === props.fooditem._id && item.size === size
    );

    if (existingItem) {
      // Update quantity (add to existing)
      dispatch({
        type: "UPDATE",
        id: props.fooditem._id,
        size: size,
        qty: qty,
      });
    } else {
      // Add new item
      dispatch({
        type: "ADD",
        id: props.fooditem._id,
        name: props.fooditem.name,
        qty: qty,
        size: size,
        unitPrice: unitPrice,
        img: props.fooditem.img,
      });
    }
  };

  return (
        <div className="card mt-3">
        <img src={props.fooditem.img} className="card-img-top item" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.fooditem.name}</h5>
          <p className="card-text">Choose quantity and size:</p>
          <div className="">
            <select
              className="m-2 p-1 h-100 bg-success rounded text-white"
              onChange={(e) => setQty(e.target.value)}
            >
              {Array.from(Array(6), (e, i) => (
                <option value={i + 1} key={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
            <select
              className="m-2 h-100 text-white p-1 bg-success rounded"
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
            className="btn addtocart justify-center ms-2"
            onClick={handleAddToCart}
            // disabled={!localStorage.getItem("authToken")}
          >
            Add to Cart
          </button>
        </div>
      </div>
  );
};

export default Card;
