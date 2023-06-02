const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')

const AssignmentSchema = new mongoose.Schema({

    title: {
        type: String,

    },
    info: {
        type: String,   

    },
    datePosted: {
        type: Date,

    },
    lastSubmissionDate:{
   type:Date
    },
    marks:{
        type:Number
    },
    courseId:{
        type:String
    }

});

const Assignment = mongoose.model("Assignment", AssignmentSchema); 

module.exports = Assignment;