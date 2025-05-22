const express = require("express");
const router = express.Router();
const Foodcatagory =require("./../models/FoodmenuSchema")

router.get("/catagory", async(req,res)=>{
    try {
        const catagory = await Foodcatagory.find({})
        res.json({
            success:true, data: catagory
        })
    } catch (error) {
        console.log("Error in Food Cataogary:",error.message);
        res.status(500).json({success:false, message:"Server Error"+ error.message})
    }
})