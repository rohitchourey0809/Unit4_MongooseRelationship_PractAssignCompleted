const Section = require('../models/section.model')

const express = require('express')
const app = require('..')

const router = express.Router()

router.get("/",async function(req,res){
   try{
    const sectiondata = await Section.find().lean().exec()
    console.log(sectiondata)
    console.log("working")
    return res.send(sectiondata)
   
   }catch(err){
       return res.send(err)
   }
})


router.post("/",async function(req,res){
    try{
     const sectiondata = await Section.create(req.body)
     console.log(sectiondata)
     return res.send(sectiondata)
    }catch(err){
        return res.send(err)
    }
 })


//  <----------------------------------crudoperation----------->



module.exports = router