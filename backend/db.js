const mongoose = require("mongoose");

const mongoURL = "mongodb+srv://gofood:asdfsafsdfsds@cluster0.boovfj1.mongodb.net/gofood?retryWrites=true&w=majority";

const mongoDB = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(mongoURL);

        console.log("Connected successfully to MongoDB");

        // Access the collection directly using the native MongoDB driver
        const foodCollection = mongoose.connection.db.collection("food_items");

        // Fetch all documents from the collection
        const data = await foodCollection.find({}).toArray();

        // console.log("Fetched food items:", data);
        
    } catch (err) {
        console.error("Failed to connect to MongoDB or fetch data:", err);
        process.exit(1); // Optional: exit on failure
    }
};

module.exports = mongoDB;
