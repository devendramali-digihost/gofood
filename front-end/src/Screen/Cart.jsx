import React from 'react';
import { usecart, usedispatchcart } from './../component/Contextreducer';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const data = usecart();
  const dispatch = usedispatchcart();
  const navigate = useNavigate();

  if (data.length === 0) {
    return (
      <div className="m-5 w-100 text-center fs-3 text-white">
        The Cart is Empty
      </div>
    );
  }

  // Total price calculation uses unitPrice * qty for each item
  const totalPrice = data.reduce(
    (total, food) => total + food.unitPrice * food.qty,
    0
  );

  const handleCheckOut = async () => {
    const userEmail = localStorage.getItem("Useremail");
    const userName = localStorage.getItem("Username");

    if (!userEmail) {
      alert("Please login to place your order");
      navigate("/login");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/orderdata", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          order_data: data,
          email: userEmail,
          name: userName,
          order_date: new Date().toISOString(),
        }),
      });

      const resJson = await response.json();

      if (response.ok && resJson.success) {
        dispatch({ type: "DROP" }); // Clear cart
        alert("Order placed successfully!");
      } else {
        alert("Order failed: " + (resJson.message || "Unknown error"));
      }
    } catch (err) {
      alert("Network error: " + err.message);
      console.error("Checkout error:", err);
    }
  };

  return (
    <>
      <div className="container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md">
        <table className="table table-hover text-white">
          <thead className="text-success fs-4">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Option</th>
              <th scope="col">Amount</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((food, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{food.name}</td>
                <td>{food.qty}</td>
                <td>{food.size}</td>
                <td>₹{food.unitPrice * food.qty}</td>
                <td>
                  <button
                    type="button"
                    className="btn p-1 text-white"
                    onClick={() => dispatch({ type: "REMOVE", index })}
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div>
          <h1 className="fs-2 text-white">Total Price: ₹{totalPrice}/-</h1>
        </div>

        <div>
          <button className="btn bg-success text-white" onClick={handleCheckOut}>
            Check Out
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
