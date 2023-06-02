const User = require('../models/user');
const ErrorResponse = require('./../utils/errorResponse');
const Assignment = require("../models/assignment");
exports.addAssignment = async (req, res, next) => {
    const { title, info , datePosted,lastSubmissionDate, marks, courseId} = req.body;

console.log(title, info , datePosted,lastSubmissionDate, marks, courseId);
    if (!title||!info||!datePosted||!lastSubmissionDate||!marks||!courseId) {
      //sending error
     return next(new ErrorResponse("please provide an (info/ title/datePosted/lastSubmissionDate/marks/courseId)", 400));
    }

  
    try {
      const newAssignment = await Assignment.create({
        title,
        info,
        datePosted,
        lastSubmissionDate,
        marks,
        courseId
      });
  
     res.status(200).json({
        success:true,
        res:newAssignment
     })
  
    } catch (error) {
      //sending error
      next(error);
    }
}

exports.getAllAssignments = async(req, res, next) => {

    const courseId = req.params.courseId;
    console.log("course :",courseId);
    
      let assignmentList;
      try{
         assignmentList = await Assignment.find({ courseId }).select("courseId").select("title").select("info").select("lastSubmissionDate")
         .select("datePosted").select("marks");
    
      }
      catch(error){
        next(error);
      }

      res.status(200).json({
        success:true,
        res:assignmentList,
       })
  
  }
  exports.getSingleAssignment = async(req, res, next) => {

    const assId = req.params.assId;
    console.log("course :",assId);
    
      let assignment;
      try{
         assignment = await Assignment.findOne({ _id:assId }).select("courseId").select("title").select("info").select("lastSubmissionDate")
         .select("datePosted").select("marks");
      }
      catch(error){
        next(error);
      }

      res.status(200).json({
        success:true,
        res:assignment,
       })
  
  }