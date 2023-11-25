const express=require("express");
const { createMedecine, getMedecine } = require("../controller/medecine");
const router=express.Router();

router.post("/add",createMedecine);
router.get("/get",getMedecine);
module.exports = router;