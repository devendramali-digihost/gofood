const express = require("express");
const router = express.Router();
const FoodMenu = require("./../models/FoodmenuSchema");
const mongoose = require("mongoose");


router.get("/foodmenu", async(req, res)=>{
    try {
      const foodlist = await FoodMenu.find();
      res.json({success:true, data:foodlist});
    } catch (error) {
      console.log("Error in food list:" ,error.message);
      res.status(500).json({success:false,message:"Server Error"+error.message})
      
    }
})

router.post("/createfood", async(req,res)=>{
  try {
    const food = await FoodMenu.create({
      CategoryName:req.body.CategoryName,
      name:req.body.name,
      img:req.body.img,
      description:req.body.description,
      options: req.body.options
    })
    res.json({success:true,data:food})
  } catch (error) {
    console.log(error);
    res.json({success:false})
    
  }
})

router.delete("/deletefood/:id", async(req,res)=>{
  try {
    const id = req.params.id

    if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(400).json({success:false, message:"invalid food id"})
    }

    const deletefood = await FoodMenu.findByIdAndDelete(id);

    if(!deletefood){
      return res.status(400).json({success:false, message:"food not found"})
    }

    res.status(200).json({
      success:true,
      message:"Food delete Succesfully",
      data: deletefood
    });



  } catch (error) {
    console.log("error in delete food",error);
    res.status(500).json({success:false, message:"error in delete food"+ error.message})
    
  }
})

router.put("/updatefood/:id", async(req,res)=>{
  try {
    const id = req.params.id;   
    if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(400).json({success:false, message:"invalid food id"})
    }
    const updatedFood = await FoodMenu.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedFood) {
      return res.status(404).json({ success: false, message: "Food not found" });
    }
    res.status(200).json({ success: true, data: updatedFood });
  }
  catch (error) {
    console.log("Error in updating food:", error.message);
    res.status(500).json({ success: false, message: "Server Error: " + error.message });
  }
})

router.get("/getfood/:id", async (req, res) => {
  const { id } = req.params;

  // Validate MongoDB ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ success: false, message: "Invalid food ID" });
  }

  try {
    const food = await FoodMenu.findById(id);
    if (!food) {
      return res.status(404).json({ success: false, message: "Food not found" });
    }

    res.json({ success: true, data: food });
  } catch (error) {
    console.error("Error fetching food by ID:", error.message);
    res.status(500).json({ success: false, message: "Server error: " + error.message });
  }
});

router.patch("/toggle-food/:id", async(req, res)=>{
  try {
    const food = await FoodMenu.findById(req.params.id)
    if (!food) return res.status(404).json({success: false, message:"food not found"})

    food.status= !food.status;
    await food.save()
    
    res.json({success:true, message:"Food status updated", data:food})
  } catch (error) {
    res.status(500).json({success:false, message:"server error"+error.message})
  }
})




module.exports = router;