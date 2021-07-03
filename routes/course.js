import express from "express";

const router = express.Router();
var multer  = require('multer')
var uploadMulter = multer().any();

// middleware
import { requireSignin, isInstructor} from "../middlewares";

// controllers
//import { uploadImage, removeImage } from "../controllers/course";
import { uploadImage , removeImage, create, read, uploadVideo,removeVideo, addLesson, update} from "../controllers/course";


//image
router.post("/course/upload-image", uploadImage);
router.post("/course/remove-image", removeImage);
//router.post("/course/upload-image",upload);

//course
router.post("/course", requireSignin, isInstructor, create)
router.get("/course/:slug", requireSignin, isInstructor, read)
router.put("/course/:slug", requireSignin, update);

//video
router.post("/course/video-upload", requireSignin, uploadMulter, uploadVideo);
router.post("/course/video-remove/:instructorId", requireSignin, removeVideo);

//lesson
router.post("/course/lesson/:slug/:instructorId", requireSignin, addLesson);

function upload(req,res) {
	console.log(req.body)
}


module.exports = router;
