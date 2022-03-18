const mongoose = require("mongoose")

module.exports = () =>{
    return mongoose.connect("mongodb+srv://rohit:12345@cluster0.03mwk.mongodb.net/ExpressPracticesection?retryWrites=true&w=majority")
}