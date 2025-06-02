import React, { useState, useEffect } from "react";
import Navbar from "./../component/Navbar";
import Footer from "./../component/Footer";

const Myorder = () => {
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const userEmail = localStorage.getItem("Useremail");
      if (!userEmail) {
        alert("User not logged in");
        return;
      }

      try {
        const response = await fetch(`${import.meta.env.VITE_BACK_DOMAIN}/api/myorderdata`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: userEmail }),
        });

        const json = await response.json();
        if (json.success) {
          setOrderData(json.data.order_data || []);
        } else {
          alert("Failed to fetch orders: " + json.message);
        }
      } catch (error) {
        alert("Error fetching orders: " + error.message);
      }
    };

    fetchOrders();
  }, []);

  // Helper to format date string nicely
  const formatDate = (dateStr) => {
    try {
      const d = new Date(dateStr);
      return d.toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return dateStr;
    }
  };

  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="row">
          {orderData.length === 0 ? (
            <div className="fs-3 text-white text-center w-100">No orders found.</div>
          ) : (
            orderData
              .slice(0)
              .reverse()
              .map((orderGroup, idx) => {
                const orderDateObj = orderGroup.find((item) => item.Order_date !== undefined);
                const orderDate = orderDateObj ? formatDate(orderDateObj.Order_date) : "Unknown Date";

                const items = orderGroup.filter((item) => item.Order_date === undefined);

                return (
                  <React.Fragment key={idx}>
                    <div className="col-12 mt-5">
                      <h4 className="my-3">Order Date: {orderDate}</h4>
                      <hr />
                    </div>

                    {items.map((item, i) => (
                      <div className="col-12 col-md-6 col-lg-3" key={i}>
                        <div className="card mt-3">
                          <img
                            src={item.img}
                            alt={item.name}
                            className="card-img-top"
                            style={{ height: "200px", objectFit: "cover" }}
                          />
                          <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <div className="d-flex justify-content-between align-items-center">
                              <span>Qty: {item.qty}</span>
                              <span>Size: {item.size}</span>
                              <span>₹{item.price ?? item.unitPrice * item.qty}/-</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </React.Fragment>
                );
              })
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Myorder;
