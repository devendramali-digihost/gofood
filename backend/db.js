const mongoose = require("mongoose");

const mongoURL = "mongodb+srv://gofood:asdfsafsdfsds@cluster0.boovfj1.mongodb.net/gofood?retryWrites=true&w=majority";

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURL, { useNewUrlParser: true });
        console.log("Connected");

        const db = mongoose.connection.db;

        const foodItemsData = await db.collection("food_items").find({}).toArray();
        const foodCategoryData = await db.collection("food_catagory").find({}).toArray();

        global.food_items = foodItemsData;
        global.foodCategory = foodCategoryData;
        
    } catch (err) {
        console.error("Failed to connect to MongoDB or fetch data:", err);
        process.exit(1); 
    }
};

module.exports = mongoDB;
