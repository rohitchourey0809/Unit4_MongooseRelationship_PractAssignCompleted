const app = require("./index")
const connect = require("./configs/db")

app.listen(5001,async function () {
    try{
        console.log("Server Start")
        await connect()
       
    }
    catch(err){
        console.error(err.message)
    }
})