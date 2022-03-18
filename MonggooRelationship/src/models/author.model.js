const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema(
    {
        user_id : {type:String, required: true}
    },
    { 
        versionkey : false,
        timestamps: true,
    })

    //create a model

    const Author = mongoose.model("author",authorSchema);

    module.exports = Author;
