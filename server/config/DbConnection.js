const  mongoose = require("mongoose")

const connectDb=()=>{
        mongoose.connect("mongodb+srv://abhi:abhi@cluster1.p6lnqsp.mongodb.net/reminderapp")
        .then((res)=>console.log("Connected to database"))
        .catch((err)=>console.log("Error connecting",err))
}
module.exports=connectDb;