// step 1=> import mongooose

const mongoose = require('mongoose')

//Step 2 create Schema;

const userschema = new mongoose.Schema(
    {
        firstname : {type: String, required: true},
        lastname : {type:String,required: true},
    },
    { 
        versionkey : false,
        timestamps : true
    })

    // step 3 create MOdel
    const User =  mongoose.model("users",userschema)

    module.exports = User

