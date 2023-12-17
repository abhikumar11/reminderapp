const mongoose= require("mongoose");
const medicineSchema=new mongoose.Schema({
    name:{
        type:"string",
        required:true,
    },
    pill:{
        type:"number",
        required:true,
    },
    frequency:{
        type:"string",
        required:true,
    },
    date:{
        type:"string",
        required:true,
    },
    time:{
        type:"string",
        required:true,
    },
    status:{
        type:"string",
        required:true,
        default:"not taken",
    }
})
const medicines=mongoose.model("medicines",medicineSchema)
module.exports = medicines