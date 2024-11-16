const express = require("express");
// const authMiddleware = require("../middleware/authMiddleware");
const {
  bloodGroupDetailsContoller,
} = require("../controllers/analytiticscontroller");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

//routes

//GET BLOOD DATA
router.get("/bloodGroups-data", authMiddleware, bloodGroupDetailsContoller);

module.exports = router;