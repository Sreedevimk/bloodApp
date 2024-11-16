const express = require("express");
const { testController } = require("../controllers/testControler");
const router=express.Router()
router.get('./test',testController)
module.exports=router;