const express = require("express");
const {registerController,loginController,currentUserController} = require('../controllers/authcontroller');
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

//routes
//REGISTER || POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);

// //GET CURRENT USER || GET
 router.get("/currentuser", authMiddleware, currentUserController);

module.exports = router;