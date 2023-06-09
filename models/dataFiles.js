const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({

    fileName: {
        type: String,
        required:[true, "Please provide a file"],   

    },
    courseId :{
        type:String,
    }
    

});

const UploadFile = mongoose.model("UploadFile", fileSchema); 

module.exports = UploadFile;