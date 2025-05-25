const express = require("express");
const router = express.Router();
const FoodCatagory = require("./../models/FoodCatagarySchema")
const mongoose = require('mongoose');

router.get("/catagory", async(req,res)=>{
    try {
        const catagory = await FoodCatagory.find()
        res.json({
            success:true, data: catagory
        })
        
        
    } catch (error) {
        console.log("Error in Food Cataogary:",error.message);
        res.status(500).json({success:false, message:"Server Error"+ error.message})
    }
})

router.post("/addCategory", async (req, res) => {
  try {
    const { CategoryName } = req.body;

    if (!CategoryName || CategoryName.trim() === "") {
      return res.status(400).json({ success: false, message: "CategoryName is required" });
    }

    const newCategory = await FoodCatagory.create({ CategoryName });
    res.status(201).json({ success: true, data: newCategory });
  } catch (err) {
    console.error("Error adding category:", err.message);
    res.status(500).json({ success: false, message: "Server Error: " + err.message });
  }
});



router.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ success: false, message: "Invalid category ID" });
    }

    const deleted = await FoodCatagory.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ success: false, message: "Category not found" });
    }

    res.status(200).json({
      success: true,
      message: "Category deleted successfully",
      data: deleted
    });
  } catch (error) {
    console.error("Error deleting category:", error.message);
    res.status(500).json({ success: false, message: "Server Error: " + error.message });
  }
});


router.put('/updatecatagory/:id', async(req,res)=>{
  try {
    const {id} = req.params;
    const {CategoryName} = req.body;

    if (!CategoryName) {
      return res.status(400).json({ success: false, message: "CategoryName is required" });
    }


    const updatecatogary = await FoodCatagory.findByIdAndUpdate(
      id,
      {CategoryName},
      {new:true}
    )
    

    if (!updatecatogary) {
      return res.status(404).json({ success: false, message: "Category not found" });
    }

    res.json({success:true, data: updatecatogary})

  } catch (error) {
    console.error("Update error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
})

module.exports = router;