const express = require("express");
const router = express.Router();
const FoodCatagory = require("./../models/FoodCatagarySchema")
const mongoose = require('mongoose');
const multer = require("multer");
const path = require("path");

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
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) =>
    cb(null, Date.now() + path.extname(file.originalname)),
});


const upload = multer({ storage });
router.post("/addCategory",upload.single("image"), async (req, res) => {
  try {
     const { CategoryName } = req.body; 
    const imagePath = req.file ? req.file.path : null;

    if (!CategoryName || CategoryName.trim() === "") {
      return res.status(400).json({ success: false, message: "CategoryName is required" });
    }
  const newCategory = await FoodCatagory.create({ CategoryName, image: imagePath });
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


router.put("/updatecatagory/:id", upload.single("image"), async (req, res) => {
  try {
    const { id } = req.params;
    const { CategoryName } = req.body;
    const imagePath = req.file ? req.file.path : null;

    if (!CategoryName) {
      return res.status(400).json({ success: false, message: "CategoryName is required" });
    }

    const updateData = { CategoryName };
    if (imagePath) updateData.image = imagePath;

    const updated = await FoodCatagory.findByIdAndUpdate(id, updateData, { new: true });

    if (!updated) {
      return res.status(404).json({ success: false, message: "Category not found" });
    }

    res.json({ success: true, data: updated });
  } catch (error) {
    console.error("Update error:", error.message);
    res.status(500).json({ success: false, message: "Server Error: " + error.message });
  }
});

router.patch("/toggle-category/:id", async (req, res) => {
  try {
    const cat = await FoodCatagory.findById(req.params.id);
    if (!cat) return res.status(404).json({ success: false, message: "Category not found" });

    cat.status = !cat.status;
    await cat.save();

    res.json({ success: true, message: "Category status updated", data: cat });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server Error: " + err.message });
  }
});




module.exports = router;