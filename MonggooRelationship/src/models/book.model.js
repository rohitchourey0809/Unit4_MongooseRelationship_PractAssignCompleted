const mongoose = require('mongoose')

///create  Schema

const bookschema = new mongoose.Schema(
    {
        section_id : {type:String, required:true},
        Name: {type:String, required:true},
        body : {type:String, required:true},
    },
    {
        versionkey : false,
        timestamps : true,
    })

    // crete a model
    const Book = mongoose.model("book",bookschema)

    module.export = Book;