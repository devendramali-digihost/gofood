import React, { useEffect, useState } from "react";
import Sidebar from "../component/Sidebar";
import axios from "axios";

const Dashboard = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/allorders");
        if (res.data.success) {
          setOrders(res.data.data);
        }
      } catch (error) {
        console.log("error fetch all orders", error);
      }
    };
    fetchOrders();
  }, []);

  const calculateTotal = (items) =>
    items.reduce((total, item) => total + item.price * item.qty, 0);

  // ✅ Flatten order_data groups into one array with meta info
  const flatOrders = orders.flatMap((order) =>
    order.order_data.map((group) => {
      const orderDate = group[0]?.Order_date || "N/A";
      const items = group.slice(1);
      return {
        name: order.name,
        email: order.email,
        orderDate,
        items,
        total: calculateTotal(items),
      };
    })
  );

  // ✅ Sort by orderDate descending
  flatOrders.sort(
    (a, b) => new Date(b.orderDate).getTime() - new Date(a.orderDate).getTime()
  );

  let count = 1;

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2 text-success">Dashboard</h1>
            </div>

            <h3>Orders</h3>
            <div className="table-responsive">
              <table className="table table-striped table-sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Order Date</th>
                    <th>Order</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {flatOrders.length === 0 ? (
                    <tr>
                      <td colSpan="6" className="text-center py-4">
                        No Order Found
                      </td>
                    </tr>
                  ) : (
                    flatOrders.map((order, index) => (
                      <tr key={index}>
                        <td>{count++}</td>
                        <td>{order.name}</td>
                        <td>{order.email}</td>
                        <td>
                          {new Date(order.orderDate).toLocaleString("en-IN", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </td>
                        <td>
                          <ul className="mb-0 ps-3">
                            {order.items.map((item, k) => (
                              <li key={k}>
                                {item.name} - {item.qty} - {item.size}
                              </li>
                            ))}
                          </ul>
                        </td>
                        <td>₹{order.total.toFixed(2)}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
