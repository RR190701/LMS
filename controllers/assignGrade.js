const User = require('../models/user');
const ErrorResponse = require('./../utils/errorResponse');
const GradeAssignment = require('../models/assignGrade');

exports.GradingAssignment = async (req, res, next) => {
    const filename = Date.now() + "_" + req.files.myFile.name;
    const file = req.files.myFile;
    let uploadPath = __dirname + "/../public/images/" + filename;
    console.log(filename);
    file.mv(uploadPath, (err) => {
      if (err) {
        return res.send(err);
      }
    });

    const { studentId, dateSubmitted, marks, courseId} = req.body;

// console.log(studentId , dateSubmitted, marks, courseId);
    if (!studentId||!dateSubmitted||!marks||!courseId||!filename) {
      //sending error
     return next(new ErrorResponse("please provide required details", 400));
    }

  
    try {
      const gradeAssigments = await GradeAssignment.create({
        studentId,
        dateSubmitted,
        marks,
        filename,
        courseId
      });
  
     res.status(200).json({
        success:true,
        res:gradeAssigments
     })
  
    } catch (error) {
      //sending error
      next(error);
    }
}

// exports.getAllAssignments = async(req, res, next) => {

//     const courseId = req.params.courseId;
//     console.log("course :",courseId);
    
//       let assignmentList;
//       try{
//          assignmentList = await GradeAssignment.find({ courseId }).select("courseId").select("studentId").select(").select("lastSubmissionDate")
//          .select("datePosted").select("marks");
    
//       }
//       catch(error){
//         next(error);
//       }

//       res.status(200).json({
//         success:true,
//         res:assignmentList,
//        })
  
//   }
//   exports.getSingleAssignment = async(req, res, next) => {

//     const assId = req.params.assId;
//     console.log("course :",assId);
    
//       let assignment;
//       try{
//          assignment = await GradeAssignment.findOne({ _id:assId }).select("courseId").select("title").select("info").select("lastSubmissionDate")
//          .select("datePosted").select("marks");
//       }
//       catch(error){
//         next(error);
//       }

//       res.status(200).json({
//         success:true,
//         res:assignment,
//        })
  
//   }