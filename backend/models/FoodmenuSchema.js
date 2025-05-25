const mongoose = require("mongoose")

const {Schema} = mongoose




const FoodMenuSchema = new Schema({
    CategoryName:{
        type: String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    img:{
        type: String,
        required: true
    },
   options: [
        {
            type: Map,
            of: String // or Number, depending on your values
        }
        ],
        description:{
            type: String,

        }

})


module.exports = mongoose.model("food_items",FoodMenuSchema,"food_items")