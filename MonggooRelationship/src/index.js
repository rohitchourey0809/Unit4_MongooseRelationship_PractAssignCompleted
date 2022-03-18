const express = require('express');
//import userdata 
const userdata = require("./controllers/user.control")

//import routerdata
const sectiondata = require("./controllers/section.control")

//import bookdata
const bookdata = require("./controllers/book.controller")

//import authordata
const authordata = require("./controllers/author.controller")



const app  =  express();
app.use(express.json())

app.use("/userslink",userdata)
//give the route link 
app.use("/sectionlink",sectiondata)
//give the route link
app.use("/booklink",bookdata)
//give the routelink
app.use("/authorlink",authordata)


// <--------------------Crudoperation-------------------
module.exports = app



