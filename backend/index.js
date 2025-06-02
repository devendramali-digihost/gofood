const express = require("express")
const app = express()
const mongoDB = require("./db")
const port =5000
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();


mongoDB()

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", `${process.env.FRONT_DOMAIN}`);
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS,PATCH"
  );

  // Handle preflight OPTIONS request
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});


app.get("/",(req,res)=>{
    res.send("hello world")
})
app.use(express.json());
app.use("/api", require("./Routes/CreateUser"));
app.use("/api", require("./Routes/DisplayData"));
app.use("/api", require("./Routes/OrderData"));
app.use("/api", require("./Routes/FoodMenu"));
app.use("/api", require("./Routes/FoodCatogary"));
app.use('/uploads', express.static('uploads'));
app.listen(port,()=>{
    console.log(`app running on port ${port}`);
    
})