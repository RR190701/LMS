require('dotenv').config({path : "./config.env"});
const express = require("express");
const connectDB = require('./config/db');
const errorHandler = require("./middlewares/error");
const fileUpload = require('express-fileupload');



//connect DB
connectDB();


const app = express();
app.use('/public', express.static(__dirname + '/public'));
var bodyParser = require('body-parser')
app.use(bodyParser.json())

app.use(fileUpload());
//middleware
app.use(express.json());
app.use('/api/auth', require('./routes/auth'))
app.use("/api/private", require("./routes/private"));
app.use("/api/course", require("./routes/course"));
app.use("/api/assignCourse", require("./routes/assignCourses"));
app.use("/api/codelab", require("./routes/codelab"));
app.use('/api/upload', require("./routes/uploadfiles"));
app.use('/api/assignment',require('./routes/assignment'))
//error handler should be last peice of middleware
app.use(errorHandler);

const PORT = process.env.PORT||8080;

app.listen(PORT, ()=>{console.log(`server is up and running at ${PORT}`)});

//error handling
process.on("unhandledRejection", (err, promise) => {
    console.log(`logged Error ${err}`);
    //server.close(() => process.exit(1));
  });