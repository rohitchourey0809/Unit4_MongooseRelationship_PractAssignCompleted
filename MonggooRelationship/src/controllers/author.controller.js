const Author = require('../models/author.model')

const express = require('express')

const router = express.Router()

router.post("/",async function(req,res){
  try{
    const authordata = await Author.create(req.body)
    return res.send(authordata)
  }catch(err){
      res.send(err)
  }
})


module.exports = router