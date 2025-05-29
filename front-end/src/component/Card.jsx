import React, { useState } from "react";
import { usecart, usedispatchcart } from "./Contextreducer";

const Card = (props) => {
  const dispatch = usedispatchcart();
  const data = usecart();
  const options = props.options;
  const priceOptions = Object.keys(options);

  const [qty, setQty] = useState(1);
  const [size, setSize] = useState(priceOptions[0] || "");

  const unitPrice = parseInt(options[size] || 0, 10);
  const totalPrice = qty * unitPrice;

  const handleAddToCart = () => {
    if (!size) {
      alert("Please select a size");
      return;
    }

    const existingItem = data.find(
      (item) => item.id === props.fooditem._id && item.size === size
    );
    alert("Cart added");

    if (existingItem) {
      dispatch({
        type: "UPDATE",
        id: props.fooditem._id,
        size: size,
        qty:  qty,
      });
    } else {
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
      <img
        src={props.fooditem.img}
        className="card-img-top item"
        alt={props.fooditem.name}
        style={{ objectFit: "cover", height: "200px" }}
      />
      <div className="card-body">
        <h5 className="card-title">{props.fooditem.name}</h5>
        <p className="card-text">Choose quantity and size:</p>
        <div className="d-flex align-items-center mb-2">
          <select
            className="m-2 p-1 h-100 bg-success rounded text-white"
            value={qty}
            onChange={(e) => setQty(parseInt(e.target.value, 10))}
          >
            {Array.from({ length: 6 }, (_, i) => (
              <option value={i + 1} key={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>

          <select
            className="m-2 h-100 text-white p-1 bg-success rounded"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          >
            {priceOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>

          <div className="d-inline h-100 fs-5">₹{totalPrice}/-</div>
        </div>
        <hr />
        <button
          className="btn addtocart justify-center ms-2"
          onClick={() => {
            if (!localStorage.getItem("authToken")) {
              alert("Please login to add items to the cart.");
              return;
            }
            handleAddToCart();
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
