const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')

const GradeAssignmentSchema = new mongoose.Schema({

    studentId: {
        type: String,

    },
    courseId: {
        type: String,   

    },
    dateSubmitted: {
        type: Date,

    },
    marks:{
        type:Number
    },
    file:{
        type:String
    }

});

const GradeAssignment = mongoose.model("GradeAssignment", GradeAssignmentSchema); 

module.exports = GradeAssignment;