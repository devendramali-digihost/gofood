const mongoose = require("mongoose")

const {Schema} = mongoose

const FoodcatagorySchema = new Schema({
    CategoryName:{
        type: String,
        required:true
    }
})


module.exports = mongoose.model("Foodcatagory",FoodcatagorySchema)