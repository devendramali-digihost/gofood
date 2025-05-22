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
    const finalprice = qty * parseInt(options[size]);

    let existingItem = null;
    for (const item of data) {
      if (item.id === props.fooditem._id && item.size === size) {
        existingItem = item;
        break;
      }
    }

    if (existingItem) {
      // Update quantity and price if same item and same size exists
      await dispatch({
        type: "UPDATE",
        id: props.fooditem._id,
        size: size,
        qty: qty,
        price: finalprice,
      });
      return
    } else {
      // Add as new item if size differs or item doesn't exist
      await dispatch({
        type: "Add",
        id: props.fooditem._id,
        name: props.fooditem.name,
        price: finalprice,
        qty: qty,
        size: size,
        img: props.fooditem.img,
      });
      return;
    }
    await dispatch({
      type: "Add",
      id: props.fooditem._id,
      name: props.fooditem.name,
      price: finalprice,
      qty: qty,
      size: size,
      img: props.fooditem.img,
    });

    console.log("Cart updated:", data);
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
            className="btn btn-success justify-center ms-2"
            onClick={handleAddToCart}
            // disabled={!localStorage.getItem("authToken")}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
