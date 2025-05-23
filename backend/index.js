const express = require("express")
const app = express()
const mongoDB = require("./db")
const port =5000


mongoDB()

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:5173")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-with, Content-Type, Accept"
    )
     next();
})

app.get("/",(req,res)=>{
    res.send("hello world")
})
app.use(express.json());
app.use("/api", require("./Routes/CreateUser"));
app.use("/api", require("./Routes/DisplayData"));
app.use("/api", require("./Routes/OrderData"));
app.use("/api", require("./Routes/FoodMenu"));
app.listen(port,()=>{
    console.log(`app running on port ${port}`);
    
})