const express=require("express");
const router=express.Router();
const {addMedicine,getMedicine}=require("../controllers/medicine");
router.post("/add",addMedicine);
router.get("/get",getMedicine);
module.exports=router;
