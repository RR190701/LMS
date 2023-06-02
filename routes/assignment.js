//A private route that will be only
const express = require('express');
const router =  express.Router();
const { protect } = require('../middlewares/auth');
const { addAssignment, getAllAssignments, getSingleAssignment } = require('../controllers/assignmnet');

//router.route("/getA").get(protect, getAllCodeLabs);
router.route("/addAssignment").post(protect, addAssignment);
router.route("/getAllAssignments/:courseId").get(protect, getAllAssignments);
router.route("/getSingleAssignment/:assId").get(protect, getSingleAssignment);
module.exports = router;