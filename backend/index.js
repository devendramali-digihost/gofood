const express = require("express")
const app = express()
const mongoDB = require("./db")
const port =5000


mongoDB()
app.get("/",(req,res)=>{
    res.send("hello world")
})

app.listen(port,()=>{
    console.log(`app running on port ${port}`);
    
})