const express = require("express");
const router = express.Router();
const Order = require("../models/Orders");

// Route to save order data
router.post("/orderdata", async (req, res) => {
  let data = req.body.order_data;

  // Insert order date at the beginning of the array
  data.splice(0, 0, { Order_date: req.body.order_date });

  try {
    if (!req.body.email) {
      return res.status(400).json({ success: false, message: "Email is required" });
    }

    let eId = await Order.findOne({ email: req.body.email });

    if (!eId) {
      // Create new order if email not found
      await Order.create({
        email: req.body.email,
        name: req.body.name,
        order_data: [data],
      });
    } else {
      // Update existing order by pushing new order_data array
      await Order.findOneAndUpdate(
        { email: req.body.email },
        { 
          $set:{name: req.body.name},
          $push: { order_data: data }
         }
      );
    }

    res.json({ success: true });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: "Server Error: " + error.message });
  }
});

// Route to fetch order data for a given email
router.post("/myorderdata", async (req, res) => {
  try {
    if (!req.body.email) {
      return res.status(400).json({ success: false, message: "Email is required" });
    }

    let mydata = await Order.findOne({ email: req.body.email });

    if (!mydata) {
      return res.status(404).json({ success: false, message: "No orders found for this email" });
    }

    res.json({ success: true, data: mydata });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: "Server Error: " + error.message });
  }
});


router.get("/allorders", async(req, res)=>{
  try {
    const addOrders = await Order.find({})
    res.json({
      success:true, data: addOrders
    })
  } catch (error) {
    console.log("Error in All order:",error.message);
    res.status(500).json({success:false, message:"Server Error"+ error.message})

    
  }
})
module.exports = router;
