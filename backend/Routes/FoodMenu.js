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





module.exports = router;