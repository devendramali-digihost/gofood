const express = require("express");
const router = express.Router();
const FoodCatagory = require("./../models/FoodmenuSchema")

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
    const deleted = await FoodCatagory.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ success: false, message: "Category not found" });
    }

    res.status(200).json({ success: true, data: deleted });
  } catch (error) {
    console.error("Error deleting category:", error.message);
    res.status(500).json({ success: false, message: "Server Error: " + error.message });
  }
});
module.exports = router;