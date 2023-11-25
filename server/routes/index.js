const express=require("express");
const router=express.Router();

router.use("/medecine",require("./medecine"));
module.exports = router;