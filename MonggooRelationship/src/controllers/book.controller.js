// const mongoose = require('mongoose');
const Book = require('../models/book.model')
const express = require('express');
const router =express.Router() 

router.post("/",async function(req,res){
   try{
    const bookdata = Book.create(req.body)
    return res.send(bookdata)
   }catch(err){{
       return res.send(err)
   }}
})

router.get("/",async function(req,res){
    try{
     const bookdata = Book.find().lean().exec()
     return res.send(bookdata)
    }catch(err){{
        return res.send(err)
    }}
 })

 router.post("/booklink/:id",async (req,res)=>{
  const bookdata = await Book.findById(req.params.id).lean();
  res.status(200).send(bookdata)
 })

 module.exports = router