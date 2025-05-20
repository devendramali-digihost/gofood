const express = require("express")
const router = express.Router()
const User = require("../models/User")
const {body, validationResult} = require("express-validator")
const bcrypt = require("bcryptjs") 
const jwt = require("jsonwebtoken")
const jwtsecrate ="kjsdjfgahiwuerhfhwflfgdjfh"

router.post("/createuser",
    [body("email","incorrect Email").isEmail(),
    body("password","incorrect password").isLength({min:5})], 
    async(req,  res)=>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()})
        }
    const salt = await bcrypt.genSalt();
    let secPassword = await bcrypt.hash(req.body.password, salt)
    try {
      await User.create({
            name: req.body.name,
            password: secPassword,
            email: req.body.email,
            location: req.body.location
        })
        res.json({success:true});
    } catch (error) {
        console.log(error);
         res.json({success:false});
    }
})

router.post("/login", 
    [body("email","incorrect Email").isEmail(),
    body("password","incorrect password").isLength({min:5})], 
    async(req,  res)=>{
        let email = req.body.email
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()})
        }
        try {
            let userdata =  await User.findOne({email})
            if(!userdata){
                return res.status(400).json({errors:"Email Not exists"}) 
            }
            const passcompare = await bcrypt.compare(req.body.password, userdata.password)
            if(!passcompare){
                return res.status(400).json({errors:"invalid password"}) 
            }
            const data ={
                user:{
                    id:userdata.id
                }
            }
            const authToken = jwt.sign(data,jwtsecrate)
            return res.json({success:true, authToken:authToken}) 
        } catch (error) {
            console.log(error);
            res.json({success:false});
        }
})

module.exports = router;