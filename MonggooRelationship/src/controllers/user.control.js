const User = require("../models/user.model")
const express  = require("express");
const router = express.Router();

router.get("/",async function (req, res){
   try{
    const userdata = await User.find().lean().exec()
    return res.send(userdata)
   }
   catch(err){
       res.send(err)
   }
})

router.post("/",async function (req, res){
    try{
     const userdata = await User.create(req.body)
     console.log(userdata)
     return res.send(userdata)
    }
    catch(err){
        res.send(err)
    }
 })

module.exports = router ;