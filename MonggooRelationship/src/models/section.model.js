// iumpiort mongoose
const mongoose  = require('mongoose'); 
// ...createSchema---> keysOffset
const sectionSchema = new mongoose.Schema(
    {
        Name :  {type : String,required: true}
    },
    {
      versionkey : false,
      timestamps : true,
    }
)
// /create Model
const Section = mongoose.model("section",sectionSchema)

module.exports = Section ;