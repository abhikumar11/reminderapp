const medicines = require("../models/medicine");

module.exports.addMedicine=async(req,res)=>{
 const {name,pill,date,time,frequency,status}=req.body;
 try {
   const temp=await medicines.findOne({name:name,pill:pill,date:date,time:time,frequency:frequency,status:status})
   if(temp){
      res.status(200).json("reminder already exists");
   }
   else{
    const newMedecine= new medicines({name:name,pill:pill,date:date,time:time,frequency:frequency,status:status})
     await newMedecine.save();
     res.status(200).json(newMedecine);
   }
 } catch (err) {
    res.status(404).json({message:"something went wrong",err:err});
 }
}
module.exports.getMedicine=async(req,res)=>{
   try {
       const reminder = await medicines.find();
       res.status(200).json({message:"reminders fetched successfully",reminders:reminder});
   } catch (err) {
       res.status(404).json({message:"something went wrong",err:err});
   }
}