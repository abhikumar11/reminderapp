const mongoose = require("mongoose");

const medecineSchema=mongoose.Schema({
 name:{
    type:mongoose.SchemaTypes.String,
    require:true,
 },
 dose:{
    type:mongoose.SchemaTypes.Number,
    require:true,
 },
 date:{
    type:mongoose.SchemaTypes.String,
    require:true,
 },
 time:{
    type:mongoose.SchemaTypes.String,
    require:true,
 },
});
const Medecine=mongoose.model("Medecine",medecineSchema);
module.exports=Medecine;