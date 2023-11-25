const Medecine = require("../models/medecine");

module.exports.createMedecine=async(req,res)=>{
    const {name,dose,date,time}=req.body;
    console.log(req.body);
    try {
     
            const newReminder=Medecine({name:name,dose:dose, date:date, time:time});
            await newReminder.save();
            res.status(200).json({message:"reminder created successfully",reminder:newReminder});
    } catch (err) {
        res.status(404).json({message:"something went wrong",err:err});
    }
}
module.exports.getMedecine=async(req,res)=>{
    try {
        const reminder = await Medecine.find();
        res.status(200).json({message:"reminders fetched successfully",reminders:reminder});
    } catch (err) {
        res.status(404).json({message:"something went wrong",err:err});
    }
}