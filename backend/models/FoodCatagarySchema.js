const mongoose = require("mongoose")

const {Schema} = mongoose

const FoodcatagorySchema = new Schema({
    CategoryName:{
        type: String,
        required:true,
        trim: true, // optional: removes extra spaces
        unique: true // optional: ensures no duplicate category names
    }
}, {
  versionKey: false // This disables the __v field
})




module.exports = mongoose.model("food_catagory", FoodcatagorySchema, "food_catagory");