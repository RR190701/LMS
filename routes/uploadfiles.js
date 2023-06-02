//A private route that will be only
const express = require('express');
const router =  express.Router();
const { protect } = require('../middlewares/auth');
const { UploadFiles, getAllFiles, getCourseAllFile } = require('../controllers/uploadfile');
// const upload = multer({ dest: './public/data/uploads/' });

router.route("/uploadFile").post(protect, UploadFiles);
router.route("/getAllFile").get(protect, getAllFiles);
router.route("/getCourseAllFiles/:courseId").get(protect, getCourseAllFile)
module.exports = router;